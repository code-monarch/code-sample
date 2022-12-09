import { joinClasses } from "@design-system/utils/join-classes";
import * as React from "react";

export interface IUseCaseProps extends React.HTMLAttributes<HTMLDivElement> {
    classstyle?: string;
}

export default function UseCaseCard(props: IUseCaseProps) {
  return (
    <div
      {...props}
      className={joinClasses(
        props.classstyle,
        "bg-[#EDEBFD] w-[817px] h-[600px] flex flex-col items-center justify-center px-[90px] font-serif"
      )}
    >
      {props.children}
    </div>
  );
}
