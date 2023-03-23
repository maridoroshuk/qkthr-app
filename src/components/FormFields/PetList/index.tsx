import React, { ChangeEvent, Component } from 'react';

import { FormControl } from '@/components/FormControl';
import { InputGroup } from '@/components/InputGroup';
import { FormLabel } from '@/components/InputGroup/FormLabel';
import { CheckBox } from '@/components/Inputs/Checkbox';
import { pets } from '@/mock/pets';

import { IPetListProps, IPetListState } from './interface';

export class PetList extends Component<IPetListProps, IPetListState> {
  constructor(props: IPetListProps) {
    super(props);
    this.state = {
      petList: [...pets],
    };
  }

  handleOnChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const isChecked = e.target.checked;
    const { petList } = this.state;
    const updatedPetList = petList.map((pet) => {
      return pet.id === id ? { ...pet, isChecked } : pet;
    });

    this.setState({ petList: updatedPetList }, () => {
      this.props.onPetsListChange(updatedPetList);
    });
  };

  render() {
    const { petList } = this.state;

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
                onChange={this.handleOnChange}
              />
            );
          })}
        </FormControl>
      </InputGroup>
    );
  }
}
