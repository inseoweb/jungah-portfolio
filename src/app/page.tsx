'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

type Project = {
  titleEn: string;
  titleKo: string;
  year: string;
  img: string;
  href: string;
};

const PROJECTS: Project[] = [
  { titleEn: 'Portrait of a Fairy', titleKo: '요정의 초상', year: '2025-', img: '/images/home/baroque.jpg', href: '/baroque' },
  { titleEn: 'Fairies', titleKo: '요정들', year: '2023-', img: '/images/home/fairy-portrait.jpg', href: '/fairy' },
  { titleEn: 'More Beautiful than Flowers', titleKo: '꽃보다 아름답다', year: '2003-', img: '/images/home/beautiful-than-flower.jpg', href: '/flower' },
  { titleEn: 'Flower Dream', titleKo: '꽃꿈', year: '2024-', img: '/images/home/flower-dream.jpg', href: '/dream' },
  { titleEn: 'Marine Environment', titleKo: '해양환경작품', year: '2011~', img: '/images/home/marine.jpg', href: '/marine' },
  { titleEn: 'City & Forest', titleKo: '도시·숲', year: '1990-1999', img: '/images/home/city-90.jpg', href: '/1990-1999' },
  { titleEn: 'City & Forest', titleKo: '도시·숲', year: '2000-2014', img: '/images/home/city-00.jpg', href: '/2000-2014' },
  { titleEn: 'City & Forest', titleKo: '도시·숲', year: '2015~', img: '/images/home/city-15.jpg', href: '/2015' },
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
    const id = setInterval(() => !paused && paginate(1), 2000);
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
      className="relative -mx-6 -mt-6 h-[38svh] md:h-[46vh] min-h-[280px] max-h-[480px] overflow-hidden bg-[#EDEAE3]"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <Image
            src={current.img}
            alt={current.titleKo}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-16">
        <div className="max-w-md">
          <p className="mb-3 text-xl md:text-2xl font-bold leading-snug text-neutral-900">
            관심 밖으로 밀려난
            <br />
            존재와 그 안에 남겨진
            <br />
            시간을 바라봅니다.
          </p>
          <p className="mb-4 text-xs md:text-sm text-neutral-600">
            I look at what remains after
            <br />
            attention has moved elsewhere.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-xs md:text-sm font-semibold tracking-widest text-neutral-900"
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
      <h2 className="mb-6 text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-500">
        PROJECTS
      </h2>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-6">
        {projects.map((project) => (
          <Link
            key={`${project.href}-${project.year}`}
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
              <p className="text-sm font-semibold text-neutral-900">{project.titleEn}</p>
              <p className="text-xs text-neutral-500">{project.titleKo}</p>
              <p className="text-xs text-neutral-400">{project.year}</p>
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
