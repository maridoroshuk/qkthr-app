import React, { ChangeEvent, Component } from 'react';

import withLocalStorage from '@/hoc/withLocalStorage';

import { TSelectProps } from './interface';

import './style.css';

class SelectComponent extends Component<TSelectProps> {
  handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(e.target.value);

    if (this.props.onStorageSave) {
      this.props.onStorageSave(e.target.value);
    }
  };

  render() {
    const { name, id, options, value, cachedValue } = this.props;

    return (
      <select
        className="select"
        onChange={this.handleSelectChange}
        value={cachedValue || value}
        id={id}
        name={name}
      >
        {options.map(({ id, value, text }) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </select>
    );
  }
}

export const Select = withLocalStorage(SelectComponent);
