'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang, Localized } from './i18n';

export type { Lang, Localized } from './i18n';
export { loc, NEEDS_TRANSLATION, PENDING_TRANSLATION_NODE } from './i18n';

const STORAGE_KEY = 'jungah-lang';

type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always starts as 'ko' to match server-rendered output, then syncs
  // from localStorage after mount. This means language never affects
  // navigation/SSR — toggling only ever re-renders in place.
  const [lang, setLangState] = useState<Lang>('ko');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ko' || stored === 'en') setLangState(stored);
    } catch {
      // localStorage unavailable (private mode, etc.) — fall back to 'ko'.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

/** Resolve a Localized field against the current language. */
export function useLocalized<T = string>(field: Localized<T>): T {
  const { lang } = useLanguage();
  return field[lang];
}
