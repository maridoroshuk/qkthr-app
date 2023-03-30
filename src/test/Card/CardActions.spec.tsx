import React from 'react';
import { describe, expect, it } from 'vitest';

import Link from '@/assets/icons/link.png';
import { ButtonWithIcon } from '@/components/ButtonWithIcon';
import { CardActions } from '@/components/Card/CardActions';

import { render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('CardActions component', () => {
  it('renders button child', () => {
    render(
      <CardActions>
        <ButtonWithIcon icon={Link}>Open in Rijksmuseum</ButtonWithIcon>
      </CardActions>
    );
    expect(screen.getByText(/Open in Rijksmuseum/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has class "card-actions"', async () => {
    render(<CardActions>Test</CardActions>);
    const element = screen.getByText(/Test/i);
    expect(element.className).toEqual('card-actions');
  });
});
