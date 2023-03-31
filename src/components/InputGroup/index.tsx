import React from 'react';

import { IInputGroupProps } from './interface';

import './style.css';

export const InputGroup = ({ children }: IInputGroupProps) => {
  return <div className="input-container">{children}</div>;
};
