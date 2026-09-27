'use client';

import { useRef } from 'react';
import type { MouseEvent, PointerEvent } from 'react';
import Image, { getImageProps } from 'next/image';
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

// Desktop/tablet hero: a Figma composition that re-frames the artwork as a
// landscape image for the wide layout — this *is* the intended crop, never
// re-derive it from the artwork's own proportions. Dimensions are the
// file's actual pixel size (required by next/image, and used to preserve
// its ratio without distortion).
const HERO_DESKTOP_IMAGE = { src: '/images/home/hero.jpg', width: 1252, height: 768 };
// Mobile hero: the original portrait photo — full artwork and frame —
// swapped in below the `md` breakpoint so the piece reads at a real size
// instead of shrinking to a sliver of the desktop composition.
const HERO_MOBILE_IMAGE = { src: '/images/home/hero.jpeg', width: 3362, height: 3870 };
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

  // Two genuinely different images (different crops, different ratios), not
  // two sizes of the same one — that's art direction, which next/image's
  // own `sizes`/srcset can't express. Building a manual <picture> via
  // getImageProps lets the browser fetch only the one matching source
  // instead of loading both and hiding one with CSS.
  const {
    props: { srcSet: desktopSrcSet, sizes: desktopSizes },
  } = getImageProps({
    ...HERO_DESKTOP_IMAGE,
    alt: heroAlt,
    // Matches the container's own max-w-[1200px] cap — needs to be generous
    // (not a tight vw guess) so next/image always fetches a candidate large
    // enough to fill md:max-h-[66vh]. This `sizes` value MUST also be set on
    // the <source> below (not just used to pick a srcSet candidate here):
    // without its own `sizes`, a <source> silently borrows the fallback
    // <img>'s `sizes` for density-corrected natural-size math, which — since
    // that belongs to the very differently-sized mobile image — makes the
    // browser compute a bogus (too small) intrinsic size for this image and
    // cap `width: auto` well below what max-height alone would allow.
    sizes: '(min-width: 768px) 1200px, 100vw',
    priority: true,
  });
  const { props: mobileImgProps } = getImageProps({
    ...HERO_MOBILE_IMAGE,
    alt: heroAlt,
    sizes: '100vw',
    priority: true,
  });

  return (
    <section className="px-6 py-8 md:px-16 md:pb-4 md:pt-8" aria-label={heroAlt}>
      <div className="mx-auto max-w-[1200px]">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes={desktopSizes} />
          <img
            {...mobileImgProps}
            alt={heroAlt}
            className="mx-auto block h-auto w-full md:max-h-[66vh] md:w-auto md:max-w-full"
          />
        </picture>
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
