import React from 'react';
import { Helmet } from 'react-helmet';
import NotFoundImage from '../../img/NotFoundImage.svg';

import Error from '../Error';

const NotFound = () => {
  return (
    <>
      <Helmet title={`Not Found | MoviesQi`} />
      <Error
        warning={`Stop playing around`}
        message={`We don't do this here`}
        img={NotFoundImage}
      />
    </>
  );
};

export default NotFound;
