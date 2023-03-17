import React from "react";

type LegendProps = {
  text: string;
};

export const Legend = ({ text }: LegendProps): JSX.Element => (
  <legend className="mb-5 text-xl font-medium">{text}</legend>
);
