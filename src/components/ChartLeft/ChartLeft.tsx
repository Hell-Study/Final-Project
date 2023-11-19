import { useSetRecoilState } from 'recoil';
import { selectState } from 'recoil/atoms/selectStateAtoms';
import { CustomSelect } from 'components/CustomSelect';
import { ChartInfo } from './ChartInfo';
import { SELECT_OPTION } from './ChartLeft.constant';
import * as styled from './ChartLeft.styles';
import { TradingViewWidget } from './TradingViewWidget';

export const ChartLeft = () => {
  const setSelectState = useSetRecoilState(selectState);
  return (
    <styled.ChartContainer>
      <styled.SelectWrapper>
        <ChartInfo />
        <CustomSelect
          optionData={SELECT_OPTION}
          onChange={(val) => {
            setSelectState(val);
          }}
        />
      </styled.SelectWrapper>
      <TradingViewWidget />
    </styled.ChartContainer>
  );
};
