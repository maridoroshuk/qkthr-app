export type TSelectProps = {
  id: string;
  name: string;
  localStorageKey: string;
  options: {
    id: number;
    value: string;
  }[];
} & IInputProps;

export interface ISelectState {
  value: string;
}
