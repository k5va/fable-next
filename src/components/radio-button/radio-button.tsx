import React, { ForwardedRef, forwardRef, useId } from "react";
import { RadioButtonProps } from "./types";
import classNames from "classnames";

export const RadioButton = forwardRef(function RadioButton(
  { label, ...inputProps }: RadioButtonProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  const id = useId();

  return (
    <div className="relative w-full">
      <input
        id={id}
        className="peer absolute appearance-none "
        type="radio"
        ref={ref}
        {...inputProps}
      />
      <label
        className={classNames(
          "block cursor-pointer self-auto border border-solid border-black bg-black px-0 py-2 text-center text-xl text-white",
          "peer-checked:bg-white peer-checked:text-black"
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
});
