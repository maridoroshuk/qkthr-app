import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '@/constants/routes';

import './style.css';

export class Header extends Component {
  render() {
    return (
      <>
        <nav className="nav-container">
          <h1 className="app-name">Flowers</h1>
          <ul>
            <li className="nav-link">
              <NavLink to={routes.home}>Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to={routes.about}>About us</NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
