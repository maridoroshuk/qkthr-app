import React, { Component } from 'react';

import { ICardActionsProps } from './interface';

import './style.css';

export class CardActions extends Component<ICardActionsProps> {
  render() {
    const { children } = this.props;

    return <div className="card-actions">{children}</div>;
  }
}
