import React, { Component } from 'react';

import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { TextInput } from '@/components/Inputs/TextInput';

import { INameProps } from './interface';

export class Name extends Component<INameProps> {
  render() {
    const { onNameChange } = this.props;

    return (
      <InputGroup>
        <FormLabel htmlFor="name" />
        <TextInput
          placeholder="Enter your name"
          id="name"
          name="name"
          localStorageKey="name"
          onChange={onNameChange}
        />
      </InputGroup>
    );
  }
}
