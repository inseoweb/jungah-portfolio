'use client';

import { useState, useEffect } from 'react';

export default function Pagefairy() {
  const totalImages = 18;
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

  // 키보드 이벤트 적용
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
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-1">[ 2023- ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">요정들</h1>
      <h3 className="text-m font-medium text-center text-[#4B5563] mb-5">각 91x73(cm), 2023</h3>
      <p className="text-center leading-relaxed mb-12 text-[#909090] text-[14px] sm:text-base max-w-full sm:max-w-2xl mx-auto px-0 sm:px-0
">
        바다에서 주운 플라스틱 쓰레기들. <br />
        인간의 소중한 시간과 노력으로 가질 수 있었던 요정들. <br />
        이제는 물도 육지도 이들의 자리가 아니다. <br />
        시간이 흘러 닳고 부서지고 바랜 이들을 하나하나 주워 씻어 말리고<br />초상화를 그리며 의미있게 어루만진다. <br />
        줍고 닦아 위로한 것은 우리 길 잃은 문명에서 소용이 다해 버려지는 인간의 모습 그 자체이다. <br />
        어디서 온지 모를 공간, 언제부터 돌아다녔을지 모를 시간.
      </p>

      {/* 이미지 그리드 */}
      {Array.from({ length: Math.ceil(totalImages / 3) }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] w-[90%] mx-auto mb-[20px]"
        >
          {Array.from({ length: 3 }).map((_, colIdx) => {
            const index = rowIdx * 3 + colIdx + 1;
            if (index > totalImages) return null;
            return (
              <img
                key={index}
                src={`/images/fairy/${index}.jpg`}
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