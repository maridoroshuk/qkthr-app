import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/constants/routes';

import './style.css';

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-container">
          <li className="nav-link">
            <Link to={routes.home}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to={routes.about}>About us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
