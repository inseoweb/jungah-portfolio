'use client';

import Image from 'next/image';
import { loc, NEEDS_TRANSLATION, useLocalized, type Localized } from '../../lib/language';

const SOLO_EXHIBITIONS: Localized[] = [
  loc('2026 "푸른 골목의 안쪽", 기획초대전, 토포하우스, 서울', NEEDS_TRANSLATION),
  loc('2026 "다시돌아온 요정의 시간", 이마도국제창작레지던시, 갤러리 금요일의 섬, 해남', NEEDS_TRANSLATION),
  loc('2026 "텅빈 무릉도원- 허무를 떠내다, 아름다움의 이름으로", 기획초대전, 바이브 아트스페이스, 서울', NEEDS_TRANSLATION),
  loc('2025 "영원을 꿈꾸는 일회용", 메디치상 수상기념 초대 개인전, 학고재아트센터, 서울', NEEDS_TRANSLATION),
  loc('2025 "꽃보다 아름답다- 남겨진 것들의 미학", 아트살롱 드 아씨, 서울', NEEDS_TRANSLATION),
  loc('2025 "한걸음 다가서면 바꿀 수 있어요", 두손갤러리, 서울', NEEDS_TRANSLATION),
  loc('2023 "내 숲에 작은 새도 쉬고" 초대전, 우주의 바다갤러리, 부산', NEEDS_TRANSLATION),
  loc('2023 "프로젝트 공 "초대전, 탑골 미술관, 서울', NEEDS_TRANSLATION),
  loc('2023 "시간의 시각" 삼자미술관.초대전,남해', NEEDS_TRANSLATION),
  loc('2022 "Plug and Play" 거제 문화 예술회관, 거제', NEEDS_TRANSLATION),
  loc('2022 "Message from the ocean" KT&G 본사 대치갤러리, 서울', NEEDS_TRANSLATION),
  loc('2021 "푸른 골목의 안쪽" 더숲갤러리 초대전, 서울', NEEDS_TRANSLATION),
  loc('2021 "바다의 아픔, 꽃이 되다" 유류피해극복기념관 초대전', NEEDS_TRANSLATION),
  loc('2021 "바다 그안의 나, 내 안의 바다" 거제시청, 거제', NEEDS_TRANSLATION),
  loc('2020 "9시46분" 바다쓰레기 작품전, 통영리스타트플랫폼 갤러리 영, 통영', NEEDS_TRANSLATION),
  loc('2018 "숨어 있던 꽃", 갤러리 환, 서울', NEEDS_TRANSLATION),
  loc('2014 "꿈과 이제 오후", 가나아트 스페이스, 서울', NEEDS_TRANSLATION),
  loc('2013 "바다, 귀 기울여 봐요", 바다쓰레기 체험 학습지 발행 원화전', NEEDS_TRANSLATION),
];

