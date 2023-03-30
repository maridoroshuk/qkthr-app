import { ChangeEvent } from 'react';

export type TDateInputProps = {
  id: string;
  name: string;
  localStorageKey: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
