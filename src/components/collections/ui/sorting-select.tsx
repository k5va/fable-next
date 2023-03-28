import React from "react";
import { useTranslation } from "next-i18next";
import * as Select from "@radix-ui/react-select";
import { BiChevronDown } from "react-icons/bi";
import { useSorting } from "~/store";
import { ProductSortingType } from "~/types";
import { productSortingList } from "~/const";

export function SortingSelect(): JSX.Element {
  const [sorting, changeSorting] = useSorting((state) => [
    state.sorting,
    state.change,
  ]);
  const { t } = useTranslation();

  return (
    <label className="flex flex-nowrap gap-2 text-2xl small:text-sm">
      {t("main.sorting.label")}
      <Select.Root
        value={sorting}
        onValueChange={(value: ProductSortingType) => changeSorting(value)}
      >
        <Select.Trigger
          aria-label="order sorting"
          className="flex flex-nowrap items-center"
        >
          <Select.Value placeholder="Select sorting…" />
          <Select.Icon>
            <BiChevronDown className="text-2xl" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="min-w-[120px] rounded-md bg-slate-50 p-1 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut">
            <Select.Viewport>
              {productSortingList.map((value) => (
                <Select.Item
                  key={value}
                  value={value}
                  className="cursor-pointer text-2xl data-[highlighted]:bg-violet-50 small:text-sm"
                >
                  <Select.ItemText>
                    {t("main.sorting.type", { context: value })}
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </label>
  );
}
