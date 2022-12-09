import React from "react";
import { joinClasses } from "@design-system/utils/join-classes";
import { DividerHorizontalIcon, CheckIcon } from "@radix-ui/react-icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import Flex from "../layout/flex";
import InputLabel from "./label";


// Checkbox Root
interface ICheckboxProps {
  value: string;
  required: boolean;
  defaultChecked?: boolean;
  name?: string;
  // checked: string; // UseState value from parent component: "true", "false" or "Indeterminate"
  labelfor: string;
  labeltext: React.ReactNode
  classstyle?: string;
}
// Todo Create a design file for this component
const Checkbox = ({ value, classstyle, defaultChecked, ...props }: ICheckboxProps) => {
  return (
    <Flex classstyle='!space-x-[10px]'>
      <CheckboxPrimitive.Root
        {...props}
        id={`${props.labelfor}`}
        value={value}
        // defaultChecked
        className={joinClasses(
          "flex flex-none h-6 w-6 items-center justify-center rounded",
          "radix-state-checked:bg-semBlue600 radix-state-unchecked:border-[1px] radix-state-unchecked:border-semBlue600",
          "focus:!ring-[1px] focus:outline-none focus-visible:ring focus-visible:ring-semBlue600 focus-visible:ring-opacity-75",
          classstyle
        )}
      >
        <CheckboxPrimitive.Indicator>
          {/* {checked === "indeterminate" && (
            <DividerHorizontalIcon className='h-4 w-4 self-center text-semPrimary' />
          )} */}
          {/* {checked === "true" && ( */}
          <CheckIcon className='h-4 w-4 self-center text-white' />
          {/* )} */}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <InputLabel labelfor={`${props.labelfor}`} classstyle={classstyle}>
        {props.labeltext}
      </InputLabel>
    </Flex>
  );
};
// Checkbox Root End

export default Checkbox;
