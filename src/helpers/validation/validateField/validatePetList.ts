export const validatePetList = (values: IPet[]) => {
  let error = '';

  const selected = values.filter((el) => el.isChecked === true);

  if (selected.length === 0) {
    error = 'Please choose at least one pet';
  }

  return error;
};
