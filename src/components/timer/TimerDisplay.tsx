'use client';

import React from 'react';
import { usePomodoro, TimerMode } from '@/context/PomodoroContext';

export const TimerDisplay: React.FC = () => {
  const { mode, setMode, timeLeft, totalDuration, isRunning, progressPercent } = usePomodoro();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // SVG Progress circle calculations
  const radius = 130;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const modeTabs: { id: TimerMode; label: string }[] = [
    { id: 'pomodoro', label: 'Pomodoro' },
    { id: 'shortBreak', label: 'Short Break' },
    { id: 'longBreak', label: 'Long Break' },
  ];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      
      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 mb-8 w-full sm:w-auto">
        {modeTabs.map((tab) => {
          const isActive = mode === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setMode(tab.id)}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/25 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Circular Timer Display */}
      <div className="relative flex items-center justify-center my-4 group">
        
        {/* Glow backdrop ring */}
        <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 transition-all duration-700 ${
          mode === 'pomodoro' ? 'bg-rose-500' : mode === 'shortBreak' ? 'bg-emerald-500' : 'bg-blue-500'
        }`} />

        <svg className="w-72 h-72 sm:w-88 sm:h-88 transform -rotate-90" viewBox="0 0 300 300">
          {/* Background track circle */}
          <circle
            cx="150"
            cy="150"
            r={radius}
            className="stroke-slate-800/80"
            strokeWidth="12"
            fill="transparent"
          />

          {/* Animated Progress Circle */}
          <circle
            cx="150"
            cy="150"
            r={radius}
            className={`transition-all duration-500 stroke-current ${
              mode === 'pomodoro'
                ? 'text-rose-500'
                : mode === 'shortBreak'
                ? 'text-emerald-400'
                : 'text-blue-500'
            }`}
            strokeWidth="14"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Inner Time Counter */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white font-mono drop-shadow-md">
            {formattedTime}
          </span>
          <span className="mt-2 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/10 text-slate-300">
            {isRunning
              ? mode === 'pomodoro'
                ? 'Focus Session'
                : 'Taking Break'
              : 'Paused'}
          </span>
        </div>

      </div>

    </div>
  );
};
