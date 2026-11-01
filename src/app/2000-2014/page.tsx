import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('2000-2014')!;
const nextSeries = getWorkSeries('1990-1999')!;

const UNTITLED = loc('무제', 'Untitled');
const UNTITLED_DETAIL = loc('-', '-');

export default function Page20002014() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={loc('2000–2014년 작업', 'Works from 2000–2014')}
      heroImage={{
        src: '/images/2000/city-bus-ticket-office.jpeg',
        alt: '시내버스 승차권 판매소',
        orientation: 'landscape',
        captionTitle: loc('시내버스 승차권 판매소', 'City Bus Ticket Office'),
        captionDetail: loc('90 × 37 cm, 종이에 아크릴릭, 2003', '90 × 37 cm, acrylic on paper, 2003'),
      }}
      images={[
        {
          src: '/images/2000/woodworking-shop.jpeg',
          alt: '시민목공소',
          orientation: 'landscape',
          captionTitle: loc('시민목공소', 'Citizens’ Woodworking Shop'),
          captionDetail: loc('90 × 37 cm, 종이에 아크릴릭, 2003', '90 × 37 cm, acrylic on paper, 2003'),
        },
        {
          src: '/images/2000/market.jpeg',
          alt: '금호상회',
          orientation: 'landscape',
          captionTitle: loc('금호상회', 'Geumho Store'),
          captionDetail: loc(
            '162 × 336 cm, 캔버스에 아크릴릭, 2022',
            '162 × 336 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2000/sillim.jpg',
          alt: '몽유신림도',
          orientation: 'square',
          captionTitle: loc('몽유신림도', 'Mongyusillimdo'),
          captionDetail: loc(
            '98 × 39 cm, 베니어판에 먹, 아크릴, 2013',
            '98 × 39 cm, ink and acrylic on plywood, 2013',
          ),
        },
        {
          src: '/images/2000/afternoon.jpg',
          alt: '오후',
          orientation: 'landscape',
          captionTitle: loc('오후', 'Afternoon'),
          captionDetail: loc(
            '162 × 336 cm, 캔버스에 아크릴릭, 2022',
            '162 × 336 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2000/6.jpg',
          alt: '꿈과 이제 오후',
          orientation: 'landscape',
          captionTitle: loc('꿈과 이제 오후', 'Dream and Now, Afternoon'),
          captionDetail: loc(
            '90 × 193.9 cm, 캔버스에 아크릴릭, 2013',
            '90 × 193.9 cm, acrylic on canvas, 2013',
          ),
        },
        {
          src: '/images/2000/7.jpg',
          alt: '기다림-바람',
          orientation: 'landscape',
          captionTitle: loc('기다림-바람', 'Waiting–Wind'),
          captionDetail: loc('40 × 53 cm, 캔버스에 아크릴릭, 2014', '40 × 53 cm, acrylic on canvas, 2014'),
        },
        {
          src: '/images/2000/8.jpeg',
          alt: '꿈과 이제 오후',
          orientation: 'landscape',
          captionTitle: loc('꿈과 이제 오후', 'Dream and Now, Afternoon'),
          captionDetail: loc('40 × 53 cm, 캔버스에 아크릴릭, 2017', '40 × 53 cm, acrylic on canvas, 2017'),
        },
        // 9–23: title/details intentionally cleared to Untitled / - for all
        // of these, per explicit request — do not reintroduce old data here.
        {
          src: '/images/2000/9.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/10.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/11.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/12.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/13.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/14.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/15.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/16.jpg',
          alt: UNTITLED,
          orientation: 'square',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/17.jpg',
          alt: UNTITLED,
          orientation: 'square',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/18.jpg',
          alt: UNTITLED,
          orientation: 'portrait',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/19.jpg',
          alt: UNTITLED,
          orientation: 'square',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/20.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/21.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/22.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/23.jpg',
          alt: UNTITLED,
          orientation: 'landscape',
          captionTitle: UNTITLED,
          captionDetail: UNTITLED_DETAIL,
        },
        {
          src: '/images/2000/24.jpg',
          alt: '엄마생각',
          orientation: 'landscape',
          captionTitle: loc('엄마생각', 'Thinking of Mother'),
          captionDetail: loc('도자, 2010', 'ceramic, 2010'),
        },
        {
          src: '/images/2000/25.jpg',
          alt: '마흔',
          orientation: 'landscape',
          captionTitle: loc('마흔', 'Forty'),
          captionDetail: loc('도자, 2010', 'ceramic, 2010'),
        },
        {
          src: '/images/2000/26.jpg',
          alt: '7년만의 외출',
          orientation: 'portrait',
          captionTitle: loc('7년만의 외출', 'First Outing in Seven Years'),
          captionDetail: loc(
            'Scotch-Brite 수세미 바느질, 2005',
            'stitched Scotch-Brite scouring pads, 2005',
          ),
        },
      ]}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
