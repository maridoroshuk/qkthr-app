import React from 'react';

import { ICardProps } from './interface';

import './style.css';

export const Card = ({ children }: ICardProps) => {
  return (
    <div className="card-container" data-testid="card">
      {children}
    </div>
  );
};
