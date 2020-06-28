import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { animateScroll as scroll } from 'react-scroll';
import qs from 'qs';

import { getItems } from '../../api/fetchData';
import Spinner from '../../components/Spinner';
import ItemsList from '../../components/ItemsList';
import Pagination from '../../components/Pagination';

const Discover = ({ match, history }) => {
  const [loading, setLoading] = useState(false); // Loading state
  const [items, setItems] = useState([]); // Items data
  const itemsType = match.params.itemsType; // Items type: Persons or Movies
  const listType = match.params.listType.toLowerCase(); // List type: Popular, Top Rated, etc ..
  const discoverTitle = `${listType.split('_').join(' ')} ${itemsType}s`; // Title of the page
  const [page, setPage] = useState(1); // Page Number
  const [totalPages, setTotalPages] = useState(1); // Total Pages
  const pageQuery = parseInt(
    qs.parse(history.location.search, {
      ignoreQueryPrefix: true,
    }).page
  ); // Page Query "?page=1"

  useEffect(() => {
    // Scroll to the top when change
    scroll.scrollToTop({
      smooth: true,
    });

    // If there is no "?page" set page equal to 1
    if (pageQuery) {
      setPage(pageQuery);
    } else if (!pageQuery) {
      setPage(1);
    }

    // Set loading to true
    setLoading(true);

    // Fetch the data
    getItems(itemsType, listType, setItems, page, setTotalPages)
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        // Go to 404 if there is an error
        history.push('/404');
      });
  }, [page, pageQuery, itemsType, match, listType, totalPages, history]);

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
  } else {
    return (
      <React.Fragment>
        <Helmet title={`${discoverTitle.toUpperCase()} | MoviesQi`} />
        <ItemsList type={itemsType} items={items} title={discoverTitle} />
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

export default withRouter(Discover);
