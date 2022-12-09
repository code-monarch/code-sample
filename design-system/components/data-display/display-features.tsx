import React, { ReactNode } from "react";
import classes from "../../design/display-features.data-display.classes";
import { joinClasses } from "../../utils/join-classes";

export interface IDisplayFeaturesClasses {
  base: string;
  isLoading: string;
}

interface IDisplayFeatures {
  isLoading: boolean;
  isError?: boolean;
  error_placeholder?: string;
  isSuccess?: boolean;
  classstyles?: string;
  bg?: string;
  children: ReactNode;
}

const DisplayFeatures = (props: IDisplayFeatures) => {
  return (
    <span
      className={joinClasses(
        classes.base,
        props.isLoading &&  classes.isLoading,
        props.isLoading && props.bg,
        props.classstyles
      )}
    >
      {props.children}
      {props.isError && props.error_placeholder}
    </span>
  );
};

export default DisplayFeatures;
