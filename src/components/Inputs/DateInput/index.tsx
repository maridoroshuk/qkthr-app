import React, { ChangeEvent, Component } from 'react';

import { TDateInputProps } from './interface';

import './style.css';

const minDate = '1900-01-01';
const maxDate = new Date().toISOString().split('T')[0];

export class DateInput extends Component<TDateInputProps> {
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e);
  };

  render() {
    const { name, id, value } = this.props;

    return (
      <input
        className="date-input"
        value={value}
        onChange={this.handleInputChange}
        type="date"
        id={id}
        name={name}
        min={minDate}
        max={maxDate}
      />
    );
  }
}
