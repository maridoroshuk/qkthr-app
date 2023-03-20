import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

import './style.css';

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}
