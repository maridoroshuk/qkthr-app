import React from 'react';
import { vi } from 'vitest';

import { Button } from '@/components/Button';
import { PetList } from '@/components/FormFields/PetList';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PetListComponent', () => {
  const handlePetsListChange = vi.fn();
  const error = 'Please choose at least one pet';

  it('should render the component without errors', () => {
    render(<PetList onPetsListChange={handlePetsListChange} error={error} />);
    const formLabel = screen.getByText('Choose your favorite pet/s');
    expect(formLabel).toBeInTheDocument();
  });

  it('should call onPetsListChange with updated pet list when a checkbox is clicked', () => {
    render(<PetList onPetsListChange={handlePetsListChange} error={error} />);
    const firstCheckBox = screen.getByText('dog');
    fireEvent.click(firstCheckBox);
  });

  it('should show an error message if no pet is selected', () => {
    render(
      <form>
        <PetList onPetsListChange={handlePetsListChange} error={error} />{' '}
        <Button type="submit">Submit</Button>
      </form>
    );
    const submitButton = screen.getByTestId('test-button');
    fireEvent.submit(submitButton);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
