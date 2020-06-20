import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Stars from "react-rating";

const StyledStars = styled(Stars)``;

const Star = styled(FontAwesomeIcon)`
  color: currentColor;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-right: 10px;
`;

export { StyledStars, Star };
