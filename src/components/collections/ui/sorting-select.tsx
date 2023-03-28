import React from "react";
import { useTranslation } from "next-i18next";
import { useSorting } from "~/store";
import { ProductSortingType } from "~/types";
import { productSortingList } from "~/const";
import { Select } from "~/components";

export function SortingSelect(): JSX.Element {
  const [sorting, changeSorting] = useSorting((state) => [
    state.sorting,
    state.change,
  ]);
  const { t } = useTranslation();

  return (
    <label className="flex flex-nowrap gap-2 text-2xl small:text-sm">
      {t("main.sorting.label")}
      <Select
        value={sorting}
        onValueChange={(value) => changeSorting(value as ProductSortingType)}
      >
        <Select.Menu>
          {productSortingList.map((value) => (
            <Select.MenuItem key={value} value={value}>
              {t("main.sorting.type", { context: value })}
            </Select.MenuItem>
          ))}
        </Select.Menu>
      </Select>
    </label>
  );
}
