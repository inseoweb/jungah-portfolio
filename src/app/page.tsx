'use client';

import Link from "next/link";

type Project = {
  title: string;
  href: `/${string}`;
  img: string;
};

export default function Home() {
  const projects: Project[] = [
    { title: "바로크 요정",        img: "/images/home/baroque.jpg",             href: "/baroque" },
    { title: "요정의 초상",        img: "/images/home/fairy-portrait.jpg",      href: "/portrait" },
    { title: "꽃보다 아름답다",    img: "/images/home/beautiful-than-flower.jpg", href: "/flower" },
    { title: "꽃꿈",               img: "/images/home/flower-dream.jpg",        href: "/flower-dream" },
    { title: "해양환경작품",       img: "/images/home/marine.jpg",              href: "/marine" },
    { title: "도시·숲 1990~1999", img: "/images/home/city-90.jpg",             href: "/1990-1999" },
    { title: "도시·숲 2000~2014", img: "/images/home/city-00.jpg",             href: "/2000-2014" },
    { title: "도시·숲 2015~",     img: "/images/home/city-15.jpg",             href: "/2015" },
  ];

  return (
    <main className="max-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center py-[0vh] m-0 p-0">
      <section className="w-full max-w-[95vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group border-b border-r border-black overflow-hidden"
          >
            {/* 이미지 */}
            <article className="flex h-full w-full">
              <div className="flex-1 bg-neutral-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="block w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </article>

            {/* 제목/화살표 박스 */}
            <div className="h-11 border-t border-black flex items-center justify-between px-3 bg-white">
              <span className="text-[15px] font-medium leading-none truncate max-w-[85%]">
                {p.title}
              </span>
              <span className="h-11 w-11 border-l border-black flex items-center justify-center relative">
              <span className="text-[20px] leading-none absolute top-[14px] left-[16px]">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </section>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
        }
        /* 데스크탑 높이: 두 줄이 전체화면 안에 안정적으로 들어오도록 */
        @media (min-width: 1024px) {
          .grid > a > article {
            height: 43vh; /* 여백 감안해서 줄임 */
          }
        }
        /* 태블릿 이하 */
        @media (max-width: 1023px) {
          .grid > a > article {
            height: 36vh;
          }
        }
      `}</style>
    </main>
  );
}
