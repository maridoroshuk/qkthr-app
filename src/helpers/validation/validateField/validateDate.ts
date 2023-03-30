export const validateDate = (value: string) => {
  let error = '';

  if (!value) {
    error = 'Date cannot be empty';
  }

  return error;
};
