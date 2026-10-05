'use client';

import React from 'react';
import { BookOpen, Brain, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export default function AboutPage() {
  const faqs = [
    {
      q: 'What is a Pomodoro?',
      a: 'A "Pomodoro" is a single 25-minute period of focused, uninterrupted work followed by a 5-minute break. The word comes from the Italian word for tomato, named after the tomato-shaped kitchen timer used by Francesco Cirillo.',
    },
    {
      q: 'Why 25 minutes of work?',
      a: '25 minutes is the sweet spot identified by productivity researchers. It is long enough to accomplish meaningful progress on a task, but short enough to maintain peak mental intensity without experiencing brain fog or distraction.',
    },
    {
      q: 'What should I do during short breaks?',
      a: 'Step away from all screens! Drink water, do quick shoulder stretches, rest your eyes by looking out a window, or take deep breaths. Avoid checking social media or emails during breaks.',
    },
    {
      q: 'Is PomoFocus 100% free?',
      a: 'Yes! PomoFocus is completely free to use. We support server maintenance through optional user donations and non-intrusive display advertisements.',
    },
    {
      q: 'Does the timer work accurately in background tabs?',
      a: 'Yes. PomoFocus uses absolute timestamp differential math (`Date.now()`) so the countdown remains 100% accurate even if your web browser throttles background JavaScript timers.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-4 text-slate-300">
      
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-rose-400" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">About PomoFocus & The Pomodoro Technique</h1>
          <p className="text-sm text-slate-400">Discover the science behind time-chunking and deep work</p>
        </div>
      </div>

      <AdBanner slot="2233445566" />

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* Origin Section */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-amber-400" />
            The Origin of the Pomodoro Technique
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            The Pomodoro Technique was created in the late 1980s by university student Francesco Cirillo. Struggling to stay focused on his studies, Cirillo challenged himself to commit to just 10 minutes of concentrated study time using a tomato-shaped (&quot;pomodoro&quot; in Italian) kitchen timer.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            The experiment was a major success. By turning time into a friendly partner rather than an enemy, Cirillo developed a systematic workflow that has empowered millions of students, programmers, writers, and entrepreneurs worldwide.
          </p>
        </section>

        {/* Cognitive Science */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-rose-400" />
            The Neuroscience of Focus & Rest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-slate-100 mb-2">Ultradian Rhythms</h3>
              <p className="text-slate-400">
                Human brain wave activity naturally oscillates between high focus and rest phases in 90-minute ultradian cycles. Work-rest timers synchronize with your natural brain biology.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-slate-100 mb-2">Overcoming Procrastination</h3>
              <p className="text-slate-400">
                Starting a large task triggers anxiety. Committing to a short 25-minute &quot;micro-sprint&quot; lowers the cognitive barrier to entry and builds momentum.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold text-slate-200 text-base mb-1">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/50 border border-white/5 text-xs text-slate-500">
          <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0" />
          <p>
            Pomodoro Technique® and Pomodoro® are registered trademarks of Francesco Cirillo. PomoFocus is an independent, non-affiliated open educational utility tool.
          </p>
        </div>

      </div>

    </div>
  );
}
