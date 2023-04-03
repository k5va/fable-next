import React, { PropsWithChildren } from "react";
import * as RadixTabs from "@radix-ui/react-tabs";

type TabsProps = PropsWithChildren<{
  defaultValue: string;
}>;

export const Tabs = ({ children, defaultValue }: TabsProps): JSX.Element => {
  return (
    <RadixTabs.Root defaultValue={defaultValue}>{children}</RadixTabs.Root>
  );
};

type TabsListProps = PropsWithChildren;

const TabsList = ({ children }: TabsListProps): JSX.Element => {
  return (
    <RadixTabs.List className="flex flex-wrap gap-4">{children}</RadixTabs.List>
  );
};

Tabs.List = TabsList;

type TabsButtonProps = PropsWithChildren<{
  value: string;
}>;

const TabsButton = ({ children, value }: TabsButtonProps): JSX.Element => {
  return (
    <RadixTabs.Trigger
      className="cursor-pointer text-xl hover:animate-scale data-[state=inactive]:opacity-30"
      value={value}
    >
      {children}
    </RadixTabs.Trigger>
  );
};

Tabs.Button = TabsButton;

type TabsContentProps = PropsWithChildren<{
  value: string;
}>;

const TabsContent = ({ children, value }: TabsContentProps): JSX.Element => {
  return <RadixTabs.Content value={value}>{children}</RadixTabs.Content>;
};

Tabs.Content = TabsContent;
