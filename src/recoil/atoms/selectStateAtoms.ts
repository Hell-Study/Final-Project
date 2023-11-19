import { atom } from 'recoil';
import { SELECT_OPTION } from '../../components/ChartLeft/ChartLeft.constant';

export const selectState = atom({
  key: 'selectedOption',
  default: SELECT_OPTION[0].key,
});
