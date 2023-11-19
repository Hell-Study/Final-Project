import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';

export const CoinListWrapper = styled(List)`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;
