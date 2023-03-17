import React from "react";
import { ImSpinner6 } from "react-icons/im";

export function Spinner(): JSX.Element {
  return (
    <div
      className="absolute top-0 left-0 h-full w-full bg-black/10"
      role="presentation"
      aria-hidden
    >
      <ImSpinner6
        className="relative top-1/2 left-1/2 animate-spin text-blue-400"
        size="50"
      />
    </div>
  );
}
