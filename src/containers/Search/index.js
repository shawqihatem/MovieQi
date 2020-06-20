import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { animateScroll as scroll } from 'react-scroll';
import qs from 'qs';
import { withRouter } from 'react-router';

import { searchItems } from '../../api/fetchData';
import Spinner from '../../components/Spinner';
import ItemsList from '../../components/ItemsList';
import Pagination from '../../components/Pagination';
import Error from '../Error';
import ErrorSearchImage from '../../img/Error.svg';

const Search = ({ match, history }) => {
  const [loading, setLoading] = useState(false); // Loading state
  const itemsType = match.params.itemsType; // Items type: Persons or Movies
  const searchQuery = match.params.query; // Search query (Joker, The rock, etc ...)
  const searchTitle = `Results for ${searchQuery
    .split('_')
    .join(' ')} ${itemsType}s`; // Search title
  const [items, setItems] = useState([]); // Items data
  const [page, setPage] = useState(1); // Page Number
  const [totalPages, setTotalPages] = useState(1);
  const pageQuery = parseInt(
    qs.parse(history.location.search, {
      ignoreQueryPrefix: true,
    }).page
  ); // Page Query "?page=1"
  const [error, setError] = useState(false); // Error state

  useEffect(() => {
    // Scroll to the top when change
    scroll.scrollToTop({
      smooth: true,
    });

    // If there is no "?page" set page equal to 1
    if (pageQuery) {
      setPage(pageQuery);
    }

    if (!pageQuery) {
      setPage(1);
    }

    // Set loading to true
    setLoading(true);

    // Fetch the data
    searchItems(itemsType, searchQuery, setItems, page, setTotalPages)
      .then((data) => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [itemsType, page, pageQuery, searchQuery]);

  // Handling next page
  const handleNextPage = () => {
    history.push(`?page=${page + 1}`);
    setPage(page + 1);
  };

  // Handling perv page
  const handlePervPage = () => {
    history.push(`?page=${page - 1}`);
    setPage(page - 1);
  };

  // Check if it's loading or not
  if (loading) {
    return <Spinner />;
  } else if (items.length === 0 && !error) {
    return (
      <Error
        warning={`Am I joke to you?`}
        message={`Can't understand what ${searchQuery} means`}
        img={ErrorSearchImage}
      />
    );
  } else if (error) {
    return (
      <Error
        warning={`Sorry, something went wrong`}
        message={`We will try to fix this soon`}
        img={ErrorSearchImage}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Helmet title={`${searchTitle.toUpperCase()} | MovieQi`} />
        <ItemsList type={itemsType} items={items} title={searchTitle} />;
        <Pagination
          totalPage={totalPages}
          page={page}
          clickedNext={handleNextPage}
          clickedPerv={handlePervPage}
        />
      </React.Fragment>
    );
  }
};

export default withRouter(Search);
