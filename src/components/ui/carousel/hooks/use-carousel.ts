import { useCallback, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { CarouselState } from "../types";

const DEFAULT_CURRENT_INDEX = 0;
const DEFAULT_DIRECTION = 1;
const DEBOUNCE_WAIT = 300;

export const useCarousel = (size: number) => {
  const [carouselState, setCarouselState] = useState<CarouselState>({
    index: DEFAULT_CURRENT_INDEX,
    direction: DEFAULT_DIRECTION,
  });

  const handleNextClick = useMemo(
    () =>
      debounce(() => {
        setCarouselState(({ index }) => ({
          index: index === size - 1 ? 0 : index + 1,
          direction: 1,
        }));
      }, DEBOUNCE_WAIT),
    [size]
  );

  const handlePrevClick = useMemo(
    () =>
      debounce(() => {
        setCarouselState(({ index }) => ({
          index: index === 0 ? size - 1 : index - 1,
          direction: -1,
        }));
      }, DEBOUNCE_WAIT),
    [size]
  );

  const setCurrentIndex = useMemo(
    () =>
      debounce((newIndex: number) => {
        setCarouselState(({ index }) => ({
          index: newIndex,
          direction: newIndex > index ? 1 : -1,
        }));
      }, DEBOUNCE_WAIT),
    []
  );

  return {
    ...carouselState,
    setCurrentIndex: useCallback(
      (index: number) => setCurrentIndex(index),
      [setCurrentIndex]
    ),
    handlePrevClick: useCallback(() => handlePrevClick(), [handlePrevClick]),
    handleNextClick: useCallback(() => handleNextClick(), [handleNextClick]),
  };
};
