import { createContext } from "react";

export type AccordionContextProps = {
  size: "large" | "medium" | "small";
};

export const AccordionContext = createContext<AccordionContextProps>({
  size: "medium",
});

export type AccordionItemContextProps = {
  open: boolean;
  toggleOpen: () => void;
};

export const AccordionItemContext =
  createContext<AccordionItemContextProps | null>(null);
