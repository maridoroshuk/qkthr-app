import React, { ChangeEvent, Component } from 'react';

import { ICheckBoxProps } from './interface';

import './style.css';

export class CheckBox extends Component<ICheckBoxProps> {
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => this.props.onChange(e, this.props.id);

  render() {
    const { name, id, checked, htmlFor, label } = this.props;

    return (
      <div className="checkbox-container">
        <input
          name={name}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={this.handleInputChange}
          value={label}
        />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
    );
  }
}
