import React, { PropsWithChildren } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";

type AccordionProps = PropsWithChildren<{
  defaultValue: string;
}>;

export const Accordion = ({
  children,
  defaultValue,
}: AccordionProps): JSX.Element => {
  return (
    <RadixAccordion.Root type="single" defaultValue={defaultValue}>
      {children}
    </RadixAccordion.Root>
  );
};

type AccordionItemProps = PropsWithChildren<{
  value: string;
}>;

const AccordionItem = ({
  children,
  value,
}: AccordionItemProps): JSX.Element => {
  return <RadixAccordion.Item value={value}>{children}</RadixAccordion.Item>;
};

Accordion.Item = AccordionItem;

type AccordionButtonProps = PropsWithChildren;

const AccordionButton = ({ children }: AccordionButtonProps) => {
  return (
    <RadixAccordion.Header>
      <RadixAccordion.Trigger className="group flex cursor-pointer items-center gap-1 text-xl hover:animate-scale data-[state=closed]:opacity-30">
        {children}
        <BiChevronDown
          aria-hidden
          className="group-data-[state=open]:rotate-180"
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
};

Accordion.Button = AccordionButton;

type AccordionContentProps = PropsWithChildren;

const AccordionContent = ({ children }: AccordionContentProps): JSX.Element => {
  return <RadixAccordion.Content>{children}</RadixAccordion.Content>;
};

Accordion.Content = AccordionContent;
