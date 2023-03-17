import React from "react";
import { PRODUCT_COLORS } from "../../const";
import { ColorPickerProps } from "./types";
import { useTranslation } from "next-i18next";
import classNames from "classnames";

export function ColorPicker({
  selected,
  onChange,
}: ColorPickerProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <fieldset
      className="
        relative flex flex-nowrap gap-8
        small:gap-5"
      aria-label="Select product color"
    >
      <legend
        className="
          hidden
          small:mx-auto small:mt-0 small:mb-4 small:block small:text-base small:font-normal"
      >
        {t("product.color")}
      </legend>
      {PRODUCT_COLORS.map((color) => (
        <div key={color}>
          <input
            className="absolute appearance-none"
            id={color}
            name="color"
            type="radio"
            value={color}
            checked={color === selected}
            onChange={() => onChange(color)}
          />
          <label
            className={classNames(
              "block h-10 w-10 cursor-pointer",
              "small:h-5 small:w-5",
              { "border-2 border-solid border-black": color === selected }
            )}
            htmlFor={color}
            style={{ backgroundColor: color }}
          >
            <span className="sr-only">color</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
