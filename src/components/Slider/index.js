import React, { useState, useRef, useEffect } from 'react';

import { StyledSlider, SliderWrapper } from './style';
import Arrow from '../Arrow';

const Slider = ({ items, itemsWidth }) => {
  let sliderEl = useRef(null); // Get the slider element
  const [isClicked, setIsClicked] = useState('initial'); // Clicked state
  const [state, setState] = useState({
    // Slider state
    activeIndex: 0,
    translate: 0,
    transition: 0.3
  });

  const { translate, transition, activeIndex } = state;
  const getWidth = () => window.innerWidth; // Get the width of the window

  // Handle the next slide transformation
  const nextSlide = () => {
    if (activeIndex === items.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * itemsWidth
    });
  };

  // Handle the previous slide transformation
  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (items.length - 1) * itemsWidth,
        activeIndex: items.length - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * itemsWidth
    });
  };

  // The slider arrows
  let arrows = (
    <React.Fragment>
      <Arrow
        pointerEvents={isClicked}
        direction='left'
        handleClick={prevSlide}
      />
      <Arrow
        pointerEvents={isClicked}
        direction='right'
        handleClick={nextSlide}
      />
    </React.Fragment>
  );

  useEffect(() => {
    // Make it impossible to click while transition is starting
    sliderEl.addEventListener('transitionstart', () => {
      setIsClicked('none');
    });

    sliderEl.addEventListener('transitionend', () => {
      setIsClicked('initial');
    });
  }, [isClicked, sliderEl]);

  return (
    <StyledSlider>
      {arrows}
      <SliderWrapper
        ref={el => (sliderEl = el)}
        width={getWidth() * items.length}
        translate={translate}
        transition={transition}
      >
        {items}
      </SliderWrapper>
    </StyledSlider>
  );
};

export default Slider;
