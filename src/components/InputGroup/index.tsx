import React, { Component } from 'react';

import { IInputGroupProps } from './interface';

import './style.css';

export class InputGroup extends Component<IInputGroupProps> {
  render() {
    const { children } = this.props;
    return <div className="input-container">{children}</div>;
  }
}
