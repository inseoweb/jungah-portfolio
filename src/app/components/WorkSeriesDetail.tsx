'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type EditorialImage = {
  src: string;
  alt: string;
  orientation: 'landscape' | 'portrait' | 'square';
  caption?: string;
};

export type NextWork = { titleKo: string; href: string };

function WorkImage({
  image,
  priority,
  hero,
}: {
  image: EditorialImage;
  priority?: boolean;
  hero?: boolean;
}) {
  return (
    <figure className={`mx-auto flex w-full flex-col items-center ${hero ? 'max-w-5xl' : 'max-w-2xl'}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={0}
        height={0}
        sizes="(max-width: 768px) 90vw, 60vw"
        priority={priority}
        className={`block h-auto w-auto max-w-full ${
          hero ? 'max-h-[58vh] md:max-h-[76vh]' : 'max-h-[48vh] md:max-h-[56vh]'
        }`}
      />
      {image.caption && (
        <figcaption className="mt-3 text-center text-xs text-neutral-400">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

// One work per (near-)full viewport on desktop, so the previous/next
// piece never bleeds into view while the current one is being looked
// at. Mobile ignores all of this and keeps normal document flow.
//
// `snap` is disabled on the last section in the flow: with scroll-snap
// active all the way to the end, proximity snapping keeps pulling the
// view back to center the final image, which makes it hard to scroll
// past it to reach INSTALLATION VIEWS / NEXT WORK below.
function WorkSection({ children, snap = true }: { children: ReactNode; snap?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`flex w-full flex-col items-center py-12 md:min-h-screen ${
        snap ? 'md:snap-center' : ''
      } md:justify-center md:py-16 md:transition-all md:duration-700 md:ease-out ${
        revealed ? 'md:translate-y-0 md:opacity-100' : 'md:translate-y-3 md:opacity-0'
      }`}
    >
      {children}
    </section>
  );
}

export default function WorkSeriesDetail({
  seriesTitleKo,
  period,
  medium,
  intro,
  heroImage,
  images,
  installationViews,
  installationViewsPosition = 'bottom',
  nextWork,
}: {
  seriesTitleKo: string;
  period: string;
  medium?: string;
  intro?: ReactNode;
  heroImage: EditorialImage;
  images?: EditorialImage[];
  installationViews?: EditorialImage[];
  installationViewsPosition?: 'top' | 'bottom';
  nextWork?: NextWork;
}) {
  const installationSection = installationViews && installationViews.length > 0 && (
    <section className={installationViewsPosition === 'top' ? 'mb-20 md:mb-28' : 'mt-28 md:mt-36'}>
      <h2 className="mb-10 text-center text-xs font-semibold text-neutral-500 md:text-sm">
        INSTALLATION VIEWS
      </h2>
      <div className="flex flex-col items-center gap-16">
        {installationViews.map((view) => (
          <WorkImage key={view.src} image={view} />
        ))}
      </div>
    </section>
  );

  return (
    <main className="px-6 py-10 md:h-screen md:snap-y md:snap-proximity md:overflow-y-auto md:scroll-smooth md:px-16 md:py-16">
      <nav className="mb-10 text-xs text-neutral-400 md:mb-14" aria-label="이동 경로">
        <Link href="/baroque" className="hover:text-neutral-900">
          WORKS
        </Link>
        <span className="mx-1.5">→</span>
        <span className="text-neutral-600">{seriesTitleKo}</span>
      </nav>

      <div className="mb-14 md:mb-20">
        <WorkImage image={heroImage} priority hero />
      </div>

      <div className="mx-auto mb-20 max-w-xl text-center md:mb-28">
        <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">{seriesTitleKo}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          {period}
          {medium ? ` · ${medium}` : ''}
        </p>
        {intro && <p className="mt-4 text-sm leading-relaxed text-neutral-600">{intro}</p>}
      </div>

      {installationViewsPosition === 'top' && installationSection}

      {images && images.length > 0 && (
        <div className="flex flex-col items-center md:block">
          {images.map((img, i) => (
            <WorkSection key={img.src} snap={i < images.length - 1}>
              <WorkImage image={img} />
            </WorkSection>
          ))}
        </div>
      )}

      {installationViewsPosition === 'bottom' && installationSection}

      {nextWork && (
        <div className="mt-28 border-t border-neutral-200 pt-8 text-center md:mt-36">
          <Link
            href={nextWork.href}
            className="text-xs font-semibold tracking-wide text-neutral-500 hover:text-neutral-900"
          >
            NEXT WORK — {nextWork.titleKo} →
          </Link>
        </div>
      )}
    </main>
  );
}
