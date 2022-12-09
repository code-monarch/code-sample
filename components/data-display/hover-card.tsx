import React, { ReactNode } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { joinClasses } from "../../utils/join-classes";

// Hover Card Root
interface IHoverCardProps {
  children: ReactNode;
  defaultopen?: boolean;
  open?: boolean;
  onopenchange?: () => void;
  opendelay?: number;
  closedelay?: number;
}

const HoverCard = ({ children, ...props }: IHoverCardProps) => {
  return (
    <HoverCardPrimitive.Root {...props} openDelay={props.opendelay ?? 0}>
      {children}
    </HoverCardPrimitive.Root>
  );
};
// Hover Card Root End

// Hover Content
interface IHoverContentProps {
  children: ReactNode;
  align?: "start" | "center" | "end";
  sideoffset?: number;
  classstyle?: string;
}

export const HoverContent = ({ children, ...props }: IHoverContentProps) => {
  return (
    <HoverCardPrimitive.Content
      align={props.align ?? "center"}
      sideOffset={props.sideoffset ?? 4}
      className={joinClasses(
        props.classstyle,
        "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
        "rounded-lg",
        "bg-white !shadow-shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]"
        // "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      {/* <HoverCardPrimitive.Arrow className='fill-current text-red-500' /> */}
      {children}
    </HoverCardPrimitive.Content>
  );
};
// Hover Content End

// Hover Trigger
interface IHoverTriggerProps {
  children: ReactNode;
  classstyle?: string;
}

export const HoverTrigger = ({ children, ...props }: IHoverTriggerProps) => {
  return (
    <HoverCardPrimitive.Trigger asChild>
      <div
        className={
            joinClasses(
              props.classstyle,
            "inline-flex items-center"
          )
        }
      >
        {children}
      </div>
    </HoverCardPrimitive.Trigger>
  );
};
// Hover Trigger End

export default HoverCard;
