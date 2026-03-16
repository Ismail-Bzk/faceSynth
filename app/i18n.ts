import { getRequestConfig } from 'next-intl/server';

export const locales = ['fr', 'en', 'es', 'ar'] as const;
export const defaultLocale = 'fr' as const;

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./i18n/${locale}.json`)).default
}));
