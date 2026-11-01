'use client';

import { loc, useLanguage } from '../../lib/language';

const NOTE_2026_TITLE = loc(
  '남겨진 것들로부터의 회복: 시간의 신전과 밤의 숲',
  'Recovery from What Remains: The Temple of Time and the Forest at Night',
);
const NOTE_2026_SUBTITLE = loc('26년 작가노트', 'Artist’s Note, 2026');

const NOTE_2026_BODY_KO = (
  <>
    <p className="mb-6 text-gray-700 leading-relaxed">
      나의 작업은 90년대부터 지금까지, 화려한 중심보다는 밀려난 주변부를 향해왔다. 애초에 오래 쓰일
      마음 없이 필요에 의해 급하게 지어진 건물들, 그리고 쓸모를 다해 재개발의 그늘로 사라져가는
      풍경들이 내 시선의 기점이었다. 낡고 빛바랜 모서리, 상황에 맞춰 투박하게 덧대어진 모습들에서
      나는 묵묵한 쓸쓸함을 읽었다. 곁에 있으나 아무도 눈길을 멈추지 않는 것들. 나는 그 &lsquo;익숙한
      소외&rsquo;를 &lsquo;낯설게 만들기&rsquo;를 통해 다시 보게 하고 싶었다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      이러한 시선은 거제에서의 25년이라는 시간 속에서 더욱 깊어졌다. 오롯이 혼자 작업에 집중하며
      보낸 고독한 시간은 나를 소외된 것들에 더욱 밀착하게 했다. 바다 위를 부유하는 쓰레기를 수집하고
      분류하여 작업해온 해양 환경 프로젝트 역시 그 연장선에 있다. 큰길의 새 건물보다 뒷골목의 낡은
      벽이, 반짝이는 새 물건보다 해변의 빛바랜 플라스틱 조각이 내 마음을 붙드는 이유는 명확하다.
      빠른 변화를 따라잡지 못해 뒤처진 그것들의 모습이, 어쩌면 이 시대를 살아가는 우리 인간의
      초상과 닮아있기 때문이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      나의 화면은 이질적인 것들의 조합이 만들어내는 묘한 어색함이 지배한다. 대학 시절부터 탐구해온
      조형 요소와 공간의 조화는 서울이라는 거대 도시를 &lsquo;물끄러미&rsquo; 바라보던 소도시 출신의
      이방인적 감각에서 비롯되었다. 재현을 통한 3차원의 일루전과 화면이 평면임을 드러내는 2차원적
      요소가 만나는 접점, 그곳에서 현실을 닮았으나 낯선 환영이 탄생한다. 안과 밖, 과거와 현재, 그리고
      미래가 한 화면에서 충돌하며 공존한다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      특히 팬데믹 시기에 만난 &lsquo;밤의 숲&rsquo;은 나에게 깊은 위로의 공간이었다. 깊이를 알 수
      없는 어둠 속의 숲은 나에게 쉬운 위로를 건네지 않았다. 그저 묵묵히 옆을 지켜주는 친구처럼
      존재할 뿐이었다. 나는 그 무한한 깊이를 표현하기 위해 그리고 덮고, 다시 그리기를 반복했다. 그
      수행의 과정은 대단한 무엇이 되지 못했어도 조용히 제 자리를 견뎌낸 시간들을 연결하는 작업이었다.
      이제 그 공간은 고대 그리스의 신전처럼, 장소성을 넘어선 영원한 &lsquo;시간성&rsquo;을 획득한다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      최근 작업에 등장하는 &lsquo;요정&rsquo;과 &lsquo;접시&rsquo;는 이러한 실존적 고민이
      &lsquo;대자대비(大慈大悲)&rsquo;의 마음과 만난 결과다. 자본이 최상위 가치가 되어버린 세상에서,
      가격을 매길 수 없는 나의 시간과 노동을 버려진 쓰레기에 쏟아붓는 행위는 자본주의의 논리를 향한
      조용한 비웃음이자 저항이다.
    </p>
    <p className="text-gray-700 leading-relaxed">
      결국 나의 작업은 &lsquo;버려진 것들 속에서 인간성을 기억하고 회복하는 행위&rsquo;이다. 도시는
      인간이 가장 많지만 역설적으로 인간이 가장 보이지 않는 곳이다. 나는 그곳에서 익명성과 속도에
      마모된 존재들의 상처를 발견하고, 측은지심의 태도로 그 흔적들을 다시 연결한다. 30여년 전
      알루미늄 판 위에 도시의 그림자를 담아내던 드로잉은, 이제 보이지 않는 도시의 흐름을 읽어내고
      소외된 존재들을 &lsquo;함께 좋은 곳&rsquo;으로 인도하고자 하는 제의(祭儀)적 예술로 이어지고
      있다.
    </p>
  </>
);

