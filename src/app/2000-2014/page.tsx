import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc, NEEDS_TRANSLATION } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('2000-2014')!;
const nextSeries = getWorkSeries('1990-1999')!;

export default function Page20002014() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      heroImage={{
        src: '/images/2000/city-bus-ticket-office.jpeg',
        alt: '시내버스 승차권 판매소',
        orientation: 'landscape',
        captionTitle: loc('시내버스 승차권 판매소', NEEDS_TRANSLATION),
        captionDetail: loc('90 × 37 cm, 종이에 아크릴릭, 2003', NEEDS_TRANSLATION),
      }}
      images={[
        {
          src: '/images/2000/woodworking-shop.jpeg',
          alt: '시민목공소',
          orientation: 'landscape',
          captionTitle: loc('시민목공소', NEEDS_TRANSLATION),
          captionDetail: loc('90 × 37 cm, 종이에 아크릴릭, 2003', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/market.jpeg',
          alt: '금호상회',
          orientation: 'landscape',
          captionTitle: loc('금호상회', NEEDS_TRANSLATION),
          captionDetail: loc('162 × 336 cm, 캔버스에 아크릴릭, 2022', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/sillim.jpg',
          alt: '몽유신림도',
          orientation: 'square',
          captionTitle: loc('몽유신림도', NEEDS_TRANSLATION),
          captionDetail: loc('98 × 39 cm, 베니어판에 먹, 아크릴, 2013', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/afternoon.jpg',
          alt: '이제오후',
          orientation: 'landscape',
          captionTitle: loc('이제오후', NEEDS_TRANSLATION),
          captionDetail: loc('162 × 336 cm, 캔버스에 아크릴릭, 2022', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/6.jpg',
          alt: '꿈과 이제 오후',
          orientation: 'landscape',
          captionTitle: loc('꿈과 이제 오후', NEEDS_TRANSLATION),
          captionDetail: loc('90 × 193.9 cm, 캔버스에 아크릴릭, 2013', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/7.jpg',
          alt: '오후',
          orientation: 'landscape',
          captionTitle: loc('오후', NEEDS_TRANSLATION),
          captionDetail: loc('40 × 53 cm, 캔버스에 아크릴릭, 2014', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/8.jpeg',
          alt: '검은 바다',
          orientation: 'landscape',
          captionTitle: loc('검은 바다', 'Black Sea'),
          captionDetail: loc('25 × 35 cm, 종이에 목탄, 2021', '25 × 35 cm, charcoal on paper, 2021'),
        },
        {
          src: '/images/2000/9.jpg',
          alt: '파랑토끼',
          orientation: 'landscape',
          captionTitle: loc('파랑토끼', 'Blue Rabbit'),
          captionDetail: loc(
            '162 × 112 cm, 캔버스에 아크릴릭, 2022',
            '162 × 112 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2000/10.jpg',
          alt: '시간의 무게',
          orientation: 'landscape',
          captionTitle: loc('시간의 무게', 'The Weight of Time'),
          captionDetail: loc(
            '89 × 195 cm, 캔버스에 아크릴릭, 2020',
            '89 × 195 cm, acrylic on canvas, 2020',
          ),
        },
        {
          src: '/images/2000/11.jpg',
          alt: 'Serendipity',
          orientation: 'landscape',
          captionTitle: loc('Serendipity', 'Serendipity'),
          captionDetail: loc(
            '45 × 109 cm, 캔버스에 아크릴릭, 2022',
            '45 × 109 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2000/12.jpg',
          alt: 'Serendipity',
          orientation: 'landscape',
          captionTitle: loc('Serendipity', 'Serendipity'),
          captionDetail: loc(
            '24.2 × 40.9 cm, 캔버스에 아크릴릭, 2022',
            '24.2 × 40.9 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2000/13.jpg',
          alt: '바람의 시간',
          orientation: 'landscape',
          captionTitle: loc('바람의 시간', 'Time of the Wind'),
          captionDetail: loc(
            '79 × 118 cm, 캔버스에 아크릴릭, 2022',
            '79 × 118 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2000/14.jpg',
          alt: '내 숲에 작은 새도 쉬고',
          orientation: 'landscape',
          captionTitle: loc('내 숲에 작은 새도 쉬고', 'A Little Bird Rests in My Forest'),
          captionDetail: loc('캔버스에 아크릴릭, 2023', 'acrylic on canvas, 2023'),
        },
        {
          src: '/images/2000/15.jpg',
          alt: '남겨진 것',
          orientation: 'landscape',
          captionTitle: loc('남겨진 것', 'What Remains'),
          captionDetail: loc(
            '106 × 213 cm, 캔버스에 아크릴릭, 2014, 2022',
            '106 × 213 cm, acrylic on canvas, 2014, 2022',
          ),
        },
        {
          src: '/images/2000/16.jpg',
          alt: '몽유철암도',
          orientation: 'square',
          captionTitle: loc('몽유철암도', 'Mongyucheoramdo'),
          captionDetail: loc('캔버스에 아크릴릭, 2022', 'acrylic on canvas, 2022'),
        },
        {
          src: '/images/2000/17.jpg',
          alt: '숨어있던 꽃',
          orientation: 'square',
          captionTitle: loc('숨어있던 꽃', 'Hidden Flowers'),
          captionDetail: loc('캔버스에 아크릴릭, 2016', 'acrylic on canvas, 2016'),
        },
        {
          src: '/images/2000/18.jpg',
          alt: '신전',
          orientation: 'portrait',
          captionTitle: loc('신전', 'Temple'),
          captionDetail: loc(
            '37 × 90 cm, 캔버스에 아크릴릭, 2023',
            '37 × 90 cm, acrylic on canvas, 2023',
          ),
        },
        {
          src: '/images/2000/19.jpg',
          alt: '시간의 정경',
          orientation: 'square',
          captionTitle: loc('시간의 정경', 'Scenes of Time'),
          captionDetail: loc('캔버스, 패널에 아크릴릭, 2024', 'acrylic on canvas and panel, 2024'),
        },
        {
          src: '/images/2000/20.jpg',
          alt: '시간의 정경',
          orientation: 'landscape',
          captionTitle: loc('시간의 정경', 'Scenes of Time'),
          captionDetail: loc('캔버스, 패널에 아크릴릭, 2024', 'acrylic on canvas and panel, 2024'),
        },
        {
          src: '/images/2000/21.jpg',
          alt: '시간의 정경',
          orientation: 'landscape',
          captionTitle: loc('시간의 정경', 'Scenes of Time'),
          captionDetail: loc('캔버스, 패널에 아크릴릭, 2024', 'acrylic on canvas and panel, 2024'),
        },
        {
          src: '/images/2000/22.jpg',
          alt: '시간의 정경',
          orientation: 'landscape',
          captionTitle: loc('시간의 정경', 'Scenes of Time'),
          captionDetail: loc('캔버스, 패널에 아크릴릭, 2024', 'acrylic on canvas and panel, 2024'),
        },
        {
          src: '/images/2000/23.jpg',
          alt: '시간의 정경',
          orientation: 'landscape',
          captionTitle: loc('시간의 정경', 'Scenes of Time'),
          captionDetail: loc('캔버스, 패널에 아크릴릭, 2024', 'acrylic on canvas and panel, 2024'),
        },
        {
          // alt & caption title fixed to match: old reference code's title
          // span read "시간의 정경" here, an evident copy-paste leftover from
          // the five "시간의 정경" blocks above it (its own alt already said
          // "엄마생각", consistent with 마흔/7년만의 외출 next to it).
          src: '/images/2000/24.jpg',
          alt: '엄마생각',
          orientation: 'landscape',
          captionTitle: loc('엄마생각', NEEDS_TRANSLATION),
          captionDetail: loc('도자, 2010', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/25.jpg',
          alt: '마흔',
          orientation: 'landscape',
          captionTitle: loc('마흔', NEEDS_TRANSLATION),
          captionDetail: loc('도자, 2010', NEEDS_TRANSLATION),
        },
        {
          src: '/images/2000/26.jpg',
          alt: '7년만의 외출',
          orientation: 'portrait',
          captionTitle: loc('7년만의 외출', NEEDS_TRANSLATION),
          captionDetail: loc('scotch brite 수세미 바느질, 2005', NEEDS_TRANSLATION),
        },
      ]}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
