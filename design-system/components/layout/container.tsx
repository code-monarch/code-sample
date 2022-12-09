import { joinClasses } from "@/design-system/utils/join-classes";
import React from "react";
import classes from "../../design/container.layout.classes";

export interface IContainerClasses {
  base: string;
}

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classstyle?: string;
}

const Container = ({ children, ...props }: IContainerProps) => {
  return (
    <div {...props} className={joinClasses(classes.base, props.classstyle)}>
      {children}
    </div>
  );
};

export default Container;
