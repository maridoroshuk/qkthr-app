import { TRegister } from '@/@types/register';

export interface IUploadImageProps {
  id: string;
  name: string;
  register: TRegister;
  error: string | undefined;
}
