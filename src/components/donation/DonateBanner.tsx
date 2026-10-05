'use client';

import React from 'react';
import { Coffee, Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const DonateBanner: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto my-8 glass-panel p-6 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-amber-500/10 shadow-lg text-center relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 text-left">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
            <Coffee className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-100 flex items-center gap-2">
              Enjoying PomoFocus?
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500/40" />
            </h3>
            <p className="text-xs text-slate-300">
              Support this free tool & keep it ad-free for everyone!
            </p>
          </div>
        </div>

        <Link
          href="/support"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shrink-0 shadow-md shadow-amber-500/20 active:scale-95"
        >
          <span>Support Tool</span>
          <ExternalLink className="w-4 h-4" />
        </Link>

      </div>
    </div>
  );
};
