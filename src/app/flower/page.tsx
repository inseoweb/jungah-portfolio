'use client';

import { useState, useEffect } from 'react';

export default function Pageflower() {
  const totalImages = 26;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + totalImages) % totalImages);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % totalImages);
    }
  };

  // ⌨️ 키보드 이벤트: ← → ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <main className="px-6 py-12 max-w-6xl mx-auto relative">
      {/* 제목 및 본문 */}
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-1">[ 2003- ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">꽃보다 아름답다</h1>
      <h3 className="text-m font-medium text-center text-[#4B5563] mb-5">
        63x63x4(cm), 한지 캐스팅에 수채
      </h3>
      <p className="text-center leading-relaxed mb-12 text-[#909090] text-[15px] sm:text-base max-w-full sm:max-w-2xl mx-auto px-0 sm:px-0
">
        -
      </p>

      {/* 이미지 그리드 */}
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
                src={`/images/flower/${index}.jpg`}
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-[70vw] max-h-[90vh]">
            {/* 이미지 wrapper */}
            <div className="relative w-[60%]">
              {/* X 버튼 - 이미지 우측 위에서 50px */}
              <button
                className="absolute top-0 right-[-50px] text-white text-3xl z-50"
                onClick={() => setSelectedIndex(null)}
              >
                ×
              </button>

              {/* 이미지 */}
              <img
                src={`/images/flower/${selectedIndex + 1}.jpg`}
                alt={`팝업 이미지 ${selectedIndex + 1}`}
                className="w-full h-auto object-contain block mx-auto"
              />
            </div>

            {/* 번호 및 화살표 */}
            <div className="flex items-center justify-center mt-[30px] text-white text-sm">
              <button onClick={handlePrev} className="mr-[40px] text-2xl">&lt;</button>
              <span>{selectedIndex + 1} / {totalImages}</span>
              <button onClick={handleNext} className="ml-[40px] text-2xl">&gt;</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
