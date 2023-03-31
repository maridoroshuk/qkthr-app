import React from 'react';

import { ICardContentProps } from './interface';

import './style.css';

export const CardContent = ({ children }: ICardContentProps) => {
  return <div className="card-content">{children}</div>;
};
