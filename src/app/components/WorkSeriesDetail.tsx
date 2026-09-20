import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type EditorialImage = {
  src: string;
  alt: string;
  orientation: 'landscape' | 'portrait' | 'square';
  caption?: string;
};

export type NextWork = { titleKo: string; href: string };

const WIDTH_CLASS: Record<'landscape' | 'portrait' | 'square', string> = {
  landscape: 'w-full md:w-[82%]',
  portrait: 'w-full sm:w-[62%] md:w-[46%]',
  square: 'w-full sm:w-[68%] md:w-[54%]',
};

function WorkImage({ image, priority }: { image: EditorialImage; priority?: boolean }) {
  return (
    <figure className={`mx-auto ${WIDTH_CLASS[image.orientation]}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={0}
        height={0}
        sizes="(max-width: 768px) 90vw, 60vw"
        priority={priority}
        className="block h-auto w-full"
      />
      {image.caption && (
        <figcaption className="mt-3 text-center text-xs text-neutral-400">
          {image.caption}
        </figcaption>
      )}
    </figure>
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
  nextWork,
}: {
  seriesTitleKo: string;
  period: string;
  medium?: string;
  intro?: ReactNode;
  heroImage: EditorialImage;
  images?: EditorialImage[];
  installationViews?: EditorialImage[];
  nextWork?: NextWork;
}) {
  return (
    <main className="px-6 py-10 md:px-16 md:py-16">
      <nav className="mb-10 text-xs text-neutral-400 md:mb-14" aria-label="이동 경로">
        <Link href="/works" className="hover:text-neutral-900">
          WORKS
        </Link>
        <span className="mx-1.5">→</span>
        <span className="text-neutral-600">{seriesTitleKo}</span>
      </nav>

      <div className="mb-14 md:mb-20">
        <WorkImage image={heroImage} priority />
      </div>

      <div className="mx-auto mb-20 max-w-xl text-center md:mb-28">
        <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">{seriesTitleKo}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          {period}
          {medium ? ` · ${medium}` : ''}
        </p>
        {intro && <p className="mt-4 text-sm leading-relaxed text-neutral-600">{intro}</p>}
      </div>

      {images && images.length > 0 && (
        <div className="flex flex-col items-center gap-24 md:gap-32">
          {images.map((img) => (
            <WorkImage key={img.src} image={img} />
          ))}
        </div>
      )}

      {installationViews && installationViews.length > 0 && (
        <section className="mt-28 md:mt-36">
          <h2 className="mb-10 text-center text-xs font-semibold text-neutral-500 md:text-sm">
            INSTALLATION VIEWS
          </h2>
          <div className="flex flex-col items-center gap-16">
            {installationViews.map((view) => (
              <div key={view.src} className="w-full sm:w-[85%] md:w-[70%]">
                <Image
                  src={view.src}
                  alt={view.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 90vw, 70vw"
                  className="block h-auto w-full"
                />
              </div>
            ))}
          </div>
        </section>
      )}

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
