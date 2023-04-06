import React from 'react';

import { TTextInputProps } from './interface';

import './style.css';

export const TextInput = ({ placeholder, id, name, register }: TTextInputProps) => {
  return (
    <input
      className="text-input"
      placeholder={placeholder}
      type="text"
      id={id}
      {...register(name)}
    />
  );
};
