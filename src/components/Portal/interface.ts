import { ReactNode } from 'react';

export interface IPortalProps {
  children: ReactNode;
  onPortalClose: () => void;
}
