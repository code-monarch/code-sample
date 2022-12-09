import * as React from "react";
import { IconProps } from "../../types";

export const ApiLibraryRightIconSidebarNavIcon = ({
  color = "#89868F",
  ...props
}: IconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.2484 9.74901L18.4994 3.49805M14.3321 3.49805H18.4994V7.66536M18.4994 12.6661V16.8334C18.4994 17.2755 18.3238 17.6995 18.0112 18.0121C17.6985 18.3247 17.2746 18.5004 16.8325 18.5004H5.16399C4.7219 18.5004 4.29791 18.3247 3.9853 18.0121C3.67269 17.6995 3.49707 17.2755 3.49707 16.8334V5.16497C3.49707 4.72287 3.67269 4.29889 3.9853 3.98628C4.29791 3.67367 4.7219 3.49805 5.16399 3.49805H9.3313'
        stroke={color}
        strokeWidth='1.81846'
        stroke-Linecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ApiLibraryRightIconSidebarNavIcon;
