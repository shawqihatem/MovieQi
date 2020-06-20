import React from 'react';

import { Link } from 'react-router-dom';

import ItemCard from '../ItemCard';
import PageTitle from '../PageTitle';
import { ItemWrapper } from './style';

const ItemsList = ({ type, items, title }) => {
  // Check if the items are movies or persons then map over them
  if (type === 'movie') {
    items = items.map(movie => {
      return (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <ItemCard
            movie
            img={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average / 2}
          />
        </Link>
      );
    });
  } else if (type === 'person') {
    items = items.map(person => {
      return (
        <Link to={`/person/${person.id}`} key={person.id}>
          <ItemCard img={person.profile_path} title={person.name} />
        </Link>
      );
    });
  }

  return (
    <React.Fragment>
      <PageTitle title={title} />
      <ItemWrapper>{items}</ItemWrapper>
    </React.Fragment>
  );
};

export default ItemsList;
