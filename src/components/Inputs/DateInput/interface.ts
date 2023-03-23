export type TDateInputProps = {
  id: string;
  name: string;
  localStorageKey: string;
} & IInputProps;

export interface IDateInputState {
  value: string;
}
