export interface IUploadImageProps {
  id: string;
  name: string;
  error: string;
  onImageChange: (value: string) => void;
}
