import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function PageDisposable() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="영원을 꿈꾸는 일회용"
      period="2025-"
      intro={
        <>
          제10회 메디치상 수상 기념전
          <br />
          학고재 아트센터, 서울특별시 종로구 삼청로 48-4
          <br />
          2025. 11. 11(화) – 11. 25(화)
        </>
      }
      heroImage={{ src: '/images/posters/0.jpg', alt: '영원을 꿈꾸는 일회용', orientation: 'landscape' }}
      nextWork={{ titleKo: '꽃보다 아름답다', href: '/flower' }}
    />
  );
}
