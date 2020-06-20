import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import {
  ItemsNavbarContainer,
  ItemsNavbarButtons,
  GoForward,
  GoBack,
  ItemsNavbarSearch
} from './style';
import SearchInput from '../SearchInput';

const ItemsNavbar = ({ history }) => {
  return (
    <ItemsNavbarContainer>
      <ItemsNavbarButtons>
        <GoBack
          onClick={() => {
            history.goBack();
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </GoBack>
        <GoForward
          onClick={() => {
            history.goForward();
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </GoForward>
      </ItemsNavbarButtons>
      <ItemsNavbarSearch>
        <SearchInput />
      </ItemsNavbarSearch>
    </ItemsNavbarContainer>
  );
};

export default withRouter(ItemsNavbar);
