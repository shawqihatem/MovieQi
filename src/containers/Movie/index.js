import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { animateScroll as scroll } from 'react-scroll';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Layout';
import {
  getItem,
  getVideo,
  getCasts,
  getRecommended,
} from '../../api/fetchData';
import Spinner from '../../components/Spinner';
import Rating from '../../components/Rating';
import ItemsList from '../../components/ItemsList';
import { ButtonLink } from '../../components/Button';
import {
  renderTitle,
  renderRuntime,
  renderLanguage,
  splitYear,
  renderVideoTrailer,
  renderGenres,
  renderOverview,
  renderDetails,
} from './render';
import Slider from '../../components/Slider';
import CastItem from '../../components/CastItem';
import {
  MovieWrapper,
  MovieHeader,
  MovieImage,
  MovieBanner,
  MovieInfos,
  MovieRating,
  MovieContent,
  MovieLongDetails,
  MovieDetailsField,
  MovieHeading,
  MovieGenres,
  MovieOverview,
  MovieDetails,
} from './style';

function Movie({ match, history }) {
  const [loading, setLoading] = useState(true); // loading state
  const movieID = match.params.id; // Get the movie id
  const [item, setItem] = useState([]); // Items data
  let [videos, setVideos] = useState([]); // Videos data
  const [modalOpened, setModalOpened] = useState(false); // Model state
  const [genres, setGenres] = useState([]); // Genres data
  let [casts, setCasts] = useState([]); // Casts data
  const [recommendedMovies, setRecommendedMovies] = useState([]); // Recommended movies data
  const recommendedMoviesTitle = `Recommended Movies`; // Recommended movies title

  useEffect(() => {
    // Scroll to the top always
    scroll.scrollToTop({
      smooth: true,
    });

    // Get the movie details
    getItem(movieID, setItem)
      .then((data) => {
        setLoading(false);
        // Set genres data
        if (data) {
          setGenres(data.genres);
        }

        getVideo(movieID, setVideos)
          .then((data) => {
            setLoading(false);
          })
          .catch(() => {
            setVideos(null);
          });

        // Get the movies casts
        getCasts(movieID, setCasts)
          .then((data) => {
            setLoading(false);
          })
          .catch(() => {
            setCasts(null);
          });

        // Get the recommended movies
        getRecommended(movieID, setRecommendedMovies)
          .then((data) => {
            setLoading(false);
          })
          .catch(() => {
            setRecommendedMovies(null);
          });
      })
      .catch((error) => {
        history.push('/404');
      });

    // Get the movie's video
  }, [history, movieID]);

  // Check if it's loading or not
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Helmet title={`${item.title.toUpperCase()} | MoviesQi`} />
        <MovieWrapper>
          <Container>
            <MovieHeader>
              <MovieImage>
                <img
                  onError={() => {
                    console.log('Hi I am error');
                  }}
                  src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                  alt="Movie's Poster"
                />
              </MovieImage>
              <MovieBanner>
                {renderTitle(item.title, item.tagline)}
                <MovieInfos>
                  {renderRuntime(item.runtime)}
                  {renderLanguage(item.spoken_languages)}
                  {splitYear(item.release_date)}
                </MovieInfos>
                <MovieRating>
                  <Rating number={item.vote_average / 2} />
                </MovieRating>
                <div>
                  {renderVideoTrailer(videos, modalOpened, setModalOpened)}
                  <ButtonLink href={item.homepage} target='blank' rightIcon>
                    Website
                    <FontAwesomeIcon icon={faLink} />
                  </ButtonLink>
                </div>
              </MovieBanner>
            </MovieHeader>
            <MovieContent>
              <MovieLongDetails>
                <MovieDetailsField>
                  <MovieHeading>Genres</MovieHeading>
                  <MovieGenres>{renderGenres(genres)}</MovieGenres>
                </MovieDetailsField>
                <MovieDetailsField>
                  <MovieHeading>Overview</MovieHeading>
                  <MovieOverview>{renderOverview(item.overview)}</MovieOverview>
                </MovieDetailsField>
              </MovieLongDetails>
              <MovieDetails>
                <MovieHeading>Details</MovieHeading>
                {renderDetails(
                  item.release_date,
                  item.vote_average,
                  item.vote_count,
                  item.spoken_languages,
                  item.runtime,
                  new Intl.NumberFormat().format(item.budget)
                )}
              </MovieDetails>
            </MovieContent>
            <MovieHeading>Casts</MovieHeading>
            <Slider
              items={casts.map((cast) => {
                return (
                  <CastItem
                    key={cast.id}
                    img={`https://image.tmdb.org/t/p/w342/${cast.profile_path}`}
                    person={cast}
                  />
                );
              })}
              itemsWidth={17}
            />
            <ItemsList
              type='movie'
              items={recommendedMovies}
              title={recommendedMoviesTitle}
            />
          </Container>
        </MovieWrapper>
      </>
    );
  }
}

export default withRouter(Movie);
