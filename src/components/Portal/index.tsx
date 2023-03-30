import React, { MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from '@/hooks/usePortal';

import { IPortalProps } from './interface';

import './style.css';

export const Portal = ({ children, onPortalClose }: IPortalProps) => {
  const { loaded, portalId } = usePortal();

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return loaded
    ? createPortal(
        <div className="portal" onClick={onPortalClose}>
          <div onClick={handleContentClick}>{children}</div>
        </div>,
        document.getElementById(portalId) as HTMLElement
      )
    : null;
};
