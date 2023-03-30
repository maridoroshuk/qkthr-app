export const validateGender = (value: string) => {
  let error = '';

  if (!value) {
    error = 'Please select your gender';
  }

  return error;
};
