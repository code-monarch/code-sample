import { RootState } from "@app/store";
import FullWidth from "@design-system/components/layout/full-width";
import { joinClasses } from "@design-system/utils/join-classes";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpandIcon from "@public/img/dashboard/expand-icon.svg";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { toggleSidebar } from "@app/features/active-sidebar-nav-slice";

interface LayoutProps {
  children: React.ReactNode; // 👈️ type children
}

const Layout = (props: LayoutProps) => {
  // Put this in a hook
  const [collapse, setCollapse] = useState<boolean>(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setCollapse(window.matchMedia("(max-width:1425px)").matches);
    });
  }, []);

  // Dispatch toggle sidebar true when Collapsible button is clicked
  const dispatch = useDispatch();
  // Get the toggle state collapsible button
  const isToggleSidebar = useSelector(
    (state: RootState) => state.activeSidebarNav.toggleSidebar
  );
  return (
    <FullWidth>
      <Sidebar />
      <div
        onClick={() => {
          dispatch(toggleSidebar());
        }}
        className={joinClasses(
          isToggleSidebar && !collapse
            ? "fixed top-[20px] left-[50px] z-[150] cursor-pointer transition-all delay-700 duration-300 ease-in-out"
            : "hidden"
        )}
      >
        <ExpandIcon />
      </div>
      <div
        className={joinClasses(
          "flex flex-col bg-dashboardBg w-full min-h-screen transition-all duration-700 ease-in-out",
          isToggleSidebar ? "ml-[80px]" : "ml-[222px]"
        )}
      >
        <Topbar />
        {/* <Container> */}
        <main className='bg-dashboardBg desktop:ml-[50px] mt-[60px] desktop:mt-[110px] px-[40px] pb-[40px] !h-fit'>
          {props.children}
        </main>
        {/* </Container> */}
      </div>
    </FullWidth>
  );
};

export default Layout;
