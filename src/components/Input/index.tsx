import React, { Component } from 'react';

import { IInputProps } from './interface';

import './style.css';

export class Input extends Component<IInputProps> {
  render() {
    const { placeholder } = this.props;
    return (
      <>
        <label htmlFor="search" />
        <input className="input" placeholder={placeholder} type="text" id="search" name="search" />
      </>
    );
  }
}
