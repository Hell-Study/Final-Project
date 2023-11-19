import * as styled from './TableHeaderItem.styles';
import { useRecoilState } from 'recoil';
import {
  tableSortUpDownState,
  tableSortValueState,
} from 'recoil/atoms/tableAtoms';

interface IProps {
  value: string;
}

export const TableHeaderItem = ({ value }: IProps) => {
  const processedValue = value.slice(0, 4);

  const [tableSortValue, setTableSortValue] =
    useRecoilState(tableSortValueState);
  const [tableSortUpDown, setTableSortUpDown] =
    useRecoilState(tableSortUpDownState);

  const isSameValue = () => {
    if (processedValue === '고가대비' || processedValue === '저가대비') {
      return tableSortValue === processedValue;
    } else {
      return tableSortValue === value;
    }
  };

  const changeSortVlaue = () => {
    if (isSameValue()) {
      setTableSortUpDown(!tableSortUpDown);
    } else {
      if (processedValue === '고가대비' || processedValue === '저가대비') {
        setTableSortValue(processedValue);
      } else {
        setTableSortValue(value);
      }
    }
  };

  return (
    <styled.TableHeaderItemContainer
      $value={value}
      onClick={changeSortVlaue}
      className={isSameValue() ? 'active' : ''}
    >
      {value}
      <styled.SortIconWrapper>
        <styled.SortUpIcon
          className={isSameValue() ? (tableSortUpDown ? 'active' : '') : ''}
          viewBox="0 -250 320 512"
        />
        <styled.SortDownIcon
          className={isSameValue() ? (tableSortUpDown ? '' : 'active') : ''}
          viewBox="0 250 320 512"
        />
      </styled.SortIconWrapper>
    </styled.TableHeaderItemContainer>
  );
};
