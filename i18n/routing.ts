import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en', 'es', 'ar'] as const,
  defaultLocale: 'fr',
  localePrefix: 'always',
});
