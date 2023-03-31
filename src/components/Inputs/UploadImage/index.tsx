import React, { ChangeEvent, useState } from 'react';

import { InputGroup } from '@/components/InputGroup';
import { withError } from '@/hoc/withError';

import { IUploadImageProps } from './interface';

import './style.css';

export const UploadImageComponent = ({ name, id, onImageChange }: IUploadImageProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (!selectedImage) return;

    const image = URL.createObjectURL(selectedImage);
    onImageChange(image);
  };

  return (
    <InputGroup>
      <div className="upload-container">
        <input
          name={name}
          id={id}
          data-testid={id}
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
      </div>
    </InputGroup>
  );
};

export const UploadImage = withError(UploadImageComponent);
