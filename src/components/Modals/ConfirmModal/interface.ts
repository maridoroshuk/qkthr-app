import { ReactNode } from 'react';

export interface IConfirmModalProps {
  children: ReactNode;
  onPortalClose: () => void;
}
