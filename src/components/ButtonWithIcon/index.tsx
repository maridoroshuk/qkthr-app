import React from 'react';

import { IButtonWithIcon } from './interface';

import './style.css';

export const ButtonWithIcon = ({ children, icon, onButtonClick }: IButtonWithIcon) => {
  return (
    <button
      className="icon-button"
      data-testid="test-icon-button"
      type="button"
      onClick={onButtonClick}
    >
      {children}
      <span className="icon-button-icon" style={{ backgroundImage: `url(${icon})` }}></span>
    </button>
  );
};
