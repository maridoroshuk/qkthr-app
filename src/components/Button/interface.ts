import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  type?: 'submit' | 'reset';
  onButtonClick?: () => void;
}