const GROUP_EXHIBITIONS: Localized[] = [
  loc('2026 "한일작가8인전", 키타노갤러리, 교토', NEEDS_TRANSLATION),
  loc('2026 "행촌미술관 재개관 기념전", 행촌미술관, 해남', NEEDS_TRANSLATION),
  loc('2026 "Objects, Materials and Composed Space - 형태의 장면", 스페이스 수퍼노말, 서울', NEEDS_TRANSLATION),
  loc('2026 "art6- The Layers of Perception", 다이아몬드G, 서울', NEEDS_TRANSLATION),
  loc('2026 "RSS 16th International Creative Arts Workshop and Exhibition", 라자망갈라대학, 방콕', NEEDS_TRANSLATION),
  loc('2026 "Art capital-comparaison 2026", 그랑팔레, 파리', NEEDS_TRANSLATION),
  loc('2025 "wave25 한일작가교류전", 한벽원미술관, 서울', NEEDS_TRANSLATION),
  loc('2025 "여산 양달석을 오마주하다", 섬집2000갤러리, 거제', NEEDS_TRANSLATION),
  loc('2025 "아이부키 스윙 스페이스 오픈 스튜디오", 서울', NEEDS_TRANSLATION),
  loc('2025 "2025 K-ART IN YEON", 연아트오브갤러리, 창원', NEEDS_TRANSLATION),
  loc('2025 "촉각적 풍경-touching",갤러리 0℃, 서울', NEEDS_TRANSLATION),
  loc('2024 "CHARMing 전", 쿄토시 국제교류회관, 일본', NEEDS_TRANSLATION),
  loc("2024 \"촉각적 풍경\", 갤러리 0'c, 서울", NEEDS_TRANSLATION),
  loc('2024 "Visual Voices:예술로 평화를 말하다", 로프트 드라운드, 서울', NEEDS_TRANSLATION),
  loc('2024 "아트부산", 벡스코, 부산', NEEDS_TRANSLATION),
  loc('2023 "잊혀진 습관-한국 프랑스작가 교류전" 마산 현대 미술관, 창원', NEEDS_TRANSLATION),
  loc('2023 "여산 양달석 오마주하다" 기획초대전, 거제문화예술회관, 거제', NEEDS_TRANSLATION),
  loc('2023 "Natura, Nature" ADgallery, 서울', NEEDS_TRANSLATION),
  loc('2023 "황해어보" 인천아트플랫폼, 인천', NEEDS_TRANSLATION),
  loc('2023 "바람결에 들려오는 소리" 키타노자카갤러리, 고베, 일본', NEEDS_TRANSLATION),
  loc('2023 "토끼맞이전" 거제문화예술회관, 거제', NEEDS_TRANSLATION),
  loc('2022 "비보호 좌회전" 여미갤러리, 서산', NEEDS_TRANSLATION),
  loc('2022 "半 展" 갤러리 바이올렛, 서울', NEEDS_TRANSLATION),
  loc('2022 "사유의 형태들" 웃다리 문화원, 평택', NEEDS_TRANSLATION),
  loc('2022 "The Nature-자연을 그리다." 포스코 더샵갤러리, 서울', NEEDS_TRANSLATION),
  loc('2022 "코리아 아트쇼2022" 수원 컨벤션센터, 수원', NEEDS_TRANSLATION),
  loc('2021 "별과 동강과 화가와 나", 정선 507미술관, 정선', NEEDS_TRANSLATION),
  loc('2021 "할아텍20주년기념태백석탄박물관 전시", 태백', NEEDS_TRANSLATION),
  loc('2021 "서울대학교 미대동창회전" 온라인전', NEEDS_TRANSLATION),
  loc('2021 "한울회" 온라인전', NEEDS_TRANSLATION),
  loc('2020 "할아텍 남산을 걷다", 남산도서관, 서울', NEEDS_TRANSLATION),
  loc('2019 "목포원도심전", 신안군수협, 목포', NEEDS_TRANSLATION),
  loc('2019 "회상/vision전", 금보성갤러리, 서울', NEEDS_TRANSLATION),
  loc('2018 "The other side전", 거제문화예술회관, 거제', NEEDS_TRANSLATION),
  loc('2018 "빌라다르전", 예술의 전당, 서울', NEEDS_TRANSLATION),
  loc('2017 "한울회정기전", 가나아트센터, 서울', NEEDS_TRANSLATION),
  loc('2016 "카리테스전", 거제문화예술회관, 거제', NEEDS_TRANSLATION),
  loc('2016 "서울대개교70주년기념초대 모교나들이전", 서울대 우석갤러리, 서울', NEEDS_TRANSLATION),
  loc('2016 "제주국제아트페어", 제주시민회관', NEEDS_TRANSLATION),
  loc('2016 "한울회정기전", 인사아트센터, 서울', NEEDS_TRANSLATION),
  loc('2016 "안평의 시대-두번째", 류미재갤러리, 양평', NEEDS_TRANSLATION),
  loc('2015 "겸재 양천팔경 재해석", 겸재정선미술관, 서울', NEEDS_TRANSLATION),
  loc('2015 "한울회 정기전", 제주문화예술진흥원', NEEDS_TRANSLATION),
  loc('2015 "사랑 나눔전", 인사아트센터, 서울', NEEDS_TRANSLATION),
  loc('2015 "안평의 시대", 류미재갤러리, 양평', NEEDS_TRANSLATION),
  loc('2014 "한울회 정기전", 인사아트센터, 서울', NEEDS_TRANSLATION),
  loc('2014 "홍콩 컨템포러리전", 홍콩', NEEDS_TRANSLATION),
  loc('2013 "갤러리 스카이연 개관기념전", 서울', NEEDS_TRANSLATION),
  loc('2004 "서울 판화 2005", 토포하우스, 서울', NEEDS_TRANSLATION),
  loc('2004 "Art Online 2004", www.snuart.com', NEEDS_TRANSLATION),
  loc('2002 "터키-이스탄불전", 탁심광장 콘서트아트홀, 터키 이스탄불', NEEDS_TRANSLATION),
  loc('2001 "서울대학교-중국중앙 미술학원 교류전", 중국중앙미술학원, 중국 북경', NEEDS_TRANSLATION),
  loc('2001 "신 미술대전", 서울시립미술관, 서울', NEEDS_TRANSLATION),
  loc('2000 "The other side–3인전", 한전프라자갤러리, 서울', NEEDS_TRANSLATION),
  loc('1999 "Newfigure-Painting & Project", 우덕갤러리, 서울', NEEDS_TRANSLATION),
  loc('1998 "눈·보라전", 서울대학교 문화관, 서울', NEEDS_TRANSLATION),
  loc('1995 "DMZ-아픈 기호들", 나화랑, 서울', NEEDS_TRANSLATION),
];

