import React from 'react';

import { Button } from '../Button';
import { PaginationWrapper } from './style';

const Pagination = ({ page, totalPage, clickedNext, clickedPerv }) => {
  let buttons = null;

  // Render the buttons due to the page number
  if (page === 1 && page !== totalPage && totalPage !== 0) {
    buttons = <Button onClick={clickedNext}>Page {page + 1}</Button>;
  } else if (page > 1 && page < totalPage) {
    buttons = (
      <React.Fragment>
        <Button onClick={clickedPerv}>Page {page - 1}</Button>
        <Button onClick={clickedNext}>Page {page + 1}</Button>
      </React.Fragment>
    );
  } else if (page === totalPage && page !== 1 && totalPage !== 0) {
    buttons = <Button onClick={clickedPerv}>Page {page - 1}</Button>;
  } else {
    buttons = null;
  }

  return <PaginationWrapper page={page}>{buttons}</PaginationWrapper>;
};

export default Pagination;
