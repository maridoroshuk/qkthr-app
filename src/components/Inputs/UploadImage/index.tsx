import React, { memo } from 'react';

import { InputGroup } from '@/components/InputGroup';
import { withError } from '@/hoc/withError';

import { IUploadImageProps } from './interface';

import './style.css';

const UploadImageComponent = ({ name, id, register }: IUploadImageProps) => {
  return (
    <InputGroup>
      <div className="upload-container">
        <input
          id={id}
          data-testid={id}
          type="file"
          accept="image/png, image/jpeg"
          {...register(name)}
        />
      </div>
    </InputGroup>
  );
};

export const UploadImage = memo(withError(UploadImageComponent));
