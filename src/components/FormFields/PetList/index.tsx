import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { CheckBox } from '@/components/Inputs/Checkbox';
import { withError } from '@/hoc/withError';
import { pets } from '@/mock/pets';

import { IPetListProps } from './interface';

const PetListComponent = ({ onPetsListChange }: IPetListProps) => {
  const [petList, setPetList] = useState<IPet[]>([...pets]);

  useEffect(() => {
    onPetsListChange(petList);
  }, [onPetsListChange, petList]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const isChecked = e.target.checked;
    const updatedPetList = petList.map((pet) => {
      return pet.id === id ? { ...pet, isChecked } : pet;
    });

    setPetList(updatedPetList);
  };

  return (
    <InputGroup>
      <FormControl>
        <FormLabel htmlFor="pets">Choose your favorite pet/s</FormLabel>
        {petList.map(({ id, value, isChecked }) => {
          return (
            <CheckBox
              key={id}
              checked={isChecked}
              id={id}
              name={value}
              htmlFor={value}
              label={value}
              onChange={handleOnChange}
            />
          );
        })}
      </FormControl>
    </InputGroup>
  );
};

export const PetList = memo(withError(PetListComponent));
