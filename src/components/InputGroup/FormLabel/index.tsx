import React, { Component } from 'react';

import { IFormLabelProps } from './interface';

export class FormLabel extends Component<IFormLabelProps> {
  render() {
    const { htmlFor, children } = this.props;
    return <label htmlFor={htmlFor}>{children}</label>;
  }
}
