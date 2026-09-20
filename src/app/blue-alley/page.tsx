import WorkSeriesDetail from '../components/WorkSeriesDetail';

export default function PageBlueAlley() {
  return (
    <WorkSeriesDetail
      seriesTitleKo="푸른 골목의 안쪽"
      period="2021-"
      medium="155x95(cm), 캔버스에 아크릴릭, 2021"
      heroImage={{ src: '/images/critique-jung/7.jpg', alt: '푸른 골목의 안쪽', orientation: 'landscape' }}
      nextWork={{ titleKo: '해양/해양폐기물 관련 장기 작업군', href: '/marine' }}
    />
  );
}
