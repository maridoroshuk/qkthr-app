import { ReactNode } from 'react';

export interface IButtonWithIcon {
  children: ReactNode;
  icon: string;
  onButtonClick: () => void;
}
