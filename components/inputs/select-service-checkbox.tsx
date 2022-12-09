import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { joinClasses } from "@design-system/utils/join-classes";

// Checkbox Root
interface ICheckboxProps {
  value: string;
  required: boolean;
  defaultChecked?: boolean;
  labelfor: string;
  labeltext: string;
  classstyle?: string;
}

const SelectServiceCheckbox = ({
  value,
  classstyle,
  defaultChecked,
  ...props
}: ICheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      {...props}
      id={`${props.labelfor}`}
      value={value}
      // defaultChecked
      className={joinClasses(
        "flex flex-none h-fit min-w-[207px] w-fit items-center justify-center py-[8px] px-[16px] rounded-[4px]",
        "hover:bg-[#5D51C6] hover:!text-white radix-state-checked:bg-[#5D51C6] radix-state-checked:text-white radix-state-unchecked:border-[2px] radix-state-unchecked:border-[#F5F5F7] radix-state-unchecked:text-[#8E8AB5]",
        "focus:!ring-[1px] focus:outline-none focus-visible:ring focus-visible:ring-[#5D51C6] focus-visible:ring-opacity-75",
        classstyle
      )}
    >
      {props.labeltext}
      {/* <CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Indicator> */}
    </CheckboxPrimitive.Root>
  );
};

export default SelectServiceCheckbox;
