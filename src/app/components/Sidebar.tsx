'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { loc, NEEDS_TRANSLATION, useLanguage, useLocalized, type Localized } from '../../lib/language';
import { WORKS_SERIES } from '../../lib/works-data';

type SubItem = { href: string; label: Localized };
type NavItem = { label: Localized; href?: string; children?: SubItem[] };

const NAV_ITEMS: NavItem[] = [
  { label: loc('HOME'), href: '/' },
  {
    label: loc('WORKS'),
    href: '/baroque',
    children: [
      ...WORKS_SERIES.map((s) => ({ href: s.href, label: s.title })),
      { href: '/photos', label: loc('활동사진', NEEDS_TRANSLATION) },
    ],
  },
  { label: loc('EXHIBITIONS'), href: '/exhibitions' },
  { label: loc('ABOUT'), href: '/artist' },
  {
    label: loc('TEXTS'),
    children: [
      { href: '/critique-simeunlog', label: loc('심은록 평론', NEEDS_TRANSLATION) },
      { href: '/critique-shim', label: loc('심상용 평론', NEEDS_TRANSLATION) },
      { href: '/critique-jung', label: loc('정석도 평론', NEEDS_TRANSLATION) },
    ],
  },
  { label: loc('RESEARCH & PRACTICE'), href: '/research-practice' },
  { label: loc('CV'), href: '/artist' },
  { label: loc('CONTACT'), href: '/contact' },
];

const INTRO = loc(
  '관심 밖으로 밀려난 존재와 그 안에 남겨진 시간을 바라봅니다.',
  NEEDS_TRANSLATION,
);

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const intro = useLocalized(INTRO);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const active = NAV_ITEMS.find((item) => item.children?.some((c) => c.href === pathname));
    setOpenGroup(active ? active.label.ko : null);
  }, [pathname]);

  const toggleGroup = (key: string) => setOpenGroup((cur) => (cur === key ? null : key));

  return (
    <>
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:w-[260px] md:flex-col md:overflow-y-auto md:border-r md:border-neutral-200 md:px-8 md:pb-10 md:pt-20">
        <Link href="/" className="block">
          <span className="block text-lg font-bold tracking-tight text-neutral-900">JUNG AH KIM</span>
          <span className="block text-[15px] text-neutral-500">김정아</span>
        </Link>
        <p className="mt-4 text-[13px] leading-relaxed text-neutral-400">{intro}</p>

        <nav className="mt-10">
          <ul className="space-y-1.5 text-base">
            {NAV_ITEMS.map((item) => (
              <SidebarItem
                key={item.label.ko}
                item={item}
                pathname={pathname}
                isOpen={openGroup === item.label.ko}
                onToggle={() => toggleGroup(item.label.ko)}
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
          <p className="mb-6 text-xs leading-relaxed text-neutral-400">{intro}</p>
          <nav>
            <ul className="space-y-1 text-sm">
              {NAV_ITEMS.map((item) => (
                <SidebarItem
                  key={item.label.ko}
                  item={item}
                  pathname={pathname}
                  isOpen={openGroup === item.label.ko}
                  onToggle={() => toggleGroup(item.label.ko)}
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
  const { lang } = useLanguage();
  const isActive =
    item.href === pathname || (item.children?.some((c) => c.href === pathname) ?? false);
  const label = item.label[lang];

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
          {label}
        </Link>
      </li>
    );
  }

  const labelClassName = `tracking-wide ${
    isActive ? 'font-semibold text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
  }`;

  return (
    <li>
      <div className="flex w-full items-center justify-between py-1">
        {item.href ? (
          <Link href={item.href} onClick={onNavigate} className={labelClassName}>
            {label}
          </Link>
        ) : (
          <button onClick={onToggle} aria-expanded={isOpen} className={`text-left ${labelClassName}`}>
            {label}
          </button>
        )}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`${label} 하위 메뉴 ${isOpen ? '접기' : '펼치기'}`}
          className="p-1 text-neutral-400 hover:text-neutral-900"
        >
          <HiChevronDown
            className={`shrink-0 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
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
                {c.label[lang]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`items-center gap-1 text-xs text-neutral-500 ${className}`}>
      <button
        onClick={() => setLang('ko')}
        className={lang === 'ko' ? 'font-semibold text-neutral-900' : 'hover:text-neutral-900'}
      >
        KR
      </button>
      <span aria-hidden>|</span>
      <button
        onClick={() => setLang('en')}
        className={lang === 'en' ? 'font-semibold text-neutral-900' : 'hover:text-neutral-900'}
      >
        EN
      </button>
    </div>
  );
}
