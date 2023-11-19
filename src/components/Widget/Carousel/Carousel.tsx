import React, { useState } from 'react';
import * as styled from '../Widget.styles';

interface CarouselProps {
  children: React.ReactNode[];
  slidesToShow: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slidesToShow,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);
  const maxIndex = totalSlides - slidesToShow - 1;

  const handlePrevClick = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    if (currentIndex < maxIndex)
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <styled.Container>
      <styled.PrevButton onClick={handlePrevClick} $visible={currentIndex > 0}>
        <styled.Icon>
          <styled.ChevronLeftSVG />
        </styled.Icon>
      </styled.PrevButton>
      <styled.LeftShade $visible={currentIndex > 0} />
      <styled.SliderContainer
        style={{
          transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)`,
        }}
      >
        {children}
      </styled.SliderContainer>
      <styled.RightShade $visible={currentIndex < maxIndex} />
      <styled.NextButton
        onClick={handleNextClick}
        $visible={currentIndex < maxIndex}
      >
        <styled.Icon>
          <styled.ChevronRightSVG />
        </styled.Icon>
      </styled.NextButton>
    </styled.Container>
  );
};
