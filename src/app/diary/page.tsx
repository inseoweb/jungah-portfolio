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
      images={[
        { src: '/images/diary/diary_01.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_02.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_03.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_04.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_05.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_06.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_07.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_08.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_09.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_10.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_11.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_12.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_13.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_14.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_15.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_16.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_17.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_18.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_19.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_20.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_21.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_22.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_23.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_24.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_25.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_26.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_27.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_28.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_29.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_30.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_31.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_32.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_33.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_34.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_35.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_36.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_37.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_38.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_39.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_40.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_41.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_42.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_43.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_44.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_45.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_46.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_47.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_48.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_49.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_50.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_51.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_52.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_53.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_54.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_55.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_56.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_57.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_58.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_59.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'portrait' },
        { src: '/images/diary/diary_60.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_61.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
        { src: '/images/diary/diary_62.jpeg', alt: loc('작은 사물의 일기', 'Diary of Small Objects'), orientation: 'landscape' },
      ]}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
