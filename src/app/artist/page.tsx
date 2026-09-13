'use client';

import Image from 'next/image';

export default function ArtistPage() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-2">[ 작가 소개 ]</h2>
      <h1 className="text-2xl font-bold text-center mb-2">김정아 Kim JungAh</h1>
      <h3 className="text-base font-medium text-center text-[#4B5563] mb-10">서양화가</h3>

      <div className="h-6" />

      <div className="flex justify-center mb-10">
        <Image
          src="/images/artist/1.jpeg"
          alt="김정아 작가"
          className="w-[60%] h-auto object-contain"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <section className="mb-2">
        <h4 className="text-lg font-semibold text-[#111827] mb-3">약력</h4>
        <p className="mb-1">서울대학교 대학원 서양화과 판화전공 졸업</p>
        <p>서울대학교 미술대학 서양화과 졸업</p>
      </section>

      <div className="border-t border-dashed my-6" />
      <div className="space-y-1">
        <p>인스타그램 @marine_kja @jungah_official</p>
        <p>이메일문의 kkyaha@gmail.com</p>
      </div>

      <div className="border-t border-dashed my-6" />
      <div className="h-4" />

      <section className="mb-12">
      <h4 className="text-lg font-semibold text-[#111827] mb-4">개인전</h4>
      <ul className="space-y-1 text-sm leading-normal">
        <li>2026 &quot;푸른 골목의 안쪽&quot;, 기획초대전, 토포하우스, 서울</li>
        <li>2026 &quot;다시돌아온 요정의 시간&quot;, 이마도국제창작레지던시, 갤러리 금요일의 섬, 해남</li>
        <li>2026 &quot;텅빈 무릉도원- 허무를 떠내다, 아름다움의 이름으로&quot;, 기획초대전, 바이브 아트스페이스, 서울</li>
        <li>2025 &quot;영원을 꿈꾸는 일회용&quot;, 메디치상 수상기념 초대 개인전, 학고재아트센터, 서울</li>
        <li>2025 &quot;꽃보다 아름답다- 남겨진 것들의 미학&quot;, 아트살롱 드 아씨, 서울</li>
        <li>2025 &quot;한걸음 다가서면 바꿀 수 있어요&quot;, 두손갤러리, 서울</li>
        <li>2023 &quot;내 숲에 작은 새도 쉬고&quot; 초대전, 우주의 바다갤러리, 부산</li>
        <li>2023 &quot;프로젝트 공 &quot;초대전, 탑골 미술관, 서울</li>
        <li>2023 &quot;시간의 시각&quot; 삼자미술관.초대전,남해</li>
        <li>2022 &quot;Plug and Play&quot; 거제 문화 예술회관, 거제</li>
        <li>2022 &quot;Message from the ocean&quot; KT&amp;G 본사 대치갤러리, 서울</li>
        <li>2021 &quot;푸른 골목의 안쪽&quot; 더숲갤러리 초대전, 서울</li>
        <li>2021 &quot;바다의 아픔, 꽃이 되다&quot; 유류피해극복기념관 초대전</li>
        <li>2021 &quot;바다 그안의 나, 내 안의 바다&quot; 거제시청, 거제</li>
        <li>2020 &quot;9시46분&quot; 바다쓰레기 작품전, 통영리스타트플랫폼 갤러리 영, 통영</li>
        <li>2018 &quot;숨어 있던 꽃&quot;, 갤러리 환, 서울</li>
        <li>2014 &quot;꿈과 이제 오후&quot;, 가나아트 스페이스, 서울</li>
        <li>2013 &quot;바다, 귀 기울여 봐요&quot;, 바다쓰레기 체험 학습지 발행 원화전</li>
        </ul>

      </section>

      <section className="mb-12">
        <h4 className="text-lg font-semibold text-[#111827] mb-4">그룹전</h4>
        <ul className="space-y-1 text-sm leading-normal">
            <li>2025 &quot;여산 양달석을 오마주하다&quot;, 섬집2000갤러리, 거제</li>
            <li>2025 &quot;아이부키 스윙 스페이스 오픈 스튜디오&quot;, 서울</li>
            <li>2025 &quot;2025 K-ART IN YEON&quot;, 연아트오브갤러리, 창원</li>
            <li>2025 &quot;촉각적 풍경-touching&quot;,갤러리 0℃, 서울</li>
            <li>2024 &quot;CHARMing 전&quot;, 쿄토시 국제교류회관, 일본</li>
            <li>2024 &quot;촉각적 풍경&quot;, 갤러리 0&apos;c, 서울</li>
            <li>2024 &quot;Visual Voices:예술로 평화를 말하다&quot;, 로프트 드라운드, 서울</li>
            <li>2024 &quot;아트부산&quot;, 벡스코, 부산</li>
            <li>2023 &quot;잊혀진 습관-한국 프랑스작가 교류전&quot; 마산 현대 미술관, 창원</li>
            <li>2023 &quot;여산 양달석 오마주하다&quot; 기획초대전, 거제문화예술회관, 거제</li>
            <li>2023 &quot;Natura, Nature&quot; ADgallery, 서울</li>
            <li>2023 &quot;황해어보&quot; 인천아트플랫폼, 인천</li>
            <li>2023 &quot;바람결에 들려오는 소리&quot; 키타노자카갤러리, 고베, 일본</li>
            <li>2023 &quot;토끼맞이전&quot; 거제문화예술회관, 거제</li>
            <li>2022 &quot;비보호 좌회전&quot; 여미갤러리, 서산</li>
            <li>2022 &quot;半 展&quot; 갤러리 바이올렛, 서울</li>
            <li>2022 &quot;사유의 형태들&quot; 웃다리 문화원, 평택</li>
            <li>2022 &quot;The Nature-자연을 그리다.&quot; 포스코 더샵갤러리, 서울</li>
            <li>2022 &quot;코리아 아트쇼2022&quot; 수원 컨벤션센터, 수원</li>
            <li>2021 &quot;별과 동강과 화가와 나&quot;, 정선 507미술관, 정선</li>
            <li>2021 &quot;할아텍20주년기념태백석탄박물관 전시&quot;, 태백</li>
            <li>2021 &quot;서울대학교 미대동창회전&quot; 온라인전</li>
            <li>2021 &quot;한울회&quot; 온라인전</li>
            <li>2020 &quot;할아텍 남산을 걷다&quot;, 남산도서관, 서울</li>
            <li>2019 &quot;목포원도심전&quot;, 신안군수협, 목포</li>
            <li>2019 &quot;회상/vision전&quot;, 금보성갤러리, 서울</li>
            <li>2018 &quot;The other side전&quot;, 거제문화예술회관, 거제</li>
            <li>2018 &quot;빌라다르전&quot;, 예술의 전당, 서울</li>
            <li>2017 &quot;한울회정기전&quot;, 가나아트센터, 서울</li>
            <li>2016 &quot;카리테스전&quot;, 거제문화예술회관, 거제</li>
            <li>2016 &quot;서울대개교70주년기념초대 모교나들이전&quot;, 서울대 우석갤러리, 서울</li>
            <li>2016 &quot;제주국제아트페어&quot;, 제주시민회관</li>
            <li>2016 &quot;한울회정기전&quot;, 인사아트센터, 서울</li>
            <li>2016 &quot;안평의 시대-두번째&quot;, 류미재갤러리, 양평</li>
            <li>2015 &quot;겸재 양천팔경 재해석&quot;, 겸재정선미술관, 서울</li>
            <li>2015 &quot;한울회 정기전&quot;, 제주문화예술진흥원</li>
            <li>2015 &quot;사랑 나눔전&quot;, 인사아트센터, 서울</li>
            <li>2015 &quot;안평의 시대&quot;, 류미재갤러리, 양평</li>
            <li>2014 &quot;한울회 정기전&quot;, 인사아트센터, 서울</li>
            <li>2014 &quot;홍콩 컨템포러리전&quot;, 홍콩</li>
            <li>2013 &quot;갤러리 스카이연 개관기념전&quot;, 서울</li>
            <li>2004 &quot;서울 판화 2005&quot;, 토포하우스, 서울</li>
            <li>2004 &quot;Art Online 2004&quot;, www.snuart.com</li>
            <li>2002 &quot;터키-이스탄불전&quot;, 탁심광장 콘서트아트홀, 터키 이스탄불</li>
            <li>2001 &quot;서울대학교-중국중앙 미술학원 교류전&quot;, 중국중앙미술학원, 중국 북경</li>
            <li>2001 &quot;신 미술대전&quot;, 서울시립미술관, 서울</li>
            <li>2000 &quot;The other side–3인전&quot;, 한전프라자갤러리, 서울</li>
            <li>1999 &quot;Newfigure-Painting & Project&quot;, 우덕갤러리, 서울</li>
            <li>1998 &quot;눈·보라전&quot;, 서울대학교 문화관, 서울</li>
            <li>1995 &quot;DMZ-아픈 기호들&quot;, 나화랑, 서울</li>
        </ul>
      </section>

      <section>
      <h4 className="text-lg font-semibold text-[#111827] mb-4">해양환경 전시</h4>
      <ul className="space-y-1 text-sm leading-normal">
        <li>2025 &quot;아트사이언스 전&quot;, 국립광주과학관, 광주</li>
        <li>2025 &quot;바다숨&quot;, 해운대 플랫폼, 부산</li>
        <li>2024 &quot;세계환경교육 컨퍼런스 전시&quot;, 고려대학교 SK미래관</li>
        <li>2023 &quot;바다의 바람&quot;, KT&G 해양생태계 보호 프로젝트 환경전시회, KT&G상상마당·KT&G타워, 서울</li>
        <li>2023 &quot;각자의 바다&quot;, 은평문화재단, 서울</li>
        <li>2023 &quot;업사이클 놀이터&quot;, 광명 리사이클센터, 광명</li>
        <li>2022 &quot;세계시민 교육 포럼 전시&quot;, 우양미술관, 경주</li>
        <li>2022 &quot;7차 국제 해양폐기물 컨퍼런스 기념 환경전시&quot;, 벡스코, 부산</li>
        <li>2022 &quot;플라스틱의 두 얼굴 전&quot;, 국립광주과학관, 광주</li>
        <li>2021 &quot;바다의 미래를 그리다&quot;, KT&G상상마당, 부산</li>
        <li>2020 &quot;가로림만 해양정원 콘서트&quot; 전시</li>
        <li>2019 &quot;바다거북과 플라스틱&quot; 기획전, 국립생태원, 서천</li>
        <li>2019 &quot;부산국제낚시박람회&quot;, 한려해상국립공원</li>
        <li>2019 &quot;제2회 한국해양쓰레기 컨퍼런스 전시&quot;, 경상대학교 해양생물교육센터</li>
        <li>2018 &quot;환경교육한마당 작품전&quot;, 국립해양박물관</li>
        <li>2018 &quot;ICC 국제연안정화 작품전&quot;, 태안</li>
        <li>2018 &quot;한국해양쓰레기 포럼전시&quot;, 한국해양수산개발원</li>
        <li>2017 &quot;그린피스 플라스틱제로 캠페인&quot; 설치, 부산 해운대</li>
        <li>2017 &quot;제1회 한국해양쓰레기 컨퍼런스 전시&quot;, 한국해양과학기술원</li>
        <li>2014 &quot;평창생물다양성협약 당사국총회&quot; 사이드 이벤트</li>
        <li>2014 &quot;국가 해양환경교육 계획수립 워크숍&quot; 전시</li>
        <li>2014 &quot;2014 해양쓰레기 포럼&quot; 전시</li>
        <li>2013 &quot;해양쓰레기 교육홍보정책개발 워크숍&quot; 전시</li>
        <li>2013 &quot;국제연안정화 지도자워크숍&quot; 전시</li>
        <li>2013 &quot;강 유역 쓰레기관리 국제포럼&quot; 전시</li>
        <li>2013 &quot;해양쓰레기포럼&quot; 전시</li>
        <li>2012 &quot;스티로폼 학회&quot; 전시</li>
        <li>2011 &quot;스티로폼 해양쓰레기 재활용 활성화를 위한 워크숍&quot; 전시</li>
        <li>2011 &quot;환경과 미술&quot; 전시, 목포박물관</li>
        <li>2011 &quot;제11회 국제 연안 정화&quot; 전시</li>
        <li>2011 &quot;반 프라네커 박사 초청 세미나 - 해양쓰레기 생물피해 연구와 정책적 활용&quot; 전시</li>
    </ul>

    </section>
    </div>
  );
}
