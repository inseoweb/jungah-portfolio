'use client';

import { loc, useLanguage } from '../../lib/language';

const LABEL = loc('[ 심상용 평론 ]', '[ Critique by Shim Sang-yong ]');
const TITLE = loc(
  '시와 접속의 회화론 - 갈망으로부터의 호출',
  'A Poetics of Painting through Poetry and Connection — A Call Born of Yearning',
);
const AUTHOR = loc(
  '심상용(서울대학교 미술관 관장)',
  'Shim Sang-yong (Director, Seoul National University Museum of Art)',
);

const BODY_KO = (
  <>
    <h4 className=" text-lg text-gray-700 font-semibold mb-3 ">갈망(yearning)</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      실을 &apos;진정으로&apos; 접촉하려는 갈망이 없는 영혼에게 갈등은 일어나지 않는다.
      그리고 내면에서 일어나는 갈등 없이 예술의 길로 접어들기란 쉽지 않다.
      정신의 진전(進展)은 어떻게 시초되는가? 이에 대해 시몬느 베이유(Simone Weil)는 말한다.
      &quot;어떤 사람이 조국을 위해 싸우고자 죽음도 불사하고 전장에 나갔다면, 그는 이미 한 걸음 내디딘 것이다.&quot;
      현실과의 접촉과 그로 인한 갈등이 정신은 잠에서 흔들어 깨우고 눈을 뜨게 한다. 이러한 맥락에서라면, 김정아의 정신도 이미 한 발을 내디뎠음이 분명하다.
      그가 일찍이 휴양지로서의 바다가 아니라, 해양 쓰레기로 중병을 앓고 있는 바다에 주목했을 때 그러한 진전이 일어났다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      김정아가 주목하는 바다쓰레기들은 환경이나 생태의 측면에서만 국한해서 볼 사안이 아니다. 그것들은 한때 기술과 산업의 총아였고, 일상의 편의와
      행복감을 제공했으며 물신으로서 숭배의 대상이 되기도 했던 것들로서, 박물관에 작위적으로 진열된 박탈된 것들 이상으로 이 문명의 충직한
      기록물들이다. 어제 권력과 풍요의 상징이었다가 오늘 익명의 해안을 전전하는 그것들은 종말론적 계시의 메신저들이기도 하다. 수많은 스티로폼들,
      눈에 보이지조차 않는 미세 플라스틱 알갱이들, 모두 석유문명의 종말을 예고하는 섬뜩한 편린들이다. 이미 이 행성의 바다 전체를 점령한 미세
      플라스틱의 예후는 특히나 절망적이다. 북극 바다에서조차 50㎛(0.05mm) 이하의 플라스틱 알갱이들이 1리터당 1만 2,000개나 들어 있다.
      그것들로 작은 단위의 바다 생물들에서 인간에 이르는 죽음의 먹이사슬이 고속도로처럼 깔린다. 시간은 이미 그것들 편이 되었다. 김정아의 2011년
      작 &lt;디너 2011&gt;에 등장하는, 식탁에 오른 고등어의 갈라진 배에서는 형형색색의 플라스틱 조각들이 쏟아져 나온다. 매우 직설적인
      화법으로, 은유나 비유를 찾아낼 겨를을 허락하지 않는 절박함 때문이리라.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      영혼의 식탁이라고 한들 무엇이 다를까.
      한 세대, 길게 잡아도 한 세기에 못 미치는 인생이 벌이는 축제,
      죽음의 그림자가 드리우기 전까지, 다음에 찾아올 것에 대한 광기어린 무감각의
      식탁 위에는 도시 재개발이라는 망각, 경쟁적으로 고층화되는 빌딩들로 대변되는
      욕망과 같은 요리가 올려진다. 그리고는 허상의 포만감, 진보와 향상의 이름을 한
      성취.... &quot;보이지 않는 실체를 보도록 하라.&quot; 파울 클레(Paul Klee)를 이끌
      었던 예술의 정언명령이었다. 이제는 그것에 시간의 변수를 더해야만 한다. 이
      문명의 정체, 이 역사의 실체를 보게 하라! 오염된 대지와 바다, 병들어가는
      생명체들 앞에서 우리가 취할 수 있는 남아있는 행보는 그리 많지 않다. 그 가
      운데서, 현실과의 접촉점을 잃지 말 것, 문명이 이 행성에 남기는 자취를 인
      식할 것, 그럼으로써 갈망하는 존재로 남을 것! 이것이 김정아를 이끄는 미학
      적 힘이자 그가 우리에게 건네는 제안이다.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">시(poem)</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
     현재의 주된 매개체가 해안에 떠밀려온 바다 쓰레기들일 뿐, 김정아의 예술은 더 이전부터 현실과의 접촉점을 지녀왔다. 김정아의 초기 회화, 정확히는 1990년대 후반의 회화에서 주된 모티브는 상업적 간판들로 뒤덮인, 우리에겐 꽤나 익숙한 도시 풍경이었다. 이는 세 폭 병풍의 양식을 띠기도 했던 &lt;몽유신림도&gt;(2013) 연작으로 이어지는데, 소위 재개발의 노선이 반영된, 앙상하게 뼈대만 남은 건축물들 뿐인, 그곳만의 고유성, 길거리의 정취, 바람결, 행인들의 옷매무새가 사라지고 없는 경치, 가슴으로 마주할 때 비로소 시야에 들어오는 보이지 않는 것들, 꿈틀거리는 생기가 부재하는 경치에 대한 풍자적인 접근이었다.       </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
     세계를 귀가 아니라 마음으로 듣는 것에서 시(詩)가 발생하고, 기관으로서의 눈이 아니라 마음의 눈으로 볼 때 이미지가 아니라 회화가 탄생한다.(회화는 이미지 이상이다!) 회화는 정보나 수학적 통계 등으로 구축되는, 오히려 세계와의 진정한 접촉을 가로막는 지식과는 그 뿌리부터가 다른 유형의 지식하기다. 지식하기로서 회화는 &quot;우리 내면의 갈망에서 오는 &apos;선(善)의 속성으로서의 개방성&apos;, 곧 기대하는 마음, 궁금해하는 마음, 반응하는 마음, 즐거워하는 마음&quot;, &quot;아이들이 가장 좋아하는 소통의 형식이자 신(神)이 계시로 사용하는 주된 형식&quot;이기도 한 것으로부터 길어 올려진다. 이 점에서 그것은 데카르트나 칸트 류의 사실에 대한 강박증적인 것, 즉 전적으로 이성에 의한 데이터의 축적, 분석, 추론으로 축소되고 편협해진 지식하기를 넘어선다. 후자의 지식하기는 어른들에게 세상을 제대로 통제하고 있다는 환상을 제공해 왔지만, 결과는 늘 기대에 크게 못 미치는 것이었다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
     김정아의 회화는 근대화 과정에서 대학 지식의 범주 밖으로 밀려난 것들, 반짝이는 자개 안장을 얹은 백마와 날아가 버린 풍선을 다시 초대하는 공간으로, &quot;영혼 없는 지식과 메마른 도시로부터 벗어나기를 실험하는 공간으로 조금씩 나아오는 중이다. 문명비판 같은 거대 담론에 매몰되는 것은 공허하다. 판단하고 정의내리는 것은 종종 필요하지만 위험한 일이다. 세상은 &apos;더 발견하기 위한 여행지&apos;여야 한다. 2021년 작 &lt;serendipity&gt;가 암시적이다. 재목이 시사하듯, 세상은 커튼에 가려졌던 것이 종종 스스로 모습을 드러내거나 참된 지성에 곁을 내주는 흥미로운 곳이기도 하니까.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
     2020년 이후 등장하는 숲에 이 여행의 의미가 함축되어 있는 듯하다. 숲은 인생의 전문가이자 관리자인 체하기를 좋아하는 어른들의 허세&quot;가 더는 용인되지 않는 야생의 성전(聖殿)이자, 석유문명이 저지른 온갖 폐악을 품고, 싸매고, 치유할 모성(母性)의 공간기도 하다. 이 여정은 우리의 현재, 실존 곧 태어나고 자라고, 깊은 교감의 경험을 가졌던 장소에서 시작된다.  에드워드 렐프(Edward Relph)에 의하면 그런 장소성에서 인간의 문화적 정체성과 안정감의 근원이 형성되고, 자신을 외부 세계로 지향시키는 전환의 계기가 마련되기 때문이다. 김정아가 그 세계와 이 문명의 경계로서, 자신의 경험에 각인된 특별한 장소들, 변두리 달동네의 계단이나 허름한 가옥의 미닫이 문 등을 소환하는 맥락이다. 그 작은 것들은 원시의 세계로 되돌아가는 시간 여행의 통로, 곧 웜홀(Wormhole)의 시각적 번역이기도 한 것이다. 가설이라는 전재 아래, 웜홀을 통해 이동하면 과거로 여행하는 것이 가능하다. 기발한 상상력이 아니다. 우리는 이 문명이 길을 잘 못 들어섰다는 사실을 모르지 않는다.       </p>
    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">접속(plug-and play)</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
    최근 김정아는 풍경들의 &apos;접속&apos;을 실험하고 있다. 기원과 실존의 접속이고 과거와 되돌아온 과거의 접속이고, 나와 세계의 접속이다. 이 접속은 금욕주의적이지만 상당히 기능적이다. 숲은 여전히 울창하고 도회지는 여전히 건조하지만, 어떻든 그 둘은 이제 긍정적인 양립을 꾀한다. &lt;푸른 골목의 안쪽&gt;(2021)에서처럼, 채광은 여전히 충분치 않지만 달은 조금은 빛을 발하고, 바람이 불기 시작하고, 풍선은 멀리 날아간다. 초월적인 안식처까지는 여전히 아니지만, 세상은 다시 감각하고 느끼고 꿈꿀만한 곳이 된다. 흐트러지고 둔해진 감각이 각질을 벗고 본래의 감도(感度)를 회복하도록 하는 어떤 작용이 일어나고 있다. 느낌의 파동이 출렁이면서 가슴으로 전달되도록 하는 심미적인 접속이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
    예술가는 영혼 안에 갈망의 농도가 짙고, 그로 인해 정신적, 심리적, 현실적 갈등을 겪는 사람이다. 하지만 바로 그 갈망의 농도가 회화의 순도를 결정짓는다. 김정아의 회화가 향하고 있는 방향일 것이다.       </p>
  </>
);

