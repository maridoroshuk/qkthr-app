import React from 'react';

import { ICardActionsProps } from './interface';

import './style.css';

export const CardActions = ({ children }: ICardActionsProps) => {
  return <div className="card-actions">{children}</div>;
};
