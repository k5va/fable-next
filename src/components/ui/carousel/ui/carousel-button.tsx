import { useAnimate } from "framer-motion";
import React from "react";
import { CarouselButtonProps } from "../types";

export const CarouselButton = ({
  label,
  onClick,
  children,
}: CarouselButtonProps): JSX.Element => {
  const [ref, animate] = useAnimate();

  return (
    <button
      ref={ref}
      className="
      flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-secondary hover:animate-scale
      small:h-6 small:w-6
      "
      type="button"
      aria-label={label}
      onClick={(e) => {
        void animate(ref.current, { opacity: [1, 0.2, 1] });
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};
