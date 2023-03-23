export interface IPetListState {
  petList: IPet[];
}
export interface IPetListProps {
  onPetsListChange: (data: IPet[]) => void;
}
