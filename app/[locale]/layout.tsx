import type { Metadata } from 'next';
import '../globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'FaceSynth – RGPD Synthetic Face Pack',
  description: 'Dataset de visages synthétiques 100% RGPD pour entraîner vos modèles de computer vision sans données personnelles.',
  keywords: 'synthetic faces, computer vision, RGPD, dataset, IA, machine learning',
  authors: [{ name: 'FaceSynth Team' }],
  viewport: 'width=device-width, initial-scale=1',
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

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </body>
    </html>
  );
}
