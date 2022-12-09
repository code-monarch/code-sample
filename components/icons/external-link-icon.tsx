import React from "react";
import { IconProps } from "../../types";

const ExternalLinkIcon = ({ ...props }: IconProps) => {
  return (
    <svg
      width={`${props.width}`}
      height={`${props.height}`}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.87671 6.74927L12.2529 2.37305M9.33545 2.37305H12.2529V5.29053M12.2529 8.7915V11.709C12.2529 12.0185 12.13 12.3153 11.9111 12.5342C11.6923 12.753 11.3954 12.876 11.0859 12.876H2.91699C2.60749 12.876 2.31066 12.753 2.0918 12.5342C1.87295 12.3153 1.75 12.0185 1.75 11.709V3.54004C1.75 3.23053 1.87295 2.9337 2.0918 2.71485C2.31066 2.496 2.60749 2.37305 2.91699 2.37305H5.83447'
        stroke={`${props.color}`}
        strokeWidth='1.27308'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ExternalLinkIcon;
