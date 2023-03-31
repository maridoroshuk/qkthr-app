import React, { memo } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { DateInput } from '@/components/Inputs/DateInput';
import { withError } from '@/hoc/withError';

import { IBirthdayProps } from './interface';

const BirthdayComponent = ({ birthday, onBirthdayChange }: IBirthdayProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor="date">Birthday</FormLabel>
      <InputGroup>
        <DateInput
          value={birthday}
          id="date"
          name="date"
          localStorageKey="birthday"
          onChange={onBirthdayChange}
        />
      </InputGroup>
    </FormControl>
  );
};

export const Birthday = memo(withError(BirthdayComponent));
