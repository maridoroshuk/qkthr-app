import React, { memo, useState } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { Switcher } from '@/components/Inputs/Switcher';
import { withError } from '@/hoc/withError';
import { genders } from '@/mock/genders';

import { IGenderProps } from './interface';

const GenderListComponent = ({ onGenderChange }: IGenderProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleOnChange = (id: number, value: string) => {
    setSelectedId(id);
    onGenderChange(value);
  };

  return (
    <InputGroup>
      <FormControl>
        <FormLabel htmlFor="pets">Gender</FormLabel>
        {genders.map(({ id, value }) => {
          return (
            <Switcher
              key={id}
              checked={id === selectedId}
              name={value}
              value={value}
              onChange={() => handleOnChange(id, value)}
            />
          );
        })}
      </FormControl>
    </InputGroup>
  );
};

export const GenderList = memo(withError(GenderListComponent));
