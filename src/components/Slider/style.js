import styled from 'styled-components';

const StyledSlider = styled.div`
  overflow: hidden;
  position: relative;
  transition: all 0.6s ease;
  width: 100%;
  margin-bottom: 15rem;
`;

const SliderWrapper = styled.div`
  transform: translateX(-${props => props.translate}rem);
  width: ${props => props.width}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.6s ease;
`;

export { StyledSlider, SliderWrapper };
