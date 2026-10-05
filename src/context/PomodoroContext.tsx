'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { playAlarmSound, SoundType } from '@/lib/audio';

export type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

export interface TimerSettings {
  pomodoro: number; // minutes
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
  soundType: SoundType;
  soundVolume: number;
  theme: 'dark' | 'light';
}

interface PomodoroContextType {
  mode: TimerMode;
  isRunning: boolean;
  timeLeft: number;
  totalDuration: number;
  pomodorosCompleted: number;
  totalFocusMinutes: number;
  currentTask: string;
  settings: TimerSettings;
  progressPercent: number;
  setMode: (mode: TimerMode) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  skipSession: () => void;
  updateSettings: (newSettings: Partial<TimerSettings>) => void;
  setCurrentTask: (task: string) => void;
  toggleTheme: () => void;
}

const DEFAULT_SETTINGS: TimerSettings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  autoStartBreaks: false,
  autoStartPomodoros: false,
  soundType: 'bell',
  soundVolume: 0.7,
  theme: 'dark',
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export const PomodoroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<TimerSettings>(DEFAULT_SETTINGS);
  const [mode, setModeState] = useState<TimerMode>('pomodoro');
  const [isRunning, setIsRunning] = useState(false);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  const [totalFocusMinutes, setTotalFocusMinutes] = useState(0);
  const [currentTask, setCurrentTask] = useState('');
  
  // Timer calculations
  const [timeLeft, setTimeLeft] = useState(DEFAULT_SETTINGS.pomodoro * 60);
  const [totalDuration, setTotalDuration] = useState(DEFAULT_SETTINGS.pomodoro * 60);

  // Refs for accurate timing across background tabs
  const endTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved settings & stats from localStorage on mount
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('pomodoro_settings');
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setSettings((prev) => ({ ...prev, ...parsed }));
      }

      const savedStats = localStorage.getItem('pomodoro_stats_today');
      if (savedStats) {
        const parsedStats = JSON.parse(savedStats);
        const todayStr = new Date().toISOString().split('T')[0];
        if (parsedStats.date === todayStr) {
          setPomodorosCompleted(parsedStats.completed || 0);
          setTotalFocusMinutes(parsedStats.focusMinutes || 0);
        }
      }
    } catch (e) {
      console.warn('Failed to load local storage data:', e);
    }
  }, []);

  // Sync dataset attributes on <html> for dynamic themes & modes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.setAttribute('data-mode', mode);
  }, [settings.theme, mode]);

  // Update total duration when settings or mode change
  const getDurationForMode = useCallback((m: TimerMode, customSettings = settings): number => {
    switch (m) {
      case 'pomodoro':
        return customSettings.pomodoro * 60;
      case 'shortBreak':
        return customSettings.shortBreak * 60;
      case 'longBreak':
        return customSettings.longBreak * 60;
    }
  }, [settings]);

  const setMode = useCallback((newMode: TimerMode) => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setModeState(newMode);
    const dur = getDurationForMode(newMode);
    setTotalDuration(dur);
    setTimeLeft(dur);
    endTimeRef.current = null;
  }, [getDurationForMode]);

  // Update timer if settings changed while stopped
  useEffect(() => {
    if (!isRunning) {
      const newDur = getDurationForMode(mode);
      setTotalDuration(newDur);
      setTimeLeft(newDur);
    }
  }, [settings, mode, isRunning, getDurationForMode]);

  // Document Title update
  useEffect(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const modeLabel = mode === 'pomodoro' ? 'Focus' : mode === 'shortBreak' ? 'Short Break' : 'Long Break';
    document.title = `${timeStr} - ${modeLabel} | Pomodoro Timer`;
  }, [timeLeft, mode]);

  const triggerCompletionEffects = useCallback(() => {
    // Play Sound
    playAlarmSound(settings.soundType, settings.soundVolume);

    // Fire Confetti for Pomodoro completion
    if (mode === 'pomodoro') {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#fb7185', '#38bdf8', '#34d399']
      });

      // Increment stats
      setPomodorosCompleted((prevCount) => {
        const nextCount = prevCount + 1;
        const addedMinutes = settings.pomodoro;
        setTotalFocusMinutes((prevMins) => {
          const nextMins = prevMins + addedMinutes;
          const todayStr = new Date().toISOString().split('T')[0];
          localStorage.setItem('pomodoro_stats_today', JSON.stringify({
            date: todayStr,
            completed: nextCount,
            focusMinutes: nextMins
          }));
          return nextMins;
        });
        return nextCount;
      });
    }

    // Determine Next Mode
    if (mode === 'pomodoro') {
      const nextCompleted = pomodorosCompleted + 1;
      const isLongBreak = nextCompleted % settings.longBreakInterval === 0;
      const nextMode: TimerMode = isLongBreak ? 'longBreak' : 'shortBreak';
      setMode(nextMode);
      if (settings.autoStartBreaks) {
        setTimeout(() => startTimer(), 500);
      }
    } else {
      setMode('pomodoro');
      if (settings.autoStartPomodoros) {
        setTimeout(() => startTimer(), 500);
      }
    }
  }, [mode, settings, pomodorosCompleted, setMode]);

  const startTimer = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);

    // Set absolute timestamp differential end time
    endTimeRef.current = Date.now() + timeLeft * 1000;

    intervalRef.current = setInterval(() => {
      if (!endTimeRef.current) return;
      const remaining = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);
        endTimeRef.current = null;
        triggerCompletionEffects();
      }
    }, 250);
  }, [isRunning, timeLeft, triggerCompletionEffects]);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    endTimeRef.current = null;
  }, []);

  const resetTimer = useCallback(() => {
    pauseTimer();
    const dur = getDurationForMode(mode);
    setTimeLeft(dur);
    setTotalDuration(dur);
  }, [pauseTimer, getDurationForMode, mode]);

  const skipSession = useCallback(() => {
    pauseTimer();
    if (mode === 'pomodoro') {
      setMode('shortBreak');
    } else {
      setMode('pomodoro');
    }
  }, [pauseTimer, mode, setMode]);

  const updateSettings = useCallback((newSettings: Partial<TimerSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('pomodoro_settings', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  }, [settings.theme, updateSettings]);

  const progressPercent = totalDuration > 0 ? Math.min(100, Math.max(0, ((totalDuration - timeLeft) / totalDuration) * 100)) : 0;

  return (
    <PomodoroContext.Provider
      value={{
        mode,
        isRunning,
        timeLeft,
        totalDuration,
        pomodorosCompleted,
        totalFocusMinutes,
        currentTask,
        settings,
        progressPercent,
        setMode,
        startTimer,
        pauseTimer,
        resetTimer,
        skipSession,
        updateSettings,
        setCurrentTask,
        toggleTheme,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error('usePomodoro must be used within a PomodoroProvider');
  }
  return context;
};
