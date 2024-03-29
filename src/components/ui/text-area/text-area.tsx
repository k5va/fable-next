import { cva, VariantProps } from "class-variance-authority";
import React, {
  type ForwardedRef,
  forwardRef,
  useId,
  TextareaHTMLAttributes,
} from "react";

const textAreaStyles = cva(
  "focus:shadow-outline w-full border border-solid bg-secondary py-3 px-4 text-xl text-primary outline-none",
  {
    variants: {
      intent: {
        primary: "border-primary shadow-primary",
        error: "border-alert shadow-alert",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textAreaStyles> & {
    label?: string;
    error?: string;
  };

export const TextArea = forwardRef(function TextArea(
  { label, error, intent, ...inputProps }: TextAreaProps,
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
        className={textAreaStyles({ intent })}
        aria-label={label || inputProps.name}
        aria-errormessage={errorId}
        aria-invalid={intent === "error"}
        ref={ref}
        {...inputProps}
      ></textarea>
      {error && (
        <p id={errorId} className="text-xs text-alert" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
