import * as React from "react";
import classes from "../../design/paragraph.inputs.classes";
import { joinClasses } from "../../utils/join-classes";

export interface IParagraphClasses {
  base: string;
  alignment: {
    left: string;
    center: string;
    right: string;
  };
  color: {
    black: string;
    red: string;
    blue: string;
    gray: string;
  };
  textsize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
}
export interface IParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  classstyle?: string;
  align?: keyof IParagraphClasses["alignment"];
  color?: keyof IParagraphClasses["color"];
  textsize?: keyof IParagraphClasses["textsize"];
}


export default function Paragraph(props: IParagraphProps) {
  return (
    <p
      className={joinClasses(
        classes.base,
        classes.alignment[props.align ?? "left"],
        classes.color[props.color ?? "gray"],
        classes.textsize[props.textsize ?? "2xl"],
        props.textsize,
        props.classstyle
      )}
    >
      {props.children}
    </p>
  );
}
