import React, { memo, useState } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { Switcher } from '@/components/Inputs/Switcher';
import { withError } from '@/hoc/withError';
import { genders } from '@/mock/genders';

import { IGenderProps } from './interface';

const GenderListComponent = ({ register }: IGenderProps) => {
  return (
    <InputGroup>
      <FormControl>
        <FormLabel htmlFor="pets">Gender</FormLabel>
        {genders.map(({ id, value }) => {
          return <Switcher key={id} id={id} name="gender" value={value} register={register} />;
        })}
      </FormControl>
    </InputGroup>
  );
};

export const GenderList = memo(withError(GenderListComponent));
