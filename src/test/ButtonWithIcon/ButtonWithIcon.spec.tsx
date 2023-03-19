import React from 'react';
import { describe, expect, it } from 'vitest';

import Link from '@/assets/icons/link.png';
import { ButtonWithIcon } from '@/components/ButtonWithIcon';

import { render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('ButtonWithIcon component', () => {
  it('renders text prop', () => {
    render(<ButtonWithIcon icon={Link}>Test</ButtonWithIcon>);
    expect(screen.getByTestId('test-icon-button')).toBeInTheDocument();
  });

  it('has class "icon-button"', async () => {
    render(<ButtonWithIcon icon={Link}>Test</ButtonWithIcon>);
    const element = screen.getByTestId('test-icon-button');
    expect(element.className).toEqual('icon-button');
  });
});