const NOTE_2026_BODY_EN = (
  <>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Since the 1990s, my work has turned toward the margins rather than the glittering center. My
      point of departure was the landscape of buildings hastily constructed out of necessity, never
      intended to endure, and places that, having outlived their usefulness, were disappearing into
      the shadows of redevelopment. In worn and faded corners and in structures crudely patched
      according to circumstance, I found a quiet loneliness. These were things that remained beside
      us yet rarely caused anyone to stop and look. Through the act of making this &ldquo;familiar
      alienation&rdquo; strange, I wanted to make it visible again.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      This perspective deepened over the twenty-five years I spent in Geoje. The solitary years
      devoted entirely to my work drew me closer to things that had been marginalized and left
      behind. My marine environmental projects&mdash;collecting, sorting, and working with debris
      drifting at sea&mdash;grew from the same impulse. There is a clear reason why an old wall in a
      back alley holds me more strongly than a new building on a main street, and why a faded
      fragment of plastic washed ashore draws me more than a gleaming new object. Perhaps it is
      because these things, left behind by the speed of change, resemble the human condition in our
      time.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      My paintings are shaped by a peculiar sense of dissonance created by bringing disparate
      elements together. My exploration of the relationship between form and space, which began
      during my university years, grew from the sensibility of an outsider from a small city,
      quietly observing the vast metropolis of Seoul. At the point where three-dimensional illusion
      created through representation meets two-dimensional elements that reveal the flatness of the
      picture plane, an image emerges that resembles reality yet remains strangely unfamiliar.
      Inside and outside, past and present, and even the future collide and coexist within a single
      frame.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      The &ldquo;forest at night&rdquo; that I encountered during the pandemic became a space of
      profound consolation for me. The dark forest, its depth impossible to measure, offered no
      easy comfort. It simply remained beside me, like a friend who quietly stays. To express its
      seemingly infinite depth, I repeatedly painted, covered, and painted again. This process
      became a way of connecting those stretches of time that had quietly endured in their places,
      even without becoming anything extraordinary. The space has now acquired an eternal sense of
      &ldquo;temporality&rdquo; beyond any specific place, like an ancient Greek temple.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      The &ldquo;fairies&rdquo; and &ldquo;plates&rdquo; that appear in my recent work are the
      result of these existential concerns encountering a spirit of great compassion. In a world
      where capital has become the highest measure of value, pouring my unpriceable time and labor
      into discarded waste is both a quiet mockery of and resistance to the logic of capitalism.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Ultimately, my work is an act of remembering and recovering humanity within what has been
      discarded. The city contains the greatest number of people, yet paradoxically it is also
      where people are least visible. There, I encounter the wounds of lives worn down by anonymity
      and speed, and reconnect their traces through an attitude of compassion. Drawings that
      captured the shadows of the city on aluminum plates some thirty years ago have now developed
      into a ritualistic form of art: one that reads the invisible currents of the city and seeks
      to guide marginalized beings toward a place where we might be well together.
    </p>
  </>
);

const NOTE_2025_TITLE = loc('화려함 이면의 자화상', 'Self-Portrait Beyond the Splendor');
const NOTE_2025_SUBTITLE = loc('25년 작가노트', 'Artist’s Note, 2025');

