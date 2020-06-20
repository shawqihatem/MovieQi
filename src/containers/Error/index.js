import React from 'react';

import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import {
  ErrorContainer,
  ErrorWrapper,
  ErrorTitle,
  ErrorMessage,
  ErrorImage
} from './style';
import { Container } from '../../components/Layout';
import { Button } from '../../components/Button';

const NotFound = ({ img, message, warning, history }) => {
  return (
    <ErrorContainer>
      <Container>
        <ErrorWrapper>
          <ErrorImage src={img} />
          <ErrorTitle>{warning}</ErrorTitle>
          <ErrorMessage>{message}</ErrorMessage>
          <Button
            leftIcon
            onClick={() => {
              history.push('/discover/movie/Popular');
            }}
          >
            <FontAwesomeIcon icon={faHome} />
            Home
          </Button>
        </ErrorWrapper>
      </Container>
    </ErrorContainer>
  );
};

export default withRouter(NotFound);
