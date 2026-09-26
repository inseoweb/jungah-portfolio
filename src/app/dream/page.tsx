import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc, NEEDS_TRANSLATION, PENDING_TRANSLATION_NODE } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('dream')!;
const nextSeries = getWorkSeries('blue-alley')!;

export default function PageDream() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('69x58x4(cm), 한지 캐스팅에 아크릴', NEEDS_TRANSLATION)}
      intro={loc(
        <>
          환했던 그 시간이 꿈같아
          <br />
          또 다시 꽃이 되는 꿈을 꾸어본다
        </>,
        PENDING_TRANSLATION_NODE,
      )}
      heroImage={{ src: '/images/dream/1.jpg', alt: '꽃꿈', orientation: 'portrait' }}
      images={Array.from({ length: 6 }).map((_, i) => ({
        src: `/images/dream/${i + 2}.jpg`,
        alt: '꽃꿈',
        orientation: 'portrait' as const,
      }))}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
