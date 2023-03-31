import React from 'react';

import { IFormControlProps } from './interface';

import './style.css';

export const FormControl = ({ children }: IFormControlProps) => {
  return <div className="form-control-container">{children}</div>;
};
