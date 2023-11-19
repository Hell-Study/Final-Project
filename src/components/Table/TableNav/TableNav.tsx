import { memo, useEffect } from 'react';
import * as styled from './TableNav.styles';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { baseExchangeState, marketCodesState } from 'recoil/atoms/commonAtoms';
import { searchCoinState, selectedCoinState } from 'recoil/atoms/tableAtoms';
import { TableNavSelect } from './TableNavSelect';

const TableNav = () => {
  const baseExchange = useRecoilValue(baseExchangeState);
  const setSelectedCoin = useSetRecoilState(selectedCoinState);
  const marketCodes = useRecoilValue(marketCodesState);

  const [searchCoin, setSearchCoin] = useRecoilState(searchCoinState);
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCoin(e.target.value);
  };

  useEffect(() => {
    setSelectedCoin('BTC');
  }, [baseExchange]);

  return (
    <styled.TableNav>
      <TableNavSelect />
      <styled.SearchWrapper>
        <styled.CoinCount>암호화폐 총 {marketCodes.length}개</styled.CoinCount>
        <styled.SearchForm>
          <styled.SearchIcon />
          <styled.SearchInput
            placeholder="암호 화폐 검색"
            value={searchCoin}
            onChange={handleSearchInputChange}
          />
        </styled.SearchForm>
      </styled.SearchWrapper>
    </styled.TableNav>
  );
};

export default memo(TableNav);
