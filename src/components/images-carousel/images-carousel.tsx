import React from "react";
import { ImagesCarouselProps } from "./types";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useCarousel } from "./hooks/use-carousel";
import { CarouselTab } from "./ui/carousel-tab";
import { CarouselButton } from "./ui/carousel-button";

export function ImagesCarousel({
  images,
  caption,
}: ImagesCarouselProps): JSX.Element {
  const { currentIndex, setCurrentIndex, handlePrevClick, handleNextClick } =
    useCarousel(images.length);

  return (
    <div className="relative">
      <div className="absolute top-1 z-10 flex w-full flex-nowrap gap-4 py-0 px-4">
        {images.map(({ id }, index) => (
          <CarouselTab
            key={id}
            checked={index === currentIndex}
            onChecked={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <Image
        width="650"
        height="675"
        className="w-full"
        src={images[currentIndex]?.src as string}
        alt={caption}
      />
      {/* Previous image button */}
      <div className="absolute top-[calc(50%-24px)] left-4 small:left-3">
        <CarouselButton label="Previous image" onClick={handlePrevClick}>
          <BiChevronLeft className="text-3xl small:text-xl" />
        </CarouselButton>
      </div>
      {/* Next image button */}
      <div className="absolute top-[calc(50%-24px)] right-4 small:right-3">
        <CarouselButton label="Next image" onClick={handleNextClick}>
          <BiChevronRight className="text-3xl small:text-xl" />
        </CarouselButton>
      </div>
    </div>
  );
}
