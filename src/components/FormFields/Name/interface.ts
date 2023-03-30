import { ChangeEvent } from 'react';

export interface INameProps {
  name: string;
  error: string;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
