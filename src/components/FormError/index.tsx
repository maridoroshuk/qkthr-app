import React from 'react';

import { IFormErrorProps } from './interface';

import './style.css';

export const FormError = ({ children }: IFormErrorProps) => {
  return <span className="tooltip">{children}</span>;
};

export default FormError;
