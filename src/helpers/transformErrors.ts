import { FieldErrors } from 'react-hook-form';

export const transformErrors = (errors: FieldErrors<IFormCard>): IErrors => {
  const transformedErrors: IErrors = {
    name: '',
    birthday: '',
    country: '',
    petList: '',
    gender: '',
    image: '',
  };

  for (const [key, value] of Object.entries(errors)) {
    transformedErrors[key as keyof IFormCard] = value.message;
  }

  return transformedErrors;
};
