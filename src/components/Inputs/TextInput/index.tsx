import React, { ChangeEvent, Component } from 'react';

import withLocalStorage from '@/hoc/withLocalStorage';

import { ITextInputState, TTextInputProps } from './interface';

import './style.css';

export class TextInputComponent extends Component<TTextInputProps, ITextInputState> {
  constructor(props: TTextInputProps) {
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
    const { placeholder, name, id } = this.props;
    const { value } = this.state;

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

export const TextInput = withLocalStorage(TextInputComponent);
