import React from 'react';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../components/Button';
import {
  MovieTitle,
  MovieTagline,
  MovieInfo,
  MovieDetail,
  MovieGenre
} from './style';

// Render the movie's title
const renderTitle = (title, tagline) => {
  // Check if there is a title or not
  if (title) {
    // Format the title
    if (title.length > 20) {
      title = title.substring(0, 20) + '...';
    }
    return (
      <React.Fragment>
        <MovieTitle>{title}</MovieTitle>
        <MovieTagline>{tagline}</MovieTagline>
      </React.Fragment>
    );
  }
};

// Render the movie's watching time
const renderRuntime = runtime => {
  // Check if there is a runtime or not
  if (runtime) {
    return <MovieInfo>{runtime} min</MovieInfo>;
  } else {
    return null;
  }
};

// Render the movie's language
const renderLanguage = languages => {
  // Check if there is a language or not
  if (languages) {
    // Get the main language
    if (languages.length !== 0) {
      return <MovieInfo>{languages[0].name}</MovieInfo>;
    }
  } else {
    return null;
  }
};

// Split the movie's release data to get the year
const splitYear = date => {
  // If there is no date return
  if (!date) {
    return;
  }

  // Format the date to get the year
  const year = date.split('-');
  return <MovieInfo>{year[0]}</MovieInfo>;
};

// Render the movie's trailer
const renderVideoTrailer = (videos, modalOpened, setModalOpened) => {
  // If there is no trailer return
  if (videos.length === 0) {
    return;
  }

  // Get the video id
  if (videos) {
    let videoId = videos.slice(0, 1).map(video => video.key);

    return (
      <React.Fragment>
        <Button rightIcon onClick={() => setModalOpened(true)}>
          Trailer <FontAwesomeIcon icon={faPlay} />
        </Button>
        <ModalVideo
          channel='youtube'
          isOpen={modalOpened}
          videoId={videoId}
          onClose={() => setModalOpened(false)}
        />
      </React.Fragment>
    );
  }
};

// Render the movie's genres
const renderGenres = genres => {
  // Check if there is a genres or not
  if (genres) {
    genres = genres.map(genre => {
      return <MovieGenre key={genre.id}>{genre.name}</MovieGenre>;
    });

    return genres;
  }
};

// Render the movie's overview
const renderOverview = overview => {
  // Check if there is an overview or not
  if (overview) {
    return overview;
  } else {
    return 'There is no overview ...';
  }
};

// Render the movie's details
const renderDetails = (
  releasedIn,
  voteAverage,
  votCount,
  languages,
  runtime,
  budget
) => {
  let language = null;
  if (languages) {
    if (languages.length !== 0) {
      language = languages[0].name;
    }
  }
  return (
    <React.Fragment>
      <MovieDetail>
        Released <span>{releasedIn}</span>
      </MovieDetail>
      <MovieDetail>
        Vote Average <span>{voteAverage}</span>
      </MovieDetail>
      <MovieDetail>
        Vote Counts <span>{votCount} vote.</span>
      </MovieDetail>
      <MovieDetail>
        Language <span>{language}</span>
      </MovieDetail>
      <MovieDetail>
        Watch Time <span>{runtime} min.</span>
      </MovieDetail>
      <MovieDetail>
        Budget <span>$ {budget}</span>
      </MovieDetail>
    </React.Fragment>
  );
};

export {
  renderTitle,
  renderRuntime,
  renderLanguage,
  splitYear,
  renderVideoTrailer,
  renderGenres,
  renderOverview,
  renderDetails
};
