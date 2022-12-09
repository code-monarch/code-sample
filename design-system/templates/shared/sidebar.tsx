import React, { useEffect, useState } from "react";
import BrandIcon from "@public/img/dashboard/sidebar-nav-brand-name-icon.svg";
import SmallBrandIcon from "@public/img/dashboard/small-brand-Icon.svg";
import Collapsible from "@public/img/dashboard/collapsible-icon.svg";
import NavLink from "@design-system/components/navigation/custom-nav-link";
import Paragraph from "@design-system/components/inputs/paragragh";
import AccountSidebarNavIcon from "@design-system/components/icons/account-sidebar-nav-icon";
import DashboardSidebarNavIcon from "@design-system/components/icons/dashboard-sidebar-nav-icon";
import ActivityLogsSidebarNavIcon from "@design-system/components/icons/activity-logs-sidebar-nav-icon";
import ApiCallsSidebarNavIcon from "@design-system/components/icons/api-calls-sidebar-nav-icon";
import ApiLibrarySidebarNavIcon from "@design-system/components/icons/api-library-sidebar-nav-icon";
import ServiceActivationSidebarNavIcon from "@design-system/components/icons/service-activation-sidebar-nav-icon";
import TransactionSidebarNavIcon from "@design-system/components/icons/transaction-sidebar-nav-icon";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  toggleSidebar,
} from "@app/features/active-sidebar-nav-slice";
import { RootState } from "@app/store";
import { joinClasses } from "@design-system/utils/join-classes";
import ExternalLinkIcon from "@design-system/components/icons/external-link-icon";
import { useRouter } from "next/router";

// Put this in a data file
const navLinks = [
  {
    link: "Dashboard",
    href: "/",
    icon: <DashboardSidebarNavIcon />,
    tooltip: "Dashboard",
  },
  {
    link: "Transaction",
    href: "/transactions",
    icon: <TransactionSidebarNavIcon />,
    tooltip: "Transaction",
  },
  {
    link: "Service activation",
    href: "/service-activation",
    icon: <ServiceActivationSidebarNavIcon />,
    tooltip: "Service-activation",
  },
  {
    link: "API call logs",
    href: "/api-call-logs",
    icon: <ApiCallsSidebarNavIcon />,
    tooltip: "API-call-logs",
  },
  {
    link: "API Library",
    href: "/api-library",
    icon: <ApiLibrarySidebarNavIcon />,
    tooltip: "API-library",
  },
  {
    link: "Account",
    href: "/account-settings",
    icon: <AccountSidebarNavIcon />,
    tooltip: "Account-settings",
  },
  {
    link: "Activity logs",
    href: "/activity-logs",
    icon: <ActivityLogsSidebarNavIcon />,
    tooltip: "Activity-logs",
  },
];

const Sidebar = () => {
  const { pathname } = useRouter();
  const isOnApiLibrary = pathname === "/api-library";
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setCollapse(window.matchMedia("(max-width:1425px)").matches);
    });
  }, []);

  useEffect(() => {
    if (collapse === true) {
      dispatch(collapseSidebar(true));
    } else {
      dispatch(collapseSidebar(false));
    }
  }, [collapse, dispatch]);

  // Get Collapsible button state
  const isToggleSidebar = useSelector(
    (state: RootState) => state.activeSidebarNav.toggleSidebar
  );
  return (
    <div
      className={joinClasses(
        "fixed left-0 top-0 bottom-0 !bg-white w-[282px] min-h-[100vh] z-[100] transition-all duration-700 ease-in-out",
        isToggleSidebar && "!w-[80px]"
      )}
    >
      {/* Top */}
      <div className=' !bg-white py-[28px] border-b-[2px] border-dashboardBg'>
        <div className='flex justify-start space-x-[48px] pl-[24px] relative transition-all delay-5000 duration-700 ease-in-out'>
          <span>{isToggleSidebar ? <SmallBrandIcon /> : <BrandIcon />}</span>
          {/* Toggle Nav icon */}
          {!isToggleSidebar && !collapse && (
            <span
              className='cursor-pointer transition-all delay-700 duration-300 ease-in-out'
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              {<Collapsible />}
            </span>
          )}
        </div>
      </div>
      {/* Top End */}
      <div className='flex flex-col space-y-[28px]'>
        {/* Create a component for this */}
        {navLinks.map((nav, index: React.Key | null | undefined) => (
          <div
            // className='transition-all duration-700 ease-in-out'
            className={joinClasses(
              "transition-all duration-700 ease-in-out",
              `${nav.link === "API Library" && "!cursor-not-allowed"}`
            )}
            title={`${nav.tooltip}`}
            key={index}
          >
            <NavLink
              href={`${nav.href}`}
              exact={nav.link === "Dashboard" && true}
            >
              <span>{nav.icon}</span>
              {isToggleSidebar ? (
                ""
              ) : (
                <Paragraph textsize='sm' classstyle='whitespace-nowrap'>
                  {nav.link}
                </Paragraph>
              )}
              {nav.link === "API Library" && !isToggleSidebar && (
                <span className='!ml-[80px]'>
                  <ExternalLinkIcon
                    width={`${isToggleSidebar ? "15" : "20"}`}
                    height={`${isToggleSidebar ? "15" : "20"}`}
                    color={`${isOnApiLibrary ? "#fff" : "#89868F"}`}
                  />
                </span>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
