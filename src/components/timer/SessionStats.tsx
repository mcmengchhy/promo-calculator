'use client';

import React from 'react';
import { Flame, Clock, Award } from 'lucide-react';
import { usePomodoro } from '@/context/PomodoroContext';

export const SessionStats: React.FC = () => {
  const { pomodorosCompleted, totalFocusMinutes, settings } = usePomodoro();

  const currentCycleIndex = pomodorosCompleted % settings.longBreakInterval;

  return (
    <div className="w-full max-w-md mx-auto my-6 grid grid-cols-2 gap-4">
      
      {/* Completed Pomodoros card */}
      <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 text-rose-400 mb-1">
          <Flame className="w-5 h-5 fill-rose-500/20" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Completed Today</span>
        </div>
        <span className="text-3xl font-extrabold text-white font-mono">{pomodorosCompleted}</span>
        
        {/* Cycle indicator dots */}
        <div className="flex items-center gap-1.5 mt-2">
          {Array.from({ length: settings.longBreakInterval }).map((_, i) => (
            <span
              key={i}
              title={`Session ${i + 1} of ${settings.longBreakInterval}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i < currentCycleIndex
                  ? 'bg-rose-500 shadow-sm shadow-rose-500/50'
                  : 'bg-slate-700/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Focus Time Today card */}
      <div className="glass-panel p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 text-amber-400 mb-1">
          <Clock className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Focus</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-white font-mono">
            {totalFocusMinutes >= 60 ? (totalFocusMinutes / 60).toFixed(1) : totalFocusMinutes}
          </span>
          <span className="text-xs font-semibold text-slate-400">
            {totalFocusMinutes >= 60 ? 'hrs' : 'mins'}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-2">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Keep up the focus!</span>
        </div>
      </div>

    </div>
  );
};
