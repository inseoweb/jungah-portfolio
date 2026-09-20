import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function PageBaroque() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="요정의 초상"
      period="2025-"
      medium="캔버스에 유화"
      heroImage={{ src: '/images/baroque/4.jpg', alt: '요정의 초상' }}
      images={[
        { src: '/images/baroque/3.jpg', alt: '요정의 초상', size: 'lg' },
        { src: '/images/baroque/1.jpg', alt: '요정의 초상', size: 'md' },
        { src: '/images/baroque/2.jpg', alt: '요정의 초상', size: 'sm' },
        { src: '/images/baroque/7.jpg', alt: '요정의 초상', size: 'lg' },
        { src: '/images/baroque/6.jpg', alt: '요정의 초상', size: 'md' },
        { src: '/images/baroque/5.jpg', alt: '요정의 초상', size: 'sm' },
        { src: '/images/baroque/11.jpg', alt: '요정의 초상', size: 'lg' },
        { src: '/images/baroque/8.jpg', alt: '요정의 초상', size: 'md' },
        { src: '/images/baroque/9.jpg', alt: '요정의 초상', size: 'sm' },
        { src: '/images/baroque/10.jpg', alt: '요정의 초상', size: 'sm' },
      ]}
      installationViews={[
        { src: '/images/baroque/exhibition/1.jpg', alt: '요정의 초상 전시 전경' },
        { src: '/images/baroque/exhibition/2.jpg', alt: '요정의 초상 전시 전경' },
        { src: '/images/baroque/exhibition/3.jpg', alt: '요정의 초상 전시 전경' },
        { src: '/images/baroque/12.jpg', alt: '요정의 초상 전시 전경' },
      ]}
      nextWork={{ titleKo: '작은 사물의 일기', href: '/fairy' }}
    />
  );
}
