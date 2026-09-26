import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('disposable')!;
const nextSeries = getWorkSeries('flower')!;

export default function PageDisposable() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('백자토, 투명유', 'Porcelain and clear glaze')}
      intro={loc(
        <>
          1999년에 시작해 2002년 석사학위 논문에 기록된 이 작업은, 쓸모를 다한 존재의 가치를 탐구하는
          현재 작업의 출발점이다.
          <br />
          <br />
          쉽게 쓰고 버리는 종이컵을 견고한 도자기로 재현해, 일회용품의 일시성과 도자기의 영속성을
          대비한다. 구겨지고 찌그러진 형상은 쉽게 소모되고 잊히는 인간의 삶을 환기하며, 쓸모를 넘어
          오래도록 소중히 다루어지기를 바라는 마음을 담는다.
        </>,
        <>
          Begun in 1999 and documented in my 2002 master&apos;s thesis, this work marks the
          beginning of my ongoing exploration of the value of things that have outlived their
          usefulness.
          <br />
          <br />
          Disposable paper cups are recreated in durable porcelain, contrasting their brief use
          with the lasting nature of ceramics. Their crumpled and distorted forms evoke human
          lives that are easily consumed and forgotten, expressing a wish for both objects and
          people to be valued beyond their usefulness and treated with lasting care.
        </>,
      )}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
