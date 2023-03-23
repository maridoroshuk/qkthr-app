import React, { ChangeEvent, Component } from 'react';

import withLocalStorage from '@/hoc/withLocalStorage';

import { IDateInputState, TDateInputProps } from './interface';

import './style.css';

class DateInputComponent extends Component<TDateInputProps, IDateInputState> {
  constructor(props: TDateInputProps) {
    super(props);
    this.state = {
      value: this.props.cachedValue || '',
    };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });

    this.props.onChange(e.target.value);

    if (this.props.onStorageSave) {
      this.props.onStorageSave(e.target.value);
    }
  };

  render() {
    const { name, id } = this.props;
    const { value } = this.state;

    return (
      <input
        className="date-input"
        value={value}
        onChange={this.handleInputChange}
        type="date"
        id={id}
        name={name}
      />
    );
  }
}

export const DateInput = withLocalStorage(DateInputComponent);
