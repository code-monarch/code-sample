import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { joinClasses } from "../../utils/join-classes";

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  classstyle?: string;
}

function NavLink({ href, exact, children, ...props }: INavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <a
        className={joinClasses(
          "!font-sans whitespace-nowrap flex items-center justify-start space-x-[20px] w-full text-primaryText py-[12px] px-[24px]",
          props.classstyle
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
