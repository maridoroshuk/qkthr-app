import React from 'react';

import { IButtonProps } from './interface';

import './style.css';

export const Button = ({ children, type, onButtonClick }: IButtonProps) => {
  return (
    <button
      className="button"
      data-testid="test-button"
      type={type || 'button'}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};
