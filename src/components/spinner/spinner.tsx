import React from "react";

export function Spinner(): JSX.Element {
  return (
    <div
      role="progressbar"
      className="before:fixed before:top-1/2 before:left-1/2 before:h-10 before:w-10 before:animate-spin before:rounded before:border-4 before:border-gray-200 before:border-b-[#1c87c9]"
    ></div>
  );
}
