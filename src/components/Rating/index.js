import React from "react";

import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

import { Star, StyledStars } from "./style";

const Rating = ({ number, white }) => {
  return (
    <StyledStars
      emptySymbol={<Star icon={emptyStar} />}
      fullSymbol={<Star icon={fullStar} />}
      initialRating={number}
      readonly
      white={white}
    />
  );
};

export default Rating;
