'use client';

import React from 'react';
import { TimerDisplay } from '@/components/timer/TimerDisplay';
import { TimerControls } from '@/components/timer/TimerControls';
import { TaskInput } from '@/components/timer/TaskInput';
import { SessionStats } from '@/components/timer/SessionStats';
import { AdBanner } from '@/components/ads/AdBanner';
import { DonateBanner } from '@/components/donation/DonateBanner';
import { Brain, Sparkles, CheckCircle, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Top Banner / Ad Placement */}
      <AdBanner className="max-w-2xl w-full" slot="7788990011" />

      {/* Main Timer Section */}
      <div className="w-full glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl my-4 backdrop-blur-xl">
        <TimerDisplay />
        <TaskInput />
        <TimerControls />
        <SessionStats />
      </div>

      {/* Donation Banner */}
      <DonateBanner />

      {/* Ad Banner Middle Placement */}
      <AdBanner className="max-w-2xl w-full" slot="8899001122" />

      {/* SEO & Educational Guide Section (Crucial for Google AdSense content quality verification) */}
      <section className="w-full max-w-4xl mx-auto my-12 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 text-slate-300 leading-relaxed">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
            <Brain className="w-5 h-5 text-rose-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-100">
            How to Master Your Time with the Pomodoro Technique
          </h2>
        </div>

        <p className="mb-6 text-sm sm:text-base text-slate-300">
          The <strong className="text-white">Pomodoro Technique</strong> is a proven time-management method developed by Francesco Cirillo in the late 1980s. It breaks your work day into 25-minute focused work intervals separated by 5-minute short breaks. This structured cycle builds mental stamina, minimizes burnout, and prevents cognitive fatigue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-amber-400" />
              1. Choose a Single Task
            </h3>
            <p className="text-xs text-slate-400">
              Clear away distractions, close unnecessary browser tabs, and write down your primary focus in the task bar above.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              2. Work Uninterrupted for 25 Mins
            </h3>
            <p className="text-xs text-slate-400">
              Press Start and immerse yourself completely. Avoid checking messages or social media until the chime sounds.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              3. Take a 5-Minute Short Break
            </h3>
            <p className="text-xs text-slate-400">
              Step away from your screen. Stretch, hydrate, or rest your eyes to allow your brain to process learned information.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4 text-blue-400" />
              4. Repeat & Take a Long Break
            </h3>
            <p className="text-xs text-slate-400">
              After completing 4 pomodoro sessions, enjoy an extended 15 to 30-minute long break to fully recharge.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="font-bold text-slate-200 mb-3">Why Use PomoFocus?</h3>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-400">
            <li><strong className="text-slate-200">Tab-Accurate Engine:</strong> High precision timestamp calculations ensure your timer never slows down when running in background tabs.</li>
            <li><strong className="text-slate-200">Zero Downloads Required:</strong> Works 100% in your browser on desktop, tablet, and mobile devices.</li>
            <li><strong className="text-slate-200">Customizable Durations & Sounds:</strong> Adjust focus and break lengths to match your personal energy levels.</li>
          </ul>
        </div>
      </section>

      {/* Footer Ad Placement */}
      <AdBanner className="max-w-2xl w-full" slot="9900112233" />

    </div>
  );
}