const MARINE_EXHIBITIONS: Localized[] = [
  loc('2025 "아트사이언스 전", 국립광주과학관, 광주', NEEDS_TRANSLATION),
  loc('2025 "바다숨", 해운대 플랫폼, 부산', NEEDS_TRANSLATION),
  loc('2024 "세계환경교육 컨퍼런스 전시", 고려대학교 SK미래관', NEEDS_TRANSLATION),
  loc('2023 "바다의 바람", KT&G 해양생태계 보호 프로젝트 환경전시회, KT&G상상마당·KT&G타워, 서울', NEEDS_TRANSLATION),
  loc('2023 "각자의 바다", 은평문화재단, 서울', NEEDS_TRANSLATION),
  loc('2023 "업사이클 놀이터", 광명 리사이클센터, 광명', NEEDS_TRANSLATION),
  loc('2022 "세계시민 교육 포럼 전시", 우양미술관, 경주', NEEDS_TRANSLATION),
  loc('2022 "7차 국제 해양폐기물 컨퍼런스 기념 환경전시", 벡스코, 부산', NEEDS_TRANSLATION),
  loc('2022 "플라스틱의 두 얼굴 전", 국립광주과학관, 광주', NEEDS_TRANSLATION),
  loc('2021 "바다의 미래를 그리다", KT&G상상마당, 부산', NEEDS_TRANSLATION),
  loc('2020 "가로림만 해양정원 콘서트" 전시', NEEDS_TRANSLATION),
  loc('2019 "바다거북과 플라스틱" 기획전, 국립생태원, 서천', NEEDS_TRANSLATION),
  loc('2019 "부산국제낚시박람회", 한려해상국립공원', NEEDS_TRANSLATION),
  loc('2019 "제2회 한국해양쓰레기 컨퍼런스 전시", 경상대학교 해양생물교육센터', NEEDS_TRANSLATION),
  loc('2018 "환경교육한마당 작품전", 국립해양박물관', NEEDS_TRANSLATION),
  loc('2018 "ICC 국제연안정화 작품전", 태안', NEEDS_TRANSLATION),
  loc('2018 "한국해양쓰레기 포럼전시", 한국해양수산개발원', NEEDS_TRANSLATION),
  loc('2017 "그린피스 플라스틱제로 캠페인" 설치, 부산 해운대', NEEDS_TRANSLATION),
  loc('2017 "제1회 한국해양쓰레기 컨퍼런스 전시", 한국해양과학기술원', NEEDS_TRANSLATION),
  loc('2014 "평창생물다양성협약 당사국총회" 사이드 이벤트', NEEDS_TRANSLATION),
  loc('2014 "국가 해양환경교육 계획수립 워크숍" 전시', NEEDS_TRANSLATION),
  loc('2014 "2014 해양쓰레기 포럼" 전시', NEEDS_TRANSLATION),
  loc('2013 "해양쓰레기 교육홍보정책개발 워크숍" 전시', NEEDS_TRANSLATION),
  loc('2013 "국제연안정화 지도자워크숍" 전시', NEEDS_TRANSLATION),
  loc('2013 "강 유역 쓰레기관리 국제포럼" 전시', NEEDS_TRANSLATION),
  loc('2013 "해양쓰레기포럼" 전시', NEEDS_TRANSLATION),
  loc('2012 "스티로폼 학회" 전시', NEEDS_TRANSLATION),
  loc('2011 "스티로폼 해양쓰레기 재활용 활성화를 위한 워크숍" 전시', NEEDS_TRANSLATION),
  loc('2011 "환경과 미술" 전시, 목포박물관', NEEDS_TRANSLATION),
  loc('2011 "제11회 국제 연안 정화" 전시', NEEDS_TRANSLATION),
  loc('2011 "반 프라네커 박사 초청 세미나 - 해양쓰레기 생물피해 연구와 정책적 활용" 전시', NEEDS_TRANSLATION),
];

