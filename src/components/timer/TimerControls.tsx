'use client';

import React, { useEffect } from 'react';
import { Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import { usePomodoro } from '@/context/PomodoroContext';

export const TimerControls: React.FC = () => {
  const { isRunning, startTimer, pauseTimer, resetTimer, skipSession } = usePomodoro();

  // Keyboard shortcut listener (Spacebar = Start/Pause, R = Reset, S = Skip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        if (isRunning) pauseTimer();
        else startTimer();
      } else if (e.code === 'KeyR') {
        e.preventDefault();
        resetTimer();
      } else if (e.code === 'KeyS') {
        e.preventDefault();
        skipSession();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRunning, startTimer, pauseTimer, resetTimer, skipSession]);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 my-3 sm:my-4">
      
      {/* Reset Button */}
      <button
        onClick={resetTimer}
        title="Reset Timer (Press R)"
        aria-label="Reset Timer"
        className="p-3 sm:p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200 active:scale-95 shadow-md"
      >
        <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Primary Action Button (Start / Pause) */}
      <button
        onClick={isRunning ? pauseTimer : startTimer}
        title={isRunning ? 'Pause Timer (Press Space)' : 'Start Timer (Press Space)'}
        aria-label={isRunning ? 'Pause Timer' : 'Start Timer'}
        className={`px-7 py-3.5 sm:px-9 sm:py-4 rounded-2xl font-bold text-base sm:text-lg text-white shadow-xl transition-all duration-300 flex items-center gap-2.5 active:scale-95 ${
          isRunning
            ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/30'
            : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/40 glow-effect'
        }`}
      >
        {isRunning ? (
          <>
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            <span>PAUSE</span>
          </>
        ) : (
          <>
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
            <span>START</span>
          </>
        )}
      </button>

      {/* Skip Button */}
      <button
        onClick={skipSession}
        title="Skip Session (Press S)"
        aria-label="Skip Session"
        className="p-3 sm:p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200 active:scale-95 shadow-md"
      >
        <SkipForward className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

    </div>
  );
};
