import React, { Component } from 'react';

import { ICardImageProps } from './interface';

import './style.css';

export class CardImage extends Component<ICardImageProps> {
  render() {
    const { image, alt } = this.props;

    return <img className="card-image" src={image} alt={alt} />;
  }
}
