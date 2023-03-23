import React, { Component } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { Switcher } from '@/components/Inputs/Switcher';
import { genders } from '@/mock/genders';

import { IGenderProps } from './interface';

export class GenderList extends Component<IGenderProps> {
  state = {
    selectedId: null,
  };

  handleOnChange = (id: number, value: string) => {
    this.setState({ selectedId: id });
    this.props.onGenderChange(value);
  };

  render() {
    const { selectedId } = this.state;
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
                onChange={() => this.handleOnChange(id, value)}
              />
            );
          })}
        </FormControl>
      </InputGroup>
    );
  }
}
