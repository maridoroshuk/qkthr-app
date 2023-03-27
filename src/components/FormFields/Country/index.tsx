import React, { Component } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { Select } from '@/components/Inputs/Select';
import { countries } from '@/mock/countries';

import { ICountryProps } from './interface';

export class Country extends Component<ICountryProps> {
  render() {
    const { country, onCountryChange } = this.props;

    return (
      <FormControl>
        <FormLabel htmlFor="gender">Country</FormLabel>
        <InputGroup>
          <Select
            value={country}
            options={countries}
            id="country"
            name="country"
            localStorageKey="country"
            onChange={onCountryChange}
          />
        </InputGroup>
      </FormControl>
    );
  }
}
