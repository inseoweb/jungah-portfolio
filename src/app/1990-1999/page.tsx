import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc, NEEDS_TRANSLATION } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('1990-1999')!;

export default function Page19901999() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={series.period}
      heroImage={{
        src: '/images/1990/1.jpeg',
        alt: '소리없는(부분)',
        orientation: 'landscape',
        caption: loc('소리없는(부분) · 900x900x300(cm), 한지캐스팅, 1999', NEEDS_TRANSLATION),
      }}
      images={[
        {
          src: '/images/1990/2.jpeg',
          alt: '소리없는(부분)',
          orientation: 'landscape',
          caption: loc('소리없는(부분) · 900x900x300(cm), 한지캐스팅, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/3.jpeg',
          alt: '간판책',
          orientation: 'landscape',
          caption: loc('간판책 · 68x142(cm), 동판에 엠보싱, 경첩, 2000', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/4.jpg',
          alt: '신림동',
          orientation: 'landscape',
          caption: loc('신림동 · 28x36(cm), 사진 꼴라쥬, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/5.jpeg',
          alt: '신림동',
          orientation: 'landscape',
          caption: loc('신림동 · 28x36(cm), 사진 꼴라쥬, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/6.jpeg',
          alt: '신림동',
          orientation: 'landscape',
          caption: loc('신림동 · 28x36(cm), 사진 꼴라쥬, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/7.jpeg',
          alt: '신림동',
          orientation: 'landscape',
          caption: loc('신림동 · 28x36(cm), 사진 꼴라쥬, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/8.jpg',
          alt: '틀',
          orientation: 'landscape',
          caption: loc('틀 · 60x160(cm), 목판, 실크스크린, 꼴라그래피, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/9.jpg',
          alt: '신림동 바다',
          orientation: 'landscape',
          caption: loc('신림동 바다 · 60x160(cm), 스핏바이트, 모노프린트, 꼴라쥬, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/10.jpeg',
          alt: '과자로 만든 궁전',
          orientation: 'landscape',
          caption: loc('과자로 만든 궁전 · 70x162(cm), 목판, 실크스크린, 꼴라그래피, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/11.jpeg',
          alt: '시간이 멈춘',
          orientation: 'landscape',
          caption: loc('시간이 멈춘 · 50x102(cm), 수성 목판, 에칭, 실크스크린, 꼴라그래피, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/12.jpeg',
          alt: '얇은 약국',
          orientation: 'landscape',
          caption: loc('얇은 약국 · 28x36(cm), 꼴라그래피, 아퀴틴트, 실크스크린, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/13.jpeg',
          alt: '일상',
          orientation: 'landscape',
          caption: loc('일상 · 30x54(cm), 장판지에 아크릴, 사진꼴라쥬, 1997', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/14.jpeg',
          alt: '자화상',
          orientation: 'landscape',
          caption: loc('자화상 · 54x77(cm), 실크스크린, 색안경, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/15.jpeg',
          alt: '즐거운 오늘',
          orientation: 'square',
          caption: loc('즐거운 오늘 · 54x77(cm), 실크스크린, 색안경, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/16.jpeg',
          alt: '나',
          orientation: 'portrait',
          caption: loc('나 · 70x67(cm), 수성목판, 수제한지에 딮 에칭, 실크스크린, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/17.jpeg',
          alt: '별명2',
          orientation: 'landscape',
          caption: loc('별명2 · 60x87(cm), 수성목판, 수제한지에 딮 에칭, 실크스크린, 실, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/18.jpeg',
          alt: '별명',
          orientation: 'landscape',
          caption: loc('별명 · 30x42(cm), 사진에 아크릴, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/19.jpeg',
          alt: '별명',
          orientation: 'landscape',
          caption: loc('별명 · 30x42(cm), 사진에 아크릴, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/20.jpeg',
          alt: '풍경',
          orientation: 'portrait',
          caption: loc('풍경 · 50X35(cm), 종이에 아크릴, 콘테, 베니어판, 1998', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/21.jpeg',
          alt: '컵 (일화용컵 도자기로 만들기)',
          orientation: 'landscape',
          caption: loc('컵 (일화용컵 도자기로 만들기) · 도자, 전사, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/22.jpeg',
          alt: '일화용컵 도자기로 만들기',
          orientation: 'landscape',
          caption: loc('일화용컵 도자기로 만들기 · 도자, 전사, 1999', NEEDS_TRANSLATION),
        },
        {
          src: '/images/1990/23.jpeg',
          alt: '불안한 안주',
          orientation: 'portrait',
          caption: loc('불안한 안주 · 캔버스에 아크릴릭, 목탄, 테잎, 1995', NEEDS_TRANSLATION),
        },
      ]}
    />
  );
}
