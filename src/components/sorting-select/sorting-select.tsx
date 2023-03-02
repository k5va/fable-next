import React, { type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useSorting } from "~/store";
import { ProductSortingType } from "~/types";
import { productSortingList } from "../../const";

export function SortingSelect(): JSX.Element {
  const [sorting, changeSorting] = useSorting((state) => [
    state.sorting,
    state.change,
  ]);
  const { t } = useTranslation();

  const changeSortingHandler = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    changeSorting(target.value as ProductSortingType);

  return (
    <div className="relative top-24 flex justify-end">
      <label className="text-2xl">
        {t("main.sorting.label")}
        <select
          className="ml-5 border-none"
          onChange={changeSortingHandler}
          value={sorting}
        >
          {productSortingList.map((value, index) => (
            <option key={index} value={value}>
              {t("main.sorting.type", { context: value })}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
