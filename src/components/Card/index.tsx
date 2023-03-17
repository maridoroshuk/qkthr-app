import React, { Component } from 'react';

import { ICardProps } from './interface';

import './style.css';

export class Card extends Component<ICardProps> {
  render() {
    const { children } = this.props;

    return <div className="card-container">{children}</div>;
  }
}
