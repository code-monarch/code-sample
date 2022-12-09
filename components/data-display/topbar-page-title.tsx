import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  saveActiveNav,
} from "@app/features/active-sidebar-nav-slice";
import Paragraph from "../inputs/paragragh";

export interface ITopbarTitle
  extends React.AnchorHTMLAttributes<HTMLDivElement> {
  href: string;
  exact?: boolean;
}

const TopbarTitle = ({ href, exact }: ITopbarTitle) => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  // const [topbarTitle, setTopbarTitle] = useState<string>();
  const topbarTitle = useRef<string>();
  // const isActive = exact ? pathname === href : pathname.startsWith(pathname);
  const isActive = exact ? pathname === href : pathname.startsWith(pathname);

    switch (pathname) {
      case "/":
        if (isActive) {
          topbarTitle.current = "Dashboard overview";
          dispatch(saveActiveNav("/"));
        }
        break;
      case "/service-activation":
        if (isActive) {
          topbarTitle.current = "Service activaton";
          dispatch(saveActiveNav("/service-activation"));
        }
        break;
      case "/transactions":
        if (isActive) {
          topbarTitle.current = "Transactions";
          dispatch(saveActiveNav("/transactions"));
        }
        break;
      case "/api-call-logs":
        if (isActive) {
          topbarTitle.current = "API call logs";
          dispatch(saveActiveNav("/api-call-logs"));
        }
        break;
      case "/account-settings":
        if (isActive) {
          topbarTitle.current = "Account Settings";
          dispatch(saveActiveNav("/account"));
        }
        break;
      case "/activity-logs":
        if (isActive) {
          topbarTitle.current = "Audit logs";
          dispatch(saveActiveNav("/activity-logs"));
        }
        break;
      default:
        topbarTitle.current = "Dashboard overview";
    }

  return (
    <>
      <Paragraph textsize='md'>{topbarTitle.current}</Paragraph>
    </>
  );
};

export default TopbarTitle;
