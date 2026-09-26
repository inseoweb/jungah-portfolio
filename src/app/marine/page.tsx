import WorkSeriesDetail, { type EditorialImage } from '../components/WorkSeriesDetail';
import { loc, type Localized } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('marine')!;
const nextSeries = getWorkSeries('2015')!;

type MarineWork = {
  title: Localized;
  detail: Localized;
  images: Omit<EditorialImage, 'captionTitle' | 'captionDetail'>[];
};

// Grouped by work so every photo can inherit its work's title/info —
// several works have more than one photo (install shot + detail, or a
// multi-photo installation) with nothing distinguishing them on their
// own, so each photo in a group repeats the same caption. Order below
// is the confirmed display order: Hug Me - 돌아온 탕아's two photos
// (previously split apart, with one used as a standalone hero) now sit
// together as one group, right after 빈자리.
const WORKS: MarineWork[] = [
  {
    title: loc('Dinner 2011', 'Dinner 2011'),
    detail: loc(
      '63 × 63 × 16 cm, 한지 캐스팅, 수채, 바다쓰레기, 2011',
      '63 × 63 × 16 cm, hanji casting, watercolor, marine debris, 2011',
    ),
    images: [{ src: '/images/marine/1.jpg', alt: 'Dinner 2011', orientation: 'square' }],
  },
  {
    title: loc('빈자리', 'Empty Place'),
    detail: loc(
      '73 × 190 cm, 캔버스에 아크릴릭, 바다쓰레기, 거울, 2011, 2017',
      '73 × 190 cm, acrylic on canvas, marine debris, mirror, 2011, 2017',
    ),
    images: [{ src: '/images/marine/2.jpg', alt: '빈자리', orientation: 'landscape' }],
  },
  {
    title: loc('빈자리', 'Empty Place'),
    detail: loc('가변설치, 해운대, 2017', 'Dimensions variable, Haeundae, 2017'),
    images: [
      { src: '/images/marine/15.jpg', alt: '빈자리 가변설치, 해운대, 2017', orientation: 'landscape' },
    ],
  },
  {
    title: loc('Hug Me - 돌아온 탕아', 'Hug Me – The Prodigal Son'),
    detail: loc(
      '가변설치, FDM 출력, 바다쓰레기, 2022',
      'Dimensions variable, FDM prints, marine debris, 2022',
    ),
    images: [
      { src: '/images/marine/3.jpg', alt: 'Hug Me - 돌아온 탕아', orientation: 'portrait' },
      { src: '/images/marine/4.jpg', alt: 'Hug Me - 돌아온 탕아', orientation: 'landscape' },
    ],
  },
  {
    title: loc('Under the Sea', 'Under the Sea'),
    detail: loc(
      '162 × 264 cm, 패널에 아크릴릭, 바다쓰레기, 2022',
      '162 × 264 cm, acrylic on panel, marine debris, 2022',
    ),
    images: [
      { src: '/images/marine/8.jpg', alt: 'Under the Sea', orientation: 'landscape' },
      { src: '/images/marine/7.jpg', alt: 'Under the Sea', orientation: 'landscape' },
    ],
  },
  {
    title: loc('아름다운 강산', 'Beautiful Land'),
    detail: loc('2022', '2022'),
    images: [{ src: '/images/marine/9.jpg', alt: '아름다운 강산', orientation: 'landscape' }],
  },
  {
    title: loc('바다 귀 기울여봐요', 'Listen to the Sea'),
    detail: loc('30 × 50 cm, 종이에 수채, 2011', '30 × 50 cm, watercolor on paper, 2011'),
    images: [{ src: '/images/marine/10.jpg', alt: '바다 귀 기울여봐요', orientation: 'landscape' }],
  },
  {
    title: loc('인공파도', 'Artificial Wave'),
    detail: loc('66 × 100 cm, 패널에 바다쓰레기, 2012', '66 × 100 cm, marine debris on panel, 2012'),
    images: [{ src: '/images/marine/11.jpg', alt: '인공파도', orientation: 'landscape' }],
  },
  {
    title: loc('인공파도 2', 'Artificial Wave 2'),
    detail: loc(
      '80.3 × 365 cm, 패널에 바다쓰레기, 2012',
      '80.3 × 365 cm, marine debris on panel, 2012',
    ),
    images: [{ src: '/images/marine/12.jpg', alt: '인공파도 2', orientation: 'landscape' }],
  },
  {
    title: loc('Picturesque', 'Picturesque'),
    detail: loc(
      '71 × 81 cm, 패널에 유화, 액자, 바다쓰레기, 2018',
      '71 × 81 cm, oil on panel, frame, marine debris, 2018',
    ),
    images: [
      { src: '/images/marine/13.jpg', alt: 'Picturesque', orientation: 'landscape' },
      { src: '/images/marine/14.jpg', alt: 'Picturesque', orientation: 'landscape' },
    ],
  },
  {
    title: loc('한없이 무거운', 'Endlessly Heavy'),
    detail: loc(
      '110 × 210 × 80 cm, 납(낚시 납추, 납 지지대), 스테인리스 스틸, 2019',
      '110 × 210 × 80 cm, lead (fishing sinkers and lead supports), stainless steel, 2019',
    ),
    images: [
      { src: '/images/marine/17.jpg', alt: '한없이 무거운', orientation: 'landscape' },
      { src: '/images/marine/16.jpg', alt: '한없이 무거운', orientation: 'landscape' },
    ],
  },
  {
    title: loc('9시 46분', '9:46'),
    detail: loc(
      '87 × 87 cm, 패널에 아크릴릭, 서해 바다쓰레기, 2020',
      '87 × 87 cm, acrylic on panel, marine debris from the West Sea, 2020',
    ),
    images: [{ src: '/images/marine/18.jpg', alt: '9시 46분', orientation: 'square' }],
  },
  {
    title: loc('한걸음 다가서면 바꿀 수 있어요', 'One Step Closer, You Can Change It'),
    detail: loc('60 × 110 cm, 렌티큘러, 2020', '60 × 110 cm, lenticular, 2020'),
    images: [
      { src: '/images/marine/21.jpg', alt: '한걸음 다가서면 바꿀 수 있어요', orientation: 'landscape' },
      { src: '/images/marine/20.jpg', alt: '가까이 다가가 바뀐 이미지', orientation: 'landscape' },
    ],
  },
  {
    title: loc('바다 빼기 바다', 'Sea Minus Sea'),
    detail: loc(
      '나무에 아크릴릭, 레진, 바다쓰레기, 2021',
      'acrylic, resin, and marine debris on wood, 2021',
    ),
    images: [{ src: '/images/marine/22.jpg', alt: '바다 빼기 바다', orientation: 'portrait' }],
  },
  {
    title: loc('자승자박', 'Caught in One’s Own Trap'),
    detail: loc(
      '120 × 80 cm, 패널에 낚시 쓰레기, 2021',
      '120 × 80 cm, fishing debris on panel, 2021',
    ),
    images: [{ src: '/images/marine/23.jpg', alt: '자승자박', orientation: 'portrait' }],
  },
  {
    title: loc('궤도 이탈', 'Deviation from Orbit'),
    detail: loc(
      '가변설치, 유리 부이, 아크릴릭, 바다쓰레기, 2013',
      'Dimensions variable, glass buoys, acrylic, marine debris, 2013',
    ),
    images: [
      { src: '/images/marine/19.jpg', alt: '궤도 이탈', orientation: 'landscape' },
      { src: '/images/marine/24.jpg', alt: '궤도 이탈', orientation: 'landscape' },
      { src: '/images/marine/25.jpg', alt: '궤도 이탈', orientation: 'portrait' },
      { src: '/images/marine/26.jpg', alt: '궤도 이탈', orientation: 'landscape' },
    ],
  },
  {
    title: loc('해변에 나타난 별자리', 'Constellations Appearing on the Beach'),
    detail: loc('거제 사곡해수욕장, 2023', 'Sagok Beach, Geoje, 2023'),
    images: [{ src: '/images/marine/28.jpg', alt: '해변에 나타난 별자리', orientation: 'landscape' }],
  },
  {
    title: loc('즐거운 추억', 'Happy Memories'),
    detail: loc(
      '162 × 130 cm, 패널에 바다쓰레기, 2021',
      '162 × 130 cm, marine debris on panel, 2021',
    ),
    images: [{ src: '/images/marine/29.jpg', alt: '즐거운 추억', orientation: 'portrait' }],
  },
];

