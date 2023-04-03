import React, { PropsWithChildren } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

type DropdownProps = PropsWithChildren;

export const Dropdown = ({ children }: DropdownProps): JSX.Element => {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>;
};

type DropdownButtonProps = PropsWithChildren;

const DropdownButton = ({ children }: DropdownButtonProps): JSX.Element => {
  return (
    <RadixDropdownMenu.Trigger className="hover:animate-scale data-[state=open]:animate-scale">
      {children}
    </RadixDropdownMenu.Trigger>
  );
};

Dropdown.Button = DropdownButton;

type DropdownMenuProps = PropsWithChildren;

const DropdownMenu = ({ children }: DropdownMenuProps): JSX.Element => {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content className="min-w-[120px] rounded-md bg-slate-50 p-1 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut">
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
};

Dropdown.Menu = DropdownMenu;

type DropdownMenuItemProps = PropsWithChildren;

const DropdownMenuItem = ({ children }: DropdownMenuItemProps): JSX.Element => {
  return (
    <RadixDropdownMenu.Item className="data-[highlighted]:bg-violet-50">
      {children}
    </RadixDropdownMenu.Item>
  );
};

Dropdown.MenuItem = DropdownMenuItem;
