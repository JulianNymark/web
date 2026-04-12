import React, { forwardRef, useContext } from "react";
import { ChevronDownIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import { AccordionContext, AccordionItemContext } from "./AccordionContext";
import styles from "./accordion.module.css";

export interface AccordionHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ children, className, onClick, ...rest }, ref) => {
    const itemContext = useContext(AccordionItemContext);
    const { size } = useContext(AccordionContext);

    if (itemContext === null) {
      console.error("<AccordionHeader> must be used within <AccordionItem>");
      return null;
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={itemContext.open}
        className={[styles.header, className].filter(Boolean).join(" ")}
        onClick={(e) => {
          itemContext.toggleOpen();
          onClick?.(e);
        }}
        {...rest}
      >
        <ChevronDownIcon
          className={[styles.chevron, itemContext.open ? styles.chevronOpen : ""].filter(Boolean).join(" ")}
          aria-hidden
        />
        <Heading size={size === "large" ? "small" : "xsmall"} as="span">
          {children}
        </Heading>
      </button>
    );
  },
);

AccordionHeader.displayName = "AccordionHeader";
export default AccordionHeader;
