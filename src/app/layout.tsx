import type { Metadata } from 'next';
import './globals.css';
import { PomodoroProvider } from '@/context/PomodoroContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
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
  ],
  authors: [{ name: 'PomoFocus Team' }],
  openGraph: {
    title: 'PomoFocus - Free Online Pomodoro Timer',
    description: 'Boost your focus and productivity with customizable Pomodoro sessions.',
    type: 'website',
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
  return (
    <html lang="en" data-theme="dark" data-mode="pomodoro">
      <head>
        {/* Google Structured Data / JSON-LD for Rich Search Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'PomoFocus',
              url: 'https://promo-calculator-three.vercel.app',
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
