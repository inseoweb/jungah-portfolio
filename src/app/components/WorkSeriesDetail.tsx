'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { loc, useLanguage, useLocalized, type Localized } from '../../lib/language';

export type EditorialImage = {
  src: string;
  alt: string | Localized;
  orientation: 'landscape' | 'portrait' | 'square';
  caption?: Localized;
  // Structured alternative to `caption`: renders closer to the image, at a
  // larger size, with the title in semibold — used where a page wants the
  // artwork name to read as its own line rather than a single quiet caption.
  captionTitle?: Localized;
  captionDetail?: Localized;
  // Longer-form explanatory text below the caption, styled like the page's
  // own intro paragraph rather than the (smaller, quieter) caption style —
  // used sparingly, e.g. a single installation-view image with its own
  // artwork description.
  description?: Localized<ReactNode>;
};

export type NextWork = { title: Localized; href: string };

export type AppendedSeries = {
  title: Localized;
  period: string;
  medium?: Localized;
  intro?: Localized<ReactNode>;
  images: EditorialImage[];
};

function WorkImage({ image, priority }: { image: EditorialImage; priority?: boolean }) {
  const caption = useLocalized(image.caption ?? loc(''));
  const captionTitle = useLocalized(image.captionTitle ?? loc(''));
  const captionDetail = useLocalized(image.captionDetail ?? loc(''));
  const description = useLocalized(image.description ?? loc<ReactNode>(null));
  const alt = useLocalized(typeof image.alt === 'string' ? loc(image.alt) : image.alt);
  // `fill` + object-contain scales every work up to the bounding box below,
  // regardless of the source file's own pixel dimensions — a plain
  // width/height="auto" image never renders larger than its natural size,
  // which is what made smaller-resolution (often square) exports look like
  // tiny thumbnails even though the box around them was plenty big. Every
  // image in the flow (former hero included) shares this one box, so the
  // page reads as one consistent series rather than one oversized "hero"
  // followed by smaller work images.
  return (
    <figure className="mx-auto flex w-full max-w-6xl flex-col items-center">
      <div className="relative h-[58vh] w-full md:h-[80vh]">
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 92vw, 70vw"
          priority={priority}
          className="object-contain"
        />
      </div>
      {(captionTitle || captionDetail) ? (
        <figcaption className="mt-1.5 text-center">
          {captionTitle && (
            <span className="block text-sm font-semibold text-neutral-700">{captionTitle}</span>
          )}
          {captionDetail && (
            <span className="mt-0.5 block text-sm text-neutral-400">{captionDetail}</span>
          )}
        </figcaption>
      ) : (
        caption && (
          <figcaption className="mt-3 text-center text-xs text-neutral-400">{caption}</figcaption>
        )
      )}
      {description != null && (
        <p className="mt-4 max-w-xl text-center text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
      )}
    </figure>
  );
}

// One work per (near-)full viewport on desktop, so the previous/next
// piece never bleeds into view while the current one is being looked
// at. Mobile ignores all of this and keeps normal document flow.
//
// `snap` is disabled on the first and last section in the flow. At the
// end, with scroll-snap active all the way through, proximity snapping
// keeps pulling the view back to center the final image, making it
// hard to scroll past it to reach NEXT WORK below. At the start, the
// very first section now sits right under the title/info block (the
// former hero is just this section's image), and proximity snapping
// was pulling the initial scroll position down onto it before the
// title was ever seen — same underlying issue, opposite end.
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

const UI = {
  works: loc('WORKS'),
  installationViews: loc('INSTALLATION VIEWS'),
  nextWork: loc('NEXT WORK'),
  breadcrumbLabel: loc('이동 경로', 'breadcrumb'),
};

