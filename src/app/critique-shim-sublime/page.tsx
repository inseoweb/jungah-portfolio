'use client';

import { loc, useLanguage } from '../../lib/language';

const LABEL = loc('[ 심상용 평론 ]', '[ Critique by Shim Sang-yong ]');
const TITLE = loc(
  "푸른 골목의 안쪽에서 마주한 '소멸의 숭고'",
  'The Sublime of Disappearance Encountered Inside the Blue Alley',
);
const AUTHOR = loc(
  '심상용(서울대학교 미술관 관장)',
  'Shim Sang-yong (Director, Seoul National University Museum of Art)',
);

const BODY_KO = (
  <>
    <h4 className=" text-lg text-gray-700 font-semibold mb-3 ">현대 풍경화와 후기 현대의 숭고</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      풍경화는 본래 &apos;바라볼 가치가 있는 장면&apos;의 의미가 담겨 있다. 풍경 개념은 르네상스
      이후에 본격적으로 등장했다. 즉, 자연이 더 이상 신의 공간이 아니라, 인간의 눈 앞에 펼쳐진
      시각적 대상이 되면서부터였다. 이후 시민계급이 성장하고 상업 자본주의가 번창했던 17세기
      네덜란드에서 독립 장르로 분기하면서, 루이스달(Jacob van Ruisdael)이나 호베마(Meindert
      Hobbema)같은 풍경화가가 나왔다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      18~19세기 낭만주의 풍경화는 자연 묘사에 감정과 철학을 담기 시작했다. 주로 인간을 압도하는
      존재, 무한성, 신비에 관한 것 등이 그 대상으로, 카스파 프리드리히(Caspar David Friedrich)나
      터너(J. M. W. Turner) 등의 작가가 있다. 풍경화에서 대상이 중요한 문제로 대두되었던 역사는
      여기까지다. 이후에 대두된 인상주의 풍경화에서 결정적인 요인은 대상이 아니라, 대상을 바라보는
      인간의 태도였다. &apos;무엇을 그리는가&apos;보다 &apos;어떻게 볼 것인가&apos;가 중요한
      화두였다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      현대 풍경화에선 풍경 자체에 대한 대체로 의심이 주종을 이루었다. 질문들은 자주 거칠고
      급진적이었다. &apos;누구의 시선으로 바라본 풍경인가?&apos;, &apos;식민주의는 타자의 땅을
      어떻게 풍경화했는가?&apos;, &apos;관광 산업은 자연을 어떻게 이미지화하는가?&apos; 현대
      풍경화는 대상이 아니라, 대상에 침투한 권력과 자본의 시선을 문제 삼는다. 고전 풍경화가
      &apos;바라볼 가치가 있는 장면&apos;을 재현했다면, 현대풍경화는 &apos;풍경을 생산하는
      시선&apos;을 문제 삼는다. 현대 풍경화의 질문은 &apos;저 산은 아름다운가?&apos;에서
      &apos;우리는 왜 저 산을 아름답다고 생각하는가?&apos;로 이동한다. 그런 의미에서 김정아의
      &apos;골목 풍경화&apos;는 지극히 현대적이다. 여전히 &apos;장소&apos;를 문제삼고 부분적으로
      재현적이기도 하지만, 핵심은 골목 자체가 아니라 골목을 바라보는 시선이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      프리드리히의 풍경화에 주목해 보자. 프리드리히의 장엄한 풍경화 안에서 인간은 종종 아주 작은
      존재일 뿐이다. 자연을 지배하는 존재가 아니라, 거대한 세계 앞에 던져진 아주 미미한 존재다.
      당시 유럽에서는 산업 혁명, 계몽주의, 과학 발전 등으로, 인간 이성이 세계를 지배할 수 있다는
      &apos;망상&apos;이 급격히 부상하고 있던 때였다. 하지만 프리드리히 같은 낭만주의 화가들은
      인간은 세계의 주인이 아니며, 자연은 아름답지만 동시에 장엄하고 인간을 압도하기도 한다는
      점을 강조했다. 이는 인간 중심주의에 균열이 가기 시작했다는 증거이기도 했다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      하이데거(Martin Heidegger)의 말처럼, 인간은 세계의 주인이 아니라 &apos;세계 안에 던져진
      존재&apos;인 것이다. 프리드리히의 풍경은 하이데거적 사유의 전조와도 같았다. 그의 그림 속
      인간은 작아졌지만, 그렇기에 오히려 더 실존적이 된 것이다. 끝없는 자연 앞에서 자기 존재를
      묻는 존재. 여기서 등장하는 개념이 바로 숭고(the Sublime)다. 숭고는 인간의 이해와 통제를
      넘어서는 거대한 것 앞에서 느끼는 감정이다.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">푸른 골목에서 마주하는 소멸의 숭고</h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      프리드리히의 장엄한 풍경화를 지배하는 것은 &apos;숭고(the Sublime)&apos;의 감정이었다.
      숭고는 인간의 이해와 통제를 넘어서는 거대한 질서 앞에서, 자신의 유한성을 자각할 때 전
      존재로 전해지는 실존의 감각이다. 숭고의 감각 안에서 인간은 끝없이 펼쳐지는 자연 앞에서,
      자기 존재에 대해 질문할 수밖에 없는 존재다. 프리드리히의 회화에서 인간은 비록 한없이
      작아졌지만, 그로 인해 오히려 실존의 감각은 더할 나위 없이 증폭되었다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      김정아의 &apos;푸른 골목&apos; 풍경은 한 걸음 더 나아간다. 그의 푸른 골목에는 프리드리히의
      왜소한 인간조차 등장하지 않는다. 인적이 끊긴 지 오래다. 남은 것은 1970년대식 타일 벽체,
      오래된 콘크리트, 빛바랜 간판, 철거 직전의 건물 외벽 같은 잔해다. 한때는 개발로 불렀고
      진화로 믿었던 것들의 잔해다. 그리고 그 잔해를 품은 골목은 낡고, 왜소하고, 주변적인 것이
      되었다. 폐허의 미학인가? 피폐함의 시학인가? 사라져 버린 것에 대한 진부한 향수인가? 망각의
      저편으로 넘어가기 전의 마지막을 기념하기인가? 기억에 대한 작가 개인의 심리학적
      에필로그인가?
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      그렇다고 하기에, 즉 한 개인의 심리적 서사로 한정되기에 이 풍경은 너무 파랗고, 숲은 너무
      울창하며, 달은 먼 곳에서 너무 강렬한 그림자를 만들어낸다. 김정아의 푸른 골목에서는
      프리드리히의 회화에서 느꼈던 숭고와는 반대쪽으로 이끌리는, 하지만 동일한 숭고의 감각이
      전해진다. 프리드리히의 것이 스펙타클로서 자연의 숭고였다면, 김정아는 &apos;소멸로부터의
      숭고&apos;다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      김정아의 소멸의 숭고는 프리드리히가 대자연에서 느꼈던 숭고와 극적으로 대조되는 것처럼
      보인다. 그러나 숭고를 반드시 거대한 자연과 동일시할 필요는 없다. 버크(Edmund Burke)와
      칸트(Immanuel Kant) 이후, 숭고는 특정 대상의 속성이 아니라, 인간의 인식과 감각이 한계에
      도달하는 순간 발생하는 경험으로 이해되어 왔다. 따라서 숭고를 발생시키는 것은 반드시
      폭풍우나 절벽, 무한한 바다로 한정되지 않는다. 오히려 인간이 통제할 수 없는 어떤 거대한
      체계를 감지하는 어떤 순간에도 숭고는 발생할 수 있다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      현대 사회에서 그러한 체계는 더 이상 자연이 아닐 수도 있다. 자본주의, 기술 시스템, 이미지
      네트워크, 데이터와 알고리즘의 흐름처럼 인간 개개인의 의지로는 포착하거나 제어할 수 없는
      구조가 새로운 숭고의 대상이 된다. 프리드리히에게 그것이 대자연이었다면, 김정아에게 그것은
      존재와 삶을 형해화(표1)하는 후기 자본주의 시스템이고, 기 드보르(Guy Debord)가 말한
      &apos;스펙타클의 사회(The Society of the Spectacle)&apos;의 체계다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      프리드리히 시대에 인간을 압도했던 것은 자연이었다. 그러나 후기 현대에 이르러 인간을
      압도하는 것은 더 이상 자연이 아니다. 오늘날 인간은 금융 시스템, 플랫폼 경제, 글로벌 자본의
      흐름, 이미지 네트워크와 같은 거대한 구조 속에 놓여 있다. 인간은 여전히 압도되지만, 압도의
      대상이 바뀐 것이다. 이러한 변화를 가장 급진적으로 분석한 인물 중 하나가 기 드보르였다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      기 드보르에게 현대 사회는 &apos;스펙타클의 사회&apos;다. 여기서 스펙타클은 인간이 현실을
      직접 살지 못하고, 이미지와 재현을 통해서만 간접적으로 사는 상태를 의미한다. 인간은 삶의
      주체가 아니라 관객이 되고, 자기 삶마저 전시 가능한 콘텐츠처럼 인식한다. 여행의 실제
      경험보다 사진이 중요해지고, 사랑도 SNS 속 이미지가 되는 것, 인간이 이미지화된 가상의 삶
      속에서만 존재하는 상태, 이것이 기 드보르가 두려워했던 삶, 곧 실존의 부재였다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      오늘날의 세계는 그의 우려보다 더 급진적인 쪽으로 흘러가고 있다. 인스타그램, 유튜브
      브이로그, 셀프 브랜딩, AI 이미지 문화, 인플루언서 경제 속에서 인간은 더 이상 삶의 실질적
      주체가 아니다. 끊임없이 자신을 연출하고, 소비 가능한 이미지로 가공하며, 플랫폼 자본이
      구성한 욕망에 스스로를 맞춘다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      이 맥락에서 볼 때, 김정아의 골목은 바로 그 스펙타클 사회가 밀어낸 실존의 최후의 잔여물이다.
      화려한 이미지 경제에서 탈락한 뒤안이다. 더 이상 소비되지 않는 이미지, 더 이상 매력적이지
      못한 공간, 도시 재개발과 후기 자본주의의 맹렬한 가속에서 주변부로 밀려난 실존이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      그러나 역설적이게도 바로 그 폐기된 장소에서 우리는 오히려 멀어졌던 실존의 질감을 감각한다.
      바로 &apos;소멸의 숭고&apos;의 감각이다. 그것은 이 문명이 무언가를 끊임없이 삭제하고
      폐기한다는 사실을 목격하는 순간 발생하는, 전율하는 실존의 감각이다. 이 문명을 작동시키는
      거대한 장치를 감지하면서, 끝없이 새로운 이미지를 생산하고, 이전의 삶과 장소들을 폐기하는
      구조의 거대한 힘, 그리고 그 앞에서 자신 역시 언제든 이 시스템 속에서 폐기의 대상으로
      전락할 수 있다는 불안을 동반하는 숭고다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      김정아는 이렇게 말한다. &quot;빠른 변화를 따라잡지 못해 뒤처진 것들의 모습, 이 시대를
      살아가는 인간의 초상과 닮아있다.&quot;
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      김정아의 골목은 단순한 도시 풍경이나 사라져가는 장소의 기록이 아니다. 그것은 스펙타클
      사회가 무엇을 삭제하면서 유지되는지를 보여준다. 따라서 이 골목은 과거의 기억이 아니라,
      현재적인 사건이다. 우리가 푸른 골목의 안쪽에서 느끼는 불안은 단지 사라지는 공간에 대한
      애수가 아니다. 그것은 우리 자신 역시 언젠가 이 체계 속에서 폐기 가능한 존재가 될 수
      있다는 예감에서 비롯된다.
    </p>
  </>
);

