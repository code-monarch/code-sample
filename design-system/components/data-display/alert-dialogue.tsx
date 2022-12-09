import React, { Fragment } from "react";
import { joinClasses } from "@design-system/utils/join-classes";
import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

// Component Anatomy
  // <AlertDialogue>
  //   <AlertDialogTrigger />
  //   <AlertDialogPortal>
  //     <AlertDialogOverlay />
  //     <AlertDialogContent>
  //       <AlertDialogTitle />
  //       <AlertDialogDescription />
  //       <AlertDialogCancel />
  //       <AlertDialogAction />
  //     </AlertDialogContent>
  //   </AlertDialogPortal>
  // </AlertDialogue>;

//   Alert Dialogue Root
type AlertDialogueProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Root
> & {
  classstyle?: string;
  isopen?: boolean;
  setisopen?: (value: boolean) => void;
};

const AlertDialogue = (props: AlertDialogueProps) => {
  return (
    <AlertDialogPrimitive.Root
      {...props}
      open={props.isopen}
      onOpenChange={props.setisopen}
      // className={joinClasses(props.classstyle)}
    >
      {props.children}
    </AlertDialogPrimitive.Root>
  );
};
//   Alert Dialogue Root End

//   Alert Dialogue Trigger
type AlertDialogueTriggerProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Trigger
> & {
  classstyle?: string;
};

const AlertDialogueTrigger = (props: AlertDialogueTriggerProps) => {
  return (
    <AlertDialogPrimitive.Trigger
      asChild
      className={joinClasses(props.classstyle)}
    >
      {props.children}
    </AlertDialogPrimitive.Trigger>
  );
};
//   Alert Dialogue Trigger End

//   Alert Dialogue Title
type AlertDialogueTitleProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Title
> & {
  classstyle?: string;
};

const AlertDialogueTitle = (props: AlertDialogueTitleProps) => {
  return (
    <AlertDialogPrimitive.Title className={joinClasses(props.classstyle)}>
      {props.children}
    </AlertDialogPrimitive.Title>
  );
};
//   Alert Dialogue Title End
//   Alert Dialogue Description
type AlertDialogueDescriptionProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Description
> & {
  classstyle?: string;
};

const AlertDialogueDescription = (props: AlertDialogueDescriptionProps) => {
  return (
    <AlertDialogPrimitive.Description className={joinClasses(props.classstyle)}>
      {props.children}
    </AlertDialogPrimitive.Description>
  );
};
//   Alert Dialogue Description End

//   Alert Dialogue Cancel
type AlertDialogueCancelProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Cancel
> & {
  classstyle?: string;
};

const AlertDialogueCancel = (props: AlertDialogueCancelProps) => {
  return (
    <AlertDialogPrimitive.Cancel className={joinClasses(props.classstyle)}>
      {props.children}
    </AlertDialogPrimitive.Cancel>
  );
};
//   Alert Dialogue Cancel End

//   Alert Dialogue Action
type AlertDialogueActionProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Action
> & {
  classstyle?: string;
};

const AlertDialogueAction = (props: AlertDialogueActionProps) => {
  return (
    <AlertDialogPrimitive.Action className={joinClasses(props.classstyle)}>
      {props.children}
    </AlertDialogPrimitive.Action>
  );
};
//   Alert Dialogue Action End

//   Alert Dialogue Content
type AlertDialogueContentProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Content
> & {
  classstyle?: string;
  aschild?: boolean;
  children: React.ReactNode
};

const AlertDialogueContent = (props: AlertDialogueContentProps) => {
  return (
    <Transition.Child
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <AlertDialogPrimitive.Content
        forceMount
        asChild={props.aschild}
        className={joinClasses("relative h-fit rounded-[8px] py-[40px] px-[32px]",props.classstyle)}
      >
        {props.children}
        <AlertDialogueCancel asChild classstyle="absolute right-[20px] top-[20px]">
          <Cross2Icon className="h-[20px] w-[20px]" />
        </AlertDialogueCancel>
      </AlertDialogPrimitive.Content>
    </Transition.Child>
  );
};
//   Alert Dialogue Content End

// Alert Dialogue Overlay
type AlertDialogueOverlayProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Overlay
> & {
  classstyle?: string;
  isopen: boolean;
  children: React.ReactNode;
  aschild?: boolean;
};

const AlertDialogueOverlay = (props: AlertDialogueOverlayProps) => {
  return (
    <Transition.Root show={props.isopen}>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <AlertDialogPrimitive.Overlay
          forceMount
          asChild={props.aschild}
          className={joinClasses(
            "fixed inset-0 min-h-screen z-[2000] bg-black/50 flex justify-center items-center",
            props.classstyle
          )}
        >
          {/* Alert Dialogue content goes here */}
          {props.children}
        </AlertDialogPrimitive.Overlay>
      </Transition.Child>
    </Transition.Root>
  );
};

export {
  AlertDialogue,
  AlertDialogueTrigger,
  AlertDialogueTitle,
  AlertDialogueDescription,
  AlertDialogueCancel,
  AlertDialogueAction,
  AlertDialogueContent,
  AlertDialogueOverlay,
};
