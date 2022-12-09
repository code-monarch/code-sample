import * as React from "react";
import { IconProps } from "../../types";

export const DropdownIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      width={`${props.width}`}
      height={`${props.height}`}
      viewBox='0 0 22 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.4173 7.9082L11.0007 14.3249L4.58398 7.9082'
        stroke={`${props.color}`}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DropdownIcon;
