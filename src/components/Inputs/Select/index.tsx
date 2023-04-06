import React from 'react';

import { TSelectProps } from './interface';

import './style.css';

export const Select = ({ name, id, options, register }: TSelectProps) => {
  return (
    <select className="select" id={id} {...register(name)}>
      {options.map(({ id, value, text }: ICountry) => (
        <option key={id} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};
