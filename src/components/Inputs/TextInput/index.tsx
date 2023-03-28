import React, { ChangeEvent, Component } from 'react';

import { TTextInputProps } from './interface';

import './style.css';

export class TextInput extends Component<TTextInputProps> {
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange, onStorageSave } = this.props;
    onChange(e);

    if (onStorageSave) {
      onStorageSave(e.target.value);
    }
  };

  render() {
    const { placeholder, name, id, value, cachedValue } = this.props;

    return (
      <input
        className="text-input"
        value={cachedValue || value}
        onChange={this.handleInputChange}
        placeholder={placeholder}
        type="text"
        id={id}
        name={name}
      />
    );
  }
}
