import React, { memo } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { Select } from '@/components/Inputs/Select';
import { withError } from '@/hoc/withError';
import { countries } from '@/mock/countries';

import { ICountryProps } from './interface';

const CountryComponent = ({ country, onCountryChange }: ICountryProps) => {
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
};

export const Country = memo(withError(CountryComponent));
