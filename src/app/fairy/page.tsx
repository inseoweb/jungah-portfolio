import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('fairy')!;
const nextSeries = getWorkSeries('disposable')!;

export default function PageFairy() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('각 91 × 73 cm, 2023', '91 × 73 cm each, 2023')}
      intro={loc(
        <>
          바다에서 주운 플라스틱 쓰레기들.
          <br />
          인간의 소중한 시간과 노력으로 가질 수 있었던 요정들.
          <br />
          이제는 물도 육지도 이들의 자리가 아니다.
          <br />
          시간이 흘러 닳고 부서지고 바랜 이들을 하나하나 주워 씻어 말리고 초상화를 그리며 의미있게
          어루만진다.
          <br />
          줍고 닦아 위로한 것은 우리 길 잃은 문명에서 소용이 다해 버려지는 인간의 모습 그 자체이다.
          <br />
          어디서 온지 모를 공간,
          <br />
          언제부터 돌아다녔을지 모를 시간.
        </>,
        <>
          Plastic debris collected from the sea.
          <br />
          Fairies once brought into being through precious human time and effort.
          <br />
          Now, neither the sea nor the land offers them a place to belong.
          <br />
          Worn, broken, and faded over time, they are gathered one by one, washed and dried, then
          carefully tended to through the act of painting their portraits.
          <br />
          What is gathered, cleaned, and consoled ultimately reflects the human condition
          itself—cast aside once its usefulness has been exhausted within our wayward civilization.
          <br />
          A space of unknown origin,
          <br />
          a time of unknown wandering.
        </>,
      )}
      heroImage={{ src: '/images/fairy/1.jpg', alt: '요정들', orientation: 'portrait' }}
      images={Array.from({ length: 17 }).map((_, i) => ({
        src: `/images/fairy/${i + 2}.jpg`,
        alt: '요정들',
        orientation: 'portrait' as const,
      }))}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
