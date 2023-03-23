interface IInputProps {
  localStorageKey: string;
  onChange: (value: string) => void;
  cachedValue?: string;
  onStorageSave?: (val: string) => void;
}
