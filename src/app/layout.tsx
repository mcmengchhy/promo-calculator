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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" data-mode="pomodoro">
      <head>
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
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </PomodoroProvider>
      </body>
    </html>
  );
}
