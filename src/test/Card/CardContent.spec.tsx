import React from 'react';
import { describe, expect, it } from 'vitest';

import { CardContent } from '@/components/Card/CardContent';

import { render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

const mockCard = {
  title: 'Floral Still Life',
  author: 'Hans Bollongier',
};

describe('CardContent component', () => {
  it('renders content props', () => {
    render(
      <CardContent>
        <h3>{mockCard.title}</h3>
        <h6 className="card-second-heading">{mockCard.author}</h6>
      </CardContent>
    );
    expect(screen.getByText(mockCard.title)).toBeInTheDocument();
    expect(screen.getByText(mockCard.author)).toBeInTheDocument();
  });

  it('has class "card-content"', async () => {
    render(<CardContent>Test</CardContent>);
    const element = screen.getByText(/Test/i);
    expect(element.className).toEqual('card-content');
  });
});
