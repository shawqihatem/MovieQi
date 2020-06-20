import React from 'react';

import { Link } from 'react-router-dom';

import avatar from '../../img/avatar.svg';
import { StyledCastItem, CastImage } from './style';

function CastItem({ person, img }) {
  return (
    <Link to={`/person/${person.id}`}>
      <StyledCastItem>
        <CastImage
          src={`${img}`}
          alt='Cast Image'
          onError={e => {
            if (e.target.src !== `${avatar}`) {
              e.target.src = `${avatar}`;
            }
          }}
        />
      </StyledCastItem>
    </Link>
  );
}

export default CastItem;
