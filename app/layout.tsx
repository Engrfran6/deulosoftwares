import type {Metadata} from 'next';
import {Inter, League_Spartan, Poppins, Prociono} from 'next/font/google';
import type React from 'react';
import './globals.css';

import {Analytics} from '@/components/analytics';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import {ThemeProvider} from '@/components/theme-provider';
import Script from 'next/script';
import {Suspense} from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-spartan',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  style: 'normal',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
});

const prociono = Prociono({
  subsets: ['latin'],
  variable: '--font-prociono',
  weight: ['400'],
  display: 'swap',
  style: 'normal',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Deulo Software Solutions | Custom Software Development',
    template: '%s | Deulo Software Solutions',
  },
  description:
    'Transforming ideas into powerful digital solutions. We build custom web applications, mobile apps, and enterprise software that drive business growth.',
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'custom software',
    'enterprise solutions',
    'digital transformation',
  ],
  authors: [{name: 'Deulo Software Solutions'}],
  creator: 'Deulo Software Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deulosoftware.com',
    title: 'Deulo Software Solutions | Custom Software Development',
    description:
      'Transforming ideas into powerful digital solutions. We build custom web applications, mobile apps, and enterprise software that drive business growth.',
    siteName: 'Deulo Software Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deulo Software Solutions | Custom Software Development',
    description:
      'Transforming ideas into powerful digital solutions. We build custom web applications, mobile apps, and enterprise software that drive business growth.',
    creator: '@deulosoftware',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9QKM05MSN9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9QKM05MSN9', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${spartan.variable} ${prociono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Suspense>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
