import WorkSeriesDetail, { type WorkProject } from '../components/WorkSeriesDetail';

const PROJECTS: WorkProject[] = [
  {
    titleKo: 'Dinner 2011',
    caption: '63x63x16(cm), 한지캐스팅,수채,바다쓰레기, 2011',
    images: [{ src: '/images/marine/1.jpg', alt: 'Dinner 2011', orientation: 'square' }],
  },
  {
    titleKo: '빈자리',
    caption: '73x190(cm), 캔버스에 아크릴릭,바다쓰레기,거울, 2011, 2017',
    images: [
      { src: '/images/marine/2.jpg', alt: '빈자리', orientation: 'landscape' },
      { src: '/images/marine/15.jpg', alt: '빈자리 가변설치, 해운대, 2017', orientation: 'landscape' },
    ],
  },
  {
    titleKo: 'Hug me - 돌아온 탕아',
    caption: '가변설치, fdm 출력, 바다쓰레기, 2022',
    images: [
      { src: '/images/marine/4.jpg', alt: 'Hug me - 돌아온 탕아', orientation: 'landscape' },
      { src: '/images/marine/3.jpg', alt: 'Hug me - 돌아온 탕아', orientation: 'portrait' },
    ],
  },
  {
    titleKo: 'Under the Sea',
    caption: '162x264(cm), 패널에 아크릴릭, 바다쓰레기, 2022',
    images: [
      { src: '/images/marine/8.jpg', alt: 'Under the Sea', orientation: 'landscape' },
      { src: '/images/marine/7.jpg', alt: 'Under the Sea', orientation: 'landscape' },
    ],
  },
  {
    titleKo: '아름다운 강산',
    caption: '2022',
    images: [{ src: '/images/marine/9.jpg', alt: '아름다운 강산', orientation: 'landscape' }],
  },
  {
    titleKo: '바다 귀 귀울여봐요',
    caption: '30x50(cm), 종이에 수채, 2011',
    images: [{ src: '/images/marine/10.jpg', alt: '바다 귀 귀울여봐요', orientation: 'landscape' }],
  },
  {
    titleKo: '인공파도',
    caption: '66x100(cm), 패널에 바다쓰레기, 2012',
    images: [{ src: '/images/marine/11.jpg', alt: '인공파도', orientation: 'landscape' }],
  },
  {
    titleKo: '인공파도 2',
    caption: '80.3x365(cm), 패널에 바다쓰레기, 2012',
    images: [{ src: '/images/marine/12.jpg', alt: '인공파도 2', orientation: 'landscape' }],
  },
  {
    titleKo: 'Picturesque',
    caption: '71x81(cm), 패널에 유화, 액자, 바다쓰레기, 2018',
    images: [
      { src: '/images/marine/13.jpg', alt: 'Picturesque', orientation: 'landscape' },
      { src: '/images/marine/14.jpg', alt: 'Picturesque', orientation: 'landscape' },
    ],
  },
  {
    titleKo: '한없이 무거운',
    caption: '110x210x80(cm), 납(낚시 납추, 납 지지대), 스테인리스 스틸, 2019',
    images: [
      { src: '/images/marine/17.jpg', alt: '한없이 무거운', orientation: 'landscape' },
      { src: '/images/marine/16.jpg', alt: '한없이 무거운', orientation: 'landscape' },
    ],
  },
  {
    titleKo: '9시 46분',
    caption: '87x87(cm), 패널에 아크릴릭, 서해 바다쓰레기, 2020',
    images: [{ src: '/images/marine/18.jpg', alt: '9시 46분', orientation: 'square' }],
  },
  {
    titleKo: '한걸음 다가서면 바꿀 수 있어요',
    caption: '60x110(cm), 렌티큘러, 2020',
    images: [
      { src: '/images/marine/21.jpg', alt: '한걸음 다가서면 바꿀 수 있어요', orientation: 'landscape' },
      { src: '/images/marine/20.jpg', alt: '가까이 다가가 바뀐 이미지', orientation: 'landscape' },
    ],
  },
  {
    titleKo: '바다 빼기 바다',
    caption: '나무에 아크릴릭, 레진, 바다쓰레기, 2021',
    images: [{ src: '/images/marine/22.jpg', alt: '바다 빼기 바다', orientation: 'portrait' }],
  },
  {
    titleKo: '자승자박',
    caption: '120x80(cm), 패널에 낚시 쓰레기, 2021',
    images: [{ src: '/images/marine/23.jpg', alt: '자승자박', orientation: 'portrait' }],
  },
  {
    titleKo: '궤도 이탈',
    caption: '가변설치, 유리 부이, 아크릴릭, 바다쓰레기, 2013',
    images: [
      { src: '/images/marine/19.jpg', alt: '궤도 이탈', orientation: 'landscape' },
      { src: '/images/marine/24.jpg', alt: '궤도 이탈', orientation: 'landscape' },
      { src: '/images/marine/25.jpg', alt: '궤도 이탈', orientation: 'portrait' },
      { src: '/images/marine/26.jpg', alt: '궤도 이탈', orientation: 'landscape' },
    ],
  },
  {
    titleKo: '해변에 나타난 별자리',
    caption: '거제 사곡해수욕장, 2023',
    images: [{ src: '/images/marine/28.jpg', alt: '해변에 나타난 별자리', orientation: 'landscape' }],
  },
  {
    titleKo: '즐거운 추억',
    caption: '162x130(cm), 패널에 바다쓰레기, 2021',
    images: [{ src: '/images/marine/29.jpg', alt: '즐거운 추억', orientation: 'portrait' }],
  },
];

export default function Marine() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="해양환경작품"
      period="2011~"
      intro={
        <>
          2011년 바다오염으로 고통받는 생물에 대한 연구를 접한 이후로 바다쓰레기를 줍고 조사, 분류하며
          바다 환경오염의 심각성을 알리는 창작 작업과 전시를 해오고 있다.
          <br />
          <br />
          바다쓰레기 문제에 대해 연구하는 동아시아바다공동체 오션에서 예술 감독으로 함께 활동하며
          해양오염 문제연구 발표와 정책수립을 위한 전시, 학생과 환경교육 강사에게 강연을 해오고 있다.
          우리나라가 앞서서 해양쓰레기 문제에 깊은 관심을 갖고 연구해 왔기에 제7차 국제 해양폐기물
          컨퍼런스가 (유엔환경계획 주최) 미국 외의 국가 중 최초로 한국에서 열리게 되었고 여기서
          전시기획과 함께 hug me-돌아온 탕아를 선보였다.
          <br />
          <br />
          해양쓰레기 문제가 각 나라들만의 문제가 아닌 전세계가 함께 풀어야하는 문제임을 인식하고
          쓰레기 문제 해결을 위해 우리가 해온 모니터링 방법을 알려주는 국제 프로그램에서 필리핀 정부
          관계자들에게 바다를 지키기 위해 예술로 할 수 있는 노력을 보여주는 강연을 하는 등 예술이
          해양 보존, 정책 변화, 미래세대 교육을 위해 무엇을 할 수 있을지에 큰 관심을 가지고 활동하고
          있다.
        </>
      }
      heroImage={{ src: '/images/marine/4.jpg', alt: 'Hug me - 돌아온 탕아', orientation: 'landscape' }}
      projects={PROJECTS}
    />
  );
}
