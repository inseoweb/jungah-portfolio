import Image from 'next/image';
import Link from 'next/link';

export type EditorialImage = {
  src: string;
  alt: string;
  size?: 'lg' | 'md' | 'sm';
  caption?: string;
};

export type NextWork = { titleKo: string; href: string };

const SIZE_CLASS: Record<'lg' | 'md' | 'sm', string> = {
  lg: 'w-full sm:w-[72%] md:w-[58%]',
  md: 'w-full sm:w-[48%] md:w-[38%]',
  sm: 'w-full sm:w-[32%] md:w-[26%]',
};

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
  intro?: string;
  heroImage: EditorialImage;
  images: EditorialImage[];
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

      <div className="mb-14 flex justify-center md:mb-20">
        <div className={SIZE_CLASS.lg}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={0}
            height={0}
            sizes="(max-width: 768px) 90vw, 60vw"
            priority
            className="block h-auto w-full"
          />
          {heroImage.caption && (
            <p className="mt-3 text-center text-xs text-neutral-400">{heroImage.caption}</p>
          )}
        </div>
      </div>

      <div className="mx-auto mb-16 max-w-xl text-center md:mb-24">
        <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">{seriesTitleKo}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          {period}
          {medium ? ` · ${medium}` : ''}
        </p>
        {intro && <p className="mt-4 text-sm leading-relaxed text-neutral-600">{intro}</p>}
      </div>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-16 md:gap-x-14 md:gap-y-20">
        {images.map((img) => (
          <figure key={img.src} className={SIZE_CLASS[img.size ?? 'md']}>
            <Image
              src={img.src}
              alt={img.alt}
              width={0}
              height={0}
              sizes="(max-width: 768px) 90vw, 40vw"
              className="block h-auto w-full"
            />
            {img.caption && (
              <figcaption className="mt-3 text-center text-xs text-neutral-400">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {installationViews && installationViews.length > 0 && (
        <section className="mt-28 md:mt-36">
          <h2 className="mb-10 text-center text-xs font-semibold text-neutral-500 md:text-sm">
            INSTALLATION VIEWS
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-14">
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
