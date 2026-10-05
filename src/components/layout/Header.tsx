'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Timer, Settings, Info, Heart, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { usePomodoro } from '@/context/PomodoroContext';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { settings, toggleTheme, updateSettings, mode } = usePomodoro();

  const isMuted = settings.soundType === 'none' || settings.soundVolume === 0;

  const toggleSound = () => {
    if (isMuted) {
      updateSettings({ soundType: 'bell', soundVolume: 0.7 });
    } else {
      updateSettings({ soundType: 'none' });
    }
  };

  const navItems = [
    { label: 'Timer', href: '/', icon: Timer },
    { label: 'Settings', href: '/settings', icon: Settings },
    { label: 'About', href: '/about', icon: Info },
    { label: 'Support', href: '/support', icon: Heart },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 px-4 lg:px-8 py-3 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose-500 to-amber-500 shadow-md group-hover:scale-105 transition-transform duration-200">
            <Timer className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight flex items-center gap-2">
              PomoFocus
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-white/20 bg-white/10 uppercase tracking-wider text-rose-400">
                {mode === 'pomodoro' ? 'Focus' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
              </span>
            </span>
            <p className="text-xs text-slate-400 hidden sm:block">Free Minimalist Pomodoro Timer</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Quick Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all active:scale-95"
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={`Switch to ${settings.theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all active:scale-95"
          >
            {settings.theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-400" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around mt-2 pt-2 border-t border-white/10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${
                isActive ? 'text-rose-400 font-bold bg-white/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};
