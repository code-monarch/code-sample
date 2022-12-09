import React, { ReactNode } from "react";
import { joinClasses } from "../../utils/join-classes";
import FullWidth, { IFullWidthProps } from "../layout/full-width";
import classes from "@design-system/design/card.data-display.classes";
import Heading, { IHeadingProps } from "../inputs/heading";
import Button, { IButtonProps } from "../inputs/button";

export interface ICardClasses {
  base: string;
  cardImgTop: string;
  cardContent: string;
  cardTitle: string;
  cardDescription: string;
}
// Card Root
interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classstyle?: string;
}

/** Card Components is made up of CardHeader, CardTitle, CardContent, CardDescription, CardCTA
 */
const Card = ({ children, ...props }: ICardProps) => {
  return (
    <div {...props} className={joinClasses(classes.base, props.classstyle)}>
      {children}
    </div>
  );
};
// Card Root End

// Card Header
interface ICardHeaderProps extends IFullWidthProps {}

/** Card Header should contain Card image Top or somrthing else
 */
const CardHeader = ({ children, ...props }: ICardHeaderProps) => {
  return (
    <FullWidth
      {...props}
    >
      {children}
    </FullWidth>
  );
};
// Card Header End

// Card Title
interface ICardTitleProps extends IHeadingProps {}

const CardTitle = ({ children, ...props }: ICardTitleProps) => {
  /** Title of Card
   */
  return <Heading {...props}>{children}</Heading>;
};
// Card Title End

// Card Description
interface ICardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}
/** Description of Card most likely a list or paragraph
 */
const CardDescription = ({ children, ...props }: ICardDescriptionProps) => {
  return <div {...props}>{children}</div>;
};
// Card Description End

// Card CTA
interface ICardCTAProps extends IButtonProps {}
/** Card call to action button
 */
const CardCTA = ({ children, ...props }: ICardCTAProps) => {
  return <Button {...props} size="lg" fullwidth>{children}</Button>;
};
// Card CTA End

// Card Content
interface ICardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  classstyle?: string;
}
const CardContent = ({ children, ...props }: ICardContentProps) => {
  return (
    <div className={joinClasses(props.classstyle, classes.cardContent)}>
      {children}
    </div>
  );
};
// Card Content End

export { Card, CardHeader, CardTitle, CardDescription, CardCTA, CardContent };
