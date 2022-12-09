import { RootState } from "@app/store";
import { useRouter } from "next/router";
import * as React from "react";
import { IconProps } from "../../types";

export const ServiceActivationSidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = React.useState<string>("#433A81");
  const { pathname } = useRouter();
  React.useEffect(() => {
    if (pathname.startsWith("/service-activation")) {
      setColor("#ffffff");
    } else {
      setColor("#433A81");
    }
  }, [pathname]);
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
        d='M11.9951 16.6776V14.1406'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.19 5.33008C19.88 5.33008 21.24 6.70008 21.24 8.39008V11.8301C18.78 13.2701 15.53 14.1401 11.99 14.1401C8.45 14.1401 5.21 13.2701 2.75 11.8301V8.38008C2.75 6.69008 4.12 5.33008 5.81 5.33008H18.19Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.4951 5.326V4.96C15.4951 3.74 14.5051 2.75 13.2851 2.75H10.7051C9.48512 2.75 8.49512 3.74 8.49512 4.96V5.326'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.77441 15.4824L2.96341 17.9914C3.09141 19.6824 4.50041 20.9894 6.19541 20.9894H17.7944C19.4894 20.9894 20.8984 19.6824 21.0264 17.9914L21.2154 15.4824'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ServiceActivationSidebarNavIcon;
