'use client';

import { useEffect, useState } from 'react';

export default function Pagebaroque() {
  const totalImages = 12;            // 이미지 개수
  const [index, setIndex] = useState(0); // 현재 표시 중인 인덱스(0부터)

  const prev = () => setIndex(i => (i - 1 + totalImages) % totalImages);
  const next = () => setIndex(i => (i + 1) % totalImages);

  // 키보드 ← → 로 이동
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      {/* 제목/메타 */}
      <h2 className="text-[14px] font-semibold text-center text-[#666] mb-1">[ 2025- ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">요정의 초상</h1>
      <h3 className="text-base font-medium text-center text-[#4B5563] mb-5">캔버스에 유화</h3>
      <p className="font-normal text-center leading-relaxed mb-8 text-[#909090] max-w-2xl mx-auto">-</p>

      {/* 단일 이미지 뷰어 */}
      <section className="relative">
        {/* 이미지 */}
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[520px] md:w-[640px] lg:w-[720px]">
            <img
              src={`/images/baroque/${index + 1}.jpg`}
              alt={`작품 ${index + 1}`}
              className="w-full h-auto object-contain select-none"
              onClick={next} // 이미지 탭하면 다음으로
            />
          </div>
        </div>

        {/* 좌/우 버튼 */}
        <button
          aria-label="이전"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 text-neutral-700/70 hover:text-neutral-900"
        >
          ‹
        </button>
        <button
          aria-label="다음"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 text-neutral-700/70 hover:text-neutral-900"
        >
          ›
        </button>

        {/* 인덱스/도트 */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <span className="text-sm text-neutral-600">
            {index + 1} / {totalImages}
          </span>
          <ol className="flex gap-1.5" aria-label="슬라이드 인디케이터">
            {Array.from({ length: totalImages }).map((_, i) => (
              <li key={i}>
                <button
                  aria-label={`${i + 1}번 이미지로 이동`}
                  className={`h-2 w-2 rounded-full transition ${
                    i === index ? 'bg-neutral-800' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  onClick={() => setIndex(i)}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
