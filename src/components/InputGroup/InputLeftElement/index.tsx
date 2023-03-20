import React, { Component } from 'react';

import { IInputLeftElementProps } from './interface';

import './style.css';

export class InputLeftElement extends Component<IInputLeftElementProps> {
  render() {
    const { children } = this.props;
    return <div className="left-element-container">{children}</div>;
  }
}
