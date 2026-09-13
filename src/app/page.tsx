'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  titleKo: string;
  year: string;
  category: string;
  img: string;
  href: string;
};

const PROJECTS: Project[] = [
  { titleKo: '요정의 초상', year: '2025-', category: '요정', img: '/images/home/daepyo.jpeg', href: '/baroque' },
  { titleKo: '컵 (일화용컵 도자기로 만들기)', year: '1999', category: '도시·숲', img: '/images/1990/21.jpeg', href: '/1990-1999' },
  { titleKo: '꽃보다 아름답다', year: '2003-', category: '요정', img: '/images/home/beautiful-than-flower.jpg', href: '/flower' },
  { titleKo: '꽃꿈', year: '2024-', category: '요정', img: '/images/home/flower-dream.jpg', href: '/dream' },
  { titleKo: '신림동', year: '2021', category: '해양환경작품', img: '/images/marine/6.jpg', href: '/marine' },
  { titleKo: '소리없는', year: '1999', category: '도시·숲', img: '/images/1990/1.jpeg', href: '/1990-1999' },
  { titleKo: '꿈과 이제 오후', year: '2013', category: '도시·숲', img: '/images/2000/6.jpg', href: '/2000-2014' },
  { titleKo: '밤의 숲', year: '2020', category: '도시·숲', img: '/images/2015/forest-night.png', href: '/2015' },
];

function Hero({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const paginate = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => ((i + dir) % total + total) % total);
    },
    [total]
  );

  useEffect(() => {
    const el = containerRef.current;
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el?.addEventListener('mouseenter', onEnter);
    el?.addEventListener('mouseleave', onLeave);
    const id = setInterval(() => !paused && paginate(1), 4000);
    return () => {
      clearInterval(id);
      el?.removeEventListener('mouseenter', onEnter);
      el?.removeEventListener('mouseleave', onLeave);
    };
  }, [paginate]);

  const current = projects[index];

  return (
    <section
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="작가 소개"
      className="relative -mx-6 -mt-6 h-[44svh] md:h-[52vh] min-h-[320px] max-h-[540px] overflow-hidden bg-white"
    >
      <Link
        href={current.href}
        aria-label={`${current.titleKo} 작품 보기`}
        className="group absolute inset-0 block"
      >
        {projects.map((project, i) => (
          <Image
            key={project.img}
            src={project.img}
            alt={project.titleKo}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-contain transition-[opacity,transform] duration-[900ms] ease-in-out group-hover:scale-[1.02] ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </Link>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/85 via-white/35 to-transparent" />

      <div className="pointer-events-none relative z-10 flex h-full items-center px-6 md:px-16">
        <div className="max-w-md">
          <p className="mb-4 text-xl md:text-2xl font-bold leading-snug text-[#282828]">
            관심 밖으로 밀려난
            <br />
            존재와 그 안에 남겨진
            <br />
            시간을 바라봅니다.
          </p>
          <a
            href="#projects"
            className="pointer-events-auto inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-xs md:text-sm font-semibold tracking-widest text-neutral-900"
          >
            VIEW WORKS
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <nav className="absolute right-4 top-1/2 z-10 -translate-y-1/2 md:right-8">
        <ol className="flex flex-col gap-2" aria-label="배경 이미지 인디케이터">
          {projects.map((_, i) => (
            <li key={i}>
              <button
                aria-label={`${i + 1}번 이미지로 이동`}
                onClick={() => setIndex(i)}
                className={`block h-2 w-2 rounded-full transition ${
                  i === index ? 'bg-neutral-900' : 'bg-neutral-400/60 hover:bg-neutral-600'
                }`}
              />
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-0 py-10 md:py-14">
      <h2 className="mb-6 text-xs md:text-sm font-semibold text-neutral-500">
        PROJECTS
      </h2>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-6">
        {projects.map((project) => (
          <Link
            key={project.img}
            href={project.href}
            className="group block w-[42vw] shrink-0 snap-start sm:w-[200px]"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
              <Image
                src={project.img}
                alt={project.titleKo}
                fill
                sizes="(max-width: 640px) 42vw, 200px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 space-y-0.5">
              <p className="text-sm font-semibold text-neutral-900">{project.titleKo}</p>
              <p className="text-xs text-neutral-500">{project.year}</p>
              <p className="text-xs text-neutral-400">{project.category}</p>
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
      <Hero projects={PROJECTS} />
      <ProjectsSection projects={PROJECTS} />
    </main>
  );
}
