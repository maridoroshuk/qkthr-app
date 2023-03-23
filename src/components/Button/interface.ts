import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  type?: 'submit' | 'reset';
  onButtonClick?: () => void;
}
