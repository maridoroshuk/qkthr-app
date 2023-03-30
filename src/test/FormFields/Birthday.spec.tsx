import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Birthday } from '@/components/FormFields/Birthday';

import { fireEvent, render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('Birthday component', () => {
  const handleBirthdayChange = vi.fn();
  const error = 'Date cannot be empty';

  it('should render with correct passed date', () => {
    render(
      <Birthday birthday="2022-01-01" onBirthdayChange={handleBirthdayChange} error={error} />
    );
    expect(screen.getByText('Birthday')).toBeInTheDocument();
  });

  it('should update the value when the date is changed', () => {
    render(
      <Birthday birthday="2022-01-01" onBirthdayChange={handleBirthdayChange} error={error} />
    );
    const input = screen.getByDisplayValue('2022-01-01');
    fireEvent.change(input, { target: { value: '2023-01-01' } });
  });

  it('should show error message when the date is empty', () => {
    render(<Birthday birthday="" onBirthdayChange={handleBirthdayChange} error={error} />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
