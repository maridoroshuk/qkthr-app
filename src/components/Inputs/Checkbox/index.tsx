import React from 'react';

import { ICheckBoxProps } from './interface';

import './style.css';

export const CheckBox = ({ name, id, htmlFor, label, register }: ICheckBoxProps) => {
  return (
    <div className="checkbox-container">
      <input id={id} type="checkbox" {...register(name)} value={label} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};
