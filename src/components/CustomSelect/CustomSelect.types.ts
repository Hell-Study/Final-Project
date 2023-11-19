interface IOptionData {
  key: string;
  value: string;
  title: string;
  symbol: string;
}

export interface CustomSelectProps {
  optionData: IOptionData[];
  onChange?: (e: string) => void;
  disabled?: boolean;
}
