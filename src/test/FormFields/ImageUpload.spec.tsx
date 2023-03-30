import React from 'react';
import { vi } from 'vitest';

import { Button } from '@/components/Button';
import { UploadImage } from '@/components/Inputs/UploadImage';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('UploadImage component', () => {
  const handleImageChange = vi.fn();
  const error = 'Please upload an image';

  it('should render without errors', () => {
    render(
      <UploadImage name="image" id="image-upload" onImageChange={handleImageChange} error={error} />
    );
    const input = screen.getByTestId('image-upload');
    expect(input).toBeInTheDocument();
  });

  it('should trigger onImageChange when image is selected', () => {
    render(
      <UploadImage name="image" id="image-upload" onImageChange={handleImageChange} error={error} />
    );
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    const input = screen.getByTestId('image-upload');
    userEvent.upload(input, file);
  });

  it('should show an error message if image is not selected', () => {
    render(
      <form>
        <UploadImage
          name="image"
          id="image-upload"
          onImageChange={handleImageChange}
          error={error}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
    const submitButton = screen.getByTestId('test-button');
    fireEvent.submit(submitButton);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
