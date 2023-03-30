import { isStartsWithUpperCase } from '@/utils/validate';

export const validateName = (value: string) => {
  let error = '';

  if (!value) {
    error = 'Name cannot be empty';
  } else if (!isStartsWithUpperCase(value)) {
    error = 'Name should start with uppercase letter';
  }

  return error;
};
