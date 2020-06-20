import React from 'react';

import { Title } from './style';

const PageTitle = ({ title }) => {
  return (
    <React.Fragment>
      <Title>{title}</Title>
    </React.Fragment>
  );
};

export default PageTitle;
