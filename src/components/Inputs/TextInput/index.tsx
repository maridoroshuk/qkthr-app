import React, { ChangeEvent, Component } from 'react';

import { TTextInputProps } from './interface';

import './style.css';

export class TextInput extends Component<TTextInputProps> {
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(e);
  };

  render() {
    const { placeholder, name, id, value } = this.props;

    return (
      <input
        className="text-input"
        value={value}
        onChange={this.handleInputChange}
        placeholder={placeholder}
        type="text"
        id={id}
        name={name}
      />
    );
  }
}
