import type { Metadata } from 'next';
import './globals.css';
import { PomodoroProvider } from '@/context/PomodoroContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://promo-calculator-three.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'PomoFocus - Free Online Pomodoro Timer & Productivity Tool',
  description:
    'Boost your productivity and focus with PomoFocus, a free online Pomodoro timer with customizable intervals, sound alerts, statistics, and dark mode.',
  keywords: [
    'Pomodoro Timer',
    'Productivity Tool',
    'Focus Timer',
    'Study Timer',
    'Work Rest Cycle',
    'Time Management',
    'Free Online Timer',
    'PomoFocus',
  ],
  authors: [{ name: 'PomoFocus Team' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PomoFocus - Free Online Pomodoro Timer',
    description: 'Boost your focus and productivity with customizable Pomodoro sessions.',
    url: SITE_URL,
    siteName: 'PomoFocus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PomoFocus - Free Online Pomodoro Timer',
    description: 'Boost your focus and productivity with customizable Pomodoro sessions.',
  },
  verification: {
    google: 'googlef44a921bf8a2345b',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" data-theme="dark" data-mode="pomodoro">
      <head>
        {/* Google Site Verification Meta Tag */}
        <meta name="google-site-verification" content="googlef44a921bf8a2345b" />

        {/* Google Analytics 4 (GA4) Tag */}
        {gaMeasurementId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Google Structured Data / JSON-LD for Rich Search Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'PomoFocus',
              url: SITE_URL,
              applicationCategory: 'Productivity',
              operatingSystem: 'All',
              description:
                'Free online Pomodoro timer with customizable focus cycles, background accuracy, Tibetan bell sound alerts, and dark mode.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                'Pomodoro 25 min work timer',
                'Short break 5 min timer',
                'Long break 15 min timer',
                'Web Audio sound alerts',
                'Tab accurate background timing',
              ],
            }),
          }}
        />

        {/* Google AdSense Script Placeholder */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <PomodoroProvider>
          <Header />
          <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-6">
            {children}
          </main>
          <Footer />
        </PomodoroProvider>
      </body>
    </html>
  );
}
