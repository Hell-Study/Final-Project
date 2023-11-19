import * as styled from './TableHeader.styles';
import { useRecoilValue } from 'recoil';
import { baseExchangeState } from 'recoil/atoms/commonAtoms';
import { TableHeaderItem } from './TableHeaderItem';
import { memo } from 'react';

const TableHeader = () => {
  const baseExchange = useRecoilValue(baseExchangeState);
  const headerItemList = [
    '코인',
    '현재가',
    '김프',
    '전일대비',
    `고가대비${baseExchange === 'upbit' ? '(52주)' : '(전일)'}`,
    `저가대비${baseExchange === 'upbit' ? '(52주)' : '(전일)'}`,
    '거래액(일)',
  ];

  return (
    <styled.TableHeaderContainer>
      <div></div>
      {headerItemList.map((headerItem) => (
        <TableHeaderItem key={headerItem} value={headerItem} />
      ))}
    </styled.TableHeaderContainer>
  );
};

export default memo(TableHeader);
