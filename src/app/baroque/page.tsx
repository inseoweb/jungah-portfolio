import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('baroque')!;
const nextSeries = getWorkSeries('disposable')!;

export default function PageBaroque() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      medium={loc('캔버스에 유화', 'Oil on canvas')}
      intro={loc(
        <>
          2011년부터 해변의 쓰레기를 수집하고 조사하며 작업해 왔다. 인간에게 버려진 뒤 오랫동안
          떠돌며 빛바래고 닳은 사물들에 마음이 간다. 쓸모를 다하고 육지에도 바다에도 속하지 못한 채
          부유하는 모습에서 인간의 모습을 발견한다. 나는 이들을 &apos;요정&apos;이라 부르고, 그들이
          품은 시간과 흔적을 초상화로 그린다.
          <br />
          <br />
          왕과 귀족의 위엄을 드러내던 바로크 초상화의 형식과 명암법을 빌려, 버려진 사물을 독립적인
          주인공으로 화면의 중심에 놓는다. 쓸모를 잃은 존재에 존엄을 부여하는 이 초상은, 나의
          자화상이자 쓸모에 따라 평가되고 소모되는 현대인의 초상으로 겹쳐진다.
        </>,
        <>
          Since 2011, I have collected and studied marine debris. I am drawn to discarded objects
          faded and worn by long journeys at sea. Drifting between land and sea, belonging to
          neither, they remind me of human lives. I call them &ldquo;fairies&rdquo; and paint
          their portraits, attending to the time and traces they carry.
          <br />
          <br />
          Borrowing the forms and dramatic light and shadow of Baroque portraits of royalty and
          aristocracy, I place each discarded object at the center as an independent subject.
          Giving dignity to what has lost its usefulness, these portraits become both
          self-portraits and images of contemporary people valued for their utility, consumed,
          and cast aside.
        </>,
      )}
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
      appendedSeries={{
        title: loc('요정들', 'Fairies'),
        period: '2023-',
        medium: loc('각 91 × 73 cm, 2023', '91 × 73 cm each, 2023'),
        intro: loc(
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
            itself—cast aside once its usefulness has been exhausted within our wayward
            civilization.
            <br />
            A space of unknown origin,
            <br />
            a time of unknown wandering.
          </>,
        ),
        images: [
          { src: '/images/fairy/1.jpg', alt: loc('요정들', 'Fairies'), orientation: 'portrait' },
          ...Array.from({ length: 17 }).map((_, i) => ({
            src: `/images/fairy/${i + 2}.jpg`,
            alt: loc('요정들', 'Fairies'),
            orientation: 'portrait' as const,
          })),
        ],
      }}
      nextWork={{ title: nextSeries.title, href: nextSeries.href }}
    />
  );
}
