'use client';

import { useState, useEffect } from 'react';

export default function Pagebaroque() {
  const totalImages = 12;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedIndex((i) => (i === null ? 0 : (i - 1 + totalImages) % totalImages));
  };

  const handleNext = () => {
    setSelectedIndex((i) => (i === null ? 0 : (i + 1) % totalImages));
  };

  // 🔑 키보드 이벤트 (←, →, Esc)
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  // 🔒 모달 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    if (selectedIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [selectedIndex]);

  return (
    <main className="px-6 py-12 max-w-6xl mx-auto relative">
      {/* 제목 및 본문 */}
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-1">[ 2025- ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">요정의 초상</h1>
      <h3 className="text-base font-medium text-center text-[#4B5563] mb-5">
        캔버스에 유화
      </h3>
      <p className="font-normal text-center leading-relaxed mb-12 text-[#909090] max-w-2xl mx-auto">
        -
      </p>

      {/* 이미지 그리드: 한 행에 2개, 간격 50px */}
      {Array.from({ length: Math.ceil(totalImages / 2) }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] w-[90%] mx-auto mb-[50px]"
        >
          {Array.from({ length: 2 }).map((_, colIdx) => {
            const index = rowIdx * 2 + colIdx + 1;
            if (index > totalImages) return null;
            return (
              <img
                key={index}
                src={`/images/baroque/${index}.jpg`}
                alt={`작품${index}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => setSelectedIndex(index - 1)}
              />
            );
          })}
        </div>
      ))}

      {/* 모달 팝업 */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-center justify-center w-[70vw] max-h-[90vh]">
            {/* 이미지 wrapper */}
            <div className="relative w-[60%]">
              {/* X 버튼 - 반응형 위치 */}
              <button
                className="absolute top-2 right-2 sm:top-0 sm:right-[-50px] text-white text-3xl z-50"
                onClick={() => setSelectedIndex(null)}
              >
                ×
              </button>

              {/* 이미지 */}
              <img
                src={`/images/baroque/${selectedIndex + 1}.jpg`}
                alt={`팝업 이미지 ${selectedIndex + 1}`}
                className="w-full h-auto object-contain block mx-auto"
              />
            </div>

            {/* 번호 및 화살표 */}
            <div className="flex items-center justify-center mt-[30px] text-white text-sm">
              <button onClick={handlePrev} className="mr-[40px] text-2xl">
                &lt;
              </button>
              <span>
                {selectedIndex + 1} / {totalImages}
              </span>
              <button onClick={handleNext} className="ml-[40px] text-2xl">
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
