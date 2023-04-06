import React from 'react';

import { Button } from '../Button';

import { IModalContainerProps } from './interface';

import './style.css';

export const ModalContainer = ({ children, onPortalClose }: IModalContainerProps) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
      <Button onButtonClick={onPortalClose}>Close</Button>
    </div>
  );
};
