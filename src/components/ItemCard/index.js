import React, { useState } from 'react';

import NoImageFound from '../../img/NoImageFound.svg';
import {
  StyledItemCard,
  ItemImage,
  ItemDetail,
  ItemTitle,
  ItemRating
} from './style';
import Rating from '../Rating';

const ItemCard = ({ img, title, contain, movie, rating }) => {
  let movieRating = null;
  const [isContain, setIsContain] = useState(false);

  // If the item is movie render a rating stars
  if (movie) {
    movieRating = (
      <ItemRating>
        <Rating white={true} number={rating} />
      </ItemRating>
    );
  }

  return (
    <StyledItemCard>
      <ItemImage
        contain={isContain}
        src={`https://image.tmdb.org/t/p/w342${img}`}
        onError={e => {
          if (e.target.src !== `${NoImageFound}`) {
            e.target.src = `${NoImageFound}`;
            setIsContain(true);
          }
        }}
      />
      <ItemDetail>
        <ItemTitle>{title}</ItemTitle>
        {movieRating}
      </ItemDetail>
    </StyledItemCard>
  );
};

export default ItemCard;
