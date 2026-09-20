import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function PageFlower() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="꽃보다 아름답다"
      period="2003-"
      medium="63x63x4(cm), 한지 캐스팅에 수채"
      heroImage={{ src: '/images/flower/1.jpg', alt: '꽃보다 아름답다', orientation: 'square' }}
      images={Array.from({ length: 25 }).map((_, i) => ({
        src: `/images/flower/${i + 2}.jpg`,
        alt: '꽃보다 아름답다',
        orientation: 'square' as const,
      }))}
      installationViews={[
        { src: '/images/flower/exhibition/1.jpg', alt: '꽃보다 아름답다 전시 전경', orientation: 'landscape' },
        { src: '/images/flower/exhibition/2.jpg', alt: '꽃보다 아름답다 전시 전경', orientation: 'landscape' },
      ]}
      nextWork={{ titleKo: '꽃꿈', href: '/dream' }}
    />
  );
}
