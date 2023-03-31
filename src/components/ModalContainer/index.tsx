import React from 'react';

import { IModalContainerProps } from './interface';

import './style.css';

export const ModalContainer = ({ children }: IModalContainerProps) => {
  return <div className="modal">{children}</div>;
};
