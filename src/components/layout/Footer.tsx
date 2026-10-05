'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Shield, FileText, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 glass-panel mt-16 py-8 px-4 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-semibold text-slate-200">PomoFocus - Free Online Pomodoro Timer</p>
          <p className="text-xs text-slate-500 max-w-sm text-center md:text-left">
            Boost your productivity, manage work-rest cycles, and stay focused with zero distractions.
          </p>
        </div>

        {/* Center Support Button */}
        <Link
          href="/support"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 transition-all shadow-sm group"
        >
          <Coffee className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Support this project with a Coffee</span>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-500/40" />
        </Link>

        {/* Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link href="/about" className="hover:text-white transition-colors">
            About Pomodoro
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/privacy" className="flex items-center gap-1 hover:text-white transition-colors">
            <Shield className="w-3.5 h-3.5" />
            Privacy Policy
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/terms" className="flex items-center gap-1 hover:text-white transition-colors">
            <FileText className="w-3.5 h-3.5" />
            Terms of Use
          </Link>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 mt-6 pt-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} PomoFocus. All rights reserved. Not affiliated with the Pomodoro Technique® or Cirillo Company.
      </div>
    </footer>
  );
};
