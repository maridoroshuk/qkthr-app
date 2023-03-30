export const validateImage = (value: string) => {
  let error = '';

  if (!value) {
    error = 'Please upload an image';
  }

  return error;
};
