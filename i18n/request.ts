import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = (typeof routing.locales)[number];

function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (routing.locales as readonly string[]).includes(value);
}

type RequestConfigParams = {
  // Newer versions
  locale?: unknown;
  // Older versions
  requestLocale?: unknown;
};

export default getRequestConfig(async (params: RequestConfigParams) => {
  const directLocale = params.locale;
  const requestedLocale =
    directLocale != null ? directLocale : await (params.requestLocale as unknown);

  const locale = isSupportedLocale(requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../app/i18n/${locale}.json`)).default,
  };
});
