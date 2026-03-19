import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import frMessages from '../i18n/fr.json';
import enMessages from '../i18n/en.json';
import esMessages from '../i18n/es.json';
import arMessages from '../i18n/ar.json';

type Locale = (typeof routing.locales)[number];

function isSupportedLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

type SeoMessages = {
  title: string;
  description: string;
  keywords: string;
};

type LocaleMessages = {
  seo: SeoMessages;
};

const messagesByLocale: Record<Locale, LocaleMessages> = {
  fr: frMessages as LocaleMessages,
  en: enMessages as LocaleMessages,
  es: esMessages as LocaleMessages,
  ar: arMessages as LocaleMessages,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
};

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const resolvedLocale = isSupportedLocale(locale) ? locale : routing.defaultLocale;
  const seo = messagesByLocale[resolvedLocale].seo;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{name: 'FaceSynth Team'}],
    alternates: {
      canonical: `/${resolvedLocale}`,
      languages: Object.fromEntries(
        routing.locales.map((routingLocale) => [routingLocale, `/${routingLocale}`])
      )
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      locale: resolvedLocale
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description
    }
  };
}

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
