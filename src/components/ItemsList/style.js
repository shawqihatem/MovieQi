import styled from 'styled-components';

const ItemWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 25rem));
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  gap: 2rem 1rem;
`;

export { ItemWrapper };
