import React, { type ForwardedRef, forwardRef, useId } from "react";
import { type TextAreaProps } from "./types";

export const TextArea = forwardRef(function TextArea(
  { label, error, ...inputProps }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const inputId = useId();
  const errorId = useId();

  return (
    <div className="flex flex-col flex-nowrap gap-2">
      {label && (
        <label className="text-base" htmlFor={inputId}>
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`focus:shadow-outline w-full border border-solid border-black bg-white py-3 px-4 text-xl text-black shadow-black outline-none ${
          error && "border-red-500 focus:shadow-red-500"
        }`}
        aria-label={label || inputProps.name}
        aria-errormessage={errorId}
        aria-invalid={Boolean(error)}
        ref={ref}
        {...inputProps}
      ></textarea>
      {error && (
        <p id={errorId} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
