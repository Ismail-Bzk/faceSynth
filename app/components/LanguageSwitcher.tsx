'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

const LANGUAGES = [
  { code: 'fr', label: '🇫🇷 Français', flag: '🇫🇷' },
  { code: 'en', label: '🇬🇧 English', flag: '🇬🇧' },
  { code: 'es', label: '🇪🇸 Español', flag: '🇪🇸' },
  { code: 'ar', label: '🇸🇦 العربية', flag: '🇸🇦' },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extract current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'fr';
  const currentLanguage = LANGUAGES.find(lang => lang.code === currentLocale);

  const handleLanguageChange = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex items-center gap-2 px-3 py-2 rounded-lg',
          'bg-white border border-gray-200 hover:border-blue-300',
          'text-sm font-medium text-gray-700 hover:text-blue-600',
          'transition-colors duration-200',
          'hover:shadow-md'
        )}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.label.split(' ')[1]}</span>
        <svg
          className={clsx(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={clsx(
          'absolute right-0 mt-2 w-48 bg-white rounded-lg',
          'border border-gray-200 shadow-lg z-50',
          'animate-in fade-in slide-in-from-top-2',
          'ltr:origin-top-right rtl:origin-top-left'
        )}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={clsx(
                'w-full text-left px-4 py-3 text-sm font-medium',
                'first:rounded-t-lg last:rounded-b-lg',
                'transition-colors duration-150',
                currentLocale === lang.code
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50',
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
