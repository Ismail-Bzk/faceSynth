import { getRequestConfig } from 'next-intl/server';

export const locales = ['fr', 'en', 'es', 'ar'] as const;
export const defaultLocale = 'fr' as const;

export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the locale is correct
  if (!locales.includes(locale as Locale)) {
    return {
      messages: (await import(`./i18n/fr.json`)).default,
    };
  }

  return {
    messages: (await import(`./i18n/${locale}.json`)).default,
  };
});
