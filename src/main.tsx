import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { About } from '@/pages/About';
import { ErrorPage } from '@/pages/ErrorPage';
import { Home } from '@/pages/Home';

import { FormPage } from './pages/FormPage';

import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
