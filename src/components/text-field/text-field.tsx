import classNames from "classnames";
import React, { type ForwardedRef, forwardRef, useId } from "react";
import { type TextFieldProps } from "./types";

export const TextField = forwardRef(function TextField(
  { label, type = "text", error, ...inputProps }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const inputId = useId();
  const errorId = useId();

  return (
    <div className="flex w-full flex-col flex-nowrap gap-2">
      {label && (
        <label className="text-base" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={classNames(
          "focus:shadow-outline w-full border border-solid border-black bg-white py-3 px-4 text-xl text-black outline-none",
          { "focus:shadow-outline border-red-500 shadow-red-500": error }
        )}
        // className={`focus:shadow-outline w-full border border-solid border-black bg-white py-3 px-4 text-xl text-black outline-none ${
        //   error && "focus:shadow-outline border-red-500 shadow-red-500"
        // }`}
        type={type}
        ref={ref}
        aria-label={label || inputProps.name}
        aria-errormessage={errorId}
        aria-invalid={Boolean(error)}
        {...inputProps}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
