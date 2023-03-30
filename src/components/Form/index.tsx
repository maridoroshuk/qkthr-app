import React, { ChangeEvent, Component } from 'react';

import { Button } from '@/components/Button';
import { Birthday } from '@/components/FormFields/Birthday';
import { Country } from '@/components/FormFields/Country';
import { GenderList } from '@/components/FormFields/GenderList';
import { Name } from '@/components/FormFields/Name';
import { PetList } from '@/components/FormFields/PetList';
import { UploadImage } from '@/components/Inputs/UploadImage';
import { validateForm } from '@/helpers/validation';
import { filterByChecked } from '@/utils/filterByChecked';

import ConfirmModal from '../Modals/ConfirmModal';

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
    isSaved: false,
    errors: {
      nameError: '',
      birthdayError: '',
      countryError: '',
      petListError: '',
      genderError: '',
      imageError: '',
    },
  };

  handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, name: e.target.value },
    }));
  };

  handleBirthdayChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, birthday: e.target.value },
    }));
  };

  handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState(({ formData }: IFormState) => ({
      formData: { ...formData, country: e.target.value },
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

    const errors = validateForm(formData);
    const hasError = Object.values(errors).some((value: string) => value.length > 0);

    if (hasError) {
      this.setState({
        errors,
      });
    } else {
      this.setState({
        formData: {
          name: '',
          birthday: '',
          country: '',
          petList: [],
          gender: '',
          image: '',
        },
        isSaved: true,
      });

      this.props.onAddCard(formData);
    }
  };

  handlePortalClose = () => {
    this.setState({ isSaved: false });
  };

  render() {
    const {
      formData: { name, birthday, country },
      isSaved,
      errors: { nameError, birthdayError, countryError, petListError, genderError, imageError },
    } = this.state;

    return (
      <>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <Name name={name} onNameChange={this.handleNameChange} error={nameError} />
          <Birthday
            birthday={birthday}
            onBirthdayChange={this.handleBirthdayChange}
            error={birthdayError}
          />
          <Country
            country={country}
            onCountryChange={this.handleCountryChange}
            error={countryError}
          />
          <GenderList onGenderChange={this.handleGenderChange} error={petListError} />
          <PetList onPetsListChange={this.handlePetListChange} error={genderError} />
          <UploadImage
            onImageChange={this.handleImageChange}
            name="form-image"
            id="form-image"
            error={imageError}
          />
          <Button type="submit">Submit</Button>
        </form>
        {isSaved && (
          <ConfirmModal onPortalClose={this.handlePortalClose}>
            Data has been saved successfully!
          </ConfirmModal>
        )}
      </>
    );
  }
}
