'use client';

import React from 'react';
import { usePomodoro } from '@/context/PomodoroContext';
import { playAlarmSound, SoundType } from '@/lib/audio';
import { Settings, Volume2, Sliders, Moon, Sun, Bell, Play } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export default function SettingsPage() {
  const { settings, updateSettings } = usePomodoro();

  const handleDurationChange = (key: 'pomodoro' | 'shortBreak' | 'longBreak', value: string) => {
    const num = Math.max(1, Math.min(120, parseInt(value) || 1));
    updateSettings({ [key]: num });
  };

  const testSound = () => {
    playAlarmSound(settings.soundType, settings.soundVolume);
  };

  return (
    <div className="max-w-3xl mx-auto py-4">
      
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
          <Settings className="w-6 h-6 text-rose-400" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-white">Timer Settings</h1>
          <p className="text-sm text-slate-400">Customize your focus cycles, notifications, and theme</p>
        </div>
      </div>

      <div className="space-y-6">
        
        {/* Timer Durations Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-6">
            <Sliders className="w-5 h-5 text-rose-400" />
            Timer Durations (minutes)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Pomodoro */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Pomodoro Focus
              </label>
              <input
                type="number"
                min="1"
                max="120"
                value={settings.pomodoro}
                onChange={(e) => handleDurationChange('pomodoro', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-rose-500 text-white font-mono font-bold text-center outline-none transition-all"
              />
            </div>

            {/* Short Break */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Short Break
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={settings.shortBreak}
                onChange={(e) => handleDurationChange('shortBreak', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 text-white font-mono font-bold text-center outline-none transition-all"
              />
            </div>

            {/* Long Break */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Long Break
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={settings.longBreak}
                onChange={(e) => handleDurationChange('longBreak', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 text-white font-mono font-bold text-center outline-none transition-all"
              />
            </div>

          </div>

          {/* Long Break Interval */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-semibold text-slate-200 block">Long Break Interval</span>
              <span className="text-xs text-slate-400">Number of pomodoros between long breaks</span>
            </div>
            <input
              type="number"
              min="1"
              max="12"
              value={settings.longBreakInterval}
              onChange={(e) => updateSettings({ longBreakInterval: parseInt(e.target.value) || 4 })}
              className="w-24 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono font-bold text-center outline-none"
            />
          </div>
        </div>

        {/* Automation Toggles */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-amber-400" />
            Automation & Auto-Start
          </h2>

          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <div>
              <span className="text-sm font-semibold text-slate-200 block">Auto-Start Breaks</span>
              <span className="text-xs text-slate-400">Automatically start break timer when focus session finishes</span>
            </div>
            <button
              onClick={() => updateSettings({ autoStartBreaks: !settings.autoStartBreaks })}
              className={`w-12 h-7 rounded-full transition-colors duration-200 p-1 flex items-center ${
                settings.autoStartBreaks ? 'bg-rose-500 justify-end' : 'bg-slate-700 justify-start'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white shadow-md" />
            </button>
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-sm font-semibold text-slate-200 block">Auto-Start Pomodoros</span>
              <span className="text-xs text-slate-400">Automatically start focus timer when break finishes</span>
            </div>
            <button
              onClick={() => updateSettings({ autoStartPomodoros: !settings.autoStartPomodoros })}
              className={`w-12 h-7 rounded-full transition-colors duration-200 p-1 flex items-center ${
                settings.autoStartPomodoros ? 'bg-rose-500 justify-end' : 'bg-slate-700 justify-start'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white shadow-md" />
            </button>
          </div>
        </div>

        {/* Sound & Notifications */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-emerald-400" />
              Sound Alerts
            </h2>
            <button
              onClick={testSound}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Test Sound
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Sound Choice */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Alarm Sound
              </label>
              <select
                value={settings.soundType}
                onChange={(e) => updateSettings({ soundType: e.target.value as SoundType })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm outline-none"
              >
                <option value="bell">Tibetan Bell (Zen)</option>
                <option value="chime">Gentle Arpeggio Chime</option>
                <option value="digital">Digital Beep</option>
                <option value="none">Mute (No Sound)</option>
              </select>
            </div>

            {/* Volume Slider */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex justify-between">
                <span>Volume</span>
                <span>{Math.round(settings.soundVolume * 100)}%</span>
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={settings.soundVolume}
                onChange={(e) => updateSettings({ soundVolume: parseFloat(e.target.value) })}
                className="w-full accent-rose-500 cursor-pointer mt-2"
              />
            </div>

          </div>
        </div>

        {/* Theme Setting */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-200 block">Appearance Theme</span>
            <span className="text-xs text-slate-400">Switch between dark slate mode and clean light mode</span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-2xl">
            <button
              onClick={() => updateSettings({ theme: 'dark' })}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                settings.theme === 'dark'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4" />
              Dark
            </button>
            <button
              onClick={() => updateSettings({ theme: 'light' })}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                settings.theme === 'light'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
              Light
            </button>
          </div>
        </div>

      </div>

      <AdBanner className="my-8" slot="1122334455" />

    </div>
  );
}
