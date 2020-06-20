import styled from "styled-components";

const StyledCastItem = styled.div`
  height: 15rem;
  width: 15rem;
  background-color: transparent;
  border-radius: 1rem;
  transition: all 0.3s ease;
  margin-right: 2rem;
  overflow: hidden;
  border-radius: 50%;
  background: var(--background-color);
`;

const CastImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: all 0.5s ease-in-out;
`;

export { StyledCastItem, CastImage };