const NOTE_2025_BODY_KO = (
  <>
    <p className="mb-6 text-gray-700 leading-relaxed">
      오랫동안 내가 주목해온 것은 시간과 공간 속에 빛을 잃고 남겨진 것.
      <br />
      관심 받지 못한 장소, 그리고 감정들이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      현대사회에서는 사물을 유용성의 맥락안에서 파악하고, 유용성이 없으면 의미 없는 것으로
      간주한다. 이는 사물을 대하는 자세만을 이야기하는 것이 아니며, 자연 그리고 인간까지도
      포함한다. 인간 또한 인적 자원이라고 불리며 용도가 없을 때 존재의 의미가 흐릿해진다고 여긴다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      나는 거제에서 2010년부터 해양환경오염에 대한 문제 인식으로 바다에서 쓰레기를 주워 분류하기
      시작했다. 이 과정에서 해변에 떠밀려온 부유물을 연민의 시선으로 보다가 나와 동일시하여보고
      있다는 것을 알게 되었다.
      <br />
      &lsquo;꽃보다 아름답다&rsquo;, &lsquo;꽃꿈&rsquo;, &lsquo;요정의 초상&rsquo; 시리즈는 쓸모가
      없어진 후의 시간에 집중하는 작업이다. 이 작업을 통해 내가 살고있는 풍요로운 소비 만능시대에
      대한 생각과 함께 잊고 있던 삶의 의미와 진실에 대해서 생각해 보게 된다.
      <br />
      화려하게 꽃핀 절정의 시간이 지나고 나서 생각해 보게 되는 삶의 진실들. 존재의 목적을 증명하기
      위해 달리는 고독하고 불안한 사람들. 불안과 죽음은 두려움의 대상이지만, 죽음이 있기에 삶의
      이유와 가치를 찾게 될 수 있는 것이다.
      <br />
      화려한 이면의 자화상으로 진정한 &lsquo;아름다움&lsquo;이란 무엇인가에 대한 질문을 던진다.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">(1) 요정의 초상</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      바닷가에서 주운, 인간에게 버려진 쓰레기에 마음이 간다. 소멸하지 못하는 플라스틱은 오랜 기간
      혼자 돌아다녀 빛바래고 닳은 모습이다. 그들이 쓸모를 다한 후 육지에도 바다에도 속하지 못하고
      부유하는 모습은 인간의 그것과 닮아있었다. 나는 바닷가에서 만난 부유물들에게 요정이라는 이름을
      붙여준다. 이 작은 요정은 나에게 신비한 경험을 선사한다. 햇빛과 소금, 파도가 만들어낸 그들의
      색과 모양으로 시간과 공간을 거슬러 많은 이야기를 들려준다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      이 아이들을 귀중한 존재로, 주인공으로 만들어주고 싶어서 초상화를 그려주고 있다. 인연이 있어
      마주친 요정을 그 자체로 비교할 수 없는 중심에, 독립적이고 자주적이며 자유롭게 놓아두고서
      재현하는 것이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      바로크시대에는 강한 왕권과 새로이 부상한 시민계급의 성공을 드러내기 위해 초상화가 많이
      그려졌다. 극적인 명암법과 강렬한 감정적 호소로 힘있게 표현한 것이 특징이었다. 그래서 나는
      바로크시대의 방식으로 요정들의 초상화를 그리고자 했다. 바로크 초상화로 유명한 렘브란트가
      자신의 내면을 들여다보고 성찰하며 자화상을 그리던 것을 떠올린다. 초상화를 그리며 요정들을
      가만히 들여다보면 빛났을 그들의 오랜 여정을 생각하게 되고, 그러다 보면 어느새 요정의 초상화가
      아닌 나의 자화상을 그리고 있다고 느끼게 된다. 현대인의 자화상. 내가 그리는 요정들에게서 쓸모를
      다해 버려지는 인간의 모습이 보였다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      바로크 풍으로 그려진 요정들은 바로크의 종교화에서처럼 현대 산업사회와 자본주의의 순교자로
      보여지기도 한다.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">(2) 꽃보다 아름답다</h4>
    <p className="text-gray-700 leading-relaxed">
      우리의 반짝이던 시간들이 지나고 나이 들어, 앞으로 어떻게 살아야할지 생각하게 되는 순간.
      <br />
      나는 아주 어릴 때부터 화가가 꿈이었고 그림을 계속 그리며 살아왔다. 아이를 낳고 잠깐 마음껏
      그림을 그리지 못하던 때가 있었다. 나의 중심이 사라진 듯, 나의 정체성에 대한 고민을 하던
      시간이었다. 그러던 중, 가족과 딸기를 먹다가 알맹이가 다 빠지고 꼭지만 남아 있는 접시를 보면서
      나 같다는 생각이 들었다.
      <br />
      그런데 그것 자체도 예뻐 보였다.
      <br />
      오스카와일드의 &lsquo;행복한 왕자&rsquo; 동화책에서 다 주고 초라해진 왕자의 아름다움처럼.
    </p>
  </>
);

