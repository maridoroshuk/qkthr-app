import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '@/constants/routes';

import './style.css';

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-container">
          <li className="nav-link">
            <NavLink to={routes.home}>Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to={routes.about}>About us</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
