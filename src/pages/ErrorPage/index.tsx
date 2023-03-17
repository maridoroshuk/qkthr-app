import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

import './style.css';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    );
  }

  return <p>Unknown Error</p>;
}
