import React from 'react';

import { IFormLabelProps } from './interface';

export const FormLabel = ({ htmlFor, children }: IFormLabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
