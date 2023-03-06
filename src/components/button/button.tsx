import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "text-xl py-2 px-10 self-auto cursor-pointer border border-solid",
  {
    variants: {
      intent: {
        primary: "text-black bg-white border-white",
        secondary: "text-white bg-black border-black",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>
>;

export const Button = ({
  children,
  intent,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={buttonStyles({ intent })} {...props}>
      {children}
    </button>
  );
};
