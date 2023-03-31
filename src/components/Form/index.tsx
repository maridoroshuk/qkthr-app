import React, { ChangeEvent, useReducer, useState } from 'react';

import { Button } from '@/components/Button';
import { Birthday } from '@/components/FormFields/Birthday';
import { Country } from '@/components/FormFields/Country';
import { GenderList } from '@/components/FormFields/GenderList';
import { Name } from '@/components/FormFields/Name';
import { PetList } from '@/components/FormFields/PetList';
import { UploadImage } from '@/components/Inputs/UploadImage';
import { ConfirmModal } from '@/components/Modals/ConfirmModal';
import { validateForm } from '@/helpers/validation';
import { filterByChecked } from '@/utils/filterByChecked';

import * as actions from './actions';
import { IFormProps, TFormDataAction } from './interface';

import './style.css';

const initialFormDataState = {
  name: '',
  birthday: '',
  country: '',
  petList: [],
  gender: '',
  image: '',
};

const initialErrorsState = {
  nameError: '',
  birthdayError: '',
  countryError: '',
  petListError: '',
  genderError: '',
  imageError: '',
};

function formDataReducer(state: IFormCard, action: TFormDataAction): IFormCard {
  switch (action.type) {
    case actions.UPDATE_NAME:
      return { ...state, name: action.payload };
    case actions.UPDATE_BIRTHDAY:
      return { ...state, birthday: action.payload };
    case actions.UPDATE_COUNTRY:
      return { ...state, country: action.payload };
    case actions.UPDATE_PETLIST:
      return { ...state, petList: action.payload };
    case actions.UPDATE_GENDER:
      return { ...state, gender: action.payload };
    case actions.UPDATE_IMAGE:
      return { ...state, image: action.payload };
    case actions.RESET_FORM:
      return initialFormDataState;
    default:
      return state;
  }
}

export const Form = ({ onAddCard }: IFormProps) => {
  const [formData, dispatchFormData] = useReducer(formDataReducer, initialFormDataState);
  const [errors, setErrors] = useState<IErrors>(initialErrorsState);
  const [isSaved, setIsSaved] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchFormData({ type: actions.UPDATE_NAME, payload: e.target.value });
  };

  const handleBirthdayChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchFormData({ type: actions.UPDATE_BIRTHDAY, payload: e.target.value });
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatchFormData({ type: actions.UPDATE_COUNTRY, payload: e.target.value });
  };

  const handlePetListChange = (data: IPet[]) => {
    const selectedPets = filterByChecked(data);
    dispatchFormData({ type: actions.UPDATE_PETLIST, payload: selectedPets });
  };

  const handleGenderChange = (value: string) => {
    dispatchFormData({ type: actions.UPDATE_GENDER, payload: value });
  };

  const handleImageChange = (value: string) => {
    dispatchFormData({ type: actions.UPDATE_IMAGE, payload: value });
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formData);
    const hasError = Object.values(errors).some((value: string) => value.length > 0);

    if (hasError) {
      setErrors(errors);
    } else {
      dispatchFormData({ type: actions.RESET_FORM });
      setIsSaved(true);
      setErrors(initialErrorsState);

      onAddCard(formData);
    }
  };

  const handlePortalClose = () => {
    setIsSaved(false);
  };

  const { nameError, birthdayError, countryError, petListError, genderError, imageError } = errors;
  const { name, birthday, country } = formData;

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <Name name={name} onNameChange={handleNameChange} error={nameError} />
        <Birthday
          birthday={birthday}
          onBirthdayChange={handleBirthdayChange}
          error={birthdayError}
        />
        <Country country={country} onCountryChange={handleCountryChange} error={countryError} />
        <GenderList onGenderChange={handleGenderChange} error={petListError} />
        <PetList onPetsListChange={handlePetListChange} error={genderError} />
        <UploadImage
          onImageChange={handleImageChange}
          name="form-image"
          id="form-image"
          error={imageError}
        />
        <Button type="submit">Submit</Button>
      </form>
      {isSaved && (
        <ConfirmModal onPortalClose={handlePortalClose}>
          Data has been saved successfully!
        </ConfirmModal>
      )}
    </>
  );
};
