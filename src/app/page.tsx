'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Work = {
  titleKo: string;
  year: string;
  category: string;
  img: string;
  href: string;
};

const HOME_WORKS: Work[] = [
  { titleKo: '요정의 초상', year: '2025-', category: '요정', img: '/images/home/daepyo.jpeg', href: '/baroque' },
  { titleKo: '컵 (일화용컵 도자기로 만들기)', year: '1999', category: '도시·숲', img: '/images/1990/21.jpeg', href: '/1990-1999' },
  { titleKo: '꽃보다 아름답다', year: '2003-', category: '요정', img: '/images/home/beautiful-than-flower.jpg', href: '/flower' },
  { titleKo: '꽃꿈', year: '2024-', category: '요정', img: '/images/home/flower-dream.jpg', href: '/dream' },
  { titleKo: '신림동', year: '2021', category: '해양환경작품', img: '/images/marine/6.jpg', href: '/marine' },
  { titleKo: '소리없는', year: '1999', category: '도시·숲', img: '/images/1990/1.jpeg', href: '/1990-1999' },
  { titleKo: '꿈과 이제 오후', year: '2013', category: '도시·숲', img: '/images/2000/6.jpg', href: '/2000-2014' },
  { titleKo: '밤의 숲', year: '2020', category: '도시·숲', img: '/images/2015/forest-night.png', href: '/2015' },
];

const SELECTED_WORKS = HOME_WORKS.slice(0, 6);

function Hero({ works }: { works: Work[] }) {
  const [index, setIndex] = useState(0);
  const total = works.length;
  const current = works[index];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="px-6 py-10 md:px-16 md:py-16" aria-label="대표 작품">
      <div className="mx-auto flex max-w-[1050px] flex-col items-center">
        <div className="relative h-[56svh] w-full md:h-[72vh]">
          {works.map((work, i) => (
            <Image
              key={work.img}
              src={work.img}
              alt={work.titleKo}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 90vw, 70vw"
              className={`object-contain transition-opacity duration-300 ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          {total > 1 && (
            <button
              onClick={goPrev}
              aria-label="이전 작품"
              className="text-lg text-neutral-400 hover:text-neutral-900"
            >
              ←
            </button>
          )}

          <Link href={current.href} className="text-center">
            <p className="text-sm font-medium text-neutral-900 hover:underline">{current.titleKo}</p>
            <p className="text-xs text-neutral-400">
              {current.year}
              {total > 1 && <> · {index + 1} / {total}</>}
            </p>
          </Link>

          {total > 1 && (
            <button
              onClick={goNext}
              aria-label="다음 작품"
              className="text-lg text-neutral-400 hover:text-neutral-900"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function SelectedWorksSection({ works }: { works: Work[] }) {
  return (
    <section id="selected-works" className="mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:py-14">
      <h2 className="mb-6 text-xs md:text-sm font-semibold text-neutral-500">SELECTED WORKS</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
        {works.map((work) => (
          <Link key={work.img} href={work.href} className="group block">
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
              <Image
                src={work.img}
                alt={work.titleKo}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 space-y-0.5">
              <p className="text-sm font-semibold text-neutral-900">{work.titleKo}</p>
              <p className="text-xs text-neutral-500">{work.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero works={HOME_WORKS} />
      <SelectedWorksSection works={SELECTED_WORKS} />
    </main>
  );
}
