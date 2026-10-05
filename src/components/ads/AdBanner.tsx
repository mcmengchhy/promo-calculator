'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  className?: string;
  client?: string; // e.g. ca-pub-XXXXXXXXXXXXXXXX
  debug?: boolean; // Force show placeholder in debug mode
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot = '1234567890',
  format = 'auto',
  className = '',
  client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',
  debug,
}) => {
  useEffect(() => {
    if (client && typeof window !== 'undefined') {
      try {
        // @ts-expect-error - Google AdSense push queue
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn('AdSense push error:', err);
      }
    }
  }, [client]);

  const isDevMode =
    debug ??
    (process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS === 'true');

  // If no AdSense client ID is configured:
  // In production (non-debug): Skip completely (return null) so layout remains ultra-clean
  // In development/debug mode: Show placeholder box
  if (!client) {
    if (!isDevMode) {
      return null;
    }

    return (
      <div
        className={`w-full glass-panel border border-dashed border-slate-700/60 rounded-2xl p-3 flex flex-col items-center justify-center text-center my-3 bg-slate-900/30 ${className}`}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 mb-0.5">
          Ad Placeholder (Debug Mode)
        </span>
        <p className="text-[11px] text-slate-500 max-w-md">
          AdSense slot will render here once <code className="text-rose-400">NEXT_PUBLIC_ADSENSE_CLIENT_ID</code> is set.
        </p>
      </div>
    );
  }

  return (
    <div className={`my-4 flex justify-center items-center overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};
