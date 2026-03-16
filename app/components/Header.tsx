'use client';

import { LanguageSwitcher } from './LanguageSwitcher';
import clsx from 'clsx';

export function Header() {
  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50',
      'bg-white/80 backdrop-blur-md border-b border-gray-200',
      'shadow-sm'
    )}>
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <div className="flex-1">
          <h1 className="text-xl font-bold text-primary-blue">
            FaceSynth
          </h1>
        </div>

        {/* Language Switcher */}
        <div className="flex-1 flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
