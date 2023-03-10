import React from "react";
import { ImagesCarouselProps } from "./types";
import Image from "next/image";
import { Button } from "~/components";
import { useCarousel } from "./hooks/use-carousel";
import { CarouselTab } from "./components/carousel-tab";

export function ImagesCarousel({
  images,
  caption,
}: ImagesCarouselProps): JSX.Element {
  const { currentIndex, setCurrentIndex, handlePrevClick, handleNextClick } =
    useCarousel(images.length);

  return (
    <div className="h-full">
      <div className="relative min-h-[675px]">
        <div className="absolute top-1 z-10 flex w-full flex-nowrap gap-4 py-0 px-4">
          {images.map(({ id }, index) => (
            <CarouselTab
              key={id}
              checked={index === currentIndex}
              onChecked={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <Image fill src={images[currentIndex]?.src as string} alt={caption} />
        {/* Previous image button */}
        <div className="absolute top-[calc(50%_-_24px)] left-4">
          <Button
            type="button"
            shape="round"
            aria-label="Previous image"
            onClick={handlePrevClick}
          >
            ❮
          </Button>
        </div>
        {/* Next image button */}
        <div className="absolute top-[calc(50%_-_24px)] right-4">
          <Button
            type="button"
            shape="round"
            aria-label="Next image"
            onClick={handleNextClick}
          >
            ❯
          </Button>
        </div>
      </div>
    </div>
  );
}
