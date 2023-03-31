import React, { ChangeEvent } from 'react';

import { TSelectProps } from './interface';

import './style.css';

export const Select = ({ name, id, options, value, onChange }: TSelectProps) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  return (
    <select className="select" onChange={handleSelectChange} value={value} id={id} name={name}>
      {options.map(({ id, value, text }: ICountry) => (
        <option key={id} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};
