import { ChangeEvent } from 'react';

export type TSelectProps = {
  id: string;
  name: string;
  localStorageKey: string;
  options: ICountry[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
