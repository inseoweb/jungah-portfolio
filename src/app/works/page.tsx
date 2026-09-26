'use client';

import Image from 'next/image';
import Link from 'next/link';
import { loc, useLocalized, type Localized } from '../../lib/language';
import { WORKS_SERIES } from '../../lib/works-data';

type WorkTileData = {
  title: Localized;
  period: string;
  img?: string;
  href?: string;
};

const WORK_TILES: WorkTileData[] = [
  ...WORKS_SERIES.filter((s) => s.slug !== '2000-2014' && s.slug !== '1990-1999').map((s) => ({
    title: s.title,
    period: s.period,
    href: s.href,
    img:
      s.slug === 'baroque'
        ? '/images/home/daepyo.jpeg'
        : s.slug === 'fairy'
          ? '/images/home/fairy-portrait.jpg'
          : s.slug === 'disposable'
            ? '/images/posters/0.jpg'
            : s.slug === 'flower'
              ? '/images/home/beautiful-than-flower.jpg'
              : s.slug === 'dream'
                ? '/images/home/flower-dream.jpg'
                : s.slug === 'blue-alley'
                  ? '/images/critique-jung/7.jpg'
                  : s.slug === 'marine'
                    ? '/images/home/marine.jpg'
                    : undefined,
  })),
  { title: loc('WHO WANTS TO LIVE FOREVER?', 'WHO WANTS TO LIVE FOREVER?'), period: '2022–ongoing' },
];

export default function WorksPage() {
  return (
    <main className="px-6 py-10 md:px-16 md:py-16">
      <h1 className="mb-10 text-xs md:text-sm font-semibold text-neutral-500">WORKS</h1>

      <div className="columns-2 gap-x-6 md:columns-3 md:gap-x-8">
        {WORK_TILES.map((tile) => (
          <WorkTile key={tile.title.ko} tile={tile} />
        ))}
      </div>
    </main>
  );
}

function WorkTile({ tile }: { tile: WorkTileData }) {
  const title = useLocalized(tile.title);
  const imagePlaceholder = useLocalized(loc('이미지 준비 중', 'Image coming soon'));

  const content = (
    <>
      {tile.img ? (
        <div className="overflow-hidden bg-neutral-100">
          <Image
            src={tile.img}
            alt={tile.title.ko}
            width={0}
            height={0}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-neutral-50 text-xs text-neutral-300">
          {imagePlaceholder}
        </div>
      )}
      <div className="mt-3">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <p className="text-xs text-neutral-500">{tile.period}</p>
      </div>
    </>
  );

  if (tile.href) {
    return (
      <Link href={tile.href} className="group mb-8 block break-inside-avoid md:mb-10">
        {content}
      </Link>
    );
  }

  return <div className="mb-8 block break-inside-avoid md:mb-10">{content}</div>;
}
