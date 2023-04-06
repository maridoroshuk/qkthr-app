import React from 'react';

import { TDateInputProps } from './interface';

import './style.css';

const minDate = '1900-01-01';
const maxDate = new Date().toISOString().split('T')[0];

export const DateInput = ({ name, id, register }: TDateInputProps) => {
  return (
    <input
      className="date-input"
      type="date"
      id={id}
      min={minDate}
      max={maxDate}
      {...register(name)}
    />
  );
};
