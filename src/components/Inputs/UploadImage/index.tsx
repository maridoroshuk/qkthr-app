import React, { ChangeEvent, Component } from 'react';

import { InputGroup } from '@/components/InputGroup';
import { withError } from '@/hoc/withError';

import { IUploadImageProps } from './interface';

import './style.css';

export class UploadImageComponent extends Component<IUploadImageProps> {
  constructor(props: IUploadImageProps) {
    super(props);
    this.state = {
      imageUpload: null,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (!selectedImage) return;

    const image = URL.createObjectURL(selectedImage);
    this.props.onImageChange(image);
  };

  render() {
    const { name, id } = this.props;

    return (
      <InputGroup>
        <div className="upload-container">
          <input
            name={name}
            id={id}
            data-testid={id}
            type="file"
            accept="image/png, image/jpeg"
            onChange={this.handleChange}
          />
        </div>
      </InputGroup>
    );
  }
}

export const UploadImage = withError(UploadImageComponent);
