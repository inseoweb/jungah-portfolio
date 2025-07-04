'use client';

export default function photos() {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
        {/* 제목 및 본문 */}
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-2">[ 2011~ ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">활동사진</h1>

      <div className="h-5" />
      {/* 사진 1 */}
      <div className="pb-[40px]">
        <img
          src="/images/photos/1.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"        />
      </div>

      {/* 사진 2 */}
      <div className="pb-[40px]">
        <img
          src="/images/photos/2.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"        />
      </div>

      {/* 사진 3 */}
      <div className="pb-[40px]">
        <img
          src="/images/photos/3.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"        />
      </div>

      {/* 사진 4 */}
      <div className="pb-[40px]">
        <img
          src="/images/photos/4.jpg"
          alt="1"
          className="w-[90%] h-autㅈo mx-auto mb-[0px]"        />
      </div>

      {/* 사진 5 */}
      <div className="pb-[40px]">
        <img
          src="/images/photos/5.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"        />
      </div>

      {/* 사진 6 */}
      <div className="pb-[40px]">
        <img
          src="/images/photos/6.jpg"
          alt="1"
          className="w-[90%] h-auto mx-auto mb-[0px]"        />
      </div>

      </div>
  );
}