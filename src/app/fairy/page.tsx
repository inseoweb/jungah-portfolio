import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function PageFairy() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="작은 사물의 일기"
      period="2023-"
      medium="각 91x73(cm), 2023"
      intro={
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
        </>
      }
      heroImage={{ src: '/images/fairy/1.jpg', alt: '작은 사물의 일기', orientation: 'portrait' }}
      images={Array.from({ length: 17 }).map((_, i) => ({
        src: `/images/fairy/${i + 2}.jpg`,
        alt: '작은 사물의 일기',
        orientation: 'portrait' as const,
      }))}
      nextWork={{ titleKo: '영원을 꿈꾸는 일회용', href: '/disposable' }}
    />
  );
}
