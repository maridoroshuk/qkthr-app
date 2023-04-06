import React from 'react';

import { ISwitcherProps } from './interface';

import './style.css';

export const Switcher = ({ name, value, register }: ISwitcherProps) => {
  return (
    <div className="switcher-container">
      <input id={name} type="radio" value={value} {...register(name)} />
      <label htmlFor={name}>{value}</label>
    </div>
  );
};
