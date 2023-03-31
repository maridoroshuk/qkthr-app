import React from 'react';

import { ICardImageProps } from './interface';

import './style.css';

export const CardImage = ({ image, alt }: ICardImageProps) => {
  return <img className="card-image" src={image} alt={alt} />;
};
