import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import classes from "@design-system/design/accordion.data-display.classes";
import { joinClasses } from "@design-system/utils/join-classes";

export interface IAccordionClasses {
  base: string;
  accordionItem: string;
  accordionHeader: string;
  accordionTrigger: string;
  accordionArrow: string;
  accordionContent: string;
}

type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
> & {
  classstyle?: string;
  type?: string;
};

type AccordionProps = AccordionPrimitiveProps;

const Accordion = ({
  children,
  classstyle,
  type,
  ...props
}: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      type={type}
      className={joinClasses(classes.base, classstyle)}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

type AccordionItemPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
> & {
  classstyle?: string;
};

type AccordionItemProps = AccordionItemPrimitiveProps;

const AccordionItem = ({
  children,
  classstyle,
  ...props
}: AccordionItemProps) => {
  return (
    <AccordionPrimitive.Item
      {...props}
      className={joinClasses(classes.accordionItem, classstyle)}
    >
      {children}
    </AccordionPrimitive.Item>
  );
};

type AccordionHeaderPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Header
> & {
  classstyle?: string;
};

type AccordionHeaderProps = AccordionHeaderPrimitiveProps;

const AccordionHeader = ({
  children,
  classstyle,
  ...props
}: AccordionHeaderProps) => {
  return (
    <AccordionPrimitive.Header
      {...props}
      className={joinClasses(classes.accordionHeader, classstyle)}
    >
      {children}
    </AccordionPrimitive.Header>
  );
};

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  classstyle?: string;
};

type AccordionTriggerProps = AccordionTriggerPrimitiveProps;

const AccordionTrigger = ({
  children,
  classstyle,
  ...props
}: AccordionTriggerProps) => {
  return (
    <AccordionPrimitive.Trigger
      {...props}
      className={joinClasses(classes.accordionTrigger, classstyle)}
    >
      {children}
    </AccordionPrimitive.Trigger>
  );
};

type AccordionContentPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
> & {
  classstyle?: string;
};

type AccordionContentProps = AccordionContentPrimitiveProps;

const AccordionContent = ({
  children,
  classstyle,
  ...props
}: AccordionContentProps) => {
  return (
    <AccordionPrimitive.Content
      {...props}
      className={joinClasses(classes.accordionContent, classstyle)}
    >
      {children}
    </AccordionPrimitive.Content>
  );
};

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
