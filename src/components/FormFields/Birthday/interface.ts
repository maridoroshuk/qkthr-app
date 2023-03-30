import { ChangeEvent } from 'react';

export interface IBirthdayProps {
  birthday: string;
  error: string;
  onBirthdayChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
