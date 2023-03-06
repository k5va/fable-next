import { cva, VariantProps } from "class-variance-authority";
import React, {
  type ForwardedRef,
  forwardRef,
  useId,
  InputHTMLAttributes,
} from "react";

const textFieldStyles = cva(
  "focus:shadow-outline w-full border border-solid bg-white py-3 px-4 text-xl text-black outline-none",
  {
    variants: {
      intent: {
        primary: "border-black shadow-black",
        error: "border-red-500 shadow-red-500",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof textFieldStyles> & {
    label?: string;
    error?: string;
  };

export const TextField = forwardRef(function TextField(
  { label, intent, error, ...inputProps }: TextFieldProps,
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
        className={textFieldStyles({ intent })}
        ref={ref}
        aria-label={label || inputProps.name}
        aria-errormessage={errorId}
        aria-invalid={intent === "error"}
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
