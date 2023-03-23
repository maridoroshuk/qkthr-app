import React, { Component } from 'react';

import { IFormControlProps } from './interface';

import './style.css';

export class FormControl extends Component<IFormControlProps> {
  render() {
    const { children } = this.props;
    return <div className="form-control-container">{children}</div>;
  }
}
