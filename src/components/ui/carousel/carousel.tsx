import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import useMeasure from "react-use-measure";
import { useCarousel } from "./hooks/use-carousel";
import { CarouselTab } from "./ui/carousel-tab";
import { CarouselButton } from "./ui/carousel-button";
import { CarouselProps, CarouselVariant } from "./types";

const variants = {
  from: ({ direction, width }: CarouselVariant) => ({
    x: direction * width,
  }),
  to: { x: 0 },
  exit: ({ direction, width }: CarouselVariant) => ({
    x: direction * -width,
  }),
};

export function Carousel({ children, ratio }: CarouselProps): JSX.Element {
  const childElements = React.Children.toArray(children);
  const {
    index: currentIndex,
    setCurrentIndex,
    handlePrevClick,
    handleNextClick,
    direction,
  } = useCarousel(childElements.length);
  const [ref, { width }] = useMeasure();

  return (
    <AspectRatio.Root ratio={ratio}>
      <div className="relative h-full">
        <div className="absolute top-1 z-10 flex w-full flex-nowrap gap-4 py-0 px-4">
          {childElements.map((_, index) => (
            <CarouselTab
              key={index}
              checked={index === currentIndex}
              onChecked={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <div
          ref={ref}
          className="relative flex h-full items-center justify-center overflow-hidden"
        >
          <AnimatePresence custom={{ direction, width }} initial={false}>
            <motion.div
              key={currentIndex}
              variants={variants}
              custom={{ direction, width }}
              initial="from"
              animate="to"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 25 },
              }}
              className="absolute flex h-full w-full items-center justify-center"
            >
              {childElements[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Previous item button */}
        <div className="absolute top-[calc(50%-24px)] left-4 small:left-3">
          <CarouselButton label="Previous item" onClick={handlePrevClick}>
            <BiChevronLeft className="text-3xl small:text-xl" />
          </CarouselButton>
        </div>
        {/* Next item button */}
        <div className="absolute top-[calc(50%-24px)] right-4 small:right-3">
          <CarouselButton label="Next item" onClick={handleNextClick}>
            <BiChevronRight className="text-3xl small:text-xl" />
          </CarouselButton>
        </div>
      </div>
    </AspectRatio.Root>
  );
}
