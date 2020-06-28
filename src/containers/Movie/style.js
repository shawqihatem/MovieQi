import styled from 'styled-components';

const MovieWrapper = styled.div`
  width: 100%;
`;

const MovieHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  background-attachment: fixed;
  border-radius: 1rem;
  margin-bottom: 8rem;

  flex-direction: column;

  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

const MovieImage = styled.div`
  max-width: 38rem;
  width: 100%;
  height: auto;
  margin-right: 0;
  margin-bottom: 3rem;
  border-radius: 1.5rem;
  box-shadow: var(--box-shadow);
  overflow: hidden;

  ${(props) => props.theme.mediaQueries.lg} {
    margin-right: 5rem;
    margin-bottom: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieBanner = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: var(--primary-color);
`;

const MovieTitle = styled.h1`
  font-size: 4.2rem;
  font-weight: 400;
  color: var(--primary-color);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const MovieTagline = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white-color);
  margin-bottom: 2rem;
`;

const MovieInfos = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const MovieInfo = styled.p`
  position: relative;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    &::after {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--primary-color);
      margin: 0 1rem;
    }
  }
`;

const MovieRating = styled.div`
  color: var(--primary-color);
  margin-bottom: 4rem;
`;

const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8rem;

  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

const MovieLongDetails = styled.div`
  flex: 0 0 70%;
  margin-bottom: 3rem;
  border-radius: 1rem;
  padding: 0;

  ${(props) => props.theme.mediaQueries.lg} {
    margin-right: 3rem;
    margin-bottom: 0;
  }
`;

const MovieDetailsField = styled.div`
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const MovieHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  color: var(--white-color);
  align-items: flex-start;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translateY(-50%);
    border-radius: 50%;
    z-index: -1;
    width: 25px;
    height: 25px;
    background: var(--secondary-background-color);
  }
`;

const MovieGenres = styled.div`
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

const MovieGenre = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    &::after {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--primary-color);
      margin: 0 1rem;
    }
  }
`;

const MovieOverview = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.6;
`;

const MovieDetails = styled.div`
  flex: 1;
  width: 100%;
  padding: 3rem;
  border: 1px solid var(--secondary-background-color);
  border-radius: 1rem;
  transition: all 0.3s ease;
`;

const MovieDetail = styled.div`
  color: var(--white-color);
  font-weight: 400;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  span {
    color: var(--text-color);
    margin-left: 1rem;
  }
`;

export {
  MovieWrapper,
  MovieHeader,
  MovieImage,
  MovieBanner,
  MovieTitle,
  MovieTagline,
  MovieInfos,
  MovieInfo,
  MovieRating,
  MovieContent,
  MovieDetail,
  MovieLongDetails,
  MovieDetailsField,
  MovieHeading,
  MovieGenres,
  MovieGenre,
  MovieOverview,
  MovieDetails,
};
