import { ChangeEvent } from 'react';

export interface ICountryProps {
  country: string;
  onCountryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
