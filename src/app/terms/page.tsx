'use client';

import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-4 text-slate-300">
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
          <FileText className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">Terms of Use</h1>
          <p className="text-sm text-slate-400">Last updated: October 2026</p>
        </div>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 text-sm leading-relaxed">
        
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using PomoFocus, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. Use License & Intellectual Property</h2>
          <p>
            PomoFocus grants you a personal, non-exclusive, non-transferable license to access and use the online timer tool for personal, educational, or commercial productivity management. You may not copy, reverse engineer, or redistribute the web application code without explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Disclaimer of Warranties</h2>
          <p>
            PomoFocus is provided &quot;as is&quot; without any representations or warranties, express or implied. While we strive for 100% uptime and precise timer accuracy, we are not responsible for lost work, missed appointments, or productivity interruptions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Trademark Notice</h2>
          <p>
            The Pomodoro Technique® is a registered trademark owned by Francesco Cirillo. PomoFocus is an independent utility software application and is not endorsed by or affiliated with Francesco Cirillo or Cirillo Company.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. Modifications to Terms</h2>
          <p>
            We reserve the right to revise these Terms of Use at any time. Changes will be posted directly to this page.
          </p>
        </section>

      </div>

    </div>
  );
}
