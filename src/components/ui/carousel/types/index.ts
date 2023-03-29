import { MouseEventHandler, PropsWithChildren } from "react";

type Direction = 1 | -1;

export type CarouselState = {
  index: number;
  direction: Direction;
};

export type CarouselButtonProps = PropsWithChildren<{
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export type CarouselTabProps = {
  checked: boolean;
  onChecked: () => void;
};

export type CarouselProps = PropsWithChildren<{
  ratio: number;
}>;

export type CarouselVariant = {
  direction: Direction;
  width: number;
};
