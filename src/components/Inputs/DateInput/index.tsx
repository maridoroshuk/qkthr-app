import React, { ChangeEvent, Component } from 'react';

import withLocalStorage from '@/hoc/withLocalStorage';

import { TDateInputProps } from './interface';

import './style.css';

class DateInputComponent extends Component<TDateInputProps> {
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);

    if (this.props.onStorageSave) {
      this.props.onStorageSave(e.target.value);
    }
  };

  render() {
    const { name, id, value, cachedValue } = this.props;

    return (
      <input
        className="date-input"
        value={cachedValue || value}
        onChange={this.handleInputChange}
        type="date"
        id={id}
        name={name}
      />
    );
  }
}

export const DateInput = withLocalStorage(DateInputComponent);
