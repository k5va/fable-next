import React, { PropsWithChildren } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { BiChevronDown } from "react-icons/bi";

type SelectProps = PropsWithChildren<{
  value: string;
  onValueChange: (value: string) => void;
}>;

export const Select = ({
  children,
  value,
  onValueChange,
}: SelectProps): JSX.Element => {
  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <SelectButton />
      {children}
    </RadixSelect.Root>
  );
};

const SelectButton = (): JSX.Element => {
  return (
    <RadixSelect.Trigger className="flex flex-nowrap items-center">
      <RadixSelect.Value />
      <RadixSelect.Icon>
        <BiChevronDown className="text-2xl" />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
};

type SelectMenuProps = PropsWithChildren;

const SelectMenu = ({ children }: SelectMenuProps): JSX.Element => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content className="min-w-[120px] rounded-md bg-slate-50 p-1 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut">
        <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
};

Select.Menu = SelectMenu;

type SelectMenuItemProps = PropsWithChildren<{
  value: string;
}>;

const SelectMenuItem = ({
  children,
  value,
}: SelectMenuItemProps): JSX.Element => {
  return (
    <RadixSelect.Item
      value={value}
      className="cursor-pointer text-2xl data-[highlighted]:bg-violet-50 small:text-sm"
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
};

Select.MenuItem = SelectMenuItem;
