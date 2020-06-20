import React, { useState } from 'react';

import { withRouter } from 'react-router';

import { StyledSearchInput, Input, SortInput } from './style';

const SearchInput = ({ history }) => {
  const [itemsType, setItemsType] = useState('movie'); // Search due to the Items type

  // Handling the search process
  const handleSearch = e => {
    // Get the input search value
    let inputSearch = e.target.value;

    // Check if the user hit enter or not
    if (e.keyCode === 13 || e.which === 13) {
      // Go to the search route
      history.push(`/search/${itemsType}/${inputSearch}`);

      // Clear the input field
      e.target.value = '';
    }
  };

  return (
    <StyledSearchInput>
      <Input placeholder='Search' type='text' onKeyPress={handleSearch} />
      <SortInput
        onChange={e => {
          setItemsType(e.target.value);
        }}
      >
        <option value='movie'>Movies</option>
        <option value='person'>Persons</option>
      </SortInput>
    </StyledSearchInput>
  );
};

export default withRouter(SearchInput);
