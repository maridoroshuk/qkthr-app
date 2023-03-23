interface Checkable {
  isChecked: boolean;
}

export function filterByChecked<T extends Checkable>(arr: T[]): T[] {
  return arr.filter((element) => element.isChecked);
}
