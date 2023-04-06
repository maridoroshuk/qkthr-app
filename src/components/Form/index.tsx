import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button';
import { Birthday } from '@/components/FormFields/Birthday';
import { Country } from '@/components/FormFields/Country';
import { GenderList } from '@/components/FormFields/GenderList';
import { Name } from '@/components/FormFields/Name';
import { PetList } from '@/components/FormFields/PetList';
import { UploadImage } from '@/components/Inputs/UploadImage';
import { ConfirmModal } from '@/components/Modals/ConfirmModal';
import { formSchema } from '@/helpers/formValidationShema';
import { transformErrors } from '@/helpers/transformErrors';
import { yupResolver } from '@hookform/resolvers/yup';

import { IFormProps } from './interface';

import './style.css';

const initialErrorsState = {
  name: '',
  birthday: '',
  country: '',
  petList: '',
  gender: '',
  image: '',
};

export const Form = ({ onAddCard }: IFormProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [formErrors, setFormErrors] = useState<IErrors>(initialErrorsState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormCard>({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    const transformedErrors = transformErrors(errors);
    setFormErrors(transformedErrors);
  }, [errors]);

  const { name, birthday, country, petList, gender, image } = formErrors;

  const onSubmit = (data: IFormCard) => {
    setIsSaved(true);
    setFormErrors(initialErrorsState);

    console.log(data);
    onAddCard({ ...data, image: URL.createObjectURL(data.image[0] as unknown as Blob) });
    reset();
  };

  const handlePortalClose = () => {
    setIsSaved(false);
  };

  console.log(formErrors);
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Name register={register} error={name} />
        <Birthday register={register} error={birthday} />
        <Country register={register} error={country} />
        <GenderList register={register} error={gender} />
        <PetList register={register} error={petList} />
        <UploadImage register={register} name="image" id="image" error={image} />
        <Button type="submit">Submit</Button>
      </form>
      {isSaved && (
        <ConfirmModal onPortalClose={handlePortalClose}>
          Data has been saved successfully!
        </ConfirmModal>
      )}
    </>
  );
};
