'use client';

import { useState, useEffect } from 'react';

export default function Pagedream() {
  const totalImages = 7;
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

  // 🔑 키보드 이벤트 (←, →, Esc)
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
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-1">[ 2024- ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">꽃꿈</h1>
      <h3 className="text-m font-medium text-center text-[#4B5563] mb-5">
      69x58x4(cm), 한지 캐스팅에 아크릴
      </h3>
      <p className="text-center leading-relaxed mb-12 text-[#909090] text-sm sm:text-base max-w-full sm:max-w-2xl mx-auto px-0 sm:px-0">
        환했던 그 시간이 꿈같아<br/>
        또 다시 꽃이 되는 꿈을 꾸어본다 
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
                src={`/images/dream/${index}.jpg`}
                alt={`작품${index}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => setSelectedIndex(index - 1)}
              />
            );
          })}
        </div>
      ))}

    </main>
  );
}
