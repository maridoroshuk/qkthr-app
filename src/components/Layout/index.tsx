import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}
