import React from 'react';
import { describe, expect, it } from 'vitest';

import StillLife1 from '@/assets/still-life-1.jpg';
import { CardImage } from '@/components/Card/CardImage';

import { render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('CardImage component', () => {
  it('renders image', () => {
    render(<CardImage image={StillLife1} alt="still life" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('has class "card-image"', async () => {
    render(<CardImage image={StillLife1} alt="still life" />);
    const element = screen.getByRole('img');
    expect(element.className).toEqual('card-image');
  });
});
