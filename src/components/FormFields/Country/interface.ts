import { ChangeEvent } from 'react';

export interface ICountryProps {
  country: string;
  error: string;
  onCountryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
