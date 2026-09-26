import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc, NEEDS_TRANSLATION } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('flower')!;
const nextSeries = getWorkSeries('dream')!;

export default function PageFlower() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('63x63x4(cm), 한지 캐스팅에 수채', NEEDS_TRANSLATION)}
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
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
