import * as styled from './Home.styles';
import { Header } from 'components/common/Header';
import { Footer } from 'components/common/Footer';
import { Widget } from 'components/Widget';
import { ChartLeft } from 'components/ChartLeft';
import { ChartRight } from 'components/ChartRight';
import { Table } from 'components/Table';
import { ChatBox } from 'components/ChatBox';
import { ChatBtn } from 'components/ChatBtn';
import { useFetchExchangeRate } from 'hooks/binance';
import { useTitle } from 'hooks/useTitle';

export const Home: React.FC = () => {
  useFetchExchangeRate();
  useTitle();

  return (
    <>
      <Header />
      <styled.DisplayBoard>
        <Widget />
        <styled.ChartsWrapper>
          <ChartLeft />
          <ChartRight />
        </styled.ChartsWrapper>
        <Table />
        <ChatBox />
      </styled.DisplayBoard>
      <ChatBtn />
      <Footer />
    </>
  );
};
