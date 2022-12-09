import { joinClasses } from "@design-system/utils/join-classes";
import React, { ReactNode } from "react";

export interface IDashboardPanel extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  classstyle?: string;
}

const DashboardPanel = (props: IDashboardPanel) => {
  return (
    <div
      className={joinClasses(
        "w-full min-h-screen py-[40px] space-y-[32px] rounded-[8px]",
        props.classstyle
      )}
    >
      {props.children}
    </div>
  );
};

export default DashboardPanel;
