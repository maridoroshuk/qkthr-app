import React, { memo } from 'react';

import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { TextInput } from '@/components/Inputs/TextInput';
import { withError } from '@/hoc/withError';

import { INameProps } from './interface';

const NameComponent = ({ register }: INameProps) => {
  return (
    <InputGroup>
      <FormLabel htmlFor="name" />
      <TextInput name="name" placeholder="Enter your name" id="name" register={register} />
    </InputGroup>
  );
};

export const Name = memo(withError(NameComponent));
