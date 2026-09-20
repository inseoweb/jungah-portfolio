import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function Page2015() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="남겨진 것들로부터의 위로"
      period="2015-"
      intro={
        <>
          오랫동안 내가 주목해온 것은 시간과 공간속에 빛을 잃고 남겨진 것. 관심 받지 못한 장소, 그리고
          감정들이다.
          <br />
          사물은 실용성 혹은 관계성을 탈피해 소외되었을 때 비로소 독립자재한다.
          <br />
          <br />
          숲과 들판, 낡은 건물과 인적 없는 풍경의 평면 작업과 일상적으로 버리고 외면한 것에 대한 작업은
          <br />
          이질적이고 소외된 시간에 함축된 미적 정감에 대한 회화적 성찰이다.
        </>
      }
      heroImage={{
        src: '/images/2015/forest-night.png',
        alt: '밤의 숲',
        orientation: 'landscape',
        caption: '밤의 숲 · 194×72(cm), 캔버스에 아크릴릭, 2020',
      }}
      images={[
        {
          src: '/images/2015/hidden-flowers.jpeg',
          alt: '숨어있던 꽃',
          orientation: 'landscape',
          caption: '숨어있던 꽃 · 80×232(cm), 캔버스에 아크릴릭, 2018, 2023',
        },
        {
          src: '/images/2015/thoughtful-consolation.jpeg',
          alt: '사려깊은 위로',
          orientation: 'landscape',
          caption: '사려깊은 위로 · 162×336(cm), 캔버스에 아크릴릭, 2022',
        },
        {
          src: "/images/2015/seems-like-doesn't-exist.png",
          alt: '없는 듯 있다',
          orientation: 'landscape',
          caption: '없는 듯 있다 · 60x169cm, 캔버스에 아크릴릭, 2018',
        },
        {
          src: '/images/2015/neighborhood.png',
          alt: '동네',
          orientation: 'landscape',
          caption: '동네 · 162×336(cm), 캔버스에 아크릴릭, 2022',
        },
        {
          src: '/images/2015/inside-the-blue-alley.jpg',
          alt: '푸른 골목의 안쪽',
          orientation: 'landscape',
          caption: '푸른 골목의 안쪽 · 155x95(cm), 캔버스에 아크릴릭, 2021',
        },
        {
          src: '/images/2015/black-sea-1.jpeg',
          alt: '검은 바다',
          orientation: 'landscape',
          caption: '검은 바다 · 25x35(cm), charcoal on paper, 2021',
        },
        {
          src: '/images/2015/black-sea-2.jpeg',
          alt: '검은 바다',
          orientation: 'landscape',
          caption: '검은 바다 · 25x35(cm), charcoal on paper, 2021',
        },
        {
          src: '/images/2015/blue-rabbit.jpeg',
          alt: '파랑토끼',
          orientation: 'landscape',
          caption: '파랑토끼 · 162x112(cm), acrylic on canvas, 2022',
        },
        {
          src: '/images/2015/weight-of-time.jpg',
          alt: '시간의 무게',
          orientation: 'landscape',
          caption: '시간의 무게 · 89x195(cm), 캔버스에 아크릴릭, 2020',
        },
        {
          src: '/images/2015/serendipity.jpeg',
          alt: 'Serendipity',
          orientation: 'landscape',
          caption: 'Serendipity · 45x109(cm), 캔버스에 아크릴릭, 2022',
        },
        {
          src: '/images/2015/small-serendipity.jpg',
          alt: 'Serendipity',
          orientation: 'landscape',
          caption: 'Serendipity · 24.2x40.9(cm), 캔버스에 아크릴릭, 2022',
        },
        {
          src: '/images/2015/time-of-the-wind.jpg',
          alt: '바람의 시간',
          orientation: 'landscape',
          caption: '바람의 시간 · 79x118(cm), 캔버스에 아크릴릭, 2022',
        },
        {
          src: '/images/2015/little-bird.png',
          alt: '내 숲에 작은 새도 쉬고',
          orientation: 'landscape',
          caption: '내 숲에 작은 새도 쉬고 · 캔버스에 아크릴릭, 2023',
        },
        {
          src: '/images/2015/remains.png',
          alt: '남겨진 것',
          orientation: 'landscape',
          caption: '남겨진 것 · 106x213(cm), 캔버스에 아크릴릭, 2014, 2022',
        },
        {
          src: '/images/2015/cheoram.png',
          alt: '몽유철암도',
          orientation: 'landscape',
          caption: '몽유철암도 · 캔버스에 아크릴릭, 2022',
        },
        {
          src: '/images/2015/hidden-flower.jpg',
          alt: '숨어있던 꽃',
          orientation: 'landscape',
          caption: '숨어있던 꽃 · 캔버스에 아크릴릭, 2016',
        },
        {
          src: '/images/2015/temple.jpeg',
          alt: '신전',
          orientation: 'landscape',
          caption: '신전 · 37x90(cm), 캔버스에 아크릴릭, 2023',
        },
        {
          src: '/images/2015/scene-of-time.jpg',
          alt: '시간의 정경',
          orientation: 'landscape',
          caption: '시간의 정경 · 캔버스, 패널에 아크릴릭, 2024',
        },
      ]}
      nextWork={{ titleKo: '도시·숲 2000~2014', href: '/2000-2014' }}
    />
  );
}
