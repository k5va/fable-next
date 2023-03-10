import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "text-xl py-2 px-10 cursor-pointer border border-solid",
  {
    variants: {
      intent: {
        primary: "text-black bg-white border-white",
        secondary: "text-white bg-black border-black",
        disabled: "text-white bg-gray-400 border-gray-400",
      },
      width: {
        content: "w-fit",
        full: "w-full",
      },
      shape: {
        basic: "rounded-none",
        round: "rounded-full",
        rounded: "rounded-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      width: "content",
      shape: "basic",
    },
  }
);

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>
>;

export const Button = ({
  children,
  intent,
  width,
  shape,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={buttonStyles({ intent, width, shape })} {...props}>
      {children}
    </button>
  );
};
