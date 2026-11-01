'use client';

import { loc, useLocalized } from '../../lib/language';

const COMING_SOON = loc('준비 중입니다.', 'Coming soon.');

export default function ResearchPracticePage() {
  const text = useLocalized(COMING_SOON);
  return (
    <main className="px-6 py-24 max-w-3xl mx-auto text-center">
      <h1 className="text-[14px] font-semibold text-center text-[#666666] mb-4">RESEARCH & PRACTICE</h1>
      <p className="text-sm text-neutral-400">{text}</p>
    </main>
  );
}
