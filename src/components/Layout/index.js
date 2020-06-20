import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }

  display: flex;
`;

const MainContent = styled.main`
  grid-area: itemsContainer;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border-radius: 1rem;
  transition: all 0.3s ease;
  padding: 5rem 3rem;
  overflow: hidden;
`;

const Container = styled.div`
  ${props => props.theme.mediaQueries.lg} {
    max-width: 96rem;
  }

  ${props => props.theme.mediaQueries.xl} {
    max-width: 130rem;
  }

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;

export { MainContainer, Content, MainContent, Container };
