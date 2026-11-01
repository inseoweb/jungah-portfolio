import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('flower')!;
const nextSeries = getWorkSeries('dream')!;

export default function PageFlower() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('63 × 63 × 4 cm, 한지 캐스팅에 수채', '63 × 63 × 4 cm, watercolor on cast hanji')}
      intro={loc(
        <>
          2003년 아이를 낳고 마음껏 작업하기 어려웠던 시기에 시작한 작업이다. 어릴 때부터 그림을
          그리며 살아온 나는 삶의 중심이 빠져나간 듯, 아무것도 아닌 사람이 된 것 같은 정체성의
          혼란을 겪고 있었다.
          <br />
          <br />
          그러던 어느 날, 알맹이는 사라지고 꼭지만 남은 딸기 접시에서 내 모습을 보았다. 쓸쓸했지만,
          그 접시는 그 자체로 아름다웠다. 한지로 캐스팅한 접시에 먹고 남은 딸기 꼭지를 그리기
          시작했고, 작업은 20년 넘게 이어졌다.
          <br />
          <br />
          이 접시들은 오스카 와일드의 동화 『행복한 왕자』에서 자신이 가진 것을 모두 나누어 준 뒤
          초라해져 철거되는 왕자를 떠올리게 한다. 화려함 이면의 자화상이자, 무언가를 내어준 뒤
          남겨진 모습이다. 나는 그 안에서 아름다움의 의미를 묻는다.
        </>,
        <>
          I began this work in 2003, during a period when raising a newborn made it difficult to
          work freely. Having lived as a painter since childhood, I found myself caught in a
          crisis of identity, as if the center of my life had slipped away, leaving me feeling
          like no one at all.
          <br />
          <br />
          Then, one day, I saw myself in a strawberry dish where the fruit was gone and only the
          stems remained. It was a lonely sight, yet the dish itself was beautiful. I began
          painting the leftover strawberry stems onto dishes cast in hanji, and the work has
          continued for more than twenty years.
          <br />
          <br />
          These dishes recall the prince in Oscar Wilde&apos;s fairy tale <em>The Happy Prince</em>,
          who gives away everything he has until he is stripped bare and finally torn down. They
          are self-portraits beneath the surface of splendor, what remains after giving something
          away. Within them, I ask what beauty truly means.
        </>,
      )}
      heroImage={{ src: '/images/flower/1.jpg', alt: '꽃보다 아름답다', orientation: 'square' }}
      images={Array.from({ length: 25 }).map((_, i) => ({
        src: `/images/flower/${i + 2}.jpg`,
        alt: '꽃보다 아름답다',
        orientation: 'square' as const,
      }))}
      installationViews={[
        { src: '/images/flower/exhibition/1.jpg', alt: '꽃보다 아름답다 전시 전경', orientation: 'landscape' },
        { src: '/images/flower/exhibition/2.jpg', alt: '꽃보다 아름답다 전시 전경', orientation: 'landscape' },
      ]}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
