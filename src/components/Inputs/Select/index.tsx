import React, { ChangeEvent, Component } from 'react';

import withLocalStorage from '@/hoc/withLocalStorage';

import { ISelectState, TSelectProps } from './interface';

import './style.css';

class SelectComponent extends Component<TSelectProps, ISelectState> {
  constructor(props: TSelectProps) {
    super(props);
    this.state = {
      value: this.props.cachedValue || '',
    };
  }

  handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: e.target.value });

    this.props.onChange(e.target.value);

    if (this.props.onStorageSave) {
      this.props.onStorageSave(e.target.value);
    }
  };

  render() {
    const { name, id, options } = this.props;
    const { value } = this.state;

    return (
      <select
        className="select"
        onChange={this.handleSelectChange}
        value={value}
        id={id}
        name={name}
      >
        {options.map(({ id, value }) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
}

export const Select = withLocalStorage(SelectComponent);
