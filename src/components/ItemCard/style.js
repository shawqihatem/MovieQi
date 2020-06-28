import styled from 'styled-components';

const StyledItemCard = styled.div`
  height: 38rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  text-decoration: none;
  border-radius: 1rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  background: var(--secondary-background-color);

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: linear-gradient(transparent, var(--primary-color));
    transition: all 0.3s ease;

    ${(props) => props.theme.mediaQueries.noHover} {
      background: linear-gradient(
        transparent,
        var(--secondary-background-color)
      );
      opacity: 1;
    }
  }

  ${(props) => props.theme.mediaQueries.noHover} {
    padding: 0;
  }

  &:hover {
    transform: translateY(-1rem);
    padding: 0;

    &::after {
      opacity: 1;
    }

    & > div {
      bottom: 3rem;
      transform: translateY(0) translateX(-50%);
      opacity: 1;
    }

    & > img {
      filter: grayscale(1);
    }
  }

  &:hover {
    & + img:not(:hover) {
      opacity: 0.3;
    }
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props.contain ? 'contain' : 'cover')};
  border-radius: 1rem;
  background: var(--secondary-background-color);
  transition: all 0.5s ease-in-out;
`;

const ItemDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateY(100%) translateX(-50%);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 9;
  padding: 0 2rem;
  color: #ffffff;

  ${(props) => props.theme.mediaQueries.noHover} {
    bottom: 3rem;
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
`;

const ItemTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  opacity: 0.9;
  width: 10em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemRating = styled.div`
  margin-top: 1rem;
`;

export { StyledItemCard, ItemDetail, ItemImage, ItemTitle, ItemRating };
