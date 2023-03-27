import React, { ChangeEvent, Component } from 'react';

import { Button } from '@/components/Button';
import { Birthday } from '@/components/FormFields/Birthday';
import { Country } from '@/components/FormFields/Country';
import { GenderList } from '@/components/FormFields/GenderList';
import { Name } from '@/components/FormFields/Name';
import { PetList } from '@/components/FormFields/PetList';
import { UploadImage } from '@/components/Inputs/UploadImage';
import { filterByChecked } from '@/utils/filterByChecked';

import { IFormProps, IFormState } from './interface';

import './style.css';

export class Form extends Component<IFormProps, IFormState> {
  state = {
    formData: {
      name: '',
      birthday: '',
      country: '',
      petList: [],
      gender: '',
      image: '',
    },
  };

  handleNameChange = (e: string) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, name: value },
    }));
  };

  handleBirthdayChange = (value: string) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, birthday: new Date(value).toLocaleDateString() },
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

    const { formData } = this.state;
    this.props.onAddCard(formData);

    this.setState({
      formData: {
        name: '',
        birthday: '',
        country: '',
        petList: [],
        gender: '',
        image: '',
      },
    });
  };

  render() {
    const {
      formData: { name, birthday, country },
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <Name name={name} onNameChange={this.handleNameChange} />
        <Birthday birthday={birthday} onBirthdayChange={this.handleBirthdayChange} />
        <Country country={country} onCountryChange={this.handleCountryChange} />
        <GenderList onGenderChange={this.handleGenderChange} />
        <PetList onPetsListChange={this.handlePetListChange} />
        <UploadImage onImageChange={this.handleImageChange} name="form-image" id="form-image" />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
