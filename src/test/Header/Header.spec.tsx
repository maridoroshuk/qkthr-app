import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { Header } from '@/components/Header';
import { routes } from '@/constants/routes';

import { render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('Header component', () => {
  it('renders the app name and nav links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText('Flowers')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Home').getAttribute('href')).toBe(routes.home);
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('About us').getAttribute('href')).toBe(routes.about);
  });
});
