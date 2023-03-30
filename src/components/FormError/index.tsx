import React, { Component } from 'react';

import { IFormErrorProps } from './interface';

import './style.css';

class FormError extends Component<IFormErrorProps> {
  render() {
    const { children } = this.props;
    return <span className="tooltip">{children}</span>;
  }
}

export default FormError;
