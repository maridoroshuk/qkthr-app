import React from 'react';
import { vi } from 'vitest';

import { Button } from '@/components/Button';
import { Name } from '@/components/FormFields/Name';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Name component', () => {
  const handleNameChange = vi.fn();
  const error = 'Please enter your name';

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render with the correct props', () => {
    const name = 'John Doe';
    render(<Name name={name} onNameChange={handleNameChange} error={error} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('value', name);
    fireEvent.change(inputElement, { target: { value: 'Jane Doe' } });
    expect(handleNameChange).toHaveBeenCalled();
  });

  it('should show an error message if name is not provided', () => {
    render(
      <form>
        <Name name="" onNameChange={handleNameChange} error={error} />
        <Button type="submit">Submit</Button>
      </form>
    );
    const submitButton = screen.getByTestId('test-button');
    fireEvent.submit(submitButton);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
