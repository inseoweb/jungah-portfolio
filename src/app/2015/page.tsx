import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('2015')!;
const nextSeries = getWorkSeries('2000-2014')!;

export default function Page2015() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      intro={loc(
        <>
          오랫동안 내가 주목해온 것은 시간과 공간 속에 빛을 잃고 남겨진 것, 관심받지 못한 장소, 그리고
          감정들이다.
          <br />
          사물은 실용성 혹은 관계성을 탈피해 소외되었을 때 비로소 독립자재한다.
          <br />
          <br />
          숲과 들판, 낡은 건물과 인적 없는 풍경의 평면 작업과 일상적으로 버리고 외면한 것에 대한 작업은
          <br />
          이질적이고 소외된 시간에 함축된 미적 정감에 대한 회화적 성찰이다.
        </>,
        <>
          For a long time, I have been drawn to things that have lost their light and been left
          behind in time and space—to overlooked places and unnoticed emotions.
          <br />
          Objects begin to exist independently when they are removed from the contexts of utility
          and relationships and become estranged.
          <br />
          <br />
          My paintings of forests and fields, old buildings and deserted landscapes, along with
          works concerning things discarded and overlooked in everyday life, are painterly
          reflections on the aesthetic sensibilities embedded in unfamiliar and marginalized
          moments of time.
        </>,
      )}
      heroImage={{
        src: '/images/2015/forest-night.png',
        alt: '밤의 숲',
        orientation: 'landscape',
        captionTitle: loc('밤의 숲', 'Night Forest'),
        captionDetail: loc(
          '194 × 72 cm, 캔버스에 아크릴릭, 2020',
          '194 × 72 cm, acrylic on canvas, 2020',
        ),
      }}
      images={[
        {
          src: '/images/2015/hidden-flowers.jpeg',
          alt: '숨어있던 꽃',
          orientation: 'landscape',
          captionTitle: loc('숨어있던 꽃', 'Hidden Flowers'),
          captionDetail: loc(
            '80 × 232 cm, 캔버스에 아크릴릭, 2018, 2023',
            '80 × 232 cm, acrylic on canvas, 2018, 2023',
          ),
        },
        {
          src: '/images/2015/thoughtful-consolation.jpeg',
          alt: '사려깊은 위로',
          orientation: 'landscape',
          captionTitle: loc('사려깊은 위로', 'Thoughtful Consolation'),
          captionDetail: loc(
            '162 × 336 cm, 캔버스에 아크릴릭, 2022',
            '162 × 336 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: "/images/2015/seems-like-doesn't-exist.png",
          alt: '없는 듯 있다',
          orientation: 'landscape',
          captionTitle: loc('없는 듯 있다', 'Present as if Absent'),
          captionDetail: loc(
            '60 × 169 cm, 캔버스에 아크릴릭, 2018',
            '60 × 169 cm, acrylic on canvas, 2018',
          ),
        },
        {
          src: '/images/2015/neighborhood.png',
          alt: '동네',
          orientation: 'landscape',
          captionTitle: loc('동네', 'Neighborhood'),
          captionDetail: loc(
            '162 × 336 cm, 캔버스에 아크릴릭, 2022',
            '162 × 336 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2015/inside-the-blue-alley.jpg',
          alt: '푸른 골목의 안쪽',
          orientation: 'landscape',
          captionTitle: loc('푸른 골목의 안쪽', 'Inside the Blue Alley'),
          captionDetail: loc(
            '155 × 95 cm, 캔버스에 아크릴릭, 2021',
            '155 × 95 cm, acrylic on canvas, 2021',
          ),
        },
        {
          src: '/images/2015/black-sea-1.jpeg',
          alt: '검은 바다',
          orientation: 'landscape',
          captionTitle: loc('검은 바다', 'Black Sea'),
          captionDetail: loc('25 × 35 cm, 종이에 목탄, 2021', '25 × 35 cm, charcoal on paper, 2021'),
        },
        {
          src: '/images/2015/black-sea-2.jpeg',
          alt: '검은 바다',
          orientation: 'landscape',
          captionTitle: loc('검은 바다', 'Black Sea'),
          captionDetail: loc('25 × 35 cm, 종이에 목탄, 2021', '25 × 35 cm, charcoal on paper, 2021'),
        },
        {
          src: '/images/2015/blue-rabbit.jpeg',
          alt: '파랑토끼',
          orientation: 'landscape',
          captionTitle: loc('파랑토끼', 'Blue Rabbit'),
          captionDetail: loc(
            '162 × 112 cm, 캔버스에 아크릴릭, 2022',
            '162 × 112 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2015/weight-of-time.jpg',
          alt: '시간의 무게',
          orientation: 'landscape',
          captionTitle: loc('시간의 무게', 'The Weight of Time'),
          captionDetail: loc(
            '89 × 195 cm, 캔버스에 아크릴릭, 2020',
            '89 × 195 cm, acrylic on canvas, 2020',
          ),
        },
        {
          src: '/images/2015/serendipity.jpeg',
          alt: 'Serendipity',
          orientation: 'landscape',
          captionTitle: loc('Serendipity', 'Serendipity'),
          captionDetail: loc(
            '45 × 109 cm, 캔버스에 아크릴릭, 2022',
            '45 × 109 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2015/small-serendipity.jpg',
          alt: 'Serendipity',
          orientation: 'landscape',
          captionTitle: loc('Serendipity', 'Serendipity'),
          captionDetail: loc(
            '24.2 × 40.9 cm, 캔버스에 아크릴릭, 2022',
            '24.2 × 40.9 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2015/time-of-the-wind.jpg',
          alt: '바람의 시간',
          orientation: 'landscape',
          captionTitle: loc('바람의 시간', 'Time of the Wind'),
          captionDetail: loc(
            '79 × 118 cm, 캔버스에 아크릴릭, 2022',
            '79 × 118 cm, acrylic on canvas, 2022',
          ),
        },
        {
          src: '/images/2015/little-bird.png',
          alt: '내 숲에 작은 새도 쉬고',
          orientation: 'landscape',
          captionTitle: loc('내 숲에 작은 새도 쉬고', 'A Little Bird Rests in My Forest'),
          captionDetail: loc('캔버스에 아크릴릭, 2023', 'acrylic on canvas, 2023'),
        },
        {
          src: '/images/2015/remains.png',
          alt: '남겨진 것',
          orientation: 'landscape',
          captionTitle: loc('남겨진 것', 'What Remains'),
          captionDetail: loc(
            '106 × 213 cm, 캔버스에 아크릴릭, 2014, 2022',
            '106 × 213 cm, acrylic on canvas, 2014, 2022',
          ),
        },
        {
          src: '/images/2015/cheoram.png',
          alt: '몽유철암도',
          orientation: 'landscape',
          captionTitle: loc('몽유철암도', 'Mongyucheoramdo'),
          captionDetail: loc('캔버스에 아크릴릭, 2022', 'acrylic on canvas, 2022'),
        },
        {
          src: '/images/2015/hidden-flower.jpg',
          alt: '숨어있던 꽃',
          orientation: 'landscape',
          captionTitle: loc('숨어있던 꽃', 'Hidden Flowers'),
          captionDetail: loc('캔버스에 아크릴릭, 2016', 'acrylic on canvas, 2016'),
        },
        {
          src: '/images/2015/temple.jpeg',
          alt: '신전',
          orientation: 'landscape',
          captionTitle: loc('신전', 'Temple'),
          captionDetail: loc(
            '37 × 90 cm, 캔버스에 아크릴릭, 2023',
            '37 × 90 cm, acrylic on canvas, 2023',
          ),
        },
        {
          src: '/images/2015/scene-of-time.jpg',
          alt: '시간의 정경',
          orientation: 'landscape',
          captionTitle: loc('시간의 정경', 'Scenes of Time'),
          captionDetail: loc(
            '캔버스, 패널에 아크릴릭, 2024',
            'acrylic on canvas and panel, 2024',
          ),
        },
      ]}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
