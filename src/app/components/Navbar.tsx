'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 980);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ 김정아를 클러스터 맨 왼쪽으로
  const navItems = [
    { label: '김정아', href: '/artist' },
    {
      label: '요정',
      children: [
        { href: '/baroque', label: '요정의 초상' },
        { href: '/fairy', label: '요정들' },
        { href: '/flower', label: '꽃보다 아름답다' },
        { href: '/dream', label: '꽃꿈' },
      ],
    },
    {
      label: '도시•숲',
      children: [
        { href: '/2015', label: '2015~' },
        { href: '/2000-2014', label: '2000~2014' },
        { href: '/1990-1999', label: '1990~1999' },
      ],
    },
    { label: '해양환경작품', href: '/marine' },
    { label: '전시', href: '/exhibitions' },
    { label: '활동사진', href: '/photos' },
    {
      label: '평론',
      children: [
        { href: '/critique-shim', label: '심상용 평론' },
        { href: '/critique-jung', label: '정석도 평론' },
      ],
    },
  ];

  // ✅ 드롭다운 그룹을 자동 계산(자식이 있는 항목들만)
  const groupedHoverIndexes = useMemo(
    () => navItems.map((it, idx) => (it.children ? idx : -1)).filter(i => i >= 0),
    [navItems]
  );
  const hasHoveredItem =
    hoveredIndex !== null && groupedHoverIndexes.includes(hoveredIndex);

  return (
    <>
      <nav
        className={`px-6 bg-white border-b relative z-50 transition-all duration-300 min-h-[64px] ${
          hasHoveredItem ? 'pb-[96px]' : ''
        }`}
      >
        <div className="relative flex items-center justify-between h-[64px]">
          {/* 로고(왼쪽 고정) */}
          <Link href="/" className="text-xl font-bold">JungAh</Link>

          {/* 가운데 클러스터 */}
          {!isMobile && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-start gap-[64px] text-[18px] font-semibold">
              {navItems.map((item, idx) => (
                <NavGroup
                  key={item.label}
                  label={item.label}
                  children={item.children}
                  href={item.href}
                  index={idx}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  showGrouped={
                    groupedHoverIndexes.includes(hoveredIndex ?? -1) &&
                    groupedHoverIndexes.includes(idx)
                  }
                />
              ))}
            </div>
          )}

          {/* 모바일 햄버거 */}
          {isMobile && (
            <button className="text-2xl pr-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          )}
        </div>
      </nav>

      {/* 모바일 메뉴: 가운데 클러스터와 같은 순서로 표시(김정아 맨 위) */}
      {isMobile && isOpen && (
        <div className="px-6 pt-4 pb-8 bg-white border-b text-base font-medium text-left flex flex-col gap-6">
          <SingleMobileLink href="/artist">김정아</SingleMobileLink>

          <MobileGroup
            label="요정"
            items={[
              { href: '/baroque', label: '요정의 초상' },
              { href: '/fairy', label: '요정들' },
              { href: '/flower', label: '꽃보다 아름답다' },
              { href: '/dream', label: '꽃꿈' },
            ]}
          />
          <MobileGroup
            label="도시•숲"
            items={[
              { href: '/2015', label: '2015~' },
              { href: '/2000-2014', label: '2000~2014' },
              { href: '/1990-1999', label: '1990~1999' },
            ]}
          />
          <SingleMobileLink href="/marine">해양환경작품</SingleMobileLink>
          <SingleMobileLink href="/exhibitions">전시</SingleMobileLink>
          <SingleMobileLink href="/photos">활동사진</SingleMobileLink>
          <MobileGroup
            label="평론"
            items={[
              { href: '/critique-shim', label: '심상용 평론' },
              { href: '/critique-jung', label: '정석도 평론' },
            ]}
          />
        </div>
      )}
    </>
  );
}

function NavGroup({
  label,
  children,
  href,
  index,
  hoveredIndex,
  setHoveredIndex,
  showGrouped,
}: {
  label: string;
  children?: { href: string; label: string }[];
  href?: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  showGrouped: boolean;
}) {
  const hasChildren = !!children;
  return (
    <div
      className="relative flex flex-col items-center justify-center h-[64px]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {href ? (
        <Link href={href} className="flex items-center h-full hover:text-black cursor-pointer">
          {label}
        </Link>
      ) : (
        <span className="flex items-center h-full hover:text-black cursor-pointer">
          {label}
        </span>
      )}

      {hasChildren && showGrouped && (
        <div className="absolute top-[50px] flex flex-col items-center text-sm font-normal text-[#4B5563] space-y-1 bg-white z-40 whitespace-nowrap w-max">
          {children!.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileGroup({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="font-semibold">{label}</span>
      <div className="pl-4 flex flex-col space-y-2 text-sm text-[#4B5563]">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="hover:underline">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SingleMobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-base font-semibold text-black hover:text-black hover:underline pl-0">
      {children}
    </Link>
  );
}
