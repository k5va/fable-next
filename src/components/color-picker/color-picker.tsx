import React, { Fragment } from "react";
import { PRODUCT_COLORS } from "../../const";
import { ColorPickerProps } from "./types";
import { useTranslation } from "next-i18next";

export function ColorPicker({
  selected,
  onChange,
}: ColorPickerProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <fieldset
      className="relative flex flex-nowrap gap-8"
      aria-label="Select product color"
    >
      <legend className="hidden">{t("product.color")}</legend>
      {PRODUCT_COLORS.map((color) => (
        <Fragment key={color}>
          <input
            className="peer absolute appearance-none"
            id={color}
            name="color"
            type="radio"
            value={color}
            checked={color === selected}
            onChange={() => onChange(color)}
          />
          <label
            className="h-10 w-10 cursor-pointer peer-checked:border-2 peer-checked:border-solid peer-checked:border-black"
            htmlFor={color}
            style={{ backgroundColor: color }}
          >
            <span className="sr-only">color</span>
          </label>
        </Fragment>
      ))}
    </fieldset>
  );
}
