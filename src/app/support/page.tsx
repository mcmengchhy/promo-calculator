'use client';

import React from 'react';
import { Heart, Coffee, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto py-4">
      
      {/* Header */}
      <div className="text-center my-8">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-rose-400 fill-rose-500/40 animate-pulse" />
        </div>
        <h1 className="text-3xl font-extrabold text-white">Support PomoFocus</h1>
        <p className="text-slate-400 mt-2 max-w-lg mx-auto text-sm sm:text-base">
          PomoFocus is completely free, open to everyone, and built with love. If it has saved you time or boosted your focus, consider supporting its development!
        </p>
      </div>

      {/* Donation Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
        
        {/* Buy Me a Coffee */}
        <div className="glass-panel p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent flex flex-col justify-between hover:border-amber-400 transition-all duration-300">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-4">
              <Coffee className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-lg font-bold text-white mb-1">Buy Me a Coffee</h2>
            <p className="text-xs text-slate-300 mb-6">
              Quick, simple one-time donation starting at $3 or $5. No account required.
            </p>
          </div>
          <a
            href="https://buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
          >
            <span>Buy a Coffee ($3)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Ko-fi */}
        <div className="glass-panel p-6 rounded-3xl border border-rose-500/30 bg-gradient-to-b from-rose-500/10 to-transparent flex flex-col justify-between hover:border-rose-400 transition-all duration-300">
          <div>
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-rose-400" />
            </div>
            <h2 className="text-lg font-bold text-white mb-1">Ko-fi Support</h2>
            <p className="text-xs text-slate-300 mb-6">
              0% platform fee donations via PayPal or Credit Card.
            </p>
          </div>
          <a
            href="https://ko-fi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-rose-500/20"
          >
            <span>Support on Ko-fi</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Why Support Section */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 my-8">
        <h2 className="text-lg font-bold text-white mb-4">Where Your Support Goes</h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p><strong>Server & Hosting Expenses:</strong> Keeps high-speed CDN and global server uptime fast for everyone worldwide.</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p><strong>Ad-Minimal Experience:</strong> Allows us to keep display advertising minimal, clean, and unobtrusive.</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p><strong>New Features Development:</strong> Funds ongoing updates including sound effects, stats tracking, and PWA mobile offline support.</p>
          </div>
        </div>
      </div>

      <AdBanner slot="3344556677" />

    </div>
  );
}
