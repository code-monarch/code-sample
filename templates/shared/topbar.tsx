import Paragraph from "@design-system/components/inputs/paragragh";
import React, { useEffect, useState } from "react";
import TopbarUserActivePlan from "../../components/data-display/topbar-user-active-plan";
import NotificationIcon from "@/public/img/dashboard/notification-icon.svg";
import UserProfileIcon from "@/public/img/dashboard/topbar-user-profile-icon.svg";
import TopbarTitle from "@design-system/components/data-display/topbar-page-title";
import { useRouter } from "next/router";
import { RootState } from "@app/store";
import { useSelector } from "react-redux";

const Topbar = () => {
  // Get Collapsible button state
  const isToggleSidebar = useSelector(
    (state: RootState) => state.activeSidebarNav.toggleSidebar
  );
  // Create a component for this
  const [exact, setExact] = useState<boolean>(false);
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") {
      setExact(true);
    }
  }, [pathname]);
  return (
    <div className='w-full bg-white fixed flex justify-around pr-[100px] desktop:pr-[300px] top-0 h-[72px] py-[14px] pl-[60px] shadow-semShadow2 z-[25] transition-all duration-700 ease-in-out'>
      <div className='w-full flex justify-between items-center'>
        <TopbarTitle href={pathname} exact={exact} />
        <div className='flex items-center space-x-[35px]'>
          <TopbarUserActivePlan activePlan='Tier One' />
          <NotificationIcon />
          <UserProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
