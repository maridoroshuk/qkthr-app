import React from 'react';

import { IInputLeftElementProps } from './interface';

import './style.css';

export const InputLeftElement = ({ children }: IInputLeftElementProps) => {
  return <div className="left-element-container">{children}</div>;
};
