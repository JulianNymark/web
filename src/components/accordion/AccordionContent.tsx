import React, { forwardRef, useContext } from "react";
import { BodyLong } from "@navikt/ds-react";
import { AccordionItemContext } from "./AccordionContext";
import styles from "./accordion.module.css";

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...rest }, ref) => {
    const context = useContext(AccordionItemContext);

    if (context === null) {
      console.error("<AccordionContent> must be used within <AccordionItem>");
      return null;
    }

    return (
      <div
        className={[styles.content, !context.open ? styles.contentClosed : ""].filter(Boolean).join(" ")}
        inert={!context.open}
      >
        <div className={styles.contentInner}>
          <BodyLong
            as="div"
            ref={ref}
            className={[styles.contentBody, className].filter(Boolean).join(" ")}
            {...rest}
          >
            {children}
          </BodyLong>
        </div>
      </div>
    );
  },
);

AccordionContent.displayName = "AccordionContent";
export default AccordionContent;
