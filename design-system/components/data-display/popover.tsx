import { joinClasses } from "@design-system/utils/join-classes";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

type PopoverRootProps = React.ComponentProps<typeof PopoverPrimitive.Root>

const PopOver = ({ children, ...props }: PopoverRootProps) => {
  return (
    <PopoverPrimitive.Root {...props}>
      {children}
    </PopoverPrimitive.Root>
  );
};


type PopoverTriggerProps = React.ComponentProps<typeof PopoverPrimitive.Trigger> & {
  classstyle?: string;
};

const PopOverTrigger = ({ children, classstyle, ...props }: PopoverTriggerProps) => {
  return (
    <PopoverPrimitive.Trigger
      {...props}
      asChild
      className={joinClasses(classstyle)}
    >
      {children}
    </PopoverPrimitive.Trigger>
  );
};

type PopoverContentProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
> & {
  classstyle?: string;
};

const PopOverContent = ({ children, classstyle, ...props }: PopoverContentProps) => {
  return (
    <PopoverPrimitive.Content
      {...props}
      align='center'
      sideOffset={4}
      className={joinClasses(
        "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
        "w-48 rounded-lg p-4 shadow-md md:w-56",
        "bg-white dark:bg-gray-800",
        classstyle
      )}
    >
      <PopoverPrimitive.Arrow className='fill-current text-white dark:text-gray-800' />
      {children}
      <PopoverPrimitive.Close
        className={joinClasses(
          "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
          "focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75"
        )}
      >
        <Cross1Icon className='h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' />
      </PopoverPrimitive.Close>
    </PopoverPrimitive.Content>
  );
};

export { PopOver, PopOverTrigger, PopOverContent };
