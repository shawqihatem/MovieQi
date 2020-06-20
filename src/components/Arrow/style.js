import styled from 'styled-components';

const StyledArrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ direction }) => {
    if (direction === 'right') {
      return '2.5rem';
    } else {
      return 'initial';
    }
  }};

  left: ${({ direction }) => {
    if (direction === 'left') {
      return '2.5rem';
    } else {
      return 'initial';
    }
  }};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: var(--secondary-background-color);
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  z-index: 1500;
  box-shadow: var(--box-shadow);
  pointer-events: ${props => props.pointerEvents};

  & > * {
    color: var(--primary-color);

    &:focus {
      outline: 0;
    }
  }
`;

export { StyledArrow };
