import { ChangeEvent } from 'react';

export interface IBirthdayProps {
  birthday: string;
  onBirthdayChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
