import React, { Component } from 'react';

import { ICardsContainerProps } from './interface';

import './style.css';

export class CardsContainer extends Component<ICardsContainerProps> {
  render() {
    const { children } = this.props;

    return <div className="cards-container">{children}</div>;
  }
}
