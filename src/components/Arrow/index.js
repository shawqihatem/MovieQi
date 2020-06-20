import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import { StyledArrow } from './style';

const Arrow = ({ direction, handleClick, pointerEvents }) => (
  <StyledArrow
    pointerEvents={pointerEvents}
    onClick={handleClick}
    direction={direction}
  >
    {direction === 'right' ? (
      <FontAwesomeIcon icon={faChevronRight} />
    ) : (
      <FontAwesomeIcon icon={faChevronLeft} />
    )}
  </StyledArrow>
);

export default Arrow;
