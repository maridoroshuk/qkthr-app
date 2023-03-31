import React from 'react';

import { ISwitcherProps } from './interface';

import './style.css';

export const Switcher = ({ name, checked, value, onChange }: ISwitcherProps) => {
  return (
    <div className="switcher-container">
      <input
        name={name}
        id={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{value}</label>
    </div>
  );
};
