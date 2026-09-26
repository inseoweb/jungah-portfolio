import { loc, NEEDS_TRANSLATION, type Localized } from './i18n';

export type WorkSeriesMeta = {
  slug: string;
  href: string;
  title: Localized;
  period: string;
};

/**
 * Single source of truth for each WORKS series' title, shared by the
 * Sidebar nav, the WORKS index, and each series detail page's own
 * heading/breadcrumb/NEXT WORK link — so there is exactly one place
 * to fix a title rather than several copies drifting out of sync.
 *
 * None of these has a confirmed official English title yet, so `en`
 * is left as NEEDS_TRANSLATION rather than guessed. Update this file
 * once real translations are confirmed; every consumer picks it up
 * automatically.
 */
export const WORKS_SERIES: WorkSeriesMeta[] = [
  { slug: 'baroque', href: '/baroque', title: loc('요정의 초상', 'The Portrait of Fairies'), period: '2025-' },
  { slug: 'fairy', href: '/fairy', title: loc('요정들', 'Fairies'), period: '2023-' },
  { slug: 'disposable', href: '/disposable', title: loc('영원을 꿈꾸는 일회용', NEEDS_TRANSLATION), period: '2025-' },
  { slug: 'flower', href: '/flower', title: loc('꽃보다 아름답다', NEEDS_TRANSLATION), period: '2003-' },
  { slug: 'dream', href: '/dream', title: loc('꽃꿈', NEEDS_TRANSLATION), period: '2024-' },
  { slug: 'blue-alley', href: '/blue-alley', title: loc('푸른 골목의 안쪽', NEEDS_TRANSLATION), period: '2021-' },
  { slug: 'marine', href: '/marine', title: loc('해양환경작품', NEEDS_TRANSLATION), period: '2011~' },
  { slug: '2015', href: '/2015', title: loc('남겨진 것들로부터의 위로', NEEDS_TRANSLATION), period: '2015-' },
  {
    slug: '2000-2014',
    href: '/2000-2014',
    title: loc('도시·숲 2000~2014', NEEDS_TRANSLATION),
    period: '2000-2014',
  },
  {
    slug: '1990-1999',
    href: '/1990-1999',
    title: loc('도시·숲 1990~1999', NEEDS_TRANSLATION),
    period: '1990-1999',
  },
];

export function getWorkSeries(slug: string): WorkSeriesMeta | undefined {
  return WORKS_SERIES.find((s) => s.slug === slug);
}
