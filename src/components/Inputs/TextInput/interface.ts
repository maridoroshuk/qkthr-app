export type TTextInputProps = {
  placeholder: string;
  id: string;
  name: string;
} & IInputProps;

export interface ITextInputState {
  value: string;
}
