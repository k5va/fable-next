import React from "react";
import { PRODUCT_SIZES } from "../../const";
import { SizePickerProps } from "./types";
import { useTranslation } from "next-i18next";
import classNames from "classnames";

export function SizePicker({
  selected,
  onChange,
}: SizePickerProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <fieldset
      className="relative flex flex-nowrap gap-8"
      aria-label="Select product size"
    >
      <legend
        className="
          hidden
          small:mx-auto small:mt-0 small:mb-4 small:block small:text-base small:font-normal"
      >
        {t("product.size")}
      </legend>
      {PRODUCT_SIZES.map((size) => (
        <div key={size}>
          <input
            className={`absolute appearance-none`}
            id={size}
            name="size"
            type="radio"
            value={size}
            checked={selected === size}
            onChange={() => onChange(size)}
          />
          <label
            className={classNames(
              "flex h-12 w-12 cursor-pointer items-center justify-center border-2 border-solid border-[#f1f1ef] text-xl font-normal",
              "small:h-10 small:w-10",
              {
                "border-2 border-solid border-primary": size === selected,
              }
            )}
            htmlFor={size}
          >
            {size}
          </label>
        </div>
      ))}
    </fieldset>
  );
}
