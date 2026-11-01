'use client';

import Image from 'next/image';
import { loc, NEEDS_TRANSLATION, useLocalized, type Localized } from '../../lib/language';

type Exhibition = {
  dateRange: Localized;
  awardNote: Localized;
  title: Localized;
  venue: Localized;
  address: Localized;
  posterSrc: string;
  description?: Localized;
};

const EXHIBITIONS: Exhibition[] = [
  {
    dateRange: loc('2025. 11. 11(화) - 11. 25(화)', NEEDS_TRANSLATION),
    awardNote: loc('김정아 개인전: 제10회 메디치상 수상 기념전', NEEDS_TRANSLATION),
    title: loc('영원을 꿈꾸는 일회용', NEEDS_TRANSLATION),
    venue: loc('학고재 아트센터', NEEDS_TRANSLATION),
    address: loc('서울특별시 종로구 삼청로 48-4', NEEDS_TRANSLATION),
    posterSrc: '/images/posters/0.jpg',
  },
  {
    dateRange: loc('2025. 8. 23(토) - 9. 27(토)', NEEDS_TRANSLATION),
    awardNote: loc('김정아 개인전', NEEDS_TRANSLATION),
    title: loc('꽃보다 아름답다- 남겨진 것들의 미학', NEEDS_TRANSLATION),
    venue: loc('아트살롱 드 아씨', NEEDS_TRANSLATION),
    address: loc('서울시 영등포구 국제금융로8길16 신영증권BD B128호', NEEDS_TRANSLATION),
    posterSrc: '/images/posters/2.png',
    description: loc(
      '나는 화려한 이면에 숨겨진 자화상을 통해\n‘진정한 아름다움’이 무엇인지 질문을 던지고자 한다.',
      NEEDS_TRANSLATION,
    ),
  },
  {
    dateRange: loc('2025. 6. 19(목) - 7. 15(화)', NEEDS_TRANSLATION),
    awardNote: loc('김정아 개인전', NEEDS_TRANSLATION),
    title: loc('한걸음 다가서면 바꿀 수 있어요', NEEDS_TRANSLATION),
    venue: loc('두손갤러리', NEEDS_TRANSLATION),
    address: loc('서울 중구 덕수궁길 130, 1F', NEEDS_TRANSLATION),
    posterSrc: '/images/posters/1.jpg',
    description: loc(
      '버려진 쓰레기는 끝이 아니라 새로운 시작이 될 수 있습니다.\n김정아의 작품은 우리가 외면해온 문제를 마주하며,\n잊혀진 것들 속에서 변화의 가능성을 발견하도록 이끕니다.',
      NEEDS_TRANSLATION,
    ),
  },
];

const CURRENT_HEADING = loc('진행 중인 전시회', NEEDS_TRANSLATION);
const RECENT_HEADING = loc('최근 전시회', NEEDS_TRANSLATION);
const POSTER_ALT = loc('전시 포스터', 'Exhibition poster');

function MultilineText({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function ExhibitionsPage() {
  const currentHeading = useLocalized(CURRENT_HEADING);
  const recentHeading = useLocalized(RECENT_HEADING);
  const posterAlt = useLocalized(POSTER_ALT);
  const current = EXHIBITIONS[0];
  const currentAward = useLocalized(current.awardNote);
  const currentTitle = useLocalized(current.title);
  const currentVenue = useLocalized(current.venue);
  const currentAddress = useLocalized(current.address);
  const currentDate = useLocalized(current.dateRange);

  return (
    <main className="px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-[15px] sm:text-[16px] font-semibold text-center text-[#666666] mb-1">
        {currentHeading}
        <br />
      </h1>
      <div className="h-10" />

      <div className="max-w-3xl mx-auto text-center">
        <Image
          src={current.posterSrc}
          alt={posterAlt}
          className="mx-auto w-full max-w-[720px] h-auto object-contain"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="h-4" />
        <div className="mt-6 space-y-2">
          <h1 className="text-[22px] font-semibold">{currentAward}</h1>
          <h1 className="text-2xl font-bold">{currentTitle}</h1>
          <div className="h-2" />
          <h2 className="text-lg font-semibold">{currentVenue}</h2>
          <p className="text-sm text-gray-600">{currentAddress}</p>
          <div className="h-2" />
          <h2 className="text-[18px] font-medium text-gray-700">{currentDate}</h2>
        </div>
      </div>

      <hr className="my-12 border-t border-neutral-200" />
      <div className="h-4" />
      <h1 className="text-[15px] sm:text-[16px] font-semibold text-center text-[#666666] mb-1">
        {recentHeading}
        <br />
      </h1>
      <div className="h-4" />
      <div className="h-10" />

      {EXHIBITIONS.map((exhibition, i) => (
        <ExhibitionRow key={exhibition.title.ko} exhibition={exhibition} posterAlt={posterAlt} isFirst={i === 0} />
      ))}
    </main>
  );
}

function ExhibitionRow({
  exhibition,
  posterAlt,
  isFirst,
}: {
  exhibition: Exhibition;
  posterAlt: string;
  isFirst: boolean;
}) {
  const dateRange = useLocalized(exhibition.dateRange);
  const awardNote = useLocalized(exhibition.awardNote);
  const title = useLocalized(exhibition.title);
  const venue = useLocalized(exhibition.venue);
  const address = useLocalized(exhibition.address);
  const description = useLocalized(exhibition.description ?? loc(''));

  return (
    <>
      {!isFirst && <div className="h-20" />}
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={exhibition.posterSrc}
            alt={posterAlt}
            className="w-full h-auto object-contain"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <div>
            <h2 className="text-xl font-medium mb-2">{dateRange}</h2>
            <h1 className="text-2xl font-bold mb-4">
              {awardNote}
              <br />
              {title}
            </h1>
            <h2 className="text-l font-semibold mb-0">{venue}</h2>
            <p className="text-sm mb-4">{address}</p>
            {description && (
              <p className="text-sm leading-relaxed text-gray-700">
                <MultilineText text={description} />
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
