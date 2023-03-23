import React, { ComponentType } from 'react';
import { useLocation } from 'react-router-dom';

import { getTitleFromLocation } from '@/utils/getTitleFromLocation';

export function withLocation<T extends object>(WrappedComponent: ComponentType<T>) {
  return function (props: T) {
    const location = useLocation();
    document.title = getTitleFromLocation(location);

    return <WrappedComponent {...props} location={location} />;
  };
}
