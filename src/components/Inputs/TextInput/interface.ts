import { ChangeEvent } from 'react';

export type TTextInputProps = {
  placeholder: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
