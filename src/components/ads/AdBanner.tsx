'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  className?: string;
  client?: string; // e.g. ca-pub-XXXXXXXXXXXXXXXX
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot = '1234567890',
  format = 'auto',
  className = '',
  client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',
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

  // If no AdSense client ID is provided yet, show a clean dev placeholder box
  if (!client) {
    return (
      <div
        className={`w-full glass-panel border border-dashed border-slate-700/60 rounded-2xl p-4 flex flex-col items-center justify-center text-center my-6 min-h-[100px] bg-slate-900/30 ${className}`}
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-1">
          Advertisement Placeholder
        </span>
        <p className="text-xs text-slate-600 max-w-md">
          Google AdSense ad will appear here once approved and configured in environment variables.
        </p>
      </div>
    );
  }

  return (
    <div className={`my-6 flex justify-center items-center overflow-hidden ${className}`}>
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
