import React, { ChangeEvent } from 'react';

import { TTextInputProps } from './interface';

import './style.css';

export const TextInput = ({ placeholder, name, id, value, onChange }: TTextInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e);
  return (
    <input
      className="text-input"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      type="text"
      id={id}
      name={name}
    />
  );
};
