import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import { withLocation } from '@/hoc/withLocation';

import './style.css';

export const LayoutComponent = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const Layout = withLocation(LayoutComponent);
