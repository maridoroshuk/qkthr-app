import React, { ChangeEvent, Component } from 'react';

import { IInputProps, IInputState } from './interface';

import './style.css';

export class Input extends Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchQuery') || '',
    };
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('searchQuery', value);
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <>
        <label htmlFor="search" />
        <input
          className="input"
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          type="text"
          id="search"
          name="search"
        />
      </>
    );
  }
}
