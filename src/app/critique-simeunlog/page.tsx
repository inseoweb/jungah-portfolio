'use client';

import Image from 'next/image';

import { loc, useLanguage } from '../../lib/language';

const LABEL = loc('[ 심은록 평론 ]', '[ Critique by Sim Eunlog ]');
const TITLE = loc(
  '폐기물이 바라보는 인간 - 김정아의 개인전에 부쳐',
  'Humanity as Seen by Waste — On Jung Ah Kim’s Solo Exhibition',
);
const AUTHOR = loc(
  '심은록 (Sim Eunlog, 미술평론가, AI영화감독)',
  'Sim Eunlog (Art Critic, AI Film Director)',
);

const BODY_KO = (
  <>
    <p className="mb-6 text-gray-700 leading-relaxed">
    사단법인 메디치회(회장 서미옥)가 주관하는 메디치상은 올해로 제10회를 맞았다. 이 뜻깊은 상에서 대상을 수상한 김정아 작가의 개인전이 2025년 11월 11일부터 25일까지 학고재에서 개최된다. 오늘날 인류가 직면한 가장 시급하고 중대한 과제는 단연 환경 문제일 것이다. 그러나 환경을 예술적 언어로 다루는 일은 결코 단순하지 않다. 예술은 선전이나 홍보의 수단이 아니라, 현실의 문제를 미적 사유와 숭고의 차원으로 끌어올리는 고유한 형식적 긴장을 요구하기 때문이다.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아는 이러한 난제를 정면으로 마주하는 드문 예술가다. 그는 동시대 환경 위기를 직접적 고발이나 단순한 메시지 전달에 머물지 않고, 오랜 시간 현장을 경험하며 축적한 생태적 감각을 토대로 이를 조형적 미학과 철학적 사유의 구조로 치열하게 전환해 왔다. 그 결과 그의 작업은 환경 문제를 넘어 인간과 자연, 물질과 존재, 전통과 현재의 관계를 근원적으로 사유하게 만드는 예술적 성찰의 장을 열어 보인다. 이번 전시는 생태적 실천, 생활 경험, 그리고 한국 전통 미술의 상징 체계를 유기적으로 결합해온 그의 독창적인 예술 세계를 집약적으로 조명하고자 한다.
    </p>

    <div className="h-5" />

    <h3 className="text-lg font-semibold text-left text-[#003247] mb-10">십장생과 십상폐 : 전통의 영원과 문명의 잔해가 충돌할 때</h3>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/1.jpg"
        alt="빈 자리"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">신십장생도</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          180x336(cm), 병풍에 아크릴릭, 바다쓰레기, 2022
        </span>
      </div>
    </div>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/2.jpg"
        alt="빈 자리"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">십장생도 8폭병풍</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
        개항기 19세기 말~20세기 초, 비단에 채색, 국립고궁박물관 소장
        </span>
      </div>
    </div>

    <div className="h-5" />

    <p className="mb-6 text-gray-700 leading-relaxed">
    8폭 병풍 화면 속에는 익숙한 십장생도가 펼쳐져 있다. 첫눈에는 조선 시대 무병장수를 기원하던 전통적 상징 체계가 담긴 작품처럼 보인다. 그러나 화면에 가까이 다가갈수록 이 병풍은 점차 낯선 감정을 불러일으킨다. 동물과 천도복숭아, 불로초 등 십장생 도상의 상당수가 하얀 여백으로 남겨져 있기 때문이다. 마치 그려지다만 미완성의 흔적처럼 보이지만, 곱씹어보면 그것은 소멸의 흔적에 가깝다. 8마리의 사슴 가운데 6마리가 이미 색을 잃고 여백만으로 남았으며, 색을 유지한 사물보다 여백화된 존재가 더 많다. 이 작품이 바로 김정아의 &apos;신십장생도&apos;(2022)이다. 그는 조선 회화를 대표하는 상징 구조인 십장생도를 차용하면서도, 이를 통해 동시대의 문제를 예리하게 드러내는 시각적 전략을 구사하고 있다.      </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    전통 회화 속에서 십장생은 해·산·물·돌·소나무·거북·사슴·학·복숭아·영지 등 자연물이 지닌 영원성, 장수, 생명력을 상징했다. 이러한 상징 체계는 자연의 조화와 순환, 삶의 지속성을 축복하는 세계관을 반영했다. 그러나 김정아는 이 오래된 상징을 그대로 재현하지 않는다. 그는 묻는다.      </p>

    <p className="mb-6 text-gray-500 leading-relaxed">
    “과연 지금 이 시대에 영원한 것은 무엇인가?”     </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    그 질문 앞에서 작가는 전통의 십장생을 하나씩 소환해 그것들과 대응되는 새로운 목록을 제시한다. 그것이 바로 ‘십상폐(十常廢)’로 사라지지 않는 열 가지 폐기물이다. 더 이상 자연이 ‘영원’의 자리를 차지하지 못하는 시대, 오히려 사라지지 않는 것은 폐기물이며, 쓰레기가 새로운 불멸의 상징이 되었다는 역설을 작가는 작품 전면에 드러낸다.     </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    전통 십장생의 세계가 자연의 조화와 생명의 장구함을 이야기했다면, 오늘날 인간 문명이 만들어낸 십상폐는 오염과 잔류성의 세계를 상징한다. 예를 들어, 순환과 생명을 의미했던 ‘물’은 오늘날 화학 슬러지와 미세 플라스틱에 의해 더 이상 순환하지 못하고, 영원성을 상징했던 ‘산’은 전자 폐기물 더미보다 덜 영구적이며, 불로장생을 상징하던 ‘복숭아’는 오늘날 음식물 쓰레기와 과잉 생산 문제로 대체되었다. 이처럼 작가는 전통의 상징 하나하나를 오늘의 비극적 현실과 맞대어 세우며 문명의 불편한 초상을 드러낸다.     </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    그 결과 &apos;신십장생도&apos;는 전통적 형식을 빌렸으나, 그 내부는 철저히 해체되어 있다. 화면을 채운 사슴과 학, 거북은 다 색을 잃은 채 하얀 여백으로 지워져 있다. 이는 더 이상 자연이 회복되지 못한 채 소멸의 운명 앞에 놓여 있음을 시각적으로 보여주는 장치다. 반대로 화면 곳곳을 점령한 것은 플라스틱 병뚜껑, 노끈, 폐스티로폼, 어구 쓰레기 등 바다에서 수거된 실재 폐기물이다. 자연은 희미해졌지만 쓰레기는 남았고, 생명은 사라졌지만 잔해는 증식한다.     </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아의 &apos;신십장생도&apos;는 단순히 전통을 차용한 형태 실험이 아니라, 전통 미학과 동시대 생태 현실을 충돌시키는 강력한 비평적 회화다. 작가는 과거가 동경했던 ‘영원’의 개념을 재검토하며 말한다.      </p>

    <p className="mb-6 text-gray-500 leading-relaxed">
    “우리는 자연의 시간을 축복해왔지만, 인간 문명이 만들어낸 새로운 영원은 오히려 폐기물이다.”     </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    이 충격적인 전환은 작품을 통해 한 문장으로 요약된다. 영원해야 할 것은 사라지고, 사라져야 할 것이 영원해졌다.  </p>

    <div className="h-8" />

    <h3 className="text-lg font-semibold text-left text-[#003247]">회화의 경계 밖으로 밀려온 현실의 파편들</h3>
    <div className="h-8" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/3.jpg"
        alt="Picturesque"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          71x81(cm), 액자, 패널에 유화, 바다쓰레기, 2018
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아의 작품 &apos;Picturesque&apos;(2018)는 바다 위로 떠오르는 찬란한 석양을 그린 전통적인 풍경화 구도를 취하고 있다. 화면 중앙을 가로지르는 수평선과 반사광, 감각적으로 포착된 색채의 울림, 그리고 황홀한 저녁 하늘의 그라데이션은 눈앞의 풍경을 감상적 아름다움으로 고정시키는 전형적인 회화적 장치다. 작품 제목 ‘Picturesque’가 암시하듯, 이 풍경은 한때 유럽 근대 회화가 이상적으로 추구했던 감상적 풍경의 미학을 소환한다. 그러나 이 회화적 평온은 오래 지속되지 않는다. </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    액자의 아래쪽에서 튀어나오듯 뒤덮은 물질 덩어리—부서진 스티로폼, 색색의 플라스틱 파편, 음료수 병뚜껑, 미세 조각들—이 회화 속 풍경을 침식하기 시작한다. 마치 바다에서 밀려온 쓰레기 더미가 화면을 점령하듯, 회화는 더 이상 ‘순수 미술’의 감상 대상이 아니라 환경 파괴의 증거물로 전환된다. 이 지점에서 작품은 급격히 전복된다. 작가가 지적하듯, “액자 속 풍경은 나와 거리가 있는 감상의 대상이지만, 쓰레기가 액자 밖으로 넘어오는 순간 더 이상 그림이 아니라 현실이 된다.” 이 작품은 바로 그 경계의 붕괴를 시각화하고 있다. </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    이 작품은 관람자의 감각을 기묘한 충돌 지점으로 이끈다. 먼저 보이는 것은 아름다움이지만, 그 아름다움은 곧 불편함으로 교란된다. 시각적 쾌는 감정적 거부감으로 치환되고, 감상자는 회화 안으로 물처럼 스며드는 현실과 마주선다. 바다는 더 이상 낭만적인 풍경이 아니라 오염된 생태 시스템이며, 석양은 자연이 사라져가고 있음을 알리는 경고처럼 읽힌다. </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    그러나 &apos;Picturesque&apos;는 단순한 환경 메시지에 머물지 않는다. 이 작품은 회화 형식 그 자체에 대한 비판적 실험이기도 하다. 액자는 전통적으로 예술 공간과 현실 세계를 구분하는 장치였지만, 작가는 그 틀을 파괴함으로써 예술을 보호하던 장벽을 의도적으로 무력화한다. 액자 바깥으로 넘쳐 흐르는 쓰레기는 단순한 오브제가 아니라 ‘미적 위기’를 유발하는 촉매이다. 그것은 미술이 현실에서 도피하는 장르가 아니라, 지금 여기에서 발생하는 생태적 파국을 직면하게 만드는 장소가 되어야 한다는 선언처럼 보인다.”     </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    &apos;Picturesque&apos;는 바다의 아름다움을 꿈꾸기 전에 그 현실을 보게 하며, 감상의 거리를 허용했던 예술적 장식을 벗고, 환경 문제를 동시대적 재료로 끌어안고 있다. 풍경은 여전히 존재하지만, 그 안의 세계는 이미 돌이킬 수 없이 변해버렸다는 사실을 관람자로 하여금 깨닫게 한다.</p>

    <div className="h-8" />

    <h3 className="text-lg font-semibold text-left text-[#003247]">궁행미학(躬行美學), 움직임을 요청하는 풍경</h3>

    <div className="pb-[10px]">
      <Image
        src="/images/critique-simeunlog/4.jpg"
        alt="한 걸음 다가서면 바꿀 수 있어요"
        className="artwork-img"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
        60.6x72.7(cm), 렌티큘러, 2018, 2025
        </span>
      </div>
    </div>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/5.jpg"
        alt="한 걸음 다가서면 바꿀 수 있어요"
        className="artwork-img"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
        60.6x72.7(cm), 렌티큘러, 2018, 2025
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-500 leading-relaxed">
    “쓰레기로 뒤덮인 해변, 그러나 앞으로 한 걸음 다가서면—내가 행동으로 옮기면—해변은 깨끗해질 수 있다.” </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아의 작업은 아름다운 풍경의 이면을 드러내는 데서 멈추지 않고, 그 풍경 속에 관람자 스스로 어떻게 개입할 수 있는가라는 문제를 정면으로 제기한다. 그의 2018년 작품 &apos;Picturesque&apos;가 감상자의 안전한 거리감을 무너뜨리며 예술과 현실 사이의 경계 붕괴를 시도했다면, 렌티큘러 기법으로 제작된 &apos;한 걸음 다가서면 바꿀 수 있어요&apos; 연작은 한 걸음 더 나아가 관람자의 움직임 자체를 작품의 일부로 편입한다. 김정아의 예술은 이렇듯 궁행미학(躬行美學)—즉 몸소 행동으로 실천하는 미학—으로 확장된다.</p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    &apos;한 걸음 다가서면 바꿀 수 있어요&apos; 연작은 멀리서 보면 평화로운 해양 풍경을 묘사한 회화처럼 보인다. 그러나 관람자의 위치가 달라지는 순간 화면은 전혀 다른 모습을 드러낸다. 깨끗한 바다는 곧장 쓰레기로 오염된 바다와 파편화된 해저 풍경으로 바뀌고, 다시 각도를 달리하면 되살아난 바다의 모습이 나타난다. 이 변화는 우연적 효과가 아니라 관람자의 행위에 반응하도록 설계된 서사적 장치다. 작가는 이 작품을 통해 환경 문제의 핵심이 거대한 구조적 논쟁 이전에, “행동으로 옮길 것인가, 외면할 것인가”라는 개인적 실천의 문제임을 드러낸다. 무심한 한 걸음은 오염을 방치하지만, 의미 있는 한 걸음은 변화를 가능하게 한다.</p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    &apos;Picturesque&apos;에서 작가는 액자라는 전통적 감상 장치를 전복했다. 액자 속 풍경을 쓰레기가 침범하도록 구성하여, 예술과 현실을 구분하던 감상의 안전지대를 붕괴시켰다. 반면 &apos;한 걸음 다가서면 바꿀 수 있어요&apos;는 렌티큘러 이미지라는 매체를 활용해 관람자의 물리적 거리와 태도 변화를 직접적으로 요구한다. 여기서 중요한 것은 시각적 이미지의 변화 자체가 아니라, “행동하는 관람자”를 호출하는 작품 구조이다. 이 두 작품은 한 가지 공통된 전환을 말한다. 예술은 더 이상 관조의 대상이 아니라 변화의 가능성을 실험하는 장이며, 그 변화는 관객의 참여와 실천을 통해 비로소 완성된다는 것이다.</p>

    <div className="h-8" />

    <h3 className="text-lg font-semibold text-left text-[#003247]">사물의 두 번째 생명과 공생의 미학</h3>
    <div className="h-6" />

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/6.jpg"
        alt="요정의 초상"
        className="artwork-img"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">요정의 초상</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
        60.6x72.7(cm), 캔버스에 유화, 2025
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아의 작업에서 바다는 단순한 자연 풍경의 배경이 아니다. 그것은 생성과 소멸, 순환과 변형이 끊임없이 일어나는 존재론적 장(場)이며, 인간과 사물, 생명과 물질이 서로 얽혀 있는 거대한 관계망이다. 작가는 해변에서 발견한 사물들을 단순한 폐기물로 보지 않는다. 오히려 그것을 시간의 기록자이자 생태적 관계의 매개체로 바라본다. 이번 전시에 등장한 따개비 부표 작업은 이러한 세계관이 가장 명확하게 드러나는 사례다. </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    회화 작품 속 부표는 어두운 배경 위에 정물처럼 놓여 있으며, 그 형식적 구성은 고전 정물화의 시각적 문법을 연상시킨다. 그러나 표면을 덮고 있는 것은 금속성 광택이 아닌 따개비 군락이다. 화면은 마치 생물학적 관찰 장면처럼 보이며, 미세한 생명 활동의 흔적을 섬세하게 포착한다. 작가는 버려진 사물의 표층에 각인된 시간의 층위와 생명의 흔적을 시각화하며, 물질이 지나온 삶의 경로를 드러낸다. 화면 전체를 지배하는 명암의 긴장감은 존재와 비존재, 생명과 사물 사이의 경계를 탐구했던 바로크 정물화—특히 네덜란드의 바니타스 회화—의 미학적 전통을 소환한다. 이를 통해 작가는 인간 중심적 세계관이 얼마나 취약한 관념인지를 조용하지만 강렬하게 환기한다. 이 평면 이미지는 작품 옆에 놓인 실제 따개비 부표 오브제와 병치되면서 실재의 차원으로 확장된다. 작가는 다음과 같이 말한다.</p>

    <p className="mb-6 text-gray-500 leading-relaxed">
    “버려진 플라스틱 부표는 문제가 아니다. 문제는 그것을 버린 인간이다. 자연은 부표를 바위와 구분하지 않는다.” </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    이 진술은 그의 작업 태도를 설명하는 핵심적 관점이다. 한때 어업 도구였던 부표는 사용가치를 잃자 폐기물로 전락했지만, 바다는 그것을 배척하지 않았다. 오히려 따개비와 이끼, 미생물들은 그 폐부표를 서식지로 삼으며 새로운 생태적 구조를 형성했다. 즉, 부표는 폐기된 순간 생명과 단절된 것이 아니라, 다른 생명과 관계 맺는 새로운 존재 방식을 획득한 것이다.  </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    이러한 관점은 인간 중심주의적 사고에 대한 근본적 비판을 내포한다. 인간은 사물의 가치를 ‘쓸모’라는 기준으로 규정하지만, 자연은 그런 방식으로 존재의 서열을 나누지 않는다. 사라졌다고 여겨진 사물들은 자연 속에서 또 다른 관계망으로 편입되며 생태적 역할을 갱신한다. 따라서 작가에게 따개비 부표는 오염의 상징이 아니라 공생의 표본이며, 파괴와 회복이 공존하는 생태적 드라마다. </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아는 이러한 세계 인식을 예술로 번역한다. 그는 폐기물을 단순히 재료로 사용하는 차원을 넘어, 그것을 존재론적 사유의 대상으로 재배치한다. 그의 작업이 단순한 리사이클링 미학과 구별되는 이유는 바로 여기에 있다. 핵심은 물질의 재활용이 아니라 세계와 사물을 다시 이해하려는 시도에 있다. 회화와 오브제가 설치 형식으로 구성되면서 관람자는 두 세계—이미지와 사물, 재현과 실재—를 오가며 물질과 생명 사이의 경계를 다시 사유하게 된다. 결국 이 작업은 하나의 근본적 질문으로 귀결된다.</p>

    <p className="mb-6 text-gray-500 leading-relaxed">
    “무엇이 생명을 구성하는가?” </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    만약 생명이 고정된 실체가 아니라 관계 속에서 발생하는 과정이라면, 인간이 버린 사물 또한 타자와의 만남을 통해 새로운 생태적 존재로 변할 수 있다. 이처럼 김정아의 작업은 존재의 위계를 다시 쓰고 세계를 새롭게 바라보게 만드는 관점의 전환을 촉발한다. </p>

    <div className="h-6" />
    <h3 className="text-lg font-semibold text-left text-[#003247]">영잔폐도(永殘廢圖) · 폐물승화(廢物昇華)</h3>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/7.png"
        alt="꽃꿈"
        className="artwork-img mb-[20px] max-w-[80%] mx-auto"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">꽃꿈 quiet dream</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
        72.7x60.6(cm), 한지에 캐스팅, 2025
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아 작가는 경남 거제에서 26년간 살아오며 바다와 더불어 체득한 감각과 경험을 작업 속에 응축해온 예술가다. 그는 전국 60개 해안 정점을 대상으로 16년간 진행된 해양 쓰레기 모니터링에 환경단체 봉사자로 참여하며 예술 활동과 현장 조사를 병행해왔다. 이러한 경험은 그의 작업이 단순한 조형 실험을 넘어 현장성에 기반한 연구와 데이터에 기초한 예술 실천이라는 점을 입증한다.</p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    그는 전문적인 조사 경험을 바탕으로 “조사 방식은 2.5cm 이상의 쓰레기를 전수 수거한 뒤 60개 항목으로 분류하는 것이며, 특히 플라스틱은 1회용품, 음료수병, 병뚜껑, 세제 용기, 라이터 등으로 세부 분류된다”고 설명한다. 반면 “목재나 금속류는 하나의 항목으로 통합 기록될 뿐이기 때문에 실제 비중이 과소하게 보인다”고 덧붙인다. 이어 그는 “16년간의 조사 결과 해양 쓰레기의 약 87%가 플라스틱이었으며, 특히 스티로폼 부표 파편과 밧줄·노끈 등 어업 활동에서 발생하는 쓰레기가 큰 비중을 차지했다”고 말한다. 또한 “담배꽁초, 낚시도구, 폭죽 잔해 등은 수량 대비 생태 피해가 매우 큰 유형”임을 강조하며, 지금도 “상위 10개 쓰레기 발생량을 1/10로 줄이기 위한 ‘열일 캠페인’에 참여하고 있다”고 밝힌다. 이처럼 그의 예술은 환경 감수성과 생태 조사, 현장 경험이 결합된 독특한 예술 실천에서 출발한다.</p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    그의 작업이 설득력을 갖는 이유는 바로 여기에 있다. 그는 쓰레기와 폐기물이 남긴 흔적을 미적 사유의 언어로 변환시키는 예술적 감각을 지니고 있다. 김정아는 오늘날의 환경 위기를 단순히 고발하거나 감성적으로 호소하는 데 그치지 않는다. 대신 그는 바다에서 건져 올린 폐기물, 시간에 닳은 파편, 바닷속 생물의 흔적을 묶어내 존재론적 질문으로 확장된 조형적 장치를 구축한다.</p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    예를 들어 따개비가 달라붙은 폐기물은 새로운 생물학적 흔적이 된 채 화면 속에 등장한다. 이 형상은 생명과 사물, 자연과 폐기물의 구분을 무너뜨리며 묻는다. “버려진 것은 정말 쓸모 없어진 것인가, 아니면 새로운 관계를 기다리는 또 하나의 존재인가?” &apos;꽃보다 아름답다&apos; 시리즈 역시 소비사회의 이면을 돌아보게 하며, “쓸모”를 기준으로 생명을 평가하는 가치관을 묻는다. &apos;신십장생도&apos; 작업은 더 나아가 한국 전통 회화의 상징 체계와 생태 철학을 접목해 오늘의 시대를 꿰뚫는 서사를 구성한다.</p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    이러한 작업 세계는 두 개의 중요한 축을 따라 전개된다. 첫째는 비판의 축, 즉 영잔폐도(永殘廢圖)라 부를 수 있다. 이는 한 번 버려지면 사라지지 않는 폐기물과 잔해가 세계를 점령한 현실을 드러내며, 자연보다 폐기물이 더 오래 남는 ‘역설적 불멸’의 시대를 고발한다. 김정아는 이 시대를 폐기의 미학이 지배하는 시대라 진단하며, 우리가 만든 세계가 무엇으로 구성되어 있는지를 직시하게 만든다. 둘째는 승화의 축, 곧 폐물승화(廢物昇華)이다. 그는 바다에서 수거한 폐기물들을 화면의 중심 조형 요소로 수용하고 예술적 언어로 재조합한다. 버려진 물질은 그의 손에서 새로운 의미를 획득하고, 관계의 맥락 속에서 다시 살아난다. </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    그의 작업 &apos;꽃꿈&apos;은 개인적 욕망을 향한 것이 아니라 존재의 존엄을 회복하려는 의지를 품고 있다. 그것은 상실 이후에도 다시 시작하려는 의지이며, 사용 가치를 넘어 존재의 근본적 이유를 묻는 작업이다. 사라진 것들의 존엄을 회복하는 이 작업 세계는, 결국 인간 중심주의 이후의 예술관이자 새로운 생태 미학의 가능성을 제시한다.
    </p>
  </>
);

