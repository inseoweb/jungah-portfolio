'use client';

import { useRef } from 'react';
import type { MouseEvent, PointerEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { loc, useLocalized, type Localized } from '../lib/language';

type Work = {
  title: Localized;
  year: string;
  img: string;
  href: string;
  // Most PROJECTS thumbnails intentionally crop to fill their square cell
  // (object-cover). These two specific images distort under that crop, so
  // they opt out and show their full original ratio instead (object-contain).
  preserveRatio?: boolean;
};

// One hero image at every breakpoint — the original portrait photo, full
// artwork and frame, never cropped or re-derived into a separate desktop
// composition. Only the container/max-height around it changes per
// breakpoint (see Hero below).
const HERO_IMAGE_SRC = '/images/home/hero.jpeg';
const HERO_IMAGE_WIDTH = 3362;
const HERO_IMAGE_HEIGHT = 3870;
const HERO_ALT = loc('대표 이미지', 'Featured work');

// The 6 PROJECTS thumbnails below the hero. Images and their order are
// unchanged from before; only title/year/href were updated to name each
// piece correctly and link to its actual WORKS page.
const PROJECTS: Work[] = [
  {
    title: loc('요정의 초상', 'The Portrait of Fairies'),
    year: '2023–',
    img: '/images/home/daepyo.jpeg',
    href: '/baroque',
  },
  {
    title: loc('영원을 꿈꾸는 일회용', 'The Disposable Dreaming of Eternity'),
    year: '1999',
    img: '/images/1990/21.jpeg',
    href: '/disposable',
    preserveRatio: true,
  },
  {
    title: loc('꽃보다 아름답다', 'More Beautiful than Flowers'),
    year: '2003–',
    img: '/images/home/beautiful-than-flower.jpg',
    href: '/flower',
    preserveRatio: true,
  },
  {
    title: loc('꽃꿈', 'Flower Dream'),
    year: '2024–',
    img: '/images/home/flower-dream.jpg',
    href: '/dream',
  },
  {
    title: loc('신십장생도', 'New Painting of Ten Symbols of Longevity'),
    year: '2021',
    img: '/images/marine/6.jpg',
    href: '/marine',
  },
  {
    title: loc('소리없는', 'Silent'),
    year: '1999',
    img: '/images/1990/1.jpeg',
    href: '/1990-1999',
  },
];

function Hero() {
  const heroAlt = useLocalized(HERO_ALT);

  // The portrait artwork is shown at its own true ratio (no crop, no
  // stretch) inside a wide, centered container. On desktop the container is
  // far wider than the image's own rendered width (which is driven by the
  // md:max-h cap below, not by the container), so generous white space
  // appears on both sides automatically — the "wide gallery wall" feel,
  // achieved through layout instead of a separately-composed image file.
  return (
    <section className="px-6 py-8 md:px-16 md:pb-6 md:pt-8" aria-label={heroAlt}>
      <div className="mx-auto flex max-w-[1200px] justify-center">
        <Image
          src={HERO_IMAGE_SRC}
          alt={heroAlt}
          width={HERO_IMAGE_WIDTH}
          height={HERO_IMAGE_HEIGHT}
          priority
          sizes="100vw"
          className="block h-auto w-full md:h-auto md:max-h-[58vh] md:w-auto md:max-w-full"
        />
      </div>
    </section>
  );
}

function WorkCard({ work, onClick }: { work: Work; onClick?: (e: MouseEvent) => void }) {
  const title = useLocalized(work.title);
  return (
    <Link href={work.href} onClick={onClick} className="group block">
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
        <Image
          src={work.img}
          alt={work.title.ko}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
          className={`transition-transform duration-300 group-hover:scale-105 ${
            work.preserveRatio ? 'object-contain' : 'object-cover'
          }`}
        />
      </div>
      <div className="mt-3 space-y-0.5">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <p className="text-xs text-neutral-500">{work.year}</p>
      </div>
    </Link>
  );
}

function WorkThumb({ work, onClick }: { work: Work; onClick?: (e: MouseEvent) => void }) {
  const title = useLocalized(work.title);
  return (
    <Link href={work.href} onClick={onClick} className="group inline-flex shrink-0 flex-col">
      <Image
        src={work.img}
        alt={work.title.ko}
        width={0}
        height={0}
        sizes="20vw"
        className="block h-20 w-auto max-w-none md:h-24"
      />
      <p className="mt-1.5 w-full truncate text-xs text-neutral-700 group-hover:text-neutral-900">
        {title}
      </p>
      <p className="text-[11px] text-neutral-400">{work.year}</p>
    </Link>
  );
}

function ProjectsSection({ works }: { works: Work[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false, pointerId: 0 });

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.45, behavior: 'smooth' });
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { isDown: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false, pointerId: e.pointerId };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!drag.current.isDown || !el) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(dx) > 3) {
      drag.current.moved = true;
      // Only capture once real dragging starts — capturing on pointerdown
      // reroutes the resulting click's target to this element, which
      // silently breaks navigation on plain (non-drag) clicks.
      el.setPointerCapture(e.pointerId);
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startScroll - dx;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    drag.current.isDown = false;
    if (el && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  const onCardClick = (e: MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  return (
    <section
      id="selected-works"
      className="mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:pb-14 md:pt-4"
    >
      <div className="mb-6 flex items-center justify-between md:mb-5">
        <h2 className="text-xs md:text-sm font-semibold text-neutral-500">PROJECTS</h2>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="이전 작품"
            className="text-xs text-neutral-400 transition-colors hover:text-neutral-900"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="다음 작품"
            className="text-xs text-neutral-400 transition-colors hover:text-neutral-900"
          >
            →
          </button>
        </div>
      </div>

      {/* Mobile: unchanged grid layout */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
        {works.map((work) => (
          <WorkCard key={work.img} work={work} />
        ))}
      </div>

      {/* Desktop: small thumbnail navigation strip */}
      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="hidden cursor-grab gap-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing md:flex [&::-webkit-scrollbar]:hidden"
      >
        {works.map((work) => (
          <WorkThumb key={work.img} work={work} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsSection works={PROJECTS} />
    </main>
  );
}
