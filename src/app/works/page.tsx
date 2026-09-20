import Image from 'next/image';
import Link from 'next/link';

type WorkSeries = {
  titleKo: string;
  period: string;
  img?: string;
  href?: string;
};

const WORK_SERIES: WorkSeries[] = [
  { titleKo: '요정의 초상', period: '2025-', img: '/images/home/daepyo.jpeg', href: '/baroque' },
  { titleKo: '작은 사물의 일기', period: '2023-', img: '/images/home/fairy-portrait.jpg', href: '/fairy' },
  { titleKo: '영원을 꿈꾸는 일회용', period: '2025-', img: '/images/posters/0.jpg', href: '/exhibitions' },
  { titleKo: '꽃보다 아름답다', period: '2003-', img: '/images/home/beautiful-than-flower.jpg', href: '/flower' },
  { titleKo: '꽃꿈', period: '2024-', img: '/images/home/flower-dream.jpg', href: '/dream' },
  { titleKo: '푸른 골목의 안쪽', period: '2021-' },
  { titleKo: '해양/해양폐기물 관련 장기 작업군', period: '2011~', img: '/images/home/marine.jpg', href: '/marine' },
  { titleKo: 'WHO WANTS TO LIVE FOREVER?', period: '2022–ongoing' },
];

export default function WorksPage() {
  return (
    <main className="px-6 py-10 md:px-16 md:py-16">
      <h1 className="mb-10 text-xs md:text-sm font-semibold text-neutral-500">WORKS</h1>

      <div className="columns-2 gap-x-6 md:columns-3 md:gap-x-8">
        {WORK_SERIES.map((series) => (
          <WorkTile key={series.titleKo} series={series} />
        ))}
      </div>
    </main>
  );
}

function WorkTile({ series }: { series: WorkSeries }) {
  const content = (
    <>
      {series.img ? (
        <div className="overflow-hidden bg-neutral-100">
          <Image
            src={series.img}
            alt={series.titleKo}
            width={0}
            height={0}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-neutral-50 text-xs text-neutral-300">
          이미지 준비 중
        </div>
      )}
      <div className="mt-3">
        <p className="text-sm font-semibold text-neutral-900">{series.titleKo}</p>
        <p className="text-xs text-neutral-500">{series.period}</p>
      </div>
    </>
  );

  if (series.href) {
    return (
      <Link href={series.href} className="group mb-8 block break-inside-avoid md:mb-10">
        {content}
      </Link>
    );
  }

  return <div className="mb-8 block break-inside-avoid md:mb-10">{content}</div>;
}
