import styled from "styled-components";

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => {
    if (props.page === 1) {
      return "flex-end";
    } else if (props.page > 1) {
      return "space-between";
    }
  }};
  margin-top: 10rem;
`;

export { PaginationWrapper };
