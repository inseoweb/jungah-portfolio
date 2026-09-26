import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc, NEEDS_TRANSLATION } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('blue-alley')!;
const nextSeries = getWorkSeries('marine')!;

export default function PageBlueAlley() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('155x95(cm), 캔버스에 아크릴릭, 2021', NEEDS_TRANSLATION)}
      heroImage={{ src: '/images/critique-jung/7.jpg', alt: '푸른 골목의 안쪽', orientation: 'landscape' }}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
