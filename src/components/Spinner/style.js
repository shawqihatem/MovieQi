import styled from "styled-components";

const SpinnerLoad = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-color);
  box-shadow: var(--box-shadow);
  border-radius: 50%;
  -webkit-animation: circle_classic 0.7s ease-in-out infinite alternate;
  -moz-animation: circle_classic 0.7s ease-in-out infinite alternate;
  animation: circle_classic 0.7s ease-in-out infinite alternate;

  @-webkit-keyframes circle_classic {
    0% {
      opacity: 0.1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
    }
  }

  @-moz-keyframes circle_classic {
    0% {
      opacity: 0.1;
      -moz-transform: translate(-50%, -50%) rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      -moz-transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
    }
  }
  @keyframes circle_classic {
    0% {
      opacity: 0.1;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
    }
  }
`;

export { SpinnerLoad };
