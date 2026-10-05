'use client';

import React from 'react';
import { Flame, Clock, Award } from 'lucide-react';
import { usePomodoro } from '@/context/PomodoroContext';

export const SessionStats: React.FC = () => {
  const { pomodorosCompleted, totalFocusMinutes, settings } = usePomodoro();

  const currentCycleIndex = pomodorosCompleted % settings.longBreakInterval;

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto my-3 sm:my-4 grid grid-cols-2 gap-3">
      
      {/* Completed Pomodoros card */}
      <div className="glass-panel p-3 sm:p-3.5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 text-rose-400 mb-0.5">
          <Flame className="w-4 h-4 fill-rose-500/20" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Completed Today</span>
        </div>
        <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{pomodorosCompleted}</span>
        
        {/* Cycle indicator dots */}
        <div className="flex items-center gap-1.5 mt-1">
          {Array.from({ length: settings.longBreakInterval }).map((_, i) => (
            <span
              key={i}
              title={`Session ${i + 1} of ${settings.longBreakInterval}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i < currentCycleIndex
                  ? 'bg-rose-500 shadow-sm shadow-rose-500/50'
                  : 'bg-slate-700/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Focus Time Today card */}
      <div className="glass-panel p-3 sm:p-3.5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 text-amber-400 mb-0.5">
          <Clock className="w-4 h-4" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Total Focus</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {totalFocusMinutes >= 60 ? (totalFocusMinutes / 60).toFixed(1) : totalFocusMinutes}
          </span>
          <span className="text-[10px] font-semibold text-slate-400">
            {totalFocusMinutes >= 60 ? 'hrs' : 'mins'}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
          <Award className="w-3 h-3 text-amber-400" />
          <span>Keep up the focus!</span>
        </div>
      </div>

    </div>
  );
};
