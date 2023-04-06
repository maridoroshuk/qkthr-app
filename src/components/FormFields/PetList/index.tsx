import React, { memo } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { CheckBox } from '@/components/Inputs/Checkbox';
import { withError } from '@/hoc/withError';
import { pets } from '@/mock/pets';

import { IPetListProps } from './interface';

const PetListComponent = ({ register }: IPetListProps) => {
  return (
    <InputGroup>
      <FormControl>
        <FormLabel htmlFor="pets">Choose your favorite pet/s</FormLabel>
        {pets.map(({ id, value }) => {
          return (
            <CheckBox
              key={id}
              id={id}
              name="petList"
              htmlFor={value}
              label={value}
              register={register}
            />
          );
        })}
      </FormControl>
    </InputGroup>
  );
};

export const PetList = memo(withError(PetListComponent));
