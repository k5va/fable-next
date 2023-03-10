import { useState } from "react";

export const DEFAULT_CURRENT_INDEX = 0;

export const useCarousel = (size: number) => {
  const [currentIndex, setCurrentIndex] = useState(DEFAULT_CURRENT_INDEX);

  const handleNextClick = () =>
    setCurrentIndex((index) => (index === size - 1 ? 0 : index + 1));
  const handlePrevClick = () =>
    setCurrentIndex((index) => (index === 0 ? size - 1 : index - 1));

  return {
    currentIndex,
    setCurrentIndex,
    handlePrevClick,
    handleNextClick,
  };
};
