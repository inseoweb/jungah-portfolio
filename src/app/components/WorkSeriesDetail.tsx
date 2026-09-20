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

export type WorkProject = {
  titleKo: string;
  caption?: string;
  images: EditorialImage[];
};

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

function ProjectGroup({ project }: { project: WorkProject }) {
  return (
    <div className="flex flex-col items-center gap-16 md:gap-20">
      {project.images.map((img, i) => (
        <div key={img.src} className="flex flex-col items-center">
          <WorkImage image={img} />
          {i === 0 && (
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-neutral-800">{project.titleKo}</p>
              {project.caption && (
                <p className="mt-1 text-xs text-neutral-400">{project.caption}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// One work per (near-)full viewport on desktop, so the previous/next
// piece never bleeds into view while the current one is being looked
// at. Mobile ignores all of this and keeps normal document flow.
function WorkSection({ children }: { children: ReactNode }) {
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
      className={`flex w-full flex-col items-center py-12 md:min-h-screen md:snap-center md:justify-center md:py-16 md:transition-all md:duration-700 md:ease-out ${
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
  projects,
  installationViews,
  nextWork,
}: {
  seriesTitleKo: string;
  period: string;
  medium?: string;
  intro?: ReactNode;
  heroImage: EditorialImage;
  images?: EditorialImage[];
  projects?: WorkProject[];
  installationViews?: EditorialImage[];
  nextWork?: NextWork;
}) {
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

      {images && images.length > 0 && (
        <div className="flex flex-col items-center md:block">
          {images.map((img) => (
            <WorkSection key={img.src}>
              <WorkImage image={img} />
            </WorkSection>
          ))}
        </div>
      )}

      {projects && projects.length > 0 && (
        <div className="flex flex-col items-center md:block">
          {projects.map((project) => (
            <WorkSection key={project.titleKo}>
              <ProjectGroup project={project} />
            </WorkSection>
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
              <WorkImage key={view.src} image={view} />
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
