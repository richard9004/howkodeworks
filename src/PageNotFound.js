// NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-2">404</h1>
      <p className="lead">Oops! Page not found.</p>
      <p className="lead">
        <Link to="/" className="btn btn-custom"><i className="fa fa-home" aria-hidden="true"></i> Go to Home</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
