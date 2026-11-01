'use client';

import Image from 'next/image';
import { loc, useLanguage } from '../../lib/language';

const LABEL = loc('[ 정석도 평론 ]', '[ Critique by Jeong Seokdo ]');
const TITLE = loc(
  '회화적 역설, 이질적 시간의 정경',
  'A Pictorial Paradox, A Scene of Heterogeneous Time',
);
const AUTHOR = loc(
  '정석도(철학박사, 남해인문예술연구소장)',
  'Jeong Seokdo (Ph.D. in Philosophy; Director, Namhae Institute for Humanities and the Arts)',
);

const BODY_KO = (
  <>
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/1.jpeg"
        alt="빈 자리"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">빈 자리</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          194x130(cm), 패널에 아크릴릭, 바다쓰레기, 거울, 2011~2021
        </span>
      </div>
    </div>
    <p className="mb-6 text-gray-700 leading-relaxed">
    회화는 가장 원초적인 가상공간이다. 따라서 작가는 본질적으로 가상 세계를 붙들고 사는 비현실적 존재로서 가상 인간이기도 하다. 작가의 본분은 생전 체험하지 못한 세계의 참모습을 그려 보이는 것, 즉 현실을 넘어 이상을 작업하는 데 있다. 물론 현실을 초월한 이상의 지향이 단지 추상적인 어떤 세계의 그림에 한정되지 않는다는 사실을 우리는 다 안다. 전형적인 이상주의의 형태라는 것은 가깝게는 자기수양적 회화관에 토대를 두고 자연 사물을 인문적으로 재인식하는 동아시아 전통회화의 작업 태도 등에서 엿볼 수 있다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
    우리가 몸담은 자본주의 구조 속에서 현대미술 역시 그 상품적 가치를 부정할 수는 없다. 비싼 그림이 곧 훌륭한 작품이고, 작가는 부가가치가 특별히 높은 상품생산자로서 개념화되는 것이 현실이다. 그러나 현실이 이렇다고 해서 거기에 무조건 동조할 수는 없다. 왜냐하면 작가의 미덕은 동조와 복종에 있지 않고 독창과 줏대에 있기 때문이다. 이러한 현실일수록 우리는 다시금 미술작업의 본래 의미와 그 본질을 환기할 수 있다. 비록 고대 동아시아의 수양론적 회화관에 입각한 정도는 아닐지라도, 작가는 그림을 팔아먹는 사람이 아니라 새로운 세계를 상상하는 사람 이라는 것, 그림은 허세와 위선으로 포장하는 상품 생산 작업이 아니라 이상을 그리는 실존의 작업임을 말이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
    김정아 작가의 작업에서는 우선 상품적 가치의 가능성보다는 시각적 사유의 계기 가 돋보인다. 타인의 시선을 과도하게 의식하는 한국 사회의 특징처럼 그림 작업마저도 타인의 시선으로 허세와 보여주기에 골몰하는 경향이 흔한 데 반해 작가의 그림은 묘사와 표현의 진솔함과 더불어 인문적 해석이 가능한 자기 본연의 시점을 견지하고 있다. 작업의 외연적 면면은 두 가지로 드러난다. 대표적으로 바다에서 수집한 플라스틱 쓰레기를 이용한 오브제 작업과 숲과 건물의 벽체 등을 소재로 한 평면 회화 작업이 그것이다.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/2.jpeg"
        alt="인공파도2"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">인공파도2</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          365x80.3(cm), 패널에 아크릴릭, 바다쓰레기, 2018
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    바닷가에 떠밀려 온 각종 플라스틱 부유물들을 이용한 작업은 의도가 뚜렷하다. 표면적으로 그것은 환경오염을 고발하고 자연 생태의 복원을 일깨운다. 작가는 온갖 종류의 플라스틱 쓰레기 천지의 바닷가를 작업의 시발점으로 삼고 있다. 바다는 본래 생명의 원천이자 종착지로서 무한 포용성을 내포한 공간적 의미로 다가온다. 그것은 생물학적 우주이자 우리가 실제로 체험할 수 있는 지상의 우주다. 그런 바다가 지금은 용도를 다한 플라스틱 공산품과 생활용품 등의 일상적인 유입에 따라 돌이킬 수 없는 상태의 바다로 변해가기에, 작가는 작가로서 할 수 있는 시각적 표현 방식을 통해 생태환경의 문제를 제기하고 경각심을 일깨우는 독자적인 회화의 형식을 마련하고 있다. 심층적으로 볼 때 플라스틱 해양쓰레기 작업에서는 역설 혹은 이중성이 드러난다. 해양쓰레기를 청소하면서 동시에 작업의 재료를 확보하게 되는 작가의 작업은 생태적 계몽의 계기와 순수하고 독창적인 창작의 계기가 동시에 존재하는 것이다. 말하자면 작품으로 재구성된 무용지물의 플라스틱 조각은 이미 무용지용의 물체로서 &apos;아름다운 쓰레기&apos;다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
    작품에 깃든 계몽적 계기는 내용을 통해 직설적으로 드러나므로 굳이 많은 말이 필요 없다고 볼 때 여기서 우리가 해명해야 할 것은 아름다운 쓰레기로서 플라스틱 오브제 작업의 회화적 의미의 본질을 수반한 그 미학적 가치다. 주지하듯이 플라스틱은 자본주의의 기념비적 물질성이다. 우리가 지금 당면한 자연은 자연적 자연에 인공적 자연이 가미된 모양새다. 인공적 자연은 곧 부자연의 자연으로서 플라스틱 자연이라 말할 수 있다. 가볍고 견고하며 자유로운 성형과 복제가 장점인 플라스틱은 본래 자연 파괴를 막는 대체제의 역할을 했지만, 대량생산과 소비 외에 자기 본연의 항상성 때문에 되려 환경파괴의 근원이 된다. 자기 증식과 순환에 기초한 자연적 자연과 달리 플라스틱 자연은 원형 그대로 퇴적되고, 바다에서 부유하는 가운데 미세하게 분열됨으로써 환원 불가능한 오염을 초래한다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
    그러나, 당연하게도, 무심한 도구로서 자기 존재의 근거가 인간에게 있는 플라스틱 쓰레기는 아무런 죄가 없다. 궁극적으로 문제 삼아야 할 것은 인간의 의식이지 눈앞에 벌어진 무용한 플라스틱 형상이 아니다. 기존 인터뷰 등을 통해 우리는 작가가 무엇보다 각종 플라스틱 쓰레기의 형상과 색을 재미있게 바라보는 것을 알 수 있다. 그 재미, 즉 색다른 조형의 가능성은 다름 아닌 쓸모없음에서 나온 것이다. 쉽게 말해 그것들은 일상에서의 실용성을 상실함으로써 비로소 예술적 쓸모를 갖게 된 사물로서 우연히 노출되고 발견된 것이다. 여기서 실용성은 곧 관계성이다. 플라스틱 물건들이 더 이상 쓸모를 갖지 못한다는 것은 말하자면 인간과의 관계 속에서 제 용도와 의미를 담보했던 물건들이 인간으로부터 이탈된 것을 뜻하기 때문이다. 은유적 관점에서 보면 실용성의 소멸인 쓰레기는 관계적 생명이 끝난 물체이자 자기 시간의 단절이다. 같은 관점에서, 도구는 쓸모가 없으면 죽는 것이므로, 도구적 사물로서 실용성을 다한 플라스틱 물건들은 &apos;버려진 시간&apos; 혹은 &apos;죽은 시간&apos;이다.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
    인간과의 거리가 멀어짐으로써 자기 본연의 도구적 시간의 의미를 상실한 플라스틱 물건들은 본의 아니게 혹은 이제 비로소 &apos;그것 자체&apos;로서 자유롭고 독립된 사물이자 새로운 시간적 의미로서 부활한다. 그것은 무엇보다 실용성과 관계성에서 멀어짐으로써 생겨난 자기 시간의 환생이다. 작가가 포착한 조형적 재미는 바로 플라스틱 쓰레기에 수반된 독립된 시간과 파도와 공기와 빛에 저항하고 동화한 시간 및 퇴색한 시간으로부터 비롯한 것이다. 플라스틱 오브제 작업에서 외적 재료에 내포된 조형적 가능성으로서의 재미는 또한 내적 인문적 의미를 수반한다. 시간의 풍파를 거쳐 빛바랜 플라스틱의 색감은 그 자체로 인간의 삶의 단면에 유비될 수 있는 고독과 소외와 허무 같은 감정을 일깨운다. 우리가 작가의 플라스틱 오브제 작업의 미학적 가치를 해석하고자 할 때 그 근간은 바로 거기에 내포된 시각적 재미와 인문적 의미의 토대인 &apos;시간성&apos;이다.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/3.jpg"
        alt="picturesque"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          81x71(cm), 액자, 패널에 유화, 바다쓰레기, 2018
        </span>
      </div>
    </div>
    <p className="mb-6 text-gray-700 leading-relaxed">
    플라스틱 오브제 작업은 개념적인 방식도 있지만 대체로 바다를 그린 배경에 파도의 형상 등을 은유적으로 재현하거나 혹은 구상적 배경에 배경과 직접적인 연관성 없이 바다 쓰레기를 얹는 등, 장식성과 무관한 강한 화면을 구성하는 방식으로 전개된다. 이처럼 회화적 재현을 소홀히 하지 않는 작가의 작업 방식은 오브제가 등장하지 않는 평면 회화 작업과 동떨어지지 않는 정감적 맥락을 형성하게 된다. 숲과 건물, 그 적막 가운데 간혹 등장하는 놀이공원의 플라스틱 말 등은 그 자체로 자연적 자연과 플라스틱 자연이 혼재된 우리의 현실 세계를 시제가 혼융된 비현실적 공간으로 인식하는 조형적 근거다.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/4.jpg"
        alt="밤의 숲"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">밤의 숲</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          194x72(cm), 캔버스에 아크릴릭, 2020
        </span>
      </div>
    </div>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/5.jpeg"
        alt="숨어있던 꽃"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">숨어있던 꽃</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          90x37(cm), 캔버스에 아크릴릭, 2018
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    바다 작업과 병행되는 숲 그림은 사물의 존재 배경으로서 생태적 의미를 수반한 사실성을 배제하지 않으면서도 전체적으로 보면 분명 관념적이다. 숲은 화면을 빈틈없이 채우는 평면적인 형태로 구성됨으로써 관념적 실재의 공간으로 자리 매겨진다. 숲속이나 건물 사이에 문득 등장하는 계단식 통로는 회화적 환영을 넘어 다른 차원의 세계로 향하는 관념의 돌파구다. 텅 빈 대지에 덩그렇게 솟아 있는 건물 형상은 마치 도화지처럼 얇게 지극히 평면적으로 구성되어 있다. 그것은 오래전에 허물어져 공간적 의미를 상실한 그리스 신전 유적지의 석조기둥같이 공간성이 무의미해지고 시간성만 남은 형국을 드러낸다. 단단한 구조물로서의 건축물의 사실성은 지극히 얇고 평면적인 표현을 통해 관념적으로 재현됨으로써 종래 영원을 꿈꾸는 일회성을 암시하고 있다. 동시에 그것은 회화적으로 환원된 시간의 질감과 차원에 대한 암시이기도 하다.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/6.png"
        alt="없는 듯 있다"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">없는 듯 있다</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          169x60(cm), 캔버스에 아크릴릭, 2018
        </span>
      </div>
    </div>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/7.jpg"
        alt="푸른 골목의 안쪽"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">없는 듯 있다</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          155x95(cm), 캔버스에 아크릴릭, 2021
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    숲 작업 가운데는 몇 개의 독립된 화면으로 분절된 채 재구성된 것이 있다. 그것은 자연과 그 자연을 둘러싼 사건들이 우리의 시선에서 각기 독립적으로 현상되면서도 유기적으로 통일된 세계의 다차원성을 보여준다. 우리가 목도하는 것은 숲의 표면적인 정체성으로서 공간적 차원 즉 공간성 외에 시간적 차원 즉 시간성이다. 자연의 숲은 시간의 순환에 따른 항상성을 유지하면서 현존한다. 시간적 차원은 다시 숲의 관계적 차원 혹은 이야기적 차원 즉 관계성과 사건성으로 확장된다. 다차원성을 함축한 숲은 형상 자체의 양감 공간감과 더불어 원초적 느낌과 녹음 짙은 관념적 안식처로서뿐만 아니라 또한 시간적 차원에 수반된 관점과 시제의 중요성을 부각한다. 가령, 산이 멀리서 보는 기하학적 형상성에 근거한다면, 숲은 상대적으로 가까우면서 전체를 보는 관점을 뜻한다. 나아가 멀리 보이는 형상으로서의 산이 미래지향적이고 가까이 있는 형상으로서 나무가 현재 지향적이라면, 숲은 나무의 연 대임과 동시에 나무를 초월한 전체이자 산의 구체성이라는 측면에서 과거와 현재와 미래를 모두 함축한다. 분절과 재구성의 숲은 서로 연관된 숲의 모습이 차원을 달리하면서 조합된 풍경 외에 사실적인 자연을 구성하면서도 전혀 다른 시간적 차원이 개입하기도 한다. 그럼으로써 작가는 우리 앞에 현시된 자연적 자연으로서의 숲이 바위같이 단단하고 속이 꽉 막힌 공간이 아니라 순환적이고 유동적이며 그 안에 이야기를 품을 수 있는 비어 있는 공간으로서 현존함을 환기한다.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    보다시피 평면 회화 작업은 작가의 보다 원초적인 회화적 욕망에 근거한 작업이라는 점에서 플라스틱 오브제 작업과 그 속성이 다른 듯 하나, 조형 요소나 재료에 내포된 의미를 놓고 볼 때 두 가지 작업의 성격은 일맥상통한다는 것을 알 수 있다. 동일성의 맥락 가운데서도 최종적인 것은 다름 아닌 색의 정서다. 플라스틱 오브제 작업의 전체적인 색의 정서와 평면 회화 작업의 색의 정서는 다르지 않다. 색은 곧 성격의 은유로서 조형 요소 가운데 회화의 성격을 결정짓는 것이 바로 색이라고 할 때, 색의 정서가 다르지 않다는 것은 결과적으로 표면적 조형 방식이 달라 각기 다른 범주로 나뉠 수 있는 작업이 결국 같은 성격을 지닌다는 것을 뜻한다. 작가의 바다색은 주로 그냥 아름답고 평화로워서 누구나 보고 싶어 하는 그 넓고 파란 공간을 표현하기보다는 어부의 시선에 비친 듯한 사실적인 색을 곧이곧대로 보여준다. 그것은 숲의 색상과 채도에서 재현된다.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
    바다에서건 숲에서건 빈 들판에서건 작가의 평면 회화의 색감은 울트라마린과 인디언 레드 계열의 색이 돋보이는 중국 돈황 석굴의 벽화가 연상되는 색 조합으로서 얼마간 생경한 느낌으로 다가온다. 그것은 우리의 눈에 처음부터 온화하게 들어오는 인상주의적 색감과 거리가 먼 것으로서 플라스틱 바다 쓰레기의 퇴색한 색감과 관념적으로 조응한다. 플라스틱 부유 쓰레기에서 노출되는 퇴색은 바로 자연의 본 색이다. 그것은 빛과 공기와 물에 의해 기존의 허세와 위선적 치장이 벗겨지고 자연적 자연에 동화된 이후에 발하는 본디의 색이다. 색감의 조응을 통해 플라스틱 오브제의 무용하고 이질적인 시간성은 이제 동질적인 자연 본색이자 복원된 자연으로서 제 의미를 되찾는다. 색의 정서는 소외와 고독과 일회적 관계와 허무와 공허 등 작가에 의해 미적으로 환원된 인간 내면의 정감을 대변한다.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/8.jpg"
        alt="꽃보다 아름답다"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">꽃보다 아름답다</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          63x63x4(cm), 한지 캐스팅에 수채, 2003
        </span>
      </div>
    </div>
    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/9.jpeg"
        alt="시내버스 승차권 판매소"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">시내버스 승차권 판매소</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          90x37(cm), 종이에 아크릴릭, 2003
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    플라스틱 오브제 작업과 숲 작업 외에도 일회용 컵과 종이 접시를 성형한 것을 비롯해, 먹고 남은 과일이나 음식 쓰레기를 그리거나 캐스팅한 것, 거리의 낡은 재래식 건물 등, 사실상 작가의 전체 작업은 동일한 맥락을 유지하고 있다고 본다. 즉 그것은 플라스틱 자연과 의미가 통하는 &apos;가벼움&apos;, &apos;일회성&apos;, &apos;버려짐&apos;, &apos;무용성&apos;, &apos;비어있음&apos;에서 나아가 인문적으로 &apos;소외&apos;, &apos;허무&apos;, &apos;공허 등과 유비적 소통을 통해 정서와 정감의 생태를 포함한 자연적 자연의 복원을 꿈꾸는 것이다.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/10.jpeg"
        alt="꿈과 이제 오후"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">꿈과 이제 오후</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          53x40(cm), 캔버스에 아크릴릭, 2013
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
    총괄적인 견지에서 볼 때 작가가 그려서 밝히고자 하는 것은 이미 중심을 차지해서 빛을 보고 있는 것들이 아니라 빛을 잃은 것들, 버려진 것들, 그늘진 곳에 존재하거나 혹은 그림자 같은 것들이다. 작가는 그렇게 소외된 시간 속에서 그 사물의 시간의 진실성을 포착해 내기 위해 직설적인 방식과 은유적 관념적 방식을 병용한다. 작가의 미감의 핵심 논리는 바로 사물은 실용성 혹은 관계성을 탈피해 소외되었을 때 비로소 아름다운 사물로서 독립자재한다는 것이다. 플라스틱 오브제 작업과 숲과 들판과 낡고 적막한 건물과 인적 없는 풍경의 평면 작업과 일상적으로 버리고 외면한 것을 향한 연민의 작업 등은 이질적이고 소외된 시간에 함축된 미적 정감에 대한 작가의 회화적 성찰이다.
    </p>
  </>
);

