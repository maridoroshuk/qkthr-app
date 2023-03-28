import React, { ChangeEvent, Component } from 'react';

import { TSelectProps } from './interface';

import './style.css';

export class Select extends Component<TSelectProps> {
  handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(e);
  };

  render() {
    const { name, id, options, value } = this.props;

    return (
      <select
        className="select"
        onChange={this.handleSelectChange}
        value={value}
        id={id}
        name={name}
      >
        {options.map(({ id, value, text }: ICountry) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </select>
    );
  }
}
