import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import { withLocation } from '@/hoc/withLocation';

import './style.css';

export class LayoutComponent extends Component {
  componentDidUpdate() {}

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

export const Layout = withLocation(LayoutComponent);
