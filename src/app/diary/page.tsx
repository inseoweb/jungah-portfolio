import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('diary')!;
const nextSeries = getWorkSeries('marine')!;

export default function PageDiary() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={loc('2014–', '2014–ongoing')}
      medium={loc('종이에 연필, 수채', 'Pencil and watercolor on paper')}
      intro={loc(
        <>
          파도와 햇빛, 소금기에 닳고 부서진 해변의 사물들을 기록한 드로잉 연작이다. 발견한 날짜와
          장소, 좌표, 짧은 글을 함께 적는다. 사물의 용도나 기원을 알 수 없어도, 그 존재와 마주한
          순간을 작은 일기로 남긴다.
        </>,
        <>
          This drawing series records objects found on beaches, worn and broken by waves,
          sunlight, and salt. Each drawing includes the date, location, coordinates, and a brief
          note. Even when an object&apos;s original purpose or origin is unknown, these small
          diary entries preserve the moment of encountering it.
        </>,
      )}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
