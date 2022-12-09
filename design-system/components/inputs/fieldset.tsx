import { joinClasses } from "@design-system/utils/join-classes";
import React from "react";

interface IFieldSetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classstyle?: string;
}

const FieldSet = ({ children, classstyle, ...props }: IFieldSetProps) => {
  return (
    <div
      {...props}
      className={joinClasses(
        classstyle,
        "flex flex-col items-start space-y-[8px]"
      )}
    >
      {children}
    </div>
  );
};

export default FieldSet;