const BODY_EN = (
  <>
    <p className="mb-6 text-gray-700 leading-relaxed">
      The Medici Prize, hosted by the Medici Association (Chairperson Seo Mi-ok), marks its tenth
      edition this year. Jung Ah Kim, the artist who received the Grand Prize in this meaningful
      award, will hold a solo exhibition at Hakgojae from November 11 to 25, 2025. The most
      urgent and consequential challenge facing humanity today is, without question, the
      environment. Yet addressing the environment through artistic language is never a simple
      matter. Art is not a vehicle for propaganda or promotion; it demands its own formal
      tension, one that elevates the problems of reality to the dimension of aesthetic reflection
      and the sublime.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Jung Ah Kim is one of the rare artists who confronts this difficulty head-on. Rather than
      settling for direct denunciation or simple messaging about the contemporary environmental
      crisis, she has rigorously transformed the ecological sensibility she has accumulated
      through years of fieldwork into a structure of formal aesthetics and philosophical
      reflection. As a result, her work opens a field of artistic contemplation that moves beyond
      environmental issues to fundamentally reconsider the relationships between humanity and
      nature, matter and existence, tradition and the present. This exhibition seeks to offer a
      concentrated view of her singular artistic world, one that has organically fused ecological
      practice, lived experience, and the symbolic systems of traditional Korean art.
    </p>

    <div className="h-5" />

    <h3 className="text-lg font-semibold text-left text-[#003247] mb-10">
      Ten Symbols of Longevity and Ten Symbols of Waste: When the Eternity of Tradition Collides
      with the Wreckage of Civilization
    </h3>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/1.jpg"
        alt="빈 자리"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">
          New Painting of Ten Symbols of Longevity
        </span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          180 × 336 cm, acrylic on folding screen, marine debris, 2022
        </span>
      </div>
    </div>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/2.jpg"
        alt="빈 자리"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">
          Painting of Ten Symbols of Longevity
        </span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          Late 19th–early 20th century (Korea&apos;s Enlightenment Period), color on silk,
          Collection of the National Palace Museum of Korea
        </span>
      </div>
    </div>

    <div className="h-5" />

    <p className="mb-6 text-gray-700 leading-relaxed">
      Across the eight panels of the folding screen unfolds a familiar image of the Ten Symbols of
      Longevity. At first glance, it appears to be a work steeped in the traditional symbolic
      system through which the Joseon dynasty prayed for health and long life. Yet the closer one
      approaches the surface, the more this screen begins to provoke an unfamiliar unease. A
      considerable number of the longevity motifs — animals, peaches of immortality, the elixir
      plant — have been left as blank white space. They look at first like traces of an unfinished
      painting, but on closer reflection, they are closer to traces of extinction. Of the eight
      deer, six have already lost their color and remain only as empty space; more of the motifs
      have been erased into blankness than retain their color. This work is precisely Jung Ah
      Kim&apos;s New Painting of Ten Symbols of Longevity (2022). She borrows the Ten Symbols of
      Longevity, a symbolic structure representative of Joseon painting, while deploying it as a
      visual strategy that sharply exposes the problems of our own time.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      In traditional painting, the Ten Symbols of Longevity — the sun, mountains, water, rocks,
      pine trees, turtles, deer, cranes, peaches, and the fungus of immortality — symbolized the
      eternity, longevity, and vitality inherent in the natural world. This symbolic system
      reflected a worldview that celebrated the harmony and cyclical order of nature and the
      continuity of life. But Jung Ah Kim does not simply reproduce this ancient symbolism as it
      stands. Instead, she asks:
    </p>

    <p className="mb-6 text-gray-500 leading-relaxed">
      &quot;What, in this age, is truly eternal?&quot;
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Before this question, the artist summons the traditional ten symbols one by one and
      proposes a new list to stand in their place: the &quot;Ten Symbols of Waste (十常廢),&quot;
      ten forms of debris that never disappear. In an age when nature can no longer occupy the
      position of &quot;eternity,&quot; it is waste, instead, that refuses to vanish — and the
      artist foregrounds, across the surface of the work, the paradox that garbage has become the
      new symbol of immortality.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      If the world of the traditional Ten Symbols spoke of the harmony of nature and the enduring
      span of life, then the Ten Symbols of Waste produced by human civilization today symbolize a
      world of pollution and persistence. &quot;Water,&quot; which once signified circulation and
      life, can no longer circulate, choked by chemical sludge and microplastics; the
      &quot;mountain,&quot; once a symbol of eternity, proves less permanent than a mountain of
      e-waste; and the &quot;peach,&quot; once a symbol of immortality, has today been supplanted
      by food waste and the problem of overproduction. In this way, the artist sets each
      traditional symbol face to face with today&apos;s tragic reality, revealing an uncomfortable
      portrait of civilization.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      As a result, New Painting of Ten Symbols of Longevity borrows a traditional form while being
      thoroughly dismantled from within. The deer, cranes, and turtles that fill the screen have
      all lost their color, erased into white space — a visual device showing that nature, no
      longer able to recover, stands before its fate of extinction. Occupying the screen in their
      place are actual pieces of debris collected from the sea: plastic bottle caps, twine, broken
      styrofoam, discarded fishing gear. Nature has faded, but the trash remains; life has
      disappeared, but the wreckage multiplies.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Jung Ah Kim&apos;s New Painting of Ten Symbols of Longevity is not merely a formal
      experiment that borrows from tradition; it is a powerful, critical painting that collides
      traditional aesthetics with contemporary ecological reality. Reexamining the concept of
      &quot;eternity&quot; once longed for in the past, the artist says:
    </p>

    <p className="mb-6 text-gray-500 leading-relaxed">
      &quot;We have always blessed the time of nature, but the new eternity that human
      civilization has created is, instead, waste.&quot;
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      This shocking reversal is summed up in the work in a single sentence: what should have been
      eternal has disappeared, and what should have disappeared has become eternal.
    </p>

    <div className="h-8" />

    <h3 className="text-lg font-semibold text-left text-[#003247]">
      Fragments of Reality Spilling Beyond the Boundaries of Painting
    </h3>
    <div className="h-8" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/3.jpg"
        alt="Picturesque"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          71 × 81 cm, frame, oil on panel, marine debris, 2018
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Jung Ah Kim&apos;s Picturesque (2018) takes the traditional landscape composition of a
      brilliant sunset rising over the sea. The horizon line crossing the center of the picture,
      the reflected light, the sensuously captured resonance of color, and the gradation of a
      rapturous evening sky are all typical pictorial devices that fix the scene before us in
      sentimental beauty. As the title Picturesque suggests, this landscape summons the aesthetics
      of the picturesque view once ideally pursued by European modern painting. But this pictorial
      calm does not last long.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      A mass of material bursts up from the bottom of the frame as if erupting outward — broken
      styrofoam, fragments of colored plastic, drink bottle caps, tiny particles — and begins to
      erode the landscape within the painting. As if a pile of debris washed up from the sea had
      occupied the picture, the painting is transformed from an object of &quot;pure art&quot;
      appreciation into evidence of environmental destruction. At this point, the work is
      abruptly overturned. As the artist points out, &quot;The landscape inside the frame is an
      object of appreciation held at a distance from me, but the moment the trash crosses over
      the edge of the frame, it is no longer a picture — it becomes reality.&quot; This work
      visualizes precisely that collapse of the boundary.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      This work leads the viewer&apos;s senses to a strange point of collision. What is seen first
      is beauty, but that beauty is soon disturbed into discomfort. Visual pleasure is displaced
      by emotional aversion, and the viewer comes face to face with a reality that seeps into the
      painting like water. The sea is no longer a romantic landscape but a polluted ecosystem, and
      the sunset reads like a warning that nature is disappearing.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Yet Picturesque does not stop at a simple environmental message. It is also a critical
      experiment on the very form of painting itself. The frame has traditionally been a device
      that separates the space of art from the real world, but the artist deliberately disables
      the barrier that once protected art by destroying that boundary. The trash overflowing
      beyond the frame is not a mere object but a catalyst that triggers an &quot;aesthetic
      crisis.&quot; It seems to declare that art should not be a genre that escapes from reality,
      but a site that forces us to confront the ecological catastrophe unfolding here and now.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Before we can dream of the sea&apos;s beauty, Picturesque makes us see its reality; shedding
      the artistic ornamentation that once permitted the distance of appreciation, it embraces the
      environmental crisis as a material of our own time. The landscape still exists, but the work
      makes the viewer realize that the world within it has already changed irreversibly.
    </p>

    <div className="h-8" />

    <h3 className="text-lg font-semibold text-left text-[#003247]">
      Aesthetics of Personal Practice (躬行美學): A Landscape That Calls for Movement
    </h3>

    <div className="pb-[10px]">
      <Image
        src="/images/critique-simeunlog/4.jpg"
        alt="한 걸음 다가서면 바꿀 수 있어요"
        className="artwork-img"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          60.6 × 72.7 cm, lenticular, 2018, 2025
        </span>
      </div>
    </div>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/5.jpg"
        alt="한 걸음 다가서면 바꿀 수 있어요"
        className="artwork-img"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          60.6 × 72.7 cm, lenticular, 2018, 2025
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-500 leading-relaxed">
      &quot;A beach buried in trash — but if you take one step forward, if I translate that into
      action, the beach can become clean.&quot;
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Jung Ah Kim&apos;s work does not stop at revealing what lies behind a beautiful landscape; it
      directly raises the question of how the viewer can personally intervene within that
      landscape. If her 2018 work Picturesque attempted to collapse the boundary between art and
      reality by dismantling the viewer&apos;s safe distance of appreciation, then the lenticular
      series One Step Closer, You Can Change It goes a step further, incorporating the
      viewer&apos;s own movement into the work itself. Jung Ah Kim&apos;s art thus expands into
      what might be called an aesthetics of personal practice (躬行美學) — an aesthetics enacted
      through one&apos;s own bodily action.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Seen from a distance, the One Step Closer, You Can Change It series looks like a painting
      depicting a peaceful seascape. But the moment the viewer&apos;s position shifts, the image
      reveals something entirely different. The clean sea immediately changes into a sea polluted
      with trash and a fragmented undersea landscape, and shifting the angle again brings forth a
      revived vision of the sea. This transformation is not an accidental effect but a narrative
      device designed to respond to the viewer&apos;s own action. Through this work, the artist
      reveals that, prior to any grand structural debate, the core of the environmental problem is
      a matter of personal practice: &quot;will you act, or will you look away?&quot; A careless
      step leaves pollution unattended, but a meaningful step makes change possible.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      In Picturesque, the artist overturned the frame, that traditional device of appreciation, by
      allowing trash to invade the landscape within it, collapsing the safe zone of appreciation
      that once separated art from reality. One Step Closer, You Can Change It, by contrast, uses
      the medium of the lenticular image to directly demand a change in the viewer&apos;s physical
      distance and attitude. What matters here is not the change in the visual image itself, but
      the structure of the work that calls forth an &quot;acting viewer.&quot; Together, these two
      works speak to one shared shift: art is no longer an object of contemplation but a field for
      experimenting with the possibility of change, a change that is completed only through the
      participation and practice of the audience.
    </p>

    <div className="h-8" />

    <h3 className="text-lg font-semibold text-left text-[#003247]">
      The Second Life of Objects and an Aesthetics of Symbiosis
    </h3>
    <div className="h-6" />

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/6.jpg"
        alt="요정의 초상"
        className="artwork-img"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">The Portrait of Fairies</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          60.6 × 72.7 cm, oil on canvas, 2025
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      In Jung Ah Kim&apos;s work, the sea is not merely a backdrop for a natural landscape. It is
      an ontological field where creation and extinction, circulation and transformation
      ceaselessly occur, a vast web of relations in which human beings and objects, life and
      matter, are entangled with one another. The artist does not regard the objects she finds on
      the shore as mere waste; rather, she sees them as recorders of time and mediators of
      ecological relation. The barnacle-covered buoy works featured in this exhibition are the
      case in which this worldview is most clearly revealed.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      In the painting, the buoy is placed like a still life against a dark background, its formal
      composition recalling the visual grammar of classical still-life painting. But what covers
      its surface is not a metallic sheen but a colony of barnacles. The image looks almost like a
      scene of biological observation, delicately capturing traces of minute living activity. The
      artist visualizes the layers of time and traces of life imprinted on the surface of a
      discarded object, revealing the path of life the material has traveled. The tension of light
      and shadow that governs the entire picture summons the aesthetic tradition of Baroque
      still-life painting — particularly Dutch vanitas painting — which explored the boundary
      between existence and nonexistence, life and object. Through this, the artist quietly yet
      powerfully evokes just how fragile a notion the human-centered worldview is. This flat image
      extends into the dimension of the real when juxtaposed with the actual barnacle-covered buoy
      placed beside the work. The artist says:
    </p>

    <p className="mb-6 text-gray-500 leading-relaxed">
      &quot;The discarded plastic buoy is not the problem. The problem is the human being who
      discarded it. Nature does not distinguish the buoy from a rock.&quot;
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      This statement is the key perspective that explains her attitude toward her work. Once a
      fishing tool, the buoy fell into waste the moment it lost its use value, but the sea did not
      reject it. Instead, barnacles, algae, and microorganisms made the discarded buoy their
      habitat, forming a new ecological structure. In other words, the buoy was not severed from
      life the moment it was discarded; rather, it acquired a new mode of existence, one bound in
      relation to other forms of life.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      This perspective carries within it a fundamental critique of anthropocentric thinking. Human
      beings define the value of an object by the standard of &quot;usefulness,&quot; but nature
      does not divide the hierarchy of existence in this way. Objects presumed to have disappeared
      are absorbed into other webs of relation within nature and take on renewed ecological roles.
      To the artist, then, the barnacle-covered buoy is not a symbol of pollution but a specimen
      of symbiosis, an ecological drama in which destruction and recovery coexist.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Jung Ah Kim translates this understanding of the world into art. She goes beyond simply
      using waste as material, repositioning it instead as an object of ontological reflection.
      This is precisely where her work is distinguished from a mere aesthetics of recycling. The
      point is not the recycling of matter but an attempt to understand the world and its objects
      anew. As painting and object are configured into an installation form, the viewer moves
      between two worlds — image and object, representation and the real — and is led to
      reconsider the boundary between matter and life. Ultimately, this body of work converges on
      a single, fundamental question.
    </p>

    <p className="mb-6 text-gray-500 leading-relaxed">&quot;What constitutes life?&quot;</p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      If life is not a fixed substance but a process that arises within relation, then an object
      discarded by a human being can also become a new ecological being through its encounter with
      the other. In this way, Jung Ah Kim&apos;s work triggers a shift in perspective, rewriting
      the hierarchy of existence and prompting us to see the world anew.
    </p>

    <div className="h-6" />
    <h3 className="text-lg font-semibold text-left text-[#003247]">
      Eternally Remaining Waste (永殘廢圖) · Sublimation of Waste (廢物昇華)
    </h3>

    <div className="pb-[40px]">
      <Image
        src="/images/critique-simeunlog/7.png"
        alt="꽃꿈"
        className="artwork-img mb-[20px] max-w-[80%] mx-auto"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">quiet dream</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          72.7 × 60.6 cm, cast in hanji, 2025
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Jung Ah Kim is an artist who has lived in Geoje, South Gyeongsang Province, for twenty-six
      years, condensing into her work the sensibility and experience she has gained alongside the
      sea. For sixteen years, she has volunteered with an environmental organization in marine
      debris monitoring conducted at sixty coastal survey points nationwide, carrying out her
      artistic practice alongside this fieldwork. This experience demonstrates that her work is an
      art practice grounded in field-based research and data, extending well beyond a mere formal
      experiment.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Drawing on her professional survey experience, she explains that &quot;the survey method
      involves collecting every piece of debris larger than 2.5 cm and sorting it into sixty
      categories, with plastics in particular broken down into subcategories such as single-use
      items, beverage bottles, bottle caps, detergent containers, and lighters.&quot; She adds,
      however, that &quot;wood and metal are recorded together as a single category, so their
      actual share appears understated.&quot; She goes on to note that &quot;over sixteen years of
      surveys, about 87% of marine debris was plastic, with fragments of styrofoam buoys and rope
      and twine from fishing activity accounting for a particularly large share.&quot; She also
      emphasizes that &quot;cigarette butts, fishing gear, and firework debris are types that cause
      very severe ecological damage relative to their quantity,&quot; and reveals that she
      continues to take part in the &quot;Yeoril Campaign,&quot; which aims to reduce the volume of
      the top ten types of debris to one-tenth of current levels. Her art thus originates in a
      distinctive practice that combines environmental sensibility, ecological survey work, and
      field experience.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      This is precisely why her work carries such conviction. She possesses the artistic
      sensibility to translate the traces left by trash and waste into the language of aesthetic
      reflection. Jung Ah Kim does not stop at simply denouncing today&apos;s environmental crisis
      or making an emotional appeal about it. Instead, she binds together debris retrieved from
      the sea, fragments worn down by time, and traces of marine life, constructing a formal
      apparatus that expands into an ontological question.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Debris covered in barnacles, for instance, appears within the picture as a new biological
      trace. This form breaks down the distinction between life and object, nature and waste, and
      asks: &quot;Is what has been discarded truly rendered useless, or is it another being
      waiting for a new relation?&quot; The More Beautiful than Flowers series likewise leads us to
      look back at the underside of consumer society, questioning a set of values that measures
      life by the standard of &quot;usefulness.&quot; New Painting of Ten Symbols of Longevity
      goes further still, grafting the symbolic system of traditional Korean painting onto an
      ecological philosophy to construct a narrative that pierces through our present age.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      This body of work unfolds along two crucial axes. The first is the axis of critique, which
      might be called &quot;eternally remaining waste (永殘廢圖).&quot; It reveals a reality in
      which debris and wreckage, once discarded, never disappear and have come to occupy the
      world, indicting an age of &quot;paradoxical immortality&quot; in which waste outlasts
      nature itself. Jung Ah Kim diagnoses this as an age dominated by an aesthetics of disposal,
      forcing us to confront what the world we have made is actually composed of. The second is
      the axis of sublimation, &quot;sublimation of waste (廢物昇華).&quot; She takes debris
      collected from the sea and admits it as the central formal element of the picture,
      recombining it into an artistic language. In her hands, discarded matter acquires new
      meaning and comes back to life within a context of relation.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Her work quiet dream is not directed toward personal desire but carries within it the will
      to restore the dignity of existence. It is a will to begin again even after loss, a work
      that asks after the fundamental reason for being, beyond mere use value. In restoring the
      dignity of things that have vanished, this body of work ultimately proposes an art beyond
      anthropocentrism — the possibility of a new ecological aesthetics.
    </p>
  </>
);

export default function SimeunlogReview() {
  const { lang } = useLanguage();
  return (
    <main role="main" className="px-4 py-8 max-w-4xl mx-auto">
      <header className="text-center mb-6">
        <h2 className="text-[14px] font-semibold text-[#666666] mb-2">{LABEL[lang]}</h2>
        <h1 className="text-2xl font-bold mb-2">{TITLE[lang]}</h1>
        <h3 className="text-base font-medium text-[#4B5563] mb-10">{AUTHOR[lang]}</h3>
      </header>
      <div className="h-5" />

      {lang === 'ko' ? BODY_KO : BODY_EN}
    </main>
  );
}
