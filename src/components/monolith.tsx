import {
  BodyLong,
  Box,
  Heading,
  HStack,
  Spacer,
  Link as StyledLink,
} from "@navikt/ds-react";
import NextLink from "next/link";
import { ReactNode } from "react";
import styles from "./monolith.module.css";

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="0 4" asChild>
      <Heading level="1" size="xlarge">
        {children}
      </Heading>
    </Box>
  );
};

export const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="0 4" asChild>
      <Heading level="2" size="large">
        {children}
      </Heading>
    </Box>
  );
};

export const H3 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="0 4" asChild>
      <Heading level="3" size="large">
        {children}
      </Heading>
    </Box>
  );
};

export const Strike = ({ children }: { children: ReactNode }) => {
  return <s style={{ display: "block" }}>{children}</s>;
};

export const Text = ({
  children,
  ...rest
}: {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}) => {
  return (
    <BodyLong className={styles.text} {...rest}>
      {children}
    </BodyLong>
  );
};

export const Link = ({
  children,
  ...rest
}: {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}) => {
  return (
    <StyledLink as={NextLink} {...rest}>
      {children}
    </StyledLink>
  );
};

export const CheckOutLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} className={styles.checkout_link}>
      Check out {children}
    </Link>
  );
};

export const Quote = ({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: string;
}) => {
  return (
    <blockquote
      cite={cite}
      style={{
        borderLeft: "4px solid oklch(0 0 0 / 20%)",
        paddingInline: "10px 0",
        marginBlock: "0 10px",
      }}
    >
      {children}

      <HStack>
        <Spacer />
        <div style={{ color: "oklch(0 0 0 / 50%)" }}>{cite}</div>
      </HStack>
    </blockquote>
  );
};
