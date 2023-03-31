import React, { ChangeEvent } from 'react';

import { ICheckBoxProps } from './interface';

import './style.css';

export const CheckBox = ({ name, id, checked, htmlFor, label, onChange }: ICheckBoxProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e, id);

  return (
    <div className="checkbox-container">
      <input
        name={name}
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleInputChange}
        value={label}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};
