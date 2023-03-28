export interface IFormProps {
  onAddCard: (card: IFormCard) => void;
}
export interface IFormState {
  formData: IFormCard;
  isSaved: boolean;
}
