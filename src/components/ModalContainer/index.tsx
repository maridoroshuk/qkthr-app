import React, { Component } from 'react';

import { IModalContainerProps } from './interface';

import './style.css';

export class ModalContainer extends Component<IModalContainerProps> {
  render() {
    const { children } = this.props;

    return <div className="modal">{children}</div>;
  }
}
