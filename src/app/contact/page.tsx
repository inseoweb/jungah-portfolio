'use client';

import { loc, useLocalized } from '../../lib/language';

const INSTAGRAM_LABEL = loc('인스타그램', 'Instagram');
const EMAIL_LABEL = loc('이메일문의', 'Email');

export default function ContactPage() {
  const instagramLabel = useLocalized(INSTAGRAM_LABEL);
  const emailLabel = useLocalized(EMAIL_LABEL);
  return (
    <main className="px-6 py-24 max-w-3xl mx-auto text-center">
      <h1 className="text-[14px] font-semibold text-center text-[#666666] mb-6">CONTACT</h1>
      <div className="space-y-1 text-sm text-neutral-700">
        <p>{instagramLabel} @marine_kja @jungah_official</p>
        <p>{emailLabel} kkyaha@gmail.com</p>
      </div>
    </main>
  );
}
