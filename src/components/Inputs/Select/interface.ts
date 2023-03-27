export type TSelectProps = {
  id: string;
  name: string;
  localStorageKey: string;
  options: ICountry[];
  value: string;
} & IInputProps;
