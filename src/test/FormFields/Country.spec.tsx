import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Country } from '@/components/FormFields/Country';
import { countries } from '@/mock/countries';

import { fireEvent, render, screen } from '../utils';

/**
 * @vitest-environment jsdom
 */

describe('Country component', () => {
  const handleCountryChange = vi.fn();
  const error = 'Please select a country';

  it('should render with correct selected country', () => {
    render(
      <Country country={countries[1].value} onCountryChange={handleCountryChange} error={error} />
    );
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText(countries[1].text)).toBeInTheDocument();
  });

  it('should update the value when the country is changed', () => {
    render(
      <Country country={countries[1].value} onCountryChange={handleCountryChange} error={error} />
    );
    const select = screen.getByDisplayValue(countries[1].value);
    fireEvent.change(select, { target: { value: countries[2].value } });
    expect(screen.getByText(countries[2].text)).toBeInTheDocument();
  });

  it('should show an error message when there is an error', () => {
    render(<Country country={''} onCountryChange={handleCountryChange} error={error} />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
