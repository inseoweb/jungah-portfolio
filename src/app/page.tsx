"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Slide = { img: string; title: string; href?: string };

function HomeCarousel({
  slides = [],
  autoPlay = true,
  autoPlayMs = 5000,
}: {
  slides?: Slide[];
  autoPlay?: boolean;
  autoPlayMs?: number;
}) {
  const [[index, direction], setIndex] = useState<[number, 1 | -1]>([0, 1]);
  const total = Array.isArray(slides) ? slides.length : 0;
  const containerRef = useRef<HTMLDivElement>(null);
  if (total === 0) return null;

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const wrap = (i: number) => (i % total + total) % total;
  const paginate = (dir: 1 | -1) => setIndex(([i]) => [wrap(i + dir), dir]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      else if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!autoPlay || prefersReducedMotion) return;
    const el = containerRef.current;
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);
    el?.addEventListener("focusin", onEnter);
    el?.addEventListener("focusout", onLeave);
    const id = setInterval(() => !paused && paginate(1), autoPlayMs);
    return () => {
      clearInterval(id);
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
      el?.removeEventListener("focusin", onEnter);
      el?.removeEventListener("focusout", onLeave);
    };
  }, [autoPlay, autoPlayMs, prefersReducedMotion]);

  const variants = {
    enter: (dir: 1 | -1) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: 1 | -1) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 1 }),
  } as const;

  const dragProps = {
    drag: "x" as const,
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.8,
    onDragEnd: (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
      const swipePower = Math.abs(info.offset.x) * info.velocity.x;
      if (swipePower < -500) paginate(1);
      else if (swipePower > 500) paginate(-1);
    },
  };

  // ✅ 바로크 요정 배경 처리
  const currentTitle = slides[index]?.title;
  const isBaroque = currentTitle === "바로크 요정";
  const backgroundColor = isBaroque ? "#EBE8DF" : "#FFFFFF";

  return (
    <section
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="Featured works"
      className="relative w-full h-[78vh] min-h-[520px] max-h-[920px] overflow-hidden transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.figure
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", ease: "easeInOut", duration: 0.55 }}
          {...dragProps}
        >
          {slides[index]?.href ? (
            <a href={slides[index].href!} aria-label={slides[index].title}>
              <SlideImage slide={slides[index]} />
            </a>
          ) : (
            <SlideImage slide={slides[index]} />
          )}

          <figcaption className="absolute bottom-6 right-6 rounded-md bg-white/70 px-3 py-1.5 text-[13px] font-medium text-neutral-800 shadow-sm">
            {slides[index].title}
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-neutral-700/70 hover:text-neutral-900 focus:outline-none"
        aria-label="이전 작품"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-neutral-700/70 hover:text-neutral-900 focus:outline-none"
        aria-label="다음 작품"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={28} />
      </button>

      <nav className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ol className="flex gap-1.5" aria-label="슬라이드 인디케이터">
          {slides.map((_, i) => (
            <li key={i}>
              <button
                aria-label={`${i + 1}번 슬라이드로 이동`}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-neutral-800" : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
              />
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

function SlideImage({ slide }: { slide: Slide }) {
  return (
    <div className="relative mx-auto max-h-[39vh] w-[45vw] md:w-[33vw] select-none">
      <div className="relative mx-auto w-full" style={{ aspectRatio: "4/3" }}>
        <Image
          src={slide.img}
          alt={slide.title}
          fill
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 66vw, 60vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function ChevronLeft({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Page() {
  const slides: Slide[] = [
    { title: "바로크 요정", img: "/images/home/baroque.jpg", href: "/baroque" },
    { title: "요정의 초상", img: "/images/home/fairy-portrait.jpg", href: "/portrait" },
    { title: "꽃보다 아름답다", img: "/images/home/beautiful-than-flower.jpg", href: "/flower" },
    { title: "꽃꿈", img: "/images/home/flower-dream.jpg", href: "/dream" },
    { title: "해양환경작품", img: "/images/home/marine.jpg", href: "/marine" },
    { title: "도시·숲 1990~1999", img: "/images/home/city-90.jpg", href: "/1990-1999" },
    { title: "도시·숲 2000~2014", img: "/images/home/city-00.jpg", href: "/2000-2014" },
    { title: "도시·숲 2015~", img: "/images/home/city-15.jpg", href: "/2015" },
  ];

  return (
    <main className="min-h-screen">
      <HomeCarousel slides={slides} autoPlay autoPlayMs={5000} />
    </main>
  );
}
