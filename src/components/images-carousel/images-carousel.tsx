import React, { useState } from "react";
import { ImagesCarouselProps } from "./types";
import { DEFAULT_CURRENT_INDEX } from "./const";
import classNames from "classnames";
import Image from "next/image";

const carouselButtonStyles =
  "top-[calc(50% - 24px)] absolute block h-12 w-12 cursor-pointer rounded-full border-none bg-white text-base";

export function ImagesCarousel({
  images,
  caption,
}: ImagesCarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(DEFAULT_CURRENT_INDEX);

  const handleNextClick = () =>
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  const handlePrevClick = () =>
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));

  return (
    <div className="relative">
      <div className="absolute top-1 flex w-full flex-nowrap gap-4 py-0 px-4">
        {images.map(({ id }, index) => (
          <div className="h-4 w-full" key={id}>
            <input
              className={`peer/image absolute appearance-none`}
              id={id}
              type="radio"
              checked={index === currentIndex}
              onChange={({ target }) =>
                target.checked && setCurrentIndex(index)
              }
            />
            <label
              className={`relative block h-full cursor-pointer 
                before:absolute before:top-1/2 before:block before:h-[2px] before:w-full before:rounded 
                before:bg-black before:opacity-10 before:content-none 
                peer-checked/image:before:opacity-100`}
              htmlFor={id}
            >
              <p className="sr-only">select image</p>
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-center bg-gray-300">
        <Image src={images[currentIndex].src} alt={caption} />
      </div>
      {/* Previous image button */}
      <button
        className={classNames(carouselButtonStyles, "left-4")}
        type="button"
        aria-label="Previous image"
        onClick={handlePrevClick}
      >
        ❮
      </button>
      {/* Next image button */}
      <button
        className={classNames(carouselButtonStyles, "right-4")}
        type="button"
        aria-label="Next image"
        onClick={handleNextClick}
      >
        ❯
      </button>
    </div>
  );
}
