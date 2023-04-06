import React, { ComponentType } from 'react';

import { FormError } from '@/components/FormError';

export function withError<T extends { error: string | undefined }>(
  WrappedComponent: ComponentType<T>
) {
  return function (props: T) {
    return (
      <>
        <WrappedComponent {...props} />
        {props.error && <FormError>{props.error}</FormError>}
      </>
    );
  };
}
