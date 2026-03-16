# 🌍 FaceSynth I18n (Internationalisation) Guide

## Overview

FaceSynth landing page supports **4 languages**:
- 🇫🇷 **Français** (fr)
- 🇬🇧 **English** (en)
- 🇪🇸 **Español** (es)
- 🇸🇦 **العربية** (ar)

Using **next-intl** for professional multi-language support with routing by locale.

---

## 📁 File Structure

```
app/
├── i18n.ts                        # i18n configuration
├── i18n/
│   ├── fr.json                    # French translations
│   ├── en.json                    # English translations
│   ├── es.json                    # Spanish translations
│   └── ar.json                    # Arabic translations
├── [locale]/
│   ├── layout.tsx                 # Locale-specific layout
│   └── page.tsx                   # Homepage with i18n
├── components/
│   └── LanguageSwitcher.tsx       # Language selector dropdown
└── hooks/
    └── useI18n.ts                 # Hook to access translations

middleware.ts                       # next-intl middleware for routing
```

---

## 🚀 Installation & Setup

### 1. Install next-intl

```bash
npm install next-intl
```

### 2. Update package.json

The `next-intl` dependency has been added. Run:

```bash
npm install
```

### 3. Verify Files

All i18n files are already created:
- ✅ `app/i18n.ts` - Configuration
- ✅ `app/i18n/{fr,en,es,ar}.json` - Translations
- ✅ `app/components/LanguageSwitcher.tsx` - Language selector
- ✅ `middleware.ts` - Routing middleware
- ✅ `app/[locale]/` - Locale routing directory

---

## 🌐 How It Works

### URL Structure

```
/fr/                    → French version
/en/                    → English version
/es/                    → Spanish version
/ar/                    → Arabic version
```

### Usage in Components

```tsx
'use client';

import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button>{t('hero.cta1')}</button>
    </div>
  );
}
```

### Language Switcher

The `LanguageSwitcher` component is pre-built and ready to use:

```tsx
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';

export function Header() {
  return (
    <header>
      <nav>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
```

---

## 📝 Translation Structure

All translations are organized in `app/i18n/{locale}.json` with nested keys:

```json
{
  "common": {
    "language": "Français",
    "home": "Accueil"
  },
  "hero": {
    "title": "...",
    "subtitle": "...",
    "cta1": "..."
  },
  "features": [
    { "title": "...", "description": "..." }
  ]
}
```

Access with dot notation:
```tsx
t('common.language')      // → "Français"
t('hero.title')           // → "FaceSynth – Pack..."
t('features.0.title')     // → "Conformité RGPD"
```

---

## ✏️ Adding New Translations

### Step 1: Add to All Language Files

Edit `app/i18n/fr.json`, `en.json`, `es.json`, `ar.json`:

```json
{
  "...existing content...",
  "newSection": {
    "newKey": "Nouvelle valeur"
  }
}
```

### Step 2: Use in Components

```tsx
import { useTranslations } from 'next-intl';

export function NewComponent() {
  const t = useTranslations();
  return <h2>{t('newSection.newKey')}</h2>;
}
```

### Step 3: Rebuild

```bash
npm run build
npm run dev
```

---

## 🔄 Translating Content

### Current Translations Status

✅ **All 4 languages** have complete translations for:
- Hero section
- Problem/Solution
- Benefits (6 items)
- Package content
- Variations
- Use cases (6 items)
- Pricing (3 plans)
- Compliance
- FAQ (8 questions)
- Footer

### How to Update

1. **Edit JSON file** (e.g., `app/i18n/fr.json`)
2. **Update corresponding key** in all 4 languages
3. **Rebuild**: `npm run build`
4. **Deploy**: `git push`

---

## 🎨 Styling with Language Direction

RTL support for Arabic:

```tsx
<div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
  {/* Content */}
</div>
```

Tailwind CSS RTL classes:

```tsx
<div className="ltr:ml-4 rtl:mr-4">
  {/* Margin adapts for RTL */}
</div>
```

---

## 🧪 Testing Languages

### Local Testing

```bash
# Access different locales
http://localhost:3000/fr/        # French
http://localhost:3000/en/        # English
http://localhost:3000/es/        # Spanish
http://localhost:3000/ar/        # Arabic
```

### Test Language Switcher

1. Open `http://localhost:3000/fr/`
2. Click language switcher (top-right)
3. Select a language
4. Verify URL changes to `/en/`, `/es/`, etc.
5. Verify content translates

---

## 🚀 Deployment

### Vercel

```bash
git add .
git commit -m "feat: add i18n support"
git push origin main
```

Vercel automatically rebuilds with new `next-intl` configuration.

### Environment Variables

No special env vars needed for i18n. All translations are in JSON files.

---

## 📊 Translation Statistics

| Language | Strings | Status |
|----------|---------|--------|
| Français | 85+ | ✅ Complete |
| English | 85+ | ✅ Complete |
| Español | 85+ | ✅ Complete |
| العربية | 85+ | ✅ Complete |

---

## 🔧 Advanced: Adding More Languages

To add a new language (e.g., German):

### 1. Create translation file

`app/i18n/de.json`:
```json
{
  "common": { "language": "Deutsch", ... },
  "hero": { "title": "FaceSynth...", ... },
  ...
}
```

### 2. Update configuration

`app/i18n.ts`:
```ts
export const locales = ['fr', 'en', 'es', 'ar', 'de'] as const;
```

### 3. Update LanguageSwitcher

`app/components/LanguageSwitcher.tsx`:
```tsx
const LANGUAGES = [
  // ...existing...
  { code: 'de', label: '🇩🇪 Deutsch', flag: '🇩🇪' },
];
```

### 4. Rebuild and test

```bash
npm run build
npm run dev
# Test at http://localhost:3000/de/
```

---

## 📞 Common Issues

### Error: "Cannot find module 'next-intl'"

```bash
# Solution:
npm install next-intl
npm run build
```

### Language not switching

1. Clear browser cache
2. Check middleware.ts exists
3. Rebuild: `npm run build && npm run dev`

### Translations missing

1. Check key spelling in JSON
2. Verify key exists in ALL 4 language files
3. Restart dev server: `npm run dev`

---

## 📚 Resources

- **next-intl Docs**: https://next-intl-docs.vercel.app/
- **Tailwind RTL**: https://tailwindcss.com/docs/configuration#corePlugins
- **Translation Best Practices**: https://www.i18next.com/

---

## ✅ Next Steps

1. ✅ Files created (all 4 languages)
2. ✅ Configuration ready
3. 🔄 Run `npm install` to install `next-intl`
4. 🔄 Run `npm run build` to build with i18n
5. 🔄 Run `npm run dev` to test locally
6. 🔄 Test language switching at `/fr/`, `/en/`, `/es/`, `/ar/`
7. 🔄 Deploy to Vercel: `git push origin main`

---

**Your FaceSynth landing page now supports 4 languages! 🌍🚀**

For questions, check the next-intl documentation or review the translation files.
