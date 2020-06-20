import styled from 'styled-components';

const StyledSearchInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 2rem;
  border: none;
  border-radius: 0.5rem;
  color: var(--text-color);
  background: var(--secondary-background-color);
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ::placeholder {
    font-weight: 600;
  }

  ${props => props.theme.mediaQueries.lg} {
    width: 30rem;

    &:focus {
      width: 35rem;
    }
  }
`;

const SortInput = styled.select`
  height: 4rem;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 2rem;
  margin-left: 1rem;
  border: none;
  border-radius: 0.5rem;
  color: var(--white-color);
  background: var(--primary-color);
  transition: all 0.3s ease-in-out;
`;

export { Input, StyledSearchInput, SortInput };
