import { RootState } from "@app/store";
import { useRouter } from "next/router";
import * as React from "react";
import { IconProps } from "../../types";

export const ApiLibrarySidebarNavIcon = ({ ...props }: IconProps) => {
  const [color, setColor] = React.useState<string>("#433A81");
  const { pathname } = useRouter();
  React.useEffect(() => {
    if (pathname.startsWith("/api-library")) {
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
        d='M21.6141 4.91157C22.1677 4.71387 22.75 5.12424 22.75 5.71205V16.9369C22.75 17.2589 22.5681 17.5532 22.2801 17.6972L12.4801 22.5972C11.915 22.8798 11.25 22.4688 11.25 21.8369V9.21205C11.25 8.85283 11.4758 8.53239 11.8141 8.41157L21.6141 4.91157ZM21.25 6.6344L12.75 9.67011V20.7852L21.25 16.5352V6.6344Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.25 5.71205C1.25 5.12425 1.83232 4.71387 2.38589 4.91157L12.1859 8.41157C12.5242 8.53239 12.75 8.85282 12.75 9.21205V21.8369C12.75 22.4688 12.085 22.8798 11.5199 22.5972L1.71987 17.6972C1.4319 17.5532 1.25 17.2589 1.25 16.9369V5.71205ZM2.75 6.6344V16.5352L11.25 20.7852V9.67011L2.75 6.6344Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.9999 2.79607L4.22985 5.5711L11.9999 8.34613L19.77 5.5711L11.9999 2.79607ZM11.7141 1.30538C11.8989 1.23935 12.101 1.23935 12.2858 1.30538L21.9885 4.77062C22.7407 5.03925 22.7407 6.10296 21.9885 6.37158L12.2858 9.83682C12.101 9.90285 11.8989 9.90285 11.7141 9.83682L2.01138 6.37158C1.25922 6.10295 1.25923 5.03924 2.01138 4.77062L11.7141 1.30538Z'
        fill={color}
      />
    </svg>
  );
};

export default ApiLibrarySidebarNavIcon;
