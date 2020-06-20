import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { animateScroll as scroll } from 'react-scroll';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import {
  getPerson,
  getPersonImages,
  getMovieCredits,
} from '../../api/fetchData';
import Spinner from '../../components/Spinner';
import ItemsList from '../../components/ItemsList';
import { Button } from '../../components/Button';
import Slider from '../../components/Slider';
import {
  PersonWrapper,
  PersonHeader,
  PersonImage,
  PersonTitle,
  PersonInfos,
  PersonInfo,
  PersonBanner,
  PersonContent,
  PersonDetailsField,
  PersonHeading,
  PersonLongDetail,
  PersonKnows,
  PersonKnow,
  PersonBiography,
  Image,
} from './style';
import { Container } from '../../components/Layout';

const Person = ({ match, history }) => {
  const [loading, setLoading] = useState(true); // Loading state
  const personId = match.params.id; // Person id
  const [person, setPerson] = useState([]); // Person data
  const [images, setImages] = useState([]); // Person images
  const [movieCredits, setMovieCredits] = useState([]); // Person casts
  const movieCreditsTitle = `I've been also in`; // Movies credits title

  useEffect(() => {
    // Scroll to the top always
    scroll.scrollToTop({
      smooth: true,
    });

    // Get the person data
    getPerson(personId, setPerson)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        history.push('/404');
      });

    // Set loading true
    setLoading(true);

    // Get the person images
    getPersonImages(personId, setImages).then(() => {
      setLoading(false);
    });

    // Set loading true
    setLoading(true);

    // Get the person credits
    getMovieCredits(personId, setMovieCredits).then(() => {
      setLoading(false);
    });
  }, [history, personId]);

  // Check if it's loading or not
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Helmet
          title={`${person.name ? person.name.toUpperCase() : ''} | MovieQi`}
        />
        <PersonWrapper>
          <Container>
            <PersonHeader>
              <PersonImage>
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt=''
                />
              </PersonImage>
              <PersonBanner>
                <PersonTitle>{person.name}</PersonTitle>
                <PersonInfos>
                  <PersonInfo>{person.place_of_birth}</PersonInfo>
                  <PersonInfo>{person.birthday}</PersonInfo>
                </PersonInfos>
                <Button rightIcon>
                  Website <FontAwesomeIcon icon={faLink} />
                </Button>
              </PersonBanner>
            </PersonHeader>
            <PersonContent>
              <PersonLongDetail>
                <PersonDetailsField>
                  <PersonHeading>Know as</PersonHeading>
                  <PersonKnows>
                    {person.also_known_as
                      ? person.also_known_as.map((knowAs, index) => {
                          return <PersonKnow key={index}>{knowAs}</PersonKnow>;
                        })
                      : null}
                  </PersonKnows>
                </PersonDetailsField>
                <PersonDetailsField>
                  <PersonHeading>Biography</PersonHeading>
                  <PersonBiography>{person.biography}</PersonBiography>
                </PersonDetailsField>
              </PersonLongDetail>
            </PersonContent>

            <Slider
              items={images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt='Person Profile Image'
                  />
                );
              })}
              itemsWidth={32}
            />
            <ItemsList
              type='movie'
              items={movieCredits}
              title={movieCreditsTitle}
            />
          </Container>
        </PersonWrapper>
      </>
    );
  }
};
export default withRouter(Person);
