import { memo, useEffect } from 'react';
import * as styled from './TableNavSelect.styles';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { baseExchangeState } from 'recoil/atoms/commonAtoms';
import { selectedCoinState } from 'recoil/atoms/tableAtoms';
import { CustomSelect } from 'components/CustomSelect';
import { SELECT_OPTION, SELECT_SINGLE_OPTION } from './TableNavSelect.constant';

const TableNavSelect = () => {
  const [baseExchange, setBaseExchange] = useRecoilState(baseExchangeState);
  const setSelectedCoin = useSetRecoilState(selectedCoinState);

  useEffect(() => {
    setSelectedCoin('BTC');
  }, [baseExchange]);

  return (
    <styled.SelectWrapper>
      기준 거래소
      <CustomSelect
        optionData={SELECT_OPTION}
        onChange={(value) => {
          setBaseExchange(value);
        }}
      />
      <styled.ArrowLeftRightIcon />
      <CustomSelect optionData={SELECT_SINGLE_OPTION} disabled={true} />
      해외 거래소
    </styled.SelectWrapper>
  );
};

export default memo(TableNavSelect);
