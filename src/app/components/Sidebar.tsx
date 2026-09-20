'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

type SubItem = { href: string; label: string };
type NavItem = { label: string; href?: string; children?: SubItem[] };

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'WORKS',
    children: [
      { href: '/baroque', label: '요정의 초상' },
      { href: '/fairy', label: '요정들' },
      { href: '/flower', label: '꽃보다 아름답다' },
      { href: '/dream', label: '꽃꿈' },
      { href: '/marine', label: '해양환경작품' },
      { href: '/2015', label: '도시·숲 2015~' },
      { href: '/2000-2014', label: '도시·숲 2000~2014' },
      { href: '/1990-1999', label: '도시·숲 1990~1999' },
      { href: '/photos', label: '활동사진' },
    ],
  },
  { label: 'EXHIBITIONS', href: '/exhibitions' },
  { label: 'ABOUT', href: '/artist' },
  {
    label: 'TEXTS',
    children: [
      { href: '/critique-simeunlog', label: '심은록 평론' },
      { href: '/critique-shim', label: '심상용 평론' },
      { href: '/critique-jung', label: '정석도 평론' },
    ],
  },
  { label: 'RESEARCH & PRACTICE', href: '/research-practice' },
  { label: 'CV', href: '/artist' },
  { label: 'CONTACT', href: '/contact' },
];

const INTRO = '관심 밖으로 밀려난 존재와 그 안에 남겨진 시간을 바라봅니다.';

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const active = NAV_ITEMS.find((item) => item.children?.some((c) => c.href === pathname));
    setOpenGroup(active ? active.label : null);
  }, [pathname]);

  const toggleGroup = (label: string) =>
    setOpenGroup((cur) => (cur === label ? null : label));

  return (
    <>
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:w-[260px] md:flex-col md:overflow-y-auto md:border-r md:border-neutral-200 md:px-8 md:py-10">
        <Link href="/" className="block">
          <span className="block text-lg font-bold tracking-tight text-neutral-900">JUNG AH KIM</span>
          <span className="block text-sm text-neutral-500">김정아</span>
        </Link>
        <p className="mt-4 text-xs leading-relaxed text-neutral-400">{INTRO}</p>

        <nav className="mt-10">
          <ul className="space-y-1 text-sm">
            {NAV_ITEMS.map((item) => (
              <SidebarItem
                key={item.label}
                item={item}
                pathname={pathname}
                isOpen={openGroup === item.label}
                onToggle={() => toggleGroup(item.label)}
              />
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 md:hidden">
        <Link href="/" className="block">
          <span className="block text-base font-bold tracking-tight text-neutral-900">JUNG AH KIM</span>
          <span className="block text-xs text-neutral-500">김정아</span>
        </Link>
        <div className="flex items-center gap-4">
          <LangToggle className="flex" />
          <button
            className="text-2xl text-neutral-900"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-b border-neutral-200 px-6 pb-8 pt-2 md:hidden">
          <p className="mb-6 text-xs leading-relaxed text-neutral-400">{INTRO}</p>
          <nav>
            <ul className="space-y-1 text-sm">
              {NAV_ITEMS.map((item) => (
                <SidebarItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  isOpen={openGroup === item.label}
                  onToggle={() => toggleGroup(item.label)}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </ul>
          </nav>
        </div>
      )}

      <LangToggle className="fixed right-8 top-8 z-50 hidden md:flex" />
    </>
  );
}

function SidebarItem({
  item,
  pathname,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
}) {
  const isActive =
    item.href === pathname || (item.children?.some((c) => c.href === pathname) ?? false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href!}
          onClick={onNavigate}
          className={`block py-1 tracking-wide ${
            isActive ? 'font-semibold text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between py-1 text-left tracking-wide ${
          isActive ? 'font-semibold text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
        }`}
      >
        {item.label}
        <HiChevronDown
          className={`ml-2 shrink-0 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <ul className="mb-2 mt-1 space-y-1 border-l border-neutral-200 pl-3 text-[13px] text-neutral-500">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={onNavigate}
                className={`block py-0.5 ${
                  pathname === c.href ? 'font-medium text-neutral-900' : 'hover:text-neutral-900'
                }`}
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function LangToggle({ className = '' }: { className?: string }) {
  const [lang, setLang] = useState<'KR' | 'EN'>('KR');
  return (
    <div className={`items-center gap-1 text-xs text-neutral-500 ${className}`}>
      <button
        onClick={() => setLang('KR')}
        className={lang === 'KR' ? 'font-semibold text-neutral-900' : 'hover:text-neutral-900'}
      >
        KR
      </button>
      <span aria-hidden>|</span>
      <button
        onClick={() => setLang('EN')}
        className={lang === 'EN' ? 'font-semibold text-neutral-900' : 'hover:text-neutral-900'}
      >
        EN
      </button>
    </div>
  );
}
