import React, { Component } from 'react';

import { IButton } from './interface';

import './style.css';

export class Button extends Component<IButton> {
  render() {
    const { children, type, onButtonClick } = this.props;

    return (
      <button
        className="button"
        data-testid="test-button"
        type={type || 'button'}
        onClick={onButtonClick}
      >
        {children}
      </button>
    );
  }
}
