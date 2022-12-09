import { joinClasses } from "@/design-system/utils/join-classes";
import React from "react";
import classes from "../../design/full-width.layout.classes";

export interface IFullWidthClasses {
  base: string;
}

export interface IFullWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classstyle?: string;
}

const FullWidth = ({ children, ...props }: IFullWidthProps) => {
  return (
    <div {...props} className={joinClasses(classes.base, props.classstyle)}>
      {children}
    </div>
  );
};

export default FullWidth;
