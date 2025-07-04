// src/app/artist/page.tsx

'use client';

export default function ArtistPage() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      {/* 제목 영역 */}
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-2">[ 작가 소개 ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">김정아 Kim JungAh</h1>
      <h3 className="text-base font-medium text-center text-[#4B5563] mb-10">서양화가, 바다환경작업</h3>

      {/* 여백 */}
      <div className="h-6" />

      {/* 작가 사진 */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/artist/1.jpeg" // 실제 경로로 교체
          alt="김정아 작가"
          className="w-[60%] h-auto object-contain"
        />
      </div>

      {/* 학력 */}
      <section className="mb-2">
        <h4 className="text-lg font-semibold text-[#111827] mb-3">약력</h4>
        <p className="mb-1">서울대학교 대학원 서양화과 판화전공 졸업</p>
        <p>서울대학교 미술대학 서양화과 졸업</p>
      </section>

      {/* 인스타그램 및 이메일 */}
      <div className="border-t border-dashed my-6" />
      <div className="space-y-1">
        <p>인스타그램 @marine_kja @jungah_official</p>
        <p>이메일문의 kkyaha@gmail.com</p>
      </div>

      {/* 여백 */}
      <div className="border-t border-dashed my-6" />
      <div className="h-4" />

      {/* 개인전 */}
      <section className="mb-12">
      <h4 className="text-lg font-semibold text-[#111827] mb-4">개인전</h4>
      <ul className="space-y-1 text-sm leading-normal">
        <li>2023 “내 숲에 작은 새도 쉬고” 초대전, 우주의 바다갤러리, 부산</li>
        <li>2023 “프로젝트 공 ”초대전, 탑골 미술관, 서울</li>
        <li>2023 “시간의 시각” 삼자미술관.초대전,남해</li>
        <li>2022 “Plug and Play” 거제 문화 예술회관, 거제</li>
        <li>2022 “Message from the ocean” KT&amp;G 본사 대치갤러리, 서울</li>
        <li>2021 “푸른 골목의 안쪽” 더숲갤러리 초대전, 서울</li>
        <li>2021 “바다의 아픔, 꽃이 되다” 유류피해극복기념관 초대전</li>
        <li>2021 “바다 그안의 나, 내 안의 바다” 거제시청, 거제</li>
        <li>2020 “9시46분” 바다쓰레기 작품전, 통영리스타트플랫폼 갤러리 영, 통영</li>
        <li>2018 “숨어 있던 꽃”, 갤러리 환, 서울</li>
        <li>2014 “꿈과 이제 오후”, 가나아트 스페이스, 서울</li>
        <li>2013 “바다, 귀 기울여 봐요”, 바다쓰레기 체험 학습지 발행 원화전</li>
        </ul>

      </section>

      {/* 그룹전 */}
      <section className="mb-12">
        <h4 className="text-lg font-semibold text-[#111827] mb-4">그룹전</h4>
        <ul className="space-y-1 text-sm leading-normal">
            <li>2024 CHARMing 전, 쿄토시 국제교류회관, 일본</li>
            <li>2024 촉각적 풍경, 갤러리 0‘c, 서울</li>
            <li>2024 “Visual Voices:예술로 평화를 말하다”, 로프트 드라운드, 서울</li>
            <li>2024 “아트부산”, 벡스코, 부산</li>
            <li>2023 “잊혀진 습관-한국 프랑스작가 교류전” 마산 현대 미술관, 창원</li>
            <li>2023 “여산 양달석 오마주하다” 기획초대전, 거제문화예술회관, 거제</li>
            <li>2023 “Natura, Nature” ADgallery, 서울</li>
            <li>2023 “황해어보” 인천아트플랫폼, 인천</li>
            <li>2023 “바람결에 들려오는 소리” 키타노자카갤러리, 고베, 일본</li>
            <li>2023 “토끼맞이전“ 거제문화예술회관, 거제</li>
            <li>2022 “비보호 좌회전“ 여미갤러리, 서산</li>
            <li>2022 “半 展“ 갤러리 바이올렛, 서울</li>
            <li>2022 "사유의 형태들" 웃다리 문화원, 평택</li>
            <li>2022 "The Nature-자연을 그리다." 포스코 더샵갤러리, 서울</li>
            <li>2022 "코리아 아트쇼2022" 수원 컨벤션센터, 수원</li>
            <li>2021 "별과 동강과 화가와 나”, 정선 507미술관, 정선</li>
            <li>2021 "할아텍20주년기념태백석탄박물관 전시", 태백</li>
            <li>2021 “서울대학교 미대동창회전“ 온라인전</li>
            <li>2021 “한울회” 온라인전</li>
            <li>2020 “할아텍 남산을 걷다”, 남산도서관, 서울</li>
            <li>2019 “목포원도심전”, 신안군수협, 목포</li>
            <li>2019 “회상/vision전”, 금보성갤러리, 서울</li>
            <li>2018 “The other side전”, 거제문화예술회관, 거제</li>
            <li>2018 “빌라다르전”, 예술의 전당, 서울</li>
            <li>2017 “한울회정기전“, 가나아트센터, 서울</li>
            <li>2016 “카리테스전”, 거제문화예술회관, 거제</li>
            <li>2016 “서울대개교70주년기념초대 모교나들이전”, 서울대 우석갤러리, 서울</li>
            <li>2016 “제주국제아트페어”, 제주시민회관</li>
            <li>2016 “한울회정기전”, 인사아트센터, 서울</li>
            <li>2016 “안평의 시대-두번째”, 류미재갤러리, 양평</li>
            <li>2015 “겸재 양천팔경 재해석”, 겸재정선미술관, 서울</li>
            <li>2015 “한울회 정기전”, 제주문화예술진흥원</li>
            <li>2015 “사랑 나눔전”, 인사아트센터, 서울</li>
            <li>2015 “안평의 시대”, 류미재갤러리, 양평</li>
            <li>2014 “한울회 정기전”, 인사아트센터, 서울</li>
            <li>2014 “홍콩 컨템포러리전”, 홍콩</li>
            <li>2013 “갤러리 스카이연 개관기념전”, 서울</li>
            <li>2004 “서울 판화 2005”, 토포하우스, 서울</li>
            <li>2004 “Art Online 2004”, www.snuart.com</li>
            <li>2002 “터키-이스탄불전”, 탁심광장 콘서트아트홀, 터키 이스탄불</li>
            <li>2001 “서울대학교-중국중앙 미술학원 교류전”, 중국중앙미술학원, 중국 북경</li>
            <li>2001 “신 미술대전”, 서울시립미술관, 서울</li>
            <li>2000 “The other side–3인전”, 한전프라자갤러리, 서울</li>
            <li>1999 “Newfigure-Painting & Project”, 우덕갤러리, 서울</li>
            <li>1998 “눈·보라전”, 서울대학교 문화관, 서울</li>
            <li>1995 “DMZ-아픈 기호들”, 나화랑, 서울</li>
        </ul>
      </section>

        {/* 해양환경 전시 */}
      <section>
      <h4 className="text-lg font-semibold text-[#111827] mb-4">해양환경 전시</h4>
      <ul className="space-y-1 text-sm leading-normal">
        <li>2024 세계환경교육 컨퍼런스 전시, 고려대학교 SK미래관</li>
        <li>2023 “바다의 바람” KT&G 해양생태계 보호 프로젝트 환경전시회, KT&G상상마당·KT&G타워, 서울</li>
        <li>2023 “각자의 바다” 은평문화재단, 서울</li>
        <li>2023 “업사이클 놀이터” 광명 리사이클센터, 광명</li>
        <li>2022 “세계시민 교육 포럼 전시”, 우양미술관, 경주</li>
        <li>2022 “7차 국제 해양폐기물 컨퍼런스 기념 환경전시”, 벡스코, 부산</li>
        <li>2022 “플라스틱의 두 얼굴 전”, 국립광주과학관, 광주</li>
        <li>2021 “바다의 미래를 그리다”, KT&G상상마당, 부산</li>
        <li>2020 “가로림만 해양정원 콘서트” 전시</li>
        <li>2019 “바다거북과 플라스틱” 기획전, 국립생태원, 서천</li>
        <li>2019 “부산국제낚시박람회”, 한려해상국립공원</li>
        <li>2019 “제2회 한국해양쓰레기 컨퍼런스 전시”, 경상대학교 해양생물교육센터</li>
        <li>2018 “환경교육한마당 작품전”, 국립해양박물관</li>
        <li>2018 “ICC 국제연안정화 작품전”, 태안</li>
        <li>2018 “한국해양쓰레기 포럼전시”, 한국해양수산개발원</li>
        <li>2017 “그린피스 플라스틱제로 캠페인” 설치, 부산 해운대</li>
        <li>2017 “제1회 한국해양쓰레기 컨퍼런스 전시”, 한국해양과학기술원</li>
        <li>2014 “평창생물다양성협약 당사국총회” 사이드 이벤트</li>
        <li>2014 “국가 해양환경교육 계획수립 워크숍” 전시</li>
        <li>2014 “2014 해양쓰레기 포럼” 전시</li>
        <li>2013 “해양쓰레기 교육홍보정책개발 워크숍” 전시</li>
        <li>2013 “국제연안정화 지도자워크숍” 전시</li>
        <li>2013 “강 유역 쓰레기관리 국제포럼” 전시</li>
        <li>2013 “해양쓰레기포럼” 전시</li>
        <li>2012 “스티로폼 학회” 전시</li>
        <li>2011 “스티로폼 해양쓰레기 재활용 활성화를 위한 워크숍” 전시</li>
        <li>2011 “환경과 미술” 전시, 목포박물관</li>
        <li>2011 “제11회 국제 연안 정화” 전시</li>
        <li>2011 “반 프라네커 박사 초청 세미나 - 해양쓰레기 생물피해 연구와 정책적 활용” 전시</li>
    </ul>

    </section>
    </div>
  );
}
