'use client';

export default function ExhibitionsPage() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      {/* 상단: 제목 및 서문 */}
      <h1 className="text-[14px] sm:text-[16px] font-semibold text-center text-[#666666] mb-1">
        최근 전시회<br />
      </h1>

      {/* 전시 1 */}
      <div className="h-10" />
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/posters/1.jpg"
            alt="전시 포스터"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <div>
            <h2 className="text-xl font-medium mb-2">2025. 6. 19(목) - 7. 15(화)</h2>
            <h1 className="text-2xl font-bold mb-4">김정아 개인전:<br />한걸음 다가서면 바꿀 수 있어요</h1>
            <h2 className="text-l font-semibold mb-0">두손갤러리</h2>
            <p className="text-sm mb-4">서울 중구 덕수궁길 130, 1F</p>
            <p className="text-sm leading-relaxed text-gray-700">
              버려진 쓰레기는 끝이 아니라 새로운 시작이 될 수 있습니다.<br />
              김정아의 작품은 우리가 외면해온 문제를 마주하며,<br />
              잊혀진 것들 속에서 변화의 가능성을 발견하도록 이끕니다.
            </p>
          </div>
        </div>
      </div>

      {/* 전시 2 */}
      <div className="h-14" />

      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/posters/2.jpeg"
            alt="전시 포스터"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <div>
            <h2 className="text-xl font-medium mb-2">2025. 6. 12(목) - 7. 9(수)</h2>
            <h1 className="text-2xl font-bold mb-4">갤러리0도씨 그룹전:<br />Touching 촉각적 풍경 2025</h1>
            <h2 className="text-l font-semibold mb-0">갤러리0°C</h2>
            <p className="text-sm mb-4">서울 서대문구 홍제천로 180 1층</p>
            <p className="text-sm leading-relaxed text-gray-700">
            2025 전시는 촉각의 신체적, 감성적 영역에 집중하여<br />마치 엄마의 살을 느끼고 싶어 이불을 두르고 다니는 아이에서부터<br />할머니의 거친 손과 같은 우리의 마음을 움직이고 우리 삶을<br />살아가게 만드는 정서적 힘의 영역을 시각화하여 해석하고<br />접근하고자 한다.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
