import { useRouter } from "next/router";
import * as React from "react";
import { IconProps } from "../../types";

export const ApiCallsSidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = React.useState<string>("#433A81");
  const { pathname } = useRouter();
  React.useEffect(() => {
    if (pathname.startsWith("/api-call-logs")) {
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
        d='M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='19.9954'
        cy='4.19954'
        rx='1.9222'
        ry='1.9222'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.9248 3.11914H7.65704C4.6456 3.11914 2.77832 5.25186 2.77832 8.26331V16.3457C2.77832 19.3571 4.60898 21.4807 7.65704 21.4807H16.2612C19.2726 21.4807 21.1399 19.3571 21.1399 16.3457V9.30679'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ApiCallsSidebarNavIcon;
