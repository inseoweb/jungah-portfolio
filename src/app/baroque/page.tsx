'use client';

export default function PageBaroque() {
  // 파일명: /public/images/baroque/1.jpg ~ 12.jpg 기준
  const totalImages = 12;

  return (
    <main className="px-2 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto">
      {/* 제목 영역 */}
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-1">[ 2025- ]</h2>
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-3">요정의 초상</h1>
      <p className="text-m font-medium text-center text-[#4B5563] mb-5">
        캔버스에 유화
      </p>

      {/* 이미지 섹션: 한 장씩 세로로 나열 */}
      {Array.from({ length: totalImages }).map((_, i) => {
        const index = i + 1;
        return (
          <section key={index} className="pb-[70px]">
            <img
              src={`/images/baroque/${index}.jpg`}
              alt={`요정의 초상 ${index}`}
              className="w-full sm:w-[80%] md:w-[65%] h-auto object-contain mb-4 mx-auto"

            />
            {/* 캡션(선택): 필요 없으면 <div> 통째로 지워도 됨 */}
            <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
              <span className="text-[15px] sm:text-[16px] font-bold text-[#111827]">
                요정의 초상
              </span>
              <span className="text-[14px] sm:text-[16px] font-normal text-[#4B5563] text-center">
                {/* 예시 메타데이터 — 필요 시 수정/삭제 */}
                oil on canvas
              </span>
            </div>
          </section>
        );
      })}
    </main>
  );
}