const BODY_EN = (
  <>
    <h4 className=" text-lg text-gray-700 font-semibold mb-3 ">Yearning</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      For a soul without a yearning to come into genuine contact with reality, conflict does not
      arise. And without conflict arising from within, it is difficult to enter the path of art.
      How, then, does the advancement of the spirit begin? Simone Weil offers an answer: &quot;If
      someone goes to the battlefield, prepared to die because he wishes to fight for his country,
      he has already taken a step forward.&quot; Contact with reality, and the conflict that
      follows from it, shakes the spirit from its sleep and opens its eyes. In this sense, it is
      clear that Kim Jung Ah&apos;s spirit, too, has already taken such a step. This advancement
      occurred when she began to look at the sea not as a place of leisure and retreat, but as a
      body gravely afflicted by marine debris.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      The marine debris that draws Kim&apos;s attention cannot be understood solely in
      environmental or ecological terms. These objects were once the favored products of
      technology and industry. They brought convenience and a sense of well-being to everyday life
      and were at times even worshipped as fetishes. More than the displaced objects deliberately
      arranged in museums, they are faithful records of this civilization. Once symbols of power
      and abundance, now wandering anonymous shores, they are also messengers of an apocalyptic
      revelation. Countless pieces of Styrofoam and microscopic plastic particles invisible to the
      naked eye are chilling fragments foretelling the end of a petroleum-based civilization. The
      prognosis presented by microplastics, which have already permeated the planet&apos;s oceans,
      is particularly bleak. Even in Arctic waters, plastic particles smaller than 50 μm (0.05 mm)
      have been found at concentrations of as many as 12,000 particles per liter. Through them, a
      lethal food chain stretches like a highway from the smallest marine organisms all the way to
      human beings. Time is already on their side. In Kim Jung Ah&apos;s Dinner 2011 (2011),
      brightly colored fragments of plastic spill from the split belly of a mackerel laid upon a
      dining table. Its language is strikingly direct, perhaps because the urgency of the situation
      leaves no time for metaphor or allegory.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Would the table of the soul be any different? Human life is a feast lasting a generation,
      less than a century even by generous measure. Until the shadow of death descends, the table
      of our frenzied indifference toward what comes next is laden with such dishes as the
      oblivion called urban redevelopment and the desire embodied in buildings competing endlessly
      for greater height. What follows is the illusory satisfaction of being full, achievements
      made in the name of progress and improvement. &quot;Make visible what is invisible.&quot;
      This was the categorical imperative of art that guided Paul Klee. Today, the variable of
      time must be added to it: let us see the true identity of this civilization, the reality of
      this history. Faced with polluted land and seas and living beings falling ill, few courses
      of action remain open to us. Among them are these: not to lose contact with reality; to
      recognize the traces this civilization leaves upon the planet; and, in doing so, to remain
      beings who yearn. This is the aesthetic force that guides Kim Jung Ah, and the proposition
      she extends to us.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">Poetry</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Although marine debris washed ashore is currently her principal medium, Kim Jung Ah&apos;s
      art had established points of contact with reality long before. In her early
      paintings—more precisely, those of the late 1990s—the principal motif was the familiar
      urban landscape covered with commercial signs. This concern continued into the Mongyusillimdo
      series (2013), at times taking the form of a three-panel folding screen. The series offered
      a satirical approach to landscapes shaped by the logic of so-called redevelopment: places
      reduced to the bare skeletons of buildings, stripped of their particular character, the
      atmosphere of their streets, the movement of the wind, and the manner in which passersby
      dressed. They were landscapes from which the invisible things that become perceptible only
      when encountered through the heart—and the vital energies stirring beneath the surface—had
      disappeared.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Poetry arises when we listen to the world not with the ear but with the heart; likewise,
      when we see not with the eye as an organ but with the mind&apos;s eye, what emerges is not
      merely an image but painting. (Painting is more than an image.) Painting constitutes a mode
      of knowing fundamentally different from the knowledge constructed through information or
      mathematical statistics—forms of knowledge that can, on the contrary, obstruct genuine
      contact with the world. As a mode of knowing, painting is drawn from &quot;the openness that
      is an attribute of the Good and arises from the yearning within us&quot;: a disposition of
      expectation, curiosity, responsiveness, and delight. It is also &quot;the form of
      communication children love most, and the principal form through which God employs
      revelation.&quot; In this respect, painting exceeds the obsessive fixation on facts
      associated with the Cartesian or Kantian tradition—a mode of knowing narrowed to the
      accumulation, analysis, and inference of data entirely through reason. This latter form of
      knowledge has offered adults the illusion that they properly control the world, yet its
      results have consistently fallen far short of expectation.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Kim Jung Ah&apos;s painting is gradually becoming a space that invites back what was pushed
      outside the categories of academic knowledge during the process of modernization: a white
      horse with a gleaming mother-of-pearl saddle, and a balloon that has drifted away. It is
      becoming a space in which to experiment with escaping soulless knowledge and the desiccated
      city. To become absorbed in grand narratives such as critiques of civilization is hollow.
      Judgment and definition are often necessary, but they are also dangerous. The world should
      remain &quot;a place to travel in order to discover more.&quot; Serendipity (2021) is
      suggestive in this regard. As its title implies, the world is also an intriguing place
      where what has been concealed behind a curtain sometimes reveals itself, or allows genuine
      intelligence to draw near.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      The forests that begin to appear in Kim&apos;s work after 2020 seem to embody the meaning
      of this journey. The forest is a wild sanctuary where the pretensions of adults—who like to
      pose as experts and managers of life—are no longer tolerated. It is also a maternal space
      capable of embracing, binding, and healing the many harms inflicted by petroleum-based
      civilization. This journey begins from our present, from our existence itself: from places
      where we were born and raised and where we experienced profound communion. According to
      Edward Relph, it is through such a sense of place that the foundations of cultural identity
      and stability are formed, and that the conditions emerge through which one may orient
      oneself toward the external world. This is the context in which Kim summons particular
      places inscribed in her own experience as boundaries between that world and this
      civilization: the stairways of hillside neighborhoods on the urban periphery, the sliding
      doors of modest old houses, and other such fragments. These small things also become
      passages for time travel back toward a primordial world—visual translations of a wormhole.
      Under the premise of the hypothesis, passage through a wormhole would make travel into the
      past possible. This is not merely fanciful imagination. We are not unaware that this
      civilization has taken a wrong turn.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">Connection (Plug-and-Play)</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Recently, Kim Jung Ah has been experimenting with the &quot;connection&quot; of landscapes.
      It is a connection between origin and existence, between the past and the past that returns,
      and between the self and the world. This connection is ascetic, yet highly functional. The
      forest remains dense and the city remains dry, but the two now seek, in one way or another,
      a positive coexistence. As in Inside the Blue Alley (2021), there is still not enough light,
      yet the moon begins to shine a little; the wind begins to blow; a balloon drifts far into the
      distance. The world is still not a transcendent refuge, but it once again becomes a place
      worth sensing, feeling, and dreaming about. Something is taking place that allows our
      disordered and dulled senses to shed their hardened layers and recover their original
      sensitivity. It is an aesthetic connection through which waves of feeling begin to move and
      reach the heart.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      An artist is someone in whose soul yearning exists in high concentration, and who
      consequently experiences spiritual, psychological, and worldly conflict. Yet it is precisely
      the intensity of that yearning that determines the purity of painting. This, perhaps, is the
      direction toward which Kim Jung Ah&apos;s painting is moving.
    </p>
  </>
);

export default function SimSangYongReview() {
  const { lang } = useLanguage();
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h2 className="text-[14px] font-semibold text-center text-[#666666] mb-2">{LABEL[lang]}</h2>
      <h1 className="text-2xl font-bold text-center mb-2">{TITLE[lang]}</h1>
      <h3 className="text-m font-medium text-center text-[#4B5563] mb-10">{AUTHOR[lang]}</h3>

      <div className="h-5" />
      {lang === 'ko' ? BODY_KO : BODY_EN}
    </div>
  );
}
