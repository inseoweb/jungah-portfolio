import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc, PENDING_TRANSLATION_NODE } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('disposable')!;
const nextSeries = getWorkSeries('flower')!;

export default function PageDisposable() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      intro={loc(
        <>
          제10회 메디치상 수상 기념전
          <br />
          학고재 아트센터, 서울특별시 종로구 삼청로 48-4
          <br />
          2025. 11. 11(화) – 11. 25(화)
        </>,
        PENDING_TRANSLATION_NODE,
      )}
      heroImage={{ src: '/images/posters/0.jpg', alt: '영원을 꿈꾸는 일회용', orientation: 'landscape' }}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
