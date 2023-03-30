export const validateCountry = (value: string) => {
  let error = '';

  if (!value) {
    error = 'Please choose country';
  }

  return error;
};
