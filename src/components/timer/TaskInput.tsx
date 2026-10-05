'use client';

import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { usePomodoro } from '@/context/PomodoroContext';

export const TaskInput: React.FC = () => {
  const { currentTask, setCurrentTask } = usePomodoro();

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto my-2 sm:my-3">
      <div className="relative flex items-center">
        <Target className="absolute left-3.5 w-4 h-4 text-rose-400 pointer-events-none" />
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          placeholder="What are you working on right now?"
          className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-2xl glass-panel border border-white/10 focus:border-rose-500/50 text-xs sm:text-sm text-slate-100 placeholder-slate-400 outline-none transition-all duration-200 shadow-inner"
        />
        {currentTask.trim() && (
          <CheckCircle2 className="absolute right-3.5 w-4 h-4 text-emerald-400" />
        )}
      </div>
    </div>
  );
};