const INTRO_LABEL = loc('[ 작가 소개 ]', NEEDS_TRANSLATION);
const ROLE = loc('서양화가', NEEDS_TRANSLATION);
const BIO_1 = loc('서울대학교 대학원 서양화과 판화전공 졸업', NEEDS_TRANSLATION);
const BIO_2 = loc('서울대학교 미술대학 서양화과 졸업', NEEDS_TRANSLATION);
const INSTAGRAM_LABEL = loc('인스타그램', 'Instagram');
const EMAIL_LABEL = loc('이메일문의', 'Email');
const SECTION_BIO = loc('약력', NEEDS_TRANSLATION);
const SECTION_SOLO = loc('개인전', NEEDS_TRANSLATION);
const SECTION_GROUP = loc('그룹전', NEEDS_TRANSLATION);
const SECTION_MARINE = loc('해양환경 전시', NEEDS_TRANSLATION);

function CVItem({ item }: { item: Localized }) {
  const text = useLocalized(item);
  return <li>{text}</li>;
}

export default function ArtistPage() {
  const introLabel = useLocalized(INTRO_LABEL);
  const role = useLocalized(ROLE);
  const bio1 = useLocalized(BIO_1);
  const bio2 = useLocalized(BIO_2);
  const instagramLabel = useLocalized(INSTAGRAM_LABEL);
  const emailLabel = useLocalized(EMAIL_LABEL);
  const sectionBio = useLocalized(SECTION_BIO);
  const sectionSolo = useLocalized(SECTION_SOLO);
  const sectionGroup = useLocalized(SECTION_GROUP);
  const sectionMarine = useLocalized(SECTION_MARINE);

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-2">{introLabel}</h2>
      <h1 className="text-2xl font-bold text-center mb-2">김정아 Kim JungAh</h1>
      <h3 className="text-base font-medium text-center text-[#4B5563] mb-10">{role}</h3>

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
        <h4 className="text-lg font-semibold text-[#111827] mb-3">{sectionBio}</h4>
        <p className="mb-1">{bio1}</p>
        <p>{bio2}</p>
      </section>

      <div className="border-t border-dashed my-6" />
      <div className="space-y-1">
        <p>{instagramLabel} @marine_kja @jungah_official</p>
        <p>{emailLabel} kkyaha@gmail.com</p>
      </div>

      <div className="border-t border-dashed my-6" />
      <div className="h-4" />

      <section className="mb-12">
        <h4 className="text-lg font-semibold text-[#111827] mb-4">{sectionSolo}</h4>
        <ul className="space-y-1 text-sm leading-normal">
          {SOLO_EXHIBITIONS.map((item, i) => (
            <CVItem key={i} item={item} />
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h4 className="text-lg font-semibold text-[#111827] mb-4">{sectionGroup}</h4>
        <ul className="space-y-1 text-sm leading-normal">
          {GROUP_EXHIBITIONS.map((item, i) => (
            <CVItem key={i} item={item} />
          ))}
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-semibold text-[#111827] mb-4">{sectionMarine}</h4>
        <ul className="space-y-1 text-sm leading-normal">
          {MARINE_EXHIBITIONS.map((item, i) => (
            <CVItem key={i} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
