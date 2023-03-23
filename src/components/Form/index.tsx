import React, { ChangeEvent, Component } from 'react';

import { Button } from '@/components/Button';
import { Birthday } from '@/components/FormFields/Birthday';
import { Country } from '@/components/FormFields/Country';
import { GenderList } from '@/components/FormFields/GenderList';
import { Name } from '@/components/FormFields/Name';
import { PetList } from '@/components/FormFields/PetList';
import { UploadImage } from '@/components/Inputs/UploadImage';
import { pets } from '@/mock/pets';
import { filterByChecked } from '@/utils/filterByChecked';

import { IFormProps, IFormState } from './interface';

import './style.css';

export class Form extends Component<IFormProps, IFormState> {
  state = {
    formData: {
      name: '',
      birthday: '',
      country: '',
      petList: [...pets],
      gender: '',
      image: '',
    },
  };

  handleNameChange = (value: string) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, name: value },
    }));
  };

  handleBirthdayChange = (value: string) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, birthday: value },
    }));
  };

  handleCountryChange = (value: string) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, country: value },
    }));
  };

  handlePetListChange = (data: IPet[]) => {
    const selectedPets = filterByChecked(data);
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, petList: selectedPets },
    }));
  };

  handleGenderChange = (value: string) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, gender: value },
    }));
  };

  handleImageChange = (value: string) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, image: value },
    }));
  };

  handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.formData);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <Name onNameChange={this.handleNameChange} />
        <Birthday onBirthdayChange={this.handleBirthdayChange} />
        <Country onCountryChange={this.handleCountryChange} />
        <GenderList onGenderChange={this.handleGenderChange} />
        <PetList onPetsListChange={this.handlePetListChange} />
        <UploadImage onImageChange={this.handleImageChange} name="form-image" id="form-image" />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
