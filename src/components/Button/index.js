import styled from 'styled-components';

// Normal Button
const Button = styled.button`
  display: inline-block;
  font-weight: 700;
  font-size: 1.2rem;
  border: 0.2rem solid var(--primary-color);
  color: var(--white-color);
  background: var(--primary-color);
  cursor: pointer;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.3rem);
    background: var(--primary-color);
    color: var(--background-color);
    border-color: var(--primary-color);
  }

  &:focus {
    filter: brightness(0.9);
    transform: translateY(0);
    background: var(--primary-color);
    color: var(--background-color);
    border-color: var(--primary-color);
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  & > * {
    ${props => {
      if (props.leftIcon) {
        return 'margin-right: 1rem;';
      } else if (props.rightIcon) {
        return 'margin-left: 1rem;';
      }
    }}
  }
`;

// Anchor tag
const ButtonLink = styled.a`
  display: inline-block;
  font-weight: 700;
  font-size: 1.2rem;
  border: 0.2rem solid var(--primary-color);
  color: var(--white-color);
  background: var(--primary-color);
  cursor: pointer;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.3rem);
    background: var(--primary-color);
    color: var(--background-color);
    border-color: var(--primary-color);
  }

  &:focus {
    filter: brightness(0.9);
    transform: translateY(0);
    background: var(--primary-color);
    color: var(--background-color);
    border-color: var(--primary-color);
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  & > * {
    ${props => {
      if (props.leftIcon) {
        return 'margin-right: 1rem;';
      } else if (props.rightIcon) {
        return 'margin-left: 1rem;';
      }
    }}
  }
`;

export { Button, ButtonLink };
