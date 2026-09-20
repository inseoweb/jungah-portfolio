import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function PageBaroque() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="요정의 초상"
      period="2025-"
      medium="캔버스에 유화"
      heroImage={{ src: '/images/baroque/exhibition/1.jpg', alt: '요정의 초상 전시 전경', orientation: 'landscape' }}
      installationViews={[
        { src: '/images/baroque/exhibition/2.jpg', alt: '요정의 초상 전시 전경', orientation: 'landscape' },
        { src: '/images/baroque/exhibition/3.jpg', alt: '요정의 초상 전시 전경', orientation: 'landscape' },
        { src: '/images/baroque/12.jpg', alt: '요정의 초상 전시 전경', orientation: 'portrait' },
      ]}
      installationViewsPosition="top"
      images={[
        { src: '/images/baroque/1.jpg', alt: '요정의 초상', orientation: 'landscape' },
        { src: '/images/baroque/2.jpg', alt: '요정의 초상', orientation: 'landscape' },
        { src: '/images/baroque/3.jpg', alt: '요정의 초상', orientation: 'portrait' },
        { src: '/images/baroque/4.jpg', alt: '요정의 초상', orientation: 'portrait' },
        { src: '/images/baroque/5.jpg', alt: '요정의 초상', orientation: 'landscape' },
        { src: '/images/baroque/6.jpg', alt: '요정의 초상', orientation: 'landscape' },
        { src: '/images/baroque/7.jpg', alt: '요정의 초상', orientation: 'portrait' },
        { src: '/images/baroque/8.jpg', alt: '요정의 초상', orientation: 'portrait' },
        { src: '/images/baroque/9.jpg', alt: '요정의 초상', orientation: 'portrait' },
        { src: '/images/baroque/10.jpg', alt: '요정의 초상', orientation: 'portrait' },
        { src: '/images/baroque/11.jpg', alt: '요정의 초상', orientation: 'landscape' },
      ]}
      nextWork={{ titleKo: '작은 사물의 일기', href: '/fairy' }}
    />
  );
}