const BODY_EN = (
  <>
    <h4 className=" text-lg text-gray-700 font-semibold mb-3 ">
      Contemporary Landscape Painting and the Sublime in Late Modernity
    </h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      The landscape, in its original sense, carries the meaning of &ldquo;a scene worth
      beholding.&rdquo; The concept of landscape did not fully emerge until after the
      Renaissance &mdash; that is, once nature ceased to be the domain of God and became instead
      a visual object unfolding before human eyes. It later branched off as an independent genre
      in seventeenth-century Holland, where the growth of the bourgeoisie and the flourishing of
      commercial capitalism gave rise to landscape painters such as Jacob van Ruisdael and
      Meindert Hobbema.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Romantic landscape painting of the eighteenth and nineteenth centuries began to invest the
      depiction of nature with emotion and philosophy, taking as its subjects what overwhelms the
      human being, the infinite, and the mysterious &mdash; as seen in painters such as Caspar
      David Friedrich and J. M. W. Turner. This marks the end of the history in which the object
      itself was the central concern of landscape painting. In the Impressionist landscape
      painting that followed, the decisive factor was no longer the object but the human attitude
      toward it. The guiding question shifted from &ldquo;what is being depicted&rdquo; to
      &ldquo;how is it being seen.&rdquo;
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      In contemporary landscape painting, suspicion toward the landscape itself has become the
      dominant mode. The questions raised are often blunt and radical: &ldquo;Whose gaze is this
      landscape seen through?&rdquo; &ldquo;How did colonialism turn another&apos;s land into
      landscape?&rdquo; &ldquo;How does the tourism industry turn nature into image?&rdquo;
      Contemporary landscape painting takes issue not with the object but with the gaze of power
      and capital that has infiltrated it. Where classical landscape painting represented
      &ldquo;a scene worth beholding,&rdquo; contemporary landscape painting interrogates
      &ldquo;the gaze that produces the landscape.&rdquo; Its question shifts from &ldquo;Is that
      mountain beautiful?&rdquo; to &ldquo;Why do we think that mountain is beautiful?&rdquo; In
      this sense, Kim Jung Ah&apos;s &ldquo;alley paintings&rdquo; are thoroughly contemporary.
      They still take &ldquo;place&rdquo; as their subject and remain partly representational,
      but what matters is not the alley itself — rather, the gaze that looks upon it.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Consider Friedrich&apos;s landscape paintings. Within his sublime scenes, the human figure
      is often reduced to little more than a tiny presence &mdash; not a master of nature, but an
      utterly minor being cast before an immense world. This was an era in Europe when, through
      the Industrial Revolution, the Enlightenment, and the advance of science, the
      &ldquo;delusion&rdquo; that human reason could master the world was rapidly gaining ground.
      Yet Romantic painters such as Friedrich insisted that the human being is not the master of
      the world, and that nature, while beautiful, is at the same time sublime and capable of
      overwhelming humanity. This was itself evidence that cracks had already begun to appear in
      anthropocentrism.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      As Martin Heidegger put it, the human being is not the master of the world but a being
      &ldquo;thrown into the world.&rdquo; Friedrich&apos;s landscapes stand almost as a
      premonition of Heideggerian thought. The human figure in his paintings grows smaller, but
      precisely because of this, becomes all the more existential &mdash; a being compelled to
      question its own existence before an endless nature. It is here that the concept of the
      sublime emerges. The sublime is the feeling evoked before something vast that exceeds human
      understanding and control.
    </p>

    <h4 className="text-lg text-gray-700 font-semibold mb-3 mt-12">
      The Sublime of Disappearance Encountered in the Blue Alley
    </h4>
    <p className="mb-6 text-gray-700 leading-relaxed">
      What governs Friedrich&apos;s sublime landscapes is the feeling of the sublime. The sublime
      is an existential sensation that floods one&apos;s entire being the moment one becomes
      aware of one&apos;s own finitude before an immense order that exceeds human understanding
      and control. Within this sensation of the sublime, the human being, standing before
      nature&apos;s endless expanse, cannot help but question its own existence. In
      Friedrich&apos;s painting, the human figure may have become infinitely small, but it was
      precisely this that amplified the sense of existence to its fullest.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Kim Jung Ah&apos;s paintings of the &ldquo;blue alley&rdquo; take this a step further. In
      her blue alley, not even Friedrich&apos;s diminished human figure appears. It has long
      since been emptied of human presence. What remains are traces: 1970s-style tiled walls,
      aged concrete, faded signboards, the exterior walls of buildings on the verge of demolition
      &mdash; the remnants of what was once called development and believed to be progress. And
      the alley that holds these remnants has itself become old, diminished, and marginal. Is
      this an aesthetics of ruin? A poetics of desolation? A trite nostalgia for what has
      vanished? A commemoration of the last moment before passing into oblivion? A personal
      psychological epilogue on memory?
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Yet this landscape is too blue, its forest too dense, and its distant moon casts shadows
      too intense for the work to be confined to a single individual&apos;s psychological
      narrative. In Kim Jung Ah&apos;s blue alley, we encounter a sense of the sublime that pulls
      in the opposite direction from what Friedrich&apos;s painting evoked, and yet is, at its
      core, the same sublime. If Friedrich&apos;s was the sublime of nature as spectacle,
      Kim&apos;s is the sublime of disappearance.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Kim Jung Ah&apos;s sublime of disappearance may appear to stand in dramatic contrast to the
      sublime Friedrich felt before vast nature. Yet the sublime need not be identified with
      immense nature alone. Since Edmund Burke and Immanuel Kant, the sublime has been understood
      not as a property of a particular object but as an experience that arises the moment human
      perception and sensation reach their limit. What gives rise to the sublime is therefore not
      necessarily confined to storms, cliffs, or the boundless sea. The sublime can arise in any
      moment in which one senses some vast system beyond human control.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      In contemporary society, such a system may no longer be nature. Structures that no single
      individual&apos;s will can grasp or control &mdash; capitalism, technological systems,
      image networks, the flows of data and algorithms &mdash; become the new object of the
      sublime. If for Friedrich that object was vast nature, for Kim Jung Ah it is the
      late-capitalist system that hollows out existence and life, the very system Guy Debord
      described as the Society of the Spectacle.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      In Friedrich&apos;s time, what overwhelmed the human being was nature. By late modernity,
      however, nature is no longer what overwhelms us. Today, human beings find themselves
      situated within vast structures such as financial systems, platform economies, the flows
      of global capital, and image networks. We are still overwhelmed, but the object of that
      overwhelming has changed. One of the most radical analysts of this shift was Guy Debord.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      For Guy Debord, contemporary society is the Society of the Spectacle. Here, the spectacle
      refers to a condition in which human beings no longer live reality directly but only
      indirectly, through images and representations. The individual ceases to be the subject of
      life and becomes instead a spectator, coming to regard even one&apos;s own life as
      exhibitable content. The photograph becomes more important than the actual experience of
      travel; love itself becomes an image circulated on social media. This condition, in which
      human beings exist only within an imaged, virtual life, was precisely the life Debord
      feared &mdash; the absence of existence itself.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Today&apos;s world has moved in a direction even more radical than Debord feared. Amid
      Instagram, YouTube vlogs, self-branding, AI image culture, and the influencer economy, the
      human being is no longer the genuine subject of its own life. We continually stage
      ourselves, process ourselves into consumable images, and adjust ourselves to desires
      constructed by platform capital.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Seen in this context, Kim Jung Ah&apos;s alley is the last remainder of existence that this
      very society of the spectacle has pushed aside &mdash; the back alley left behind by a
      glittering image economy. It is an image no longer consumed, a space no longer attractive,
      an existence pushed to the margins by urban redevelopment and the relentless acceleration
      of late capitalism.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Yet paradoxically, it is in that very discarded place that we sense the texture of an
      existence from which we had grown distant. This is the sensation of the sublime of
      disappearance. It is a trembling existential sensation that arises the moment we witness
      this civilization ceaselessly erasing and discarding something. It is a sublime
      accompanied by the perception of the immense apparatus that drives this civilization, the
      vast power of a structure that endlessly produces new images while discarding former lives
      and places, and, before it, the anxiety that we too might at any moment fall within this
      system as an object to be discarded.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Kim Jung Ah puts it this way: &ldquo;The appearance of things left behind, unable to keep
      pace with rapid change, resembles the portrait of a human being living in this age.&rdquo;
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Kim Jung Ah&apos;s alley is not simply an urban landscape or a record of a vanishing place.
      It reveals what the society of the spectacle erases in order to sustain itself. This alley
      is therefore not a memory of the past but a present event. The unease we feel inside the
      blue alley is not merely a melancholy over a disappearing space. It stems from the
      premonition that we ourselves may one day become beings that can be discarded within this
      very system.
    </p>
  </>
);

export default function SimSangYongSublimeReview() {
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
