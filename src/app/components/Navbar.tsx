'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

type NavItem = {
  label: string;
  href?: string;
  children?: { href: string; label: string }[];
};

const NAV_ITEMS: NavItem[] = [
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
      { href: '/critique-simeunlog', label: '심은록 평론' },
      { href: '/critique-shim', label: '심상용 평론' },
      { href: '/critique-jung', label: '정석도 평론' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 980);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) setIsOpen(false);
    setHoveredIndex(null);
  }, [pathname, isMobile]);

  const closeMenu = () => setIsOpen(false);

  const groupedHoverIndexes = useMemo(
    () => NAV_ITEMS.map((it, idx) => (it.children ? idx : -1)).filter((i) => i >= 0),
    []
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
          <Link href="/" className="font-bold text-lg xl:text-xl whitespace-nowrap">
            JungAh
          </Link>

          {!isMobile && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-start gap-[40px] xl:gap-[64px] text-[16px] xl:text-[18px] font-semibold">
              {NAV_ITEMS.map((item, idx) => (
                <NavGroup
                  key={item.label}
                  label={item.label}
                  subItems={item.children}
                  href={item.href}
                  index={idx}
                  setHoveredIndex={setHoveredIndex}
                  showGrouped={
                    groupedHoverIndexes.includes(hoveredIndex ?? -1) &&
                    groupedHoverIndexes.includes(idx)
                  }
                />
              ))}
            </div>
          )}

          {isMobile && (
            <button className="text-2xl pr-2" onClick={() => setIsOpen(!isOpen)} aria-label="메뉴 열기">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          )}
        </div>
      </nav>

      {isMobile && isOpen && (
        <div className="px-6 pt-4 pb-8 bg-white border-b text-lg font-medium text-left flex flex-col gap-4">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <MobileGroup
                key={item.label}
                label={item.label}
                items={item.children}
                onNavigate={closeMenu}
              />
            ) : (
              <SingleMobileLink key={item.label} href={item.href!} onNavigate={closeMenu}>
                {item.label}
              </SingleMobileLink>
            )
          )}
        </div>
      )}
    </>
  );
}

function NavGroup({
  label,
  subItems,
  href,
  index,
  setHoveredIndex,
  showGrouped,
}: {
  label: string;
  subItems?: { href: string; label: string }[];
  href?: string;
  index: number;
  setHoveredIndex: (index: number | null) => void;
  showGrouped: boolean;
}) {
  const hasChildren = !!subItems;

  return (
    <div
      className="relative flex flex-col items-center justify-center h-[64px]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {href ? (
        <Link
          href={href}
          className="flex items-center h-full cursor-pointer hover:text-black whitespace-nowrap"
        >
          {label}
        </Link>
      ) : (
        <span className="flex items-center h-full cursor-pointer hover:text-black whitespace-nowrap">
          {label}
        </span>
      )}

      {hasChildren && (
        <div
          className={`absolute top-[50px] flex flex-col items-center text-[12px] xl:text-sm font-normal text-[#4B5563] space-y-1 bg-white z-40 whitespace-nowrap w-max transition-all duration-300 ${
            showGrouped
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          {subItems!.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="font-semibold">{label}</span>
      <div className="pl-4 flex flex-col space-y-2 text-base text-[#4B5563]">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="hover:underline" onClick={onNavigate}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SingleMobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-lg font-semibold text-black hover:text-black hover:underline pl-0"
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}
