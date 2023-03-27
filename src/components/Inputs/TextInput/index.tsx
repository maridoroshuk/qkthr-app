import React, { Component } from 'react';

import { TTextInputProps } from './interface';

import './style.css';

export class TextInput extends Component<TTextInputProps> {
  render() {
    const { placeholder, name, id, value, cachedValue, onChange } = this.props;

    return (
      <input
        className="text-input"
        value={cachedValue || value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        id={id}
        name={name}
      />
    );
  }
}
