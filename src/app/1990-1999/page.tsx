import WorkSeriesDetail from '../components/WorkSeriesDetail';
import { loc } from '../../lib/i18n';
import { getWorkSeries } from '../../lib/works-data';

const series = getWorkSeries('1990-1999')!;

export default function Page19901999() {
  return (
    <WorkSeriesDetail
      seriesTitle={series.title}
      period={loc('1990–1999년 작업', 'Works from 1990–1999')}
      heroImage={{
        src: '/images/1990/1.jpeg',
        alt: '소리없는(부분)',
        orientation: 'landscape',
        captionTitle: loc('소리없는(부분)', 'Silent (Detail)'),
        captionDetail: loc('900 × 900 × 300 cm, 한지캐스팅, 1999', '900 × 900 × 300 cm, cast hanji, 1999'),
      }}
      images={[
        {
          src: '/images/1990/2.jpeg',
          alt: '소리없는(부분)',
          orientation: 'landscape',
          captionTitle: loc('소리없는(부분)', 'Silent (Detail)'),
          captionDetail: loc(
            '900 × 900 × 300 cm, 한지캐스팅, 1999',
            '900 × 900 × 300 cm, cast hanji, 1999',
          ),
        },
        {
          src: '/images/1990/3.jpeg',
          alt: '간판책',
          orientation: 'landscape',
          captionTitle: loc('간판책', 'Signboard Book'),
          captionDetail: loc(
            '68 × 142 cm, 동판에 엠보싱, 경첩, 2000',
            '68 × 142 cm, embossing on copper plate, hinges, 2000',
          ),
        },
        {
          src: '/images/1990/4.jpg',
          alt: '신림동',
          orientation: 'landscape',
          captionTitle: loc('신림동', 'Sillim-dong'),
          captionDetail: loc('28 × 36 cm, 사진 콜라주, 1998', '28 × 36 cm, photo collage, 1998'),
        },
        {
          src: '/images/1990/5.jpeg',
          alt: '신림동',
          orientation: 'landscape',
          captionTitle: loc('신림동', 'Sillim-dong'),
          captionDetail: loc('28 × 36 cm, 사진 콜라주, 1998', '28 × 36 cm, photo collage, 1998'),
        },
        {
          src: '/images/1990/6.jpeg',
          alt: '신림동',
          orientation: 'landscape',
          captionTitle: loc('신림동', 'Sillim-dong'),
          captionDetail: loc('28 × 36 cm, 사진 콜라주, 1998', '28 × 36 cm, photo collage, 1998'),
        },
        {
          src: '/images/1990/7.jpeg',
          alt: '신림동',
          orientation: 'landscape',
          captionTitle: loc('신림동', 'Sillim-dong'),
          captionDetail: loc('28 × 36 cm, 사진 콜라주, 1998', '28 × 36 cm, photo collage, 1998'),
        },
        {
          src: '/images/1990/8.jpg',
          alt: '틀',
          orientation: 'landscape',
          captionTitle: loc('틀', 'Frame'),
          captionDetail: loc(
            '60 × 160 cm, 목판, 실크스크린, 콜라그래피, 1999',
            '60 × 160 cm, woodcut, silkscreen, collagraph, 1999',
          ),
        },
        {
          src: '/images/1990/9.jpg',
          alt: '신림동 바다',
          orientation: 'landscape',
          captionTitle: loc('신림동 바다', 'Sillim-dong Sea'),
          captionDetail: loc(
            '60 × 160 cm, 스핏바이트, 모노프린트, 콜라주, 1998',
            '60 × 160 cm, spit bite, monoprint, collage, 1998',
          ),
        },
        {
          src: '/images/1990/10.jpeg',
          alt: '과자로 만든 궁전',
          orientation: 'landscape',
          captionTitle: loc('과자로 만든 궁전', 'Palace Made of Sweets'),
          captionDetail: loc(
            '70 × 162 cm, 목판, 실크스크린, 콜라그래피, 1999',
            '70 × 162 cm, woodcut, silkscreen, collagraph, 1999',
          ),
        },
        {
          src: '/images/1990/11.jpeg',
          alt: '시간이 멈춘',
          orientation: 'landscape',
          captionTitle: loc('시간이 멈춘', 'Time Stood Still'),
          captionDetail: loc(
            '50 × 102 cm, 수성 목판, 에칭, 실크스크린, 콜라그래피, 1999',
            '50 × 102 cm, water-based woodcut, etching, silkscreen, collagraph, 1999',
          ),
        },
        {
          src: '/images/1990/12.jpeg',
          alt: '얇은 약국',
          orientation: 'landscape',
          captionTitle: loc('얇은 약국', 'Thin Pharmacy'),
          captionDetail: loc(
            '28 × 36 cm, 콜라그래피, 아퀴틴트, 실크스크린, 1998',
            '28 × 36 cm, collagraph, aquatint, silkscreen, 1998',
          ),
        },
        {
          src: '/images/1990/13.jpeg',
          alt: '일상',
          orientation: 'landscape',
          captionTitle: loc('일상', 'Everyday Life'),
          captionDetail: loc(
            '30 × 54 cm, 장판지에 아크릴, 사진 콜라주, 1997',
            '30 × 54 cm, acrylic and photo collage on flooring paper, 1997',
          ),
        },
        {
          src: '/images/1990/14.jpeg',
          alt: '자화상',
          orientation: 'landscape',
          captionTitle: loc('자화상', 'Self-Portrait'),
          captionDetail: loc(
            '54 × 77 cm, 실크스크린, 색안경, 1998',
            '54 × 77 cm, silkscreen, tinted glasses, 1998',
          ),
        },
        {
          src: '/images/1990/15.jpeg',
          alt: '즐거운 오늘',
          orientation: 'square',
          captionTitle: loc('즐거운 오늘', 'A Joyful Day'),
          captionDetail: loc(
            '54 × 77 cm, 실크스크린, 색안경, 1998',
            '54 × 77 cm, silkscreen, tinted glasses, 1998',
          ),
        },
        {
          src: '/images/1990/16.jpeg',
          alt: '나',
          orientation: 'portrait',
          captionTitle: loc('나', 'Me'),
          captionDetail: loc(
            '70 × 67 cm, 수성목판, 수제한지에 딥 에칭, 실크스크린, 1999',
            '70 × 67 cm, water-based woodcut, deep etching and silkscreen on handmade hanji, 1999',
          ),
        },
        {
          src: '/images/1990/17.jpeg',
          alt: '별명2',
          orientation: 'landscape',
          captionTitle: loc('별명2', 'Nickname 2'),
          captionDetail: loc(
            '60 × 87 cm, 수성목판, 수제한지에 딥 에칭, 실크스크린, 실, 1999',
            '60 × 87 cm, water-based woodcut, deep etching and silkscreen on handmade hanji, thread, 1999',
          ),
        },
        {
          src: '/images/1990/18.jpeg',
          alt: '별명',
          orientation: 'landscape',
          captionTitle: loc('별명', 'Nickname'),
          captionDetail: loc('30 × 42 cm, 사진에 아크릴, 1999', '30 × 42 cm, acrylic on photograph, 1999'),
        },
        {
          src: '/images/1990/19.jpeg',
          alt: '별명',
          orientation: 'landscape',
          captionTitle: loc('별명', 'Nickname'),
          captionDetail: loc('30 × 42 cm, 사진에 아크릴, 1999', '30 × 42 cm, acrylic on photograph, 1999'),
        },
        {
          src: '/images/1990/20.jpeg',
          alt: '풍경',
          orientation: 'portrait',
          captionTitle: loc('풍경', 'Landscape'),
          captionDetail: loc(
            '50 × 35 cm, 종이에 아크릴, 콘테, 베니어판, 1998',
            '50 × 35 cm, acrylic and Conté on paper, plywood, 1998',
          ),
        },
        {
          src: '/images/1990/21.jpeg',
          alt: '컵 (일화용컵 도자기로 만들기)',
          orientation: 'landscape',
          captionTitle: loc(
            '컵 (일회용컵 도자기로 만들기)',
            'Cup (Making Disposable Cups in Ceramic)',
          ),
          captionDetail: loc('도자, 전사, 1999', 'ceramic, decal transfer, 1999'),
        },
        {
          src: '/images/1990/22.jpeg',
          alt: '일화용컵 도자기로 만들기',
          orientation: 'landscape',
          captionTitle: loc('일회용컵 도자기로 만들기', 'Making Disposable Cups in Ceramic'),
          captionDetail: loc('도자, 전사, 1999', 'ceramic, decal transfer, 1999'),
        },
        {
          src: '/images/1990/23.jpeg',
          alt: '불안한 안주',
          orientation: 'portrait',
          captionTitle: loc('불안한 안주', 'Uneasy Settlement'),
          captionDetail: loc(
            '** cm, 캔버스에 아크릴릭, 목탄, 테이프, 1995',
            '** cm, acrylic, charcoal and tape on canvas, 1995',
          ),
        },
      ]}
    />
  );
}
