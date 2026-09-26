// Plain data helpers for bilingual content — deliberately NOT 'use client',
// so server component pages can build Localized data (via loc()) at module
// scope. Only the React-context bits (provider/hooks) live in language.tsx,
// which is 'use client'; importing a client-tagged function from server
// component module scope fails at build time, so the two must stay split.

export type Lang = 'ko' | 'en';

/**
 * Bilingual content field. `en` should hold a real, verified English
 * value (an existing official translation) or the literal sentinel
 * NEEDS_TRANSLATION — never a guessed/invented translation.
 */
export type Localized<T = string> = { ko: T; en: T };

export const NEEDS_TRANSLATION = 'translation-needed';

/** Shared placeholder node for long-form (ReactNode) content that hasn't been translated yet. */
export const PENDING_TRANSLATION_NODE = (
  <span className="italic text-neutral-400">[English translation coming soon]</span>
);

export function loc<T = string>(ko: T, en: T = ko): Localized<T> {
  return { ko, en };
}
