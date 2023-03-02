import React, { useId } from "react";
import { CheckboxProps } from "./types";

export function Checkbox({ label, ...inputProps }: CheckboxProps): JSX.Element {
  const id = useId();

  return (
    <div className="relative">
      <input
        className="peer absolute appearance-none"
        id={id}
        type="checkbox"
        {...inputProps}
      />
      <label
        className="peer-checked:before:content['X'] 
          flex flex-nowrap items-center gap-4 
          before:flex before:h-4 before:w-4 before:cursor-pointer before:items-center 
          before:justify-center before:border before:border-solid before:border-black
          before:content-none"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
