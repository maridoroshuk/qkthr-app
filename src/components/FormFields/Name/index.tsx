import React, { PureComponent } from 'react';

import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { TextInput } from '@/components/Inputs/TextInput';
import { withError } from '@/hoc/withError';

import { INameProps } from './interface';

export class NameComponent extends PureComponent<INameProps> {
  render() {
    const { name, onNameChange } = this.props;

    return (
      <InputGroup>
        <FormLabel htmlFor="name" />
        <TextInput
          value={name}
          placeholder="Enter your name"
          id="name"
          name="name"
          onChange={onNameChange}
        />
      </InputGroup>
    );
  }
}

export const Name = withError(NameComponent);
