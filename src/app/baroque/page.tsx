'use client';

import Image from 'next/image';

export default function PageBaroque() {
  const totalImages = 12;

  const exhibitionImages = [1, 2, 3];

  return (
    <main className="px-2 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto">
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-1">
        [ 2025- ]
      </h2>
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-3">
        요정의 초상
      </h1>
      <p className="text-m font-medium text-center text-[#4B5563] mb-8">
        캔버스에 유화
      </p>

      <section className="flex flex-col items-center space-y-6 mb-[90px]">
        {exhibitionImages.map((index) => (
          <Image
            key={index}
            src={`/images/baroque/exhibition/${index}.jpg`}
            alt={`요정의 초상 전시 전경 ${index}`}
            className="w-full sm:w-[85%] md:w-[70%] h-auto object-contain"
          width={0}
          height={0}
          sizes="100vw"
        />
        ))}
      </section>

      {Array.from({ length: totalImages }).map((_, i) => {
        const index = i + 1;
        return (
          <section key={index} className="pb-[70px]">
            <Image
              src={`/images/baroque/${index}.jpg`}
              alt={`요정의 초상 ${index}`}
              className="w-full sm:w-[80%] md:w-[65%] h-auto object-contain mb-4 mx-auto"
          width={0}
          height={0}
          sizes="100vw"
        />

            <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
              <span className="text-[15px] sm:text-[16px] font-bold text-[#111827]">
                요정의 초상
              </span>
              <span className="text-[14px] sm:text-[16px] font-normal text-[#4B5563] text-center">
                oil on canvas
              </span>
            </div>
          </section>
        );
      })}
    </main>
  );
}
