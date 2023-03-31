import React from 'react';

import { ICardsContainerProps } from './interface';

import './style.css';

export const CardsContainer = ({ children }: ICardsContainerProps) => {
  return <div className="cards-container">{children}</div>;
};
