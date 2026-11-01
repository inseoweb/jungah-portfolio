import WorkSeriesDetail, { type EditorialImage } from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('disposable')!;
const nextSeries = getWorkSeries('flower')!;

const ALT = loc('영원을 꿈꾸는 일회용', 'The Disposable Dreaming of Eternity');

const IMAGES: Omit<EditorialImage, 'alt'>[] = [
  { src: '/images/disposable/forever_1.jpeg', orientation: 'landscape' },
  { src: '/images/disposable/forever_2.jpeg', orientation: 'landscape' },
  { src: '/images/disposable/forever_3.jpeg', orientation: 'portrait' },
  { src: '/images/disposable/forever_4.jpeg', orientation: 'square' },
  { src: '/images/disposable/forever_5.jpeg', orientation: 'portrait' },
  { src: '/images/disposable/forever_6.jpeg', orientation: 'portrait' },
  { src: '/images/disposable/forever_7.jpeg', orientation: 'portrait' },
  { src: '/images/disposable/forever_8.jpeg', orientation: 'portrait' },
  { src: '/images/disposable/forever_9.jpeg', orientation: 'portrait' },
  { src: '/images/disposable/forever_10.jpeg', orientation: 'landscape' },
  { src: '/images/disposable/forever_11.jpeg', orientation: 'landscape' },
  { src: '/images/disposable/forever_12.jpeg', orientation: 'square' },
  { src: '/images/disposable/forever_13.jpeg', orientation: 'landscape' },
];

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
      heroImage={{ ...IMAGES[0], alt: ALT }}
      images={IMAGES.slice(1).map((img) => ({ ...img, alt: ALT }))}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
