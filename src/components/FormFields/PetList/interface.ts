export interface IPetListState {
  petList: IPet[];
}
export interface IPetListProps {
  error: string;
  onPetsListChange: (data: IPet[]) => void;
}
