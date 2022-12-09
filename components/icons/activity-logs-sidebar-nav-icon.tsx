import { useRouter } from "next/router";
import * as React from "react";
import { IconProps } from "../../types";

export const ActivityLogsSidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = React.useState<string>("#433A81");
  const { pathname } = useRouter();
  React.useEffect(() => {
    if (pathname.startsWith("/activity-logs")) {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.52344 15.4758L10.1806 10.1806L15.4758 8.52344L13.8187 13.8187L8.52344 15.4758Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='12'
        cy='12'
        r='10'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ActivityLogsSidebarNavIcon;
