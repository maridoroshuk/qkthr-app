import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '@/components/Button';
import { GenderList } from '@/components/FormFields/GenderList';

import { fireEvent, render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('GenderList component', () => {
  const handleGenderChange = vi.fn();
  const error = 'Please select a gender';

  it('should render with correct options', () => {
    render(<GenderList onGenderChange={handleGenderChange} error={error} />);
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByLabelText('male')).toBeInTheDocument();
    expect(screen.getByLabelText('female')).toBeInTheDocument();
    expect(screen.getByLabelText('other')).toBeInTheDocument();
  });

  it('should update the value when a gender is selected', () => {
    render(<GenderList onGenderChange={handleGenderChange} error={error} />);
    const maleRadio = screen.getByLabelText('male');
    fireEvent.click(maleRadio);
    expect(handleGenderChange).toHaveBeenCalledWith('male');
  });

  it('should show an error message if no gender is selected', () => {
    render(
      <form>
        <GenderList onGenderChange={handleGenderChange} error={error} />
        <Button type="submit">Submit</Button>
      </form>
    );
    const submitButton = screen.getByTestId('test-button');
    fireEvent.submit(submitButton);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
