import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('baroque')!;
const nextSeries = getWorkSeries('fairy')!;

export default function PageBaroque() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('캔버스에 유화', 'oil on canvas')}
      heroImage={{
        src: '/images/baroque/exhibition/1.jpg',
        alt: loc('요정의 초상 전시 전경', 'Installation View'),
        orientation: 'landscape',
      }}
      installationViews={[
        {
          src: '/images/baroque/exhibition/2.jpg',
          alt: loc('요정의 초상 전시 전경', 'Installation View'),
          orientation: 'landscape',
        },
        {
          src: '/images/baroque/exhibition/3.jpg',
          alt: loc('요정의 초상 전시 전경', 'Installation View'),
          orientation: 'landscape',
        },
        {
          src: '/images/baroque/12.jpg',
          alt: loc('요정의 초상 전시 전경', 'Installation View'),
          orientation: 'portrait',
        },
      ]}
      installationViewsPosition="top"
      images={[
        { src: '/images/baroque/1.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'landscape' },
        { src: '/images/baroque/2.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'landscape' },
        { src: '/images/baroque/3.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'portrait' },
        { src: '/images/baroque/4.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'portrait' },
        { src: '/images/baroque/5.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'landscape' },
        { src: '/images/baroque/6.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'landscape' },
        { src: '/images/baroque/7.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'portrait' },
        { src: '/images/baroque/8.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'portrait' },
        { src: '/images/baroque/9.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'portrait' },
        { src: '/images/baroque/10.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'portrait' },
        { src: '/images/baroque/11.jpg', alt: loc('요정의 초상', 'The Portrait of Fairies'), orientation: 'landscape' },
      ]}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
