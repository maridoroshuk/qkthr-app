import React, { memo } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { Select } from '@/components/Inputs/Select';
import { withError } from '@/hoc/withError';
import { countries } from '@/mock/countries';

import { ICountryProps } from './interface';

const CountryComponent = ({ register }: ICountryProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor="gender">Country</FormLabel>
      <InputGroup>
        <Select options={countries} id="country" name="country" register={register} />
      </InputGroup>
    </FormControl>
  );
};

export const Country = memo(withError(CountryComponent));
