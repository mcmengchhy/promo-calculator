'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-4 text-slate-300">
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
          <Shield className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-sm text-slate-400">Last updated: October 2026</p>
        </div>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 text-sm leading-relaxed">
        
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Overview</h2>
          <p>
            At PomoFocus (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), accessible from https://promo-calculator.vercel.app, your privacy is extremely important to us. This Privacy Policy outlines the types of personal information that is collected and recorded by PomoFocus and how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. Local Storage & Cookies</h2>
          <p>
            PomoFocus stores user preferences (such as custom timer durations, volume settings, theme preferences, and daily pomodoro counts) locally on your device using standard HTML5 Browser <code className="text-rose-300">localStorage</code>. This data never leaves your personal device and is not transmitted to external servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Google AdSense & Third-Party Advertising</h2>
          <p className="mb-3">
            PomoFocus uses Google AdSense to serve advertisements when you visit our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites on the Internet.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to PomoFocus and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline">Google Ads Settings</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Log Files</h2>
          <p>
            Like almost all web servers, PomoFocus follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. GDPR & CCPA Compliance</h2>
          <p>
            Under GDPR and CCPA regulations, users have the right to request access, erasure, or restriction of processing of their data. Since PomoFocus does not maintain user account databases, clearing your web browser cookies and local storage completely removes all stored data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">6. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please reach out through our <a href="/support" className="text-rose-400 underline">Support Page</a>.
          </p>
        </section>

      </div>

    </div>
  );
}
