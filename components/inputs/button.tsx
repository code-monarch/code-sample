import * as React from "react";
import classes from "../../design/button.inputs.classes";
import { joinClasses } from "../../utils/join-classes";
import type { ButtonType } from "../../types";

export interface IButtonClasses {
  base: string;
  fullWidth: string;
  variant: {
    primary: string;
    secondary: string;
    transparent: string;
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

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean;
  size?: keyof IButtonClasses["size"];
  variant?: keyof IButtonClasses["variant"];
  classstyle?: string;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ) => void;
}

export default function Button(props: IButtonProps) {
  /** Whenever button is clicked and button is neither loading nor disabled,
   * this function calls the
   * props.onClick function passing the click event as an argument
   *
   * The props.onClick event can be any function
   */
  const handleClick = (
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ): void => {
    !props.disabled && !props.loading && props.onClick && props.onClick(event);
  };
  return (
    <button
      {...props}
      type={props.type}
      disabled={props.disabled || props.loading}
      onClick={handleClick}
      className={joinClasses(
        classes.base,
        props.classstyle,
        classes.variant[props.variant ?? "primary"],
        classes.size[props.size ?? "sm"],
        props.fullwidth && classes.fullWidth,
        props.loading && "cursor-not-allowed"
      )}
    >
      {props.children}
    </button>
  );
}
