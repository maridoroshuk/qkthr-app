import React, { Component } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { DateInput } from '@/components/Inputs/DateInput';

import { IBirthdayProps } from './interface';

export class Birthday extends Component<IBirthdayProps> {
  render() {
    const { onBirthdayChange } = this.props;

    return (
      <FormControl>
        <FormLabel htmlFor="date">Birthday</FormLabel>
        <InputGroup>
          <DateInput id="date" name="date" localStorageKey="birthday" onChange={onBirthdayChange} />
        </InputGroup>
      </FormControl>
    );
  }
}
