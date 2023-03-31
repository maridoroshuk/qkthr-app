import React, { ChangeEvent } from 'react';

import { TDateInputProps } from './interface';

import './style.css';

const minDate = '1900-01-01';
const maxDate = new Date().toISOString().split('T')[0];

export const DateInput = ({ name, id, value, onChange }: TDateInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <input
      className="date-input"
      value={value}
      onChange={handleInputChange}
      type="date"
      id={id}
      name={name}
      min={minDate}
      max={maxDate}
    />
  );
};
