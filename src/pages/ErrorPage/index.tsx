import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

import Tulpen from '@/assets/tulpen.jpg';

import './style.css';

export function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-container">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        <img className="error-image" src={Tulpen} />
      </div>
    );
  } else {
    return (
      <div className="error-container">
        <h1>Unexpected Application Error!</h1>
        <img className="error-image" src={Tulpen} />
      </div>
    );
  }
}