const BODY_EN = (
  <>
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/1.jpeg"
        alt="빈 자리"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Empty Place</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          194 × 130 cm, acrylic on panel, marine debris, mirror, 2011–2021
        </span>
      </div>
    </div>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Painting is the most primordial of virtual spaces. The artist, then, is essentially a
      virtual being — an unreal existence who lives clinging to a virtual world. The
      artist&apos;s proper task is to render visible the true face of a world never experienced
      in life: that is, to work upon the ideal, beyond the real. Of course, we all know that this
      orientation toward an ideal transcending reality is not confined merely to the depiction of
      some abstract world. A typical form of such idealism can be glimpsed, close at hand, in the
      working attitude of the East Asian tradition of painting, grounded in a view of painting as
      self-cultivation and in the humanistic re-cognition of natural things.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Within the capitalist structure we all inhabit, contemporary art too cannot deny its status
      as a commodity. The reality is that an expensive painting is taken to be a fine work, and
      the artist is conceptualized as a producer of goods with an especially high added value. But
      the fact that this is the reality does not mean we must unconditionally accede to it, for
      the artist&apos;s virtue lies not in conformity and obedience but in originality and
      conviction. The more prevalent this reality becomes, the more urgently we are called to
      recall the original meaning and essence of artistic work — to remember that, even if not
      quite grounded in the ancient East Asian view of painting as self-cultivation, the artist is
      not someone who sells pictures but someone who imagines a new world; that painting is not a
      work of commodity production wrapped in bravado and pretense, but an existential labor
      devoted to depicting the ideal.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      In Jung Ah Kim&apos;s work, what stands out first is not the possibility of commodity value
      but an occasion for visual reflection. Where the tendency to be absorbed in bravado and
      self-display through the eyes of others — a characteristic of a Korean society excessively
      conscious of other people&apos;s gaze — often extends even into the practice of painting,
      Kim&apos;s pictures instead maintain a candor of depiction and expression together with a
      point of view genuinely her own, one open to humanistic interpretation. The outward aspect
      of her work reveals itself in two forms: most notably, object works using plastic debris
      collected from the sea, and flat paintings whose subjects are forests and the walls of
      buildings.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/2.jpeg"
        alt="인공파도2"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Artificial Wave 2</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          365 × 80.3 cm, acrylic on panel, marine debris, 2018
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      The intent behind the works made from various plastic debris washed up on the shore is
      unmistakable. On the surface, they indict environmental pollution and call for the
      restoration of natural ecology. The artist takes as her point of departure a shoreline
      overrun with every kind of plastic waste. The sea, in its original sense, approaches us as a
      space of infinite embrace, both the source and the destination of life. It is a biological
      universe, an earthly cosmos we can actually experience. Because such a sea is now, through
      the everyday influx of plastic manufactured goods and household items that have outlived
      their use, turning into a sea in an irreversible condition, the artist — through whatever
      visual means of expression are available to her as an artist — raises the problem of the
      ecological environment and establishes her own distinctive pictorial form to awaken our
      vigilance. Viewed more deeply, a paradox, or a duality, emerges in this work with plastic
      marine debris. In cleaning up marine debris while simultaneously securing the material for
      her work, the artist&apos;s practice holds within it, at once, both an occasion for
      ecological enlightenment and an occasion for pure, original creation. In other words, the
      plastic fragments reconstituted into a work are already objects whose very uselessness has
      become useful — &apos;beautiful garbage.&apos;
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Since the enlightening occasion embedded in the work reveals itself directly through its
      content and needs little further elaboration, what we must clarify here is the aesthetic
      value that accompanies the essential pictorial meaning of the plastic object works as
      beautiful garbage. As is well known, plastic is the monumental materiality of capitalism.
      The nature we confront today is natural nature to which artificial nature has been added.
      Artificial nature may be called unnatural nature — plastic nature, so to speak. Light,
      durable, and prized for the freedom with which it can be molded and reproduced, plastic
      originally served as a substitute material meant to prevent the destruction of nature; yet,
      beyond mass production and consumption, it is precisely plastic&apos;s own inherent
      constancy that instead becomes the very source of environmental destruction. Unlike natural
      nature, which is founded on self-propagation and circulation, plastic nature accumulates in
      its original form and, drifting in the sea, fragments minutely, thereby bringing about an
      irreducible pollution.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      But, naturally enough, plastic waste — an indifferent tool whose very grounds for existing
      lie in the human being — bears no guilt whatsoever. What must ultimately be called into
      question is human consciousness, not the useless plastic forms laid out before our eyes.
      From existing interviews we can see that the artist, above all, looks with delight at the
      shapes and colors of every kind of plastic debris. That delight — that is, the possibility
      of an unusual formal beauty — arises from nothing other than uselessness itself. Put simply,
      these are objects that, having lost their practical utility in everyday life, only then came
      to acquire an artistic use, objects accidentally exposed and discovered as such. Here,
      practical utility is, in effect, relationality. For plastic objects to no longer possess any
      use means, in other words, that objects which once secured their function and meaning
      within a relation to human beings have become detached from the human. Seen metaphorically,
      garbage — the extinction of utility — is an object whose relational life has ended, a
      severance of its own time. In the same sense, since a tool dies once it becomes useless,
      plastic objects that, as instrumental things, have exhausted their utility are &apos;discarded
      time&apos; or &apos;dead time.&apos;
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Having, through their growing distance from the human, lost the meaning of their own
      inherent instrumental time, plastic objects are revived — unintentionally, or perhaps only
      now for the first time — as free and independent things in themselves, bearing a new
      temporal meaning. This is, above all, a reincarnation of their own time, born of their
      distance from utility and relationality. The formal delight the artist captures arises
      precisely from the independent time carried within plastic debris, and from the time that
      has resisted and been assimilated by wave, air, and light, and from time that has faded. In
      the plastic object works, the delight that lies in the formal possibilities inherent in the
      external material also carries an inner, humanistic meaning. The color of plastic, faded
      through the weathering of time, in itself awakens feelings such as solitude, alienation, and
      emptiness, which can be likened to facets of human life. When we seek to interpret the
      aesthetic value of the artist&apos;s plastic object works, its foundation is precisely
      &apos;temporality&apos; — the ground of both the visual delight and the humanistic meaning
      embedded within them.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/3.jpg"
        alt="picturesque"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Picturesque</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          81 × 71 cm, frame, oil on panel, marine debris, 2018
        </span>
      </div>
    </div>
    <p className="mb-6 text-gray-700 leading-relaxed">
      While some of the plastic object works proceed in a conceptual manner, they generally
      unfold by constructing a forceful image unrelated to mere decoration — whether by
      metaphorically representing the forms of waves and the like against a painted sea
      background, or by placing marine debris upon a figurative background with no direct relation
      to that background. In this way, the artist&apos;s working method, which never neglects
      pictorial representation, forms an emotional continuity with the flat paintings in which no
      object appears. Forests and buildings, and the plastic carousel horse that occasionally
      appears amid their stillness, serve, in themselves, as the formal grounds on which our real
      world — where natural nature and plastic nature intermingle — is perceived as an unreal
      space in which tenses are fused together.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/4.jpg"
        alt="밤의 숲"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Night Forest</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          194 × 72 cm, acrylic on canvas, 2020
        </span>
      </div>
    </div>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/5.jpeg"
        alt="숨어있던 꽃"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Hidden Flowers</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          90 × 37 cm, acrylic on canvas, 2018
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      The forest paintings, carried out alongside the sea works, are, taken as a whole,
      unmistakably conceptual, even as they do not exclude a realism bound up with ecological
      meaning as the ground of things&apos; existence. The forest is composed as a flat form that
      fills the picture plane without gaps, and is thereby positioned as a space of conceptual
      reality. The stepped passageways that suddenly appear within the forest or between
      buildings are conceptual breakthroughs that move beyond pictorial illusion toward a world of
      another dimension. The form of a building looming solitary upon an empty ground is composed
      as thinly and extremely flatly as if upon a sheet of drawing paper. It reveals a condition,
      like the stone columns of a long-since-ruined Greek temple site that has lost all spatial
      meaning, in which spatiality itself has become meaningless and only temporality remains. The
      realism of the architectural structure as a solid edifice is conceptually re-presented
      through an extremely thin and flat expression, thereby hinting at that conventional
      disposability that dreams, all the while, of eternity. At the same time, it is also a
      suggestion of the texture and dimension of time as reduced pictorially.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/6.png"
        alt="없는 듯 있다"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Present as if Absent</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          169 × 60 cm, acrylic on canvas, 2018
        </span>
      </div>
    </div>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/7.jpg"
        alt="푸른 골목의 안쪽"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Present as if Absent</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          155 × 95 cm, acrylic on canvas, 2021
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Among the forest works are some that have been reconstructed after being segmented into
      several independent images. They show the multidimensionality of a world in which nature and
      the events surrounding it appear independently before our gaze, and yet are organically
      unified. What we witness, beyond spatiality — the spatial dimension as the forest&apos;s
      surface identity — is also temporality, its temporal dimension. The natural forest exists in
      the present while maintaining a constancy governed by the cycle of time. This temporal
      dimension in turn extends into the forest&apos;s relational or narrative dimension — that
      is, its relationality and eventfulness. Implying multidimensionality, the forest, together
      with the volume and sense of space of its form itself, brings into relief not only a
      primordial feeling and a deeply verdant, conceptual refuge, but also the importance of
      perspective and tense as they accompany its temporal dimension. If, for instance, a mountain
      is grounded in a geometric formality seen from a distance, the forest signifies a viewpoint
      that is relatively close while still taking in the whole. Further, if the mountain, as a
      form seen from afar, is oriented toward the future, and the tree, as a form close at hand, is
      oriented toward the present, then the forest — at once the assembly of trees and a whole
      that transcends the tree, and in that respect the concreteness of the mountain — implies
      past, present, and future all at once. Forests of segmentation and reconstruction are
      landscapes assembled from mutually related aspects of the forest across differing
      dimensions; even as they compose a realistic nature, an entirely different temporal
      dimension also intervenes within them. In doing so, the artist reminds us that the forest,
      as the natural nature presented before us, exists not as a space as hard and impenetrable as
      rock, but as a cyclical, fluid, and empty space capable of holding a story within it.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      As can be seen, the flat paintings, grounded as they are in the artist&apos;s more
      primordial pictorial desire, seem to differ in their properties from the plastic object
      works; yet when we consider the meaning embedded in the formal elements and materials, it
      becomes clear that the character of the two bodies of work runs along the same line. What
      proves final, even within this context of sameness, is nothing other than the emotion of
      color. The overall color emotion of the plastic object works and the color emotion of the
      flat paintings are no different from one another. If color is, in effect, a metaphor of
      character, and it is color, among the formal elements, that determines the character of a
      painting, then the sameness of color emotion means, in the end, that works which might
      otherwise be divided into separate categories on account of their differing surface formal
      methods in fact share the same character. The artist&apos;s blue of the sea, rather than
      expressing that broad, blue space that is simply beautiful and peaceful — the space that
      everyone wants to see — presents instead, plainly and directly, a realistic color as if
      reflected in a fisherman&apos;s gaze. This is reproduced in the hue and saturation of the
      forest as well.
    </p>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Whether at sea, in the forest, or upon an empty field, the coloration of the artist&apos;s
      flat paintings arrives with a somewhat unfamiliar feeling, as a combination of colors
      reminiscent of the murals of the Dunhuang caves in China, in which tones of ultramarine and
      Indian red stand out. Far removed from the impressionistic coloration that meets our eyes
      gently from the very first, it corresponds conceptually with the faded coloration of plastic
      marine debris. The fading exposed in floating plastic debris is nothing other than the true
      color of nature — the original color that emerges once the existing bravado and hypocritical
      adornment have been stripped away by light, air, and water, after the object has been
      assimilated into natural nature. Through this correspondence of coloration, the useless and
      heterogeneous temporality of the plastic objects now recovers its own meaning as a
      homogeneous, true color of nature and as a restored nature. The emotion of color represents
      the inner sentiments of the human being — alienation, solitude, disposable relation,
      futility, emptiness — aesthetically reduced by the artist.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/8.jpg"
        alt="꽃보다 아름답다"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">More Beautiful than Flowers</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          63 × 63 × 4 cm, watercolor on hanji casting, 2003
        </span>
      </div>
    </div>
    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/9.jpeg"
        alt="시내버스 승차권 판매소"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">City Bus Ticket Office</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          90 × 37 cm, acrylic on paper, 2003
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Beyond the plastic object works and the forest works — including pieces molded from
      disposable cups and paper plates, drawings or castings of leftover fruit or food waste, and
      old, conventional street buildings — the artist&apos;s work as a whole, in fact, sustains
      one and the same context, I believe. That is, moving from &apos;lightness,&apos;
      &apos;disposability,&apos; &apos;abandonment,&apos; &apos;uselessness,&apos; and
      &apos;emptiness&apos; — meanings that communicate with plastic nature — it dreams, through
      an analogical communication extending humanistically to &apos;alienation,&apos;
      &apos;futility,&apos; and &apos;emptiness,&apos; of restoring natural nature, including an
      ecology of emotion and sentiment.
    </p>

    <div className="h-4" />
    <div className="pb-[40px]">
      <Image
        src="/images/critique-jung/10.jpeg"
        alt="꿈과 이제 오후"
        className="artwork-img mb-[20px]"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col items-center space-y-1 sm:flex-row sm:justify-center sm:space-x-[15px] sm:space-y-0">
        <span className="text-[14px] font-bold text-[#111827]">Dream and Now, Afternoon</span>
        <span className="text-[14px] font-normal text-[#4B5563]">
          53 × 40 cm, acrylic on canvas, 2013
        </span>
      </div>
    </div>

    <p className="mb-6 text-gray-700 leading-relaxed">
      Taken as a whole, what the artist seeks to depict and reveal is not what already occupies
      the center and basks in the light, but what has lost its light: things discarded, things
      existing in shadowed places, or things resembling shadows themselves. Within that alienated
      time, the artist employs, together, both a direct method and a metaphorical, conceptual
      method in order to capture the truth of an object&apos;s own time. The core logic of the
      artist&apos;s aesthetic sense is precisely this: that an object achieves independent,
      self-sufficient beauty only once it has broken free of utility or relationality and become
      alienated. The plastic object works, the flat works depicting forests, fields, old and
      silent buildings, and landscapes devoid of human presence, and the works of compassion
      directed toward what is habitually discarded and turned away from — all of these are the
      artist&apos;s pictorial reflection on the aesthetic sentiment implicit in a time that is
      heterogeneous and alienated.
    </p>
  </>
);

export default function SimJungTaekReview() {
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
