import { ChangeEvent } from 'react';

export interface INameProps {
  name: string;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
