import { validateCountry } from './validateField/validateCountry';
import { validateDate } from './validateField/validateDate';
import { validateGender } from './validateField/validateGender';
import { validateImage } from './validateField/validateImage';
import { validateName } from './validateField/validateName';
import { validatePetList } from './validateField/validatePetList';

export const validateForm = ({
  name,
  birthday,
  country,
  petList,
  gender,
  image,
}: IFormCard): IErrors => {
  const nameError = validateName(name);
  const birthdayError = validateDate(birthday);
  const countryError = validateCountry(country);
  const petListError = validatePetList(petList);
  const genderError = validateGender(gender);
  const imageError = validateImage(image);

  const errors: IErrors = {
    nameError,
    birthdayError,
    countryError,
    petListError,
    genderError,
    imageError,
  };

  return errors;
};
