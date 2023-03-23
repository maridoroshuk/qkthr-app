// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFormProps {}

export interface IFormState {
  formData: {
    name: string;
    birthday: string;
    country: string;
    petList: IPet[];
    gender: string;
    image: string;
  };
}