const [heroWork, ...restWorks] = WORKS;
const [heroImageBase, ...heroRestImages] = heroWork.images;

const IMAGES: EditorialImage[] = [
  ...heroRestImages.map((img) => ({
    ...img,
    captionTitle: heroWork.title,
    captionDetail: heroWork.detail,
  })),
  ...restWorks.flatMap((work) =>
    work.images.map((img) => ({
      ...img,
      captionTitle: work.title,
      captionDetail: work.detail,
    })),
  ),
];

export default function Marine() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      intro={loc(
        <>
          2011년 바다오염으로 고통받는 생물에 대한 연구를 접한 이후로 바다쓰레기를 줍고 조사, 분류하며
          바다 환경오염의 심각성을 알리는 창작 작업과 전시를 해오고 있다.
          <br />
          <br />
          바다쓰레기 문제에 대해 연구하는 동아시아바다공동체 오션에서 예술 감독으로 함께 활동하며
          해양오염 문제연구 발표와 정책수립을 위한 전시, 학생과 환경교육 강사에게 강연을 해오고 있다.
          우리나라가 앞서서 해양쓰레기 문제에 깊은 관심을 갖고 연구해 왔기에 제7차 국제 해양폐기물
          컨퍼런스가 (유엔환경계획 주최) 미국 외의 국가 중 최초로 한국에서 열리게 되었고 여기서
          전시기획과 함께 Hug Me - 돌아온 탕아를 선보였다.
          <br />
          <br />
          해양쓰레기 문제가 각 나라들만의 문제가 아닌 전세계가 함께 풀어야하는 문제임을 인식하고
          쓰레기 문제 해결을 위해 우리가 해온 모니터링 방법을 알려주는 국제 프로그램에서 필리핀 정부
          관계자들에게 바다를 지키기 위해 예술로 할 수 있는 노력을 보여주는 강연을 하는 등 예술이
          해양 보존, 정책 변화, 미래세대 교육을 위해 무엇을 할 수 있을지에 큰 관심을 가지고 활동하고
          있다.
        </>,
        <>
          Since encountering research in 2011 on marine life suffering from ocean pollution, I
          have collected, studied, and classified marine debris while developing artworks and
          exhibitions that draw attention to the severity of marine environmental pollution.
          <br />
          <br />
          As Art Director of OSEAN (Our Sea of East Asia Network), an organization dedicated to
          research on marine debris, I have participated in exhibitions related to marine
          pollution research and policymaking, as well as lectures for students and environmental
          educators. Korea&rsquo;s longstanding engagement with marine debris research led to the
          7th International Marine Debris Conference, organized by the United Nations Environment
          Programme, being held in Korea—the first host country outside the United States. For
          the conference, I participated in exhibition planning and presented Hug Me – The
          Prodigal Son.
          <br />
          <br />
          Recognizing that marine debris is not an issue that individual countries can solve
          alone, but a global challenge requiring collective action, I have also participated in
          international programs that share the monitoring methods we have developed. This has
          included speaking with Philippine government officials about what art can contribute to
          protecting the ocean. Through these activities, I continue to explore how art can
          contribute to marine conservation, policy change, and the education of future
          generations.
        </>,
      )}
      heroImage={{
        ...heroImageBase,
        captionTitle: heroWork.title,
        captionDetail: heroWork.detail,
      }}
      images={IMAGES}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
