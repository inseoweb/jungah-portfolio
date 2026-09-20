import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function PageDream() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="꽃꿈"
      period="2024-"
      medium="69x58x4(cm), 한지 캐스팅에 아크릴"
      intro={
        <>
          환했던 그 시간이 꿈같아
          <br />
          또 다시 꽃이 되는 꿈을 꾸어본다
        </>
      }
      heroImage={{ src: '/images/dream/1.jpg', alt: '꽃꿈', orientation: 'portrait' }}
      images={Array.from({ length: 6 }).map((_, i) => ({
        src: `/images/dream/${i + 2}.jpg`,
        alt: '꽃꿈',
        orientation: 'portrait' as const,
      }))}
      nextWork={{ titleKo: '푸른 골목의 안쪽', href: '/blue-alley' }}
    />
  );
}
