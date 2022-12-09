import React from "react";
import { joinClasses } from "@design-system/utils/join-classes";
import * as TabsPrimitive from "@radix-ui/react-tabs";

// Tab Root
interface ITabProps {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultvalue: string;
  classstyle?: string;
}

const Tabs = (props: ITabProps) => {
  return (
    <TabsPrimitive.Root
      {...props}
      defaultValue={props.defaultvalue}
      className={joinClasses(props.classstyle)}
    >
      {props.children}
    </TabsPrimitive.Root>
  );
};
// Tab Root End

// Tab Content
interface ITabContentProps {
  children: React.ReactNode;
  value: string;
  classstyle?: string;
}

const TabsContent = ({ children, value, classstyle }: ITabContentProps) => {
  return (
    <TabsPrimitive.Content value={value} className={joinClasses(classstyle)}>
      {children}
    </TabsPrimitive.Content>
  );
};
// Tab Content End

// Tab Trigger
interface ITabTriggerProps {
  children: React.ReactNode;
  value: string;
  classstyle?: string;
}

const TabsTrigger = ({ children, value, classstyle }: ITabTriggerProps) => {
  return (
    <TabsPrimitive.Trigger value={value} className={joinClasses(classstyle)}>
      {children}
    </TabsPrimitive.Trigger>
  );
};
// Tab Trigger End

interface ITabListProps {
  children: React.ReactNode;
  arialabel: string;
  classstyle?: string;
}

const TabsList = ({ children, arialabel, classstyle }: ITabListProps) => {
  return (
    <TabsPrimitive.List
      aria-label={arialabel}
      className={joinClasses(classstyle)}
    >
      {children}
    </TabsPrimitive.List>
  );
};

export { Tabs, TabsContent, TabsTrigger, TabsList };
