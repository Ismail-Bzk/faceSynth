import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

function isSupportedLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  title: 'FaceSynth – RGPD Synthetic Face Pack',
  description: 'Dataset de visages synthétiques 100% RGPD pour entraîner vos modèles de computer vision sans données personnelles.',
  keywords: 'synthetic faces, computer vision, RGPD, dataset, IA, machine learning',
  authors: [{ name: 'FaceSynth Team' }],
  openGraph: {
    title: 'FaceSynth – RGPD Synthetic Face Pack',
    description: 'Dataset de visages synthétiques 100% RGPD pour entraîner vos modèles de computer vision.',
    type: 'website',
  },
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  // Ensure that next-intl doesn't read from headers(),
  // so the route can be statically rendered.
  setRequestLocale(locale);

  // 🔑 CRITICAL: Charger les messages pour la locale courante
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {/* 🔑 CRITICAL: Wrapper NextIntlClientProvider pour les composants 'use client' */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
