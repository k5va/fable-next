import React from "react";
import * as Select from "@radix-ui/react-select";
import { BiChevronDown } from "react-icons/bi";
import { Sorting } from "~/types";

type OrderSortSelectProps = {
  sorting: Sorting;
  onChange: (value: Sorting) => void;
};

export const OrderSortSelect = ({
  sorting,
  onChange,
}: OrderSortSelectProps): JSX.Element => {
  return (
    <div className="flex gap-2 text-2xl small:text-sm">
      Creation date:
      <Select.Root
        value={sorting}
        onValueChange={(value: Sorting) => onChange(value)}
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
          <Select.Content className="min-w-[120px] rounded-md bg-slate-50 p-1">
            <Select.Viewport>
              <Select.Item
                value="desc"
                className="cursor-pointer text-2xl data-[highlighted]:bg-violet-50 small:text-sm"
              >
                <Select.ItemText>Descending</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="asc"
                className="cursor-pointer text-2xl data-[highlighted]:bg-violet-50 small:text-sm"
              >
                <Select.ItemText>Ascending</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
