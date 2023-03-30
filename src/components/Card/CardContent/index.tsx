import React, { Component } from 'react';

import { ICardContentProps } from './interface';

import './style.css';

export class CardContent extends Component<ICardContentProps> {
  render() {
    const { children } = this.props;

    return <div className="card-content">{children}</div>;
  }
}
