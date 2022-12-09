import { joinClasses } from "@design-system/utils/join-classes";
import * as React from "react";
import classes from "../../design/inputs.classes";

export interface IInputClasses {
  base: string;
  passwordInputBase: string;
  authTokenInputBase: string;
  authTokenInputClicked: string;
}
export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  type: "tel" | "search" | "radio" | "email" | "button" | "number" | "text";
  value?: string | number;
  width?: string;
  onchange?: (
    event: React.MouseEvent | React.KeyboardEvent | React.TouchEvent
  ) => void;
  classstyle?: string;
}

const Input = React.forwardRef<React.ElementRef<"input">, IInputProps>(
  (props, ref) => (
    <input
      {...props}
      ref={ref}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      onChange={() => props.onchange}
      className={joinClasses(classes.base, props.width, props.classstyle)}
    />
  )
);

Input.displayName = "Input";
export default Input;
