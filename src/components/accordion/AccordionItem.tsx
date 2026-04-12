import React, { forwardRef, useState } from "react";
import { AccordionItemContext } from "./AccordionContext";
import styles from "./accordion.module.css";

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, open: controlledOpen, defaultOpen = false, onOpenChange, ...rest }, ref) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const toggleOpen = () => {
      if (!isControlled) setUncontrolledOpen((x) => !x);
      onOpenChange?.(!open);
    };

    return (
      <div
        ref={ref}
        className={[styles.item, className].filter(Boolean).join(" ")}
        data-expanded={open}
        {...rest}
      >
        <AccordionItemContext.Provider value={{ open, toggleOpen }}>
          {children}
        </AccordionItemContext.Provider>
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";
export default AccordionItem;
