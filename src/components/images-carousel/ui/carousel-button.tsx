import React, { MouseEventHandler, PropsWithChildren } from "react";

type CarouselButtonProps = PropsWithChildren<{
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export const CarouselButton = ({
  label,
  onClick,
  children,
}: CarouselButtonProps): JSX.Element => (
  <button
    className="
      flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white transition hover:scale-110 hover:opacity-90
      small:h-6 small:w-6
      "
    type="button"
    aria-label={label}
    onClick={onClick}
  >
    {children}
  </button>
);
