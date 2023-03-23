import React, { Component } from 'react';

import { ISwitcherProps } from './interface';

import './style.css';

export class Switcher extends Component<ISwitcherProps> {
  render() {
    const { name, checked, value, onChange } = this.props;

    return (
      <div className="switcher-container">
        <input
          name={name}
          id={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={name}>{value}</label>
      </div>
    );
  }
}
