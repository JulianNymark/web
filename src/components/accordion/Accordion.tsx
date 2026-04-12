import React, { forwardRef } from "react";
import { AccordionContext } from "./AccordionContext";
import AccordionContent, { AccordionContentProps } from "./AccordionContent";
import AccordionHeader, { AccordionHeaderProps } from "./AccordionHeader";
import AccordionItem, { AccordionItemProps } from "./AccordionItem";
import styles from "./accordion.module.css";

interface AccordionComponent
  extends React.ForwardRefExoticComponent<
    AccordionProps & React.RefAttributes<HTMLDivElement>
  > {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Content: typeof AccordionContent;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "large" | "medium" | "small";
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, size = "medium", ...rest }, ref) => {
    return (
      <AccordionContext.Provider value={{ size }}>
        <div
          ref={ref}
          className={[styles.root, className].filter(Boolean).join(" ")}
          {...rest}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
) as AccordionComponent;

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

Accordion.displayName = "Accordion";
export default Accordion;
export { AccordionItem, AccordionHeader, AccordionContent };
export type { AccordionItemProps, AccordionHeaderProps, AccordionContentProps };
