import React from 'react';
import { describe, expect, it } from 'vitest';

import { Card } from '@/components/Card';

import { render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('Card component', () => {
  it('renders text prop', () => {
    render(<Card>Test</Card>);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('has class "card-container"', async () => {
    render(<Card>Test</Card>);
    const element = screen.getByTestId('card');
    expect(element.className).toEqual('card-container');
  });
});
