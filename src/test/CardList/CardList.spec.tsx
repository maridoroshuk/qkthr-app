import React from 'react';
import { describe, expect, it } from 'vitest';

import { CardList } from '@/components/CardList';
import { cards } from '@/mock/cards';

import { render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('CardList component', () => {
  it('renders all passed cards', () => {
    render(<CardList />);
    expect(screen.getAllByTestId('card')).toHaveLength(cards.length);
  });

  it('renders correct passed cards data', async () => {
    render(<CardList />);
    cards.forEach(({ id, title, author }) => {
      expect(screen.getByTestId(`${id}-card-title`)).toHaveTextContent(title);
      expect(screen.getByTestId(`${id}-card-author`)).toHaveTextContent(author);
    });
  });
});
