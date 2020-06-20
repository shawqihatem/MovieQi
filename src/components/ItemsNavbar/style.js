import styled from 'styled-components';

const ItemsNavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin-bottom: 8rem;

  ${props => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

const ItemsNavbarButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  ${props => props.theme.mediaQueries.lg} {
    margin: 0;
    width: initial;
    justify-content: center;
  }
`;

const GoForward = styled.a`
  font-size: 1.6rem;
  margin-right: 0;
  margin-left: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  ${props => props.theme.mediaQueries.lg} {
    margin-right: 2rem;
  }
`;

const GoBack = styled.a`
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const ItemsNavbarSearch = styled.div`
  justify-self: flex-end;
  width: 100%;

  ${props => props.theme.mediaQueries.lg} {
    width: initial;
  }
`;

export {
  ItemsNavbarContainer,
  ItemsNavbarButtons,
  GoForward,
  GoBack,
  ItemsNavbarSearch
};
