import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100%;
`;

const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorTitle = styled.h6`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 2rem;
`;

const ErrorMessage = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  color: var(--white-color);
  margin-bottom: 2rem;
`;

const ErrorImage = styled.img`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

export { ErrorContainer, ErrorWrapper, ErrorTitle, ErrorMessage, ErrorImage };
