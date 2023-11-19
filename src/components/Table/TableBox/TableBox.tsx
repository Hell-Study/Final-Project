import { memo, useEffect, useState } from 'react';
import * as styled from './TableBox.styles';
import { useKoreanTicker, useTableSort } from 'hooks';
import { useRecoilValue } from 'recoil';
import { searchCoinState } from 'recoil/atoms/tableAtoms';
import { CoinList } from './CoinList';

const TableBox = () => {
  const socketDatas = useKoreanTicker();
  const sortedSocketDatas = useTableSort(socketDatas);

  const searchCoin = useRecoilValue(searchCoinState);
  const [filteredSocketDatas, setFilteredSocketDatas] =
    useState(sortedSocketDatas);

  useEffect(() => {
    const filteredSocketDatas = sortedSocketDatas.filter((socketData) =>
      socketData.coinName.toLowerCase().includes(searchCoin.toLowerCase()),
    );
    setFilteredSocketDatas(filteredSocketDatas);
  }, [searchCoin, sortedSocketDatas]);

  return (
    <styled.CoinListWrapper
      height={480}
      itemCount={filteredSocketDatas.length}
      itemSize={64}
      width={1030}
      itemData={filteredSocketDatas}
    >
      {CoinList}
    </styled.CoinListWrapper>
  );
};

export default memo(TableBox);
