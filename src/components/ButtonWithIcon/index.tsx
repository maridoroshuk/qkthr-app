import React, { Component } from 'react';

import { IButtonWithIcon } from './interface';

import './style.css';

export class ButtonWithIcon extends Component<IButtonWithIcon> {
  render() {
    const { children, icon, onButtonClick } = this.props;

    return (
      <button className="icon-button" type="button" onClick={onButtonClick}>
        {children}
        <span className="icon-button-icon" style={{ backgroundImage: `url(${icon})` }}></span>
      </button>
    );
  }
}
