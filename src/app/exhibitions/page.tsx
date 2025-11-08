'use client';

export default function ExhibitionsPage() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      {/* 상단: 제목 및 서문 */}
      <h1 className="text-[15px] sm:text-[16px] font-semibold text-center text-[#666666] mb-1">
        진행 중인 전시회<br />
      </h1>
      {/* 전시 0 — 가운데 정렬 카드 버전 */}
        <div className="h-10" />

        <div className="max-w-3xl mx-auto text-center">
          {/* 포스터 */}
          <img
            src="/images/posters/0.jpg"
            alt="전시 포스터"
            className="mx-auto w-full max-w-[720px] h-auto object-contain"
          />
          <div className="h-4" />
          {/* 텍스트 정보 */}
          <div className="mt-6 space-y-2">

            <h1 className="text-[22px] font-semibold">
              김정아 개인전: 제10회 메디치상 수상 기념전
            </h1>
          
            <h1 className="text-2xl font-bold">
            영원을 꿈꾸는 일회용
            </h1>
            <div className="h-2" />
            <h2 className="text-lg font-semibold">학고재 아트센터</h2>
            <p className="text-sm text-gray-600">서울특별시 종로구 삼청로 48-4</p>
            <div className="h-2" />
            <h2 className="text-[18px] font-medium text-gray-700">2025. 11. 11(화) - 11. 25(화)</h2>
          </div>
        </div>

      
      {/*  구분선 */}
      <hr className="my-12 border-t border-neutral-200" />
      <div className="h-4" />
         {/* 상단: 제목 및 서문 */}
      <h1 className="text-[15px] sm:text-[16px] font-semibold text-center text-[#666666] mb-1">
        최근 전시회<br />
      </h1>
      <div className="h-4" />
      {/* 전시 1 */}
      <div className="h-10" />
          <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/posters/2.png"
              alt="전시 포스터"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div>
              <h2 className="text-xl font-medium mb-2">2025. 8. 23(토) - 9. 27(토)</h2>
              <h1 className="text-2xl font-bold mb-4">김정아 개인전:<br />꽃보다 아름답다- 남겨진 것들의 미학</h1>
              <h2 className="text-l font-semibold mb-0">아트살롱 드 아씨</h2>
              <p className="text-sm mb-4">서울시 영등포구 국제금융로8길16 신영증권BD B128호</p>
              <p className="text-sm leading-relaxed text-gray-700">
                나는 화려한 이면에 숨겨진 자화상을 통해<br />‘진정한 아름다움’이 무엇인지 질문을 던지고자 한다.
              </p>
            </div>
          </div>
        </div>
      

      {/* 전시 2 */}
      <div className="h-20" />
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
        

        
     
    </main>
  );
}
