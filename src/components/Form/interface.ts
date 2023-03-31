import * as actions from './actions';

export interface IFormProps {
  onAddCard: (card: IFormCard) => void;
}

type TFormStringData =
  | typeof actions.UPDATE_NAME
  | typeof actions.UPDATE_BIRTHDAY
  | typeof actions.UPDATE_COUNTRY
  | typeof actions.UPDATE_GENDER
  | typeof actions.UPDATE_IMAGE;

export type TFormDataAction =
  | { type: TFormStringData; payload: string }
  | { type: typeof actions.RESET_FORM }
  | { type: typeof actions.UPDATE_PETLIST; payload: IPet[] };
