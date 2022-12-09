import * as React from "react";
import classes from "../../design/chips.data-display.classes";
import { joinClasses } from "../../utils/join-classes";

export interface IChipsClasses {
  base: string;
  variant: {
    white: string;
    red: string;
    green: string;
    blue: string;
    black: string;
    gray: string;
    gold: string;
  };
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
}
export interface IChipsProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: keyof IChipsClasses["size"];
  variant?: keyof IChipsClasses["variant"];
  classstyle?: string;
}

export default function Chip(props: IChipsProps) {
  return (
    <span
      {...props}
      className={joinClasses(
        classes.base,
        classes.variant[props.variant ?? "red"],
        classes.size[props.size ?? "sm"],
        props.classstyle
      )}
    >
      {props.children}
    </span>
  );
}