export default function WorkSeriesDetail({
  seriesTitle,
  period,
  medium,
  intro,
  heroImage,
  images,
  installationViews,
  appendedSeries,
  nextWork,
}: {
  seriesTitle: Localized;
  period: string | Localized;
  medium?: Localized;
  intro?: Localized<ReactNode>;
  heroImage?: EditorialImage;
  images?: EditorialImage[];
  installationViews?: EditorialImage[];
  appendedSeries?: AppendedSeries;
  nextWork?: NextWork;
}) {
  const { lang } = useLanguage();
  const title = useLocalized(seriesTitle);
  const periodText = useLocalized(typeof period === 'string' ? loc(period) : period);
  const mediumText = useLocalized(medium ?? loc(''));
  const introNode = intro ? intro[lang] : null;
  const appendedTitle = useLocalized(appendedSeries?.title ?? loc(''));
  const appendedMediumText = useLocalized(appendedSeries?.medium ?? loc(''));
  const appendedIntroNode = appendedSeries?.intro ? appendedSeries.intro[lang] : null;

  // The series' hero image is no longer a separate block above the title —
  // it's simply the first work image in the flow: right after INSTALLATION
  // VIEWS if there are any, otherwise the very first thing after the
  // title/info block. It appears exactly once, never duplicated.
  const hasInstallationViews = !!installationViews && installationViews.length > 0;
  const mainImages = heroImage ? [heroImage, ...(images ?? [])] : (images ?? []);

  return (
    <main className="px-6 py-10 md:h-screen md:snap-y md:snap-proximity md:overflow-y-auto md:scroll-smooth md:px-16 md:py-16">
      <nav className="mb-10 text-xs text-neutral-400 md:mb-14" aria-label={UI.breadcrumbLabel[lang]}>
        <Link href="/baroque" className="hover:text-neutral-900">
          {UI.works[lang]}
        </Link>
        <span className="mx-1.5">→</span>
        <span className="text-neutral-600">{title}</span>
      </nav>

      <div className="mx-auto mb-20 max-w-xl text-center md:mb-28">
        <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">{title}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          {periodText}
          {mediumText ? ` · ${mediumText}` : ''}
        </p>
        {introNode && <p className="mt-4 text-sm leading-relaxed text-neutral-600">{introNode}</p>}
      </div>

      {hasInstallationViews && (
        <section className="mb-20 md:mb-28">
          <h2 className="mb-10 text-center text-xs font-semibold text-neutral-500 md:text-sm">
            {UI.installationViews[lang]}
          </h2>
          <div className="flex flex-col items-center gap-16">
            {installationViews!.map((view, i) => (
              <WorkImage key={view.src} image={view} priority={i === 0} />
            ))}
          </div>
        </section>
      )}

      {mainImages.length > 0 && (
        <div className="flex flex-col items-center md:block">
          {mainImages.map((img, i) => (
            <WorkSection
              key={img.src}
              snap={i > 0 && (i < mainImages.length - 1 || !!appendedSeries)}
            >
              <WorkImage image={img} priority={!hasInstallationViews && i === 0} />
            </WorkSection>
          ))}
        </div>
      )}

      {appendedSeries && (
        <>
          <div className="mx-auto mb-20 mt-28 max-w-xl text-center md:mb-28 md:mt-36">
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">{appendedTitle}</h2>
            <p className="mt-2 text-sm text-neutral-500">
              {appendedSeries.period}
              {appendedMediumText ? ` · ${appendedMediumText}` : ''}
            </p>
            {appendedIntroNode && (
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{appendedIntroNode}</p>
            )}
          </div>
          <div className="flex flex-col items-center md:block">
            {appendedSeries.images.map((img, i) => (
              <WorkSection key={img.src} snap={i < appendedSeries.images.length - 1}>
                <WorkImage image={img} />
              </WorkSection>
            ))}
          </div>
        </>
      )}

      {nextWork && (
        <div className="mt-28 border-t border-neutral-200 pt-8 text-center md:mt-36">
          <Link
            href={nextWork.href}
            className="text-xs font-semibold tracking-wide text-neutral-500 hover:text-neutral-900"
          >
            {UI.nextWork[lang]} — {nextWork.title[lang]} →
          </Link>
        </div>
      )}
    </main>
  );
}
