import { ChangeEvent } from 'react';

export interface ICheckBoxProps {
  id: string;
  name: string;
  checked: boolean;
  htmlFor: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}
