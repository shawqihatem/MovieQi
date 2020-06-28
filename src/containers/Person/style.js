import styled from 'styled-components';

const PersonWrapper = styled.div`
  width: 100%;
`;

const PersonHeader = styled.header`
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

const PersonBanner = styled.div`
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: var(--primary-color);
`;

const PersonImage = styled.div`
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

const PersonTitle = styled.h1`
  font-size: 4.2rem;
  font-weight: 400;
  color: var(--primary-color);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const PersonInfos = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

const PersonInfo = styled.p`
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

const PersonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8rem;

  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

const PersonDetailsField = styled.div`
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const PersonHeading = styled.h3`
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

const PersonLongDetail = styled.div`
  margin-bottom: 3rem;
  border-radius: 1rem;
  padding: 0;
`;

const PersonKnows = styled.div`
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const PersonKnow = styled.div`
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

const PersonBiography = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.6;
`;

const PersonImageSlider = styled.div`
  overflow: hidden;
  position: relative;
  transition: all 0.6s ease;
  width: 100%;
  margin-bottom: 15rem;

  &::after {
    content: '';
    width: 20rem;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1;
    z-index: 9;
    background: linear-gradient(90deg, transparent, var(--background-color));
  }
`;

const PersonImageWrapper = styled.div`
  transform: translateX(-${(props) => props.translate}rem);
  width: ${(props) => props.width}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.6s ease;
`;

const Image = styled.img`
  width: 30rem !important;
  height: 40rem !important;
  object-fit: cover;
  border-radius: 1.5rem;
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export {
  PersonWrapper,
  PersonHeader,
  PersonBanner,
  PersonImage,
  PersonTitle,
  PersonInfos,
  PersonInfo,
  PersonContent,
  PersonDetailsField,
  PersonHeading,
  PersonLongDetail,
  PersonKnows,
  PersonKnow,
  PersonBiography,
  PersonImageSlider,
  PersonImageWrapper,
  Image,
};