const NOTE_2025_BODY_EN = (
  <>
    <p className="mb-6 text-gray-700 leading-relaxed">
      For a long time, my attention has been drawn to what has lost its light and been left behind
      within time and space&mdash;to overlooked places, and to overlooked emotions.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      In contemporary society, objects are understood in terms of their usefulness, and once they
      cease to be useful, they are often regarded as meaningless. This attitude extends beyond
      objects to nature and even to human beings. People themselves are described as &ldquo;human
      resources,&rdquo; and when they are no longer considered useful, the meaning of their
      existence can seem to fade.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      In Geoje, beginning in 2010, my growing awareness of marine pollution led me to collect and
      sort waste from the sea. As I looked with compassion at objects washed ashore, I came to
      realize that I was identifying myself with them.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      The series More Beautiful than Flowers, Flower Dream, and The Portrait of Fairies focus on the
      time that begins after usefulness has ended. Through these works, I reflect on the affluent,
      consumption-driven age in which I live, while reconsidering meanings and truths about life
      that we may have forgotten.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      There are truths about life that become visible only after its brilliant flowering has
      passed. There are lonely and anxious people who keep running in order to prove the purpose of
      their existence. Anxiety and death are objects of fear, yet it is because death exists that we
      are compelled to search for the reasons and values of life.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Through these self-portraits beyond the splendor, I ask what true &ldquo;beauty&rdquo; might
      be.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">(1) The Portrait of Fairies</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      I am drawn to waste discarded by humans and found along the shore. Unable to disappear,
      plastic wanders alone for long periods, becoming faded and worn. After it has outlived its
      usefulness, it drifts between land and sea, belonging to neither. In this condition, I began
      to see something resembling human life.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      I call the drifting objects I encounter on the shore &ldquo;fairies.&rdquo; These small
      fairies offer me mysterious experiences. Through their colors and forms&mdash;shaped by
      sunlight, salt, and waves&mdash;they tell countless stories that reach across time and space.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      I paint their portraits because I want to make these beings precious and allow them to become
      protagonists. Each fairy that I encounter by chance is placed at an incomparable center of its
      own&mdash;independent, autonomous, and free&mdash;and portrayed as such.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      During the Baroque period, portraits were often painted to display the authority of powerful
      monarchs and the success of the newly emerging bourgeois class. They were characterized by
      dramatic contrasts of light and shadow and intense emotional expression. For this reason, I
      chose to paint the portraits of my fairies in a Baroque manner.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      I think of Rembrandt, renowned for his Baroque portraits, looking inward and reflecting on
      himself through his self-portraits. As I quietly observe the fairies while painting them, I
      begin to imagine the long journeys through which they once shone. Before long, I feel that I
      am no longer painting the portrait of a fairy, but my own self-portrait&mdash;a self-portrait
      of contemporary humanity. In the fairies I paint, I see human beings discarded after they have
      outlived their usefulness.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Painted in a Baroque manner, these fairies can also appear like martyrs of contemporary
      industrial society and capitalism, recalling the figures of Baroque religious painting.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">
      (2) More Beautiful than Flowers
    </h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      There comes a moment, after our brightest years have passed and we have grown older, when we
      begin to wonder how we should live from then on.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      I dreamed of becoming a painter from a very young age, and I have continued to live my life
      painting. After having a child, there was a period when I could not paint as freely as I
      wished. It was a time when I struggled with my identity, as though I had lost my center.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      One day, while eating strawberries with my family, I looked at a plate on which all the fruit
      had been eaten, leaving only the strawberry tops behind. I thought it looked like me.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">And yet, it seemed beautiful in itself.</p>
    <p className="text-gray-700 leading-relaxed">
      It reminded me of the beauty of the Prince in Oscar Wilde&apos;s The Happy Prince, who gives
      everything away and is left outwardly diminished.
    </p>
  </>
);

export default function AboutPage() {
  const { lang } = useLanguage();
  const note2026Title = NOTE_2026_TITLE[lang];
  const note2026Subtitle = NOTE_2026_SUBTITLE[lang];
  const note2025Title = NOTE_2025_TITLE[lang];
  const note2025Subtitle = NOTE_2025_SUBTITLE[lang];

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <section>
        <h1 className="text-2xl font-bold text-center mb-2">{note2026Title}</h1>
        <h3 className="text-base font-medium text-center text-[#4B5563] mb-10">
          {note2026Subtitle}
        </h3>
        {lang === 'ko' ? NOTE_2026_BODY_KO : NOTE_2026_BODY_EN}
      </section>

      <div className="mt-28 border-t border-neutral-200 pt-16 md:mt-36 md:pt-20">
        <section>
          <h2 className="text-2xl font-bold text-center mb-2">{note2025Title}</h2>
          <h3 className="text-base font-medium text-center text-[#4B5563] mb-10">
            {note2025Subtitle}
          </h3>
          {lang === 'ko' ? NOTE_2025_BODY_KO : NOTE_2025_BODY_EN}
        </section>
      </div>
    </div>
  );
}
