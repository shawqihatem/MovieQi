import React from 'react';

import Error from '../Error';
import NotFoundImage from '../../img/NotFoundImage.svg';

const NotFound = () => {
  return (
    <Error
      warning={`Stop playing around`}
      message={`We don't do this here`}
      img={NotFoundImage}
    />
  );
};

export default NotFound;
