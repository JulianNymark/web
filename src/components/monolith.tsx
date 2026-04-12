"use client";

import { CheckmarkCircleFillIcon, HourglassIcon } from "@navikt/aksel-icons";
import {
  BodyLong,
  Heading,
  HStack,
  Spacer,
  Link as StyledLink,
  VStack,
} from "@navikt/ds-react";
import {
  Accordion as ForkedAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./accordion";
import NextLink from "next/link";
import { ReactNode } from "react";
import styles from "./monolith.module.css";

import { Box } from "@navikt/ds-react/Box";

function AccordionRoot({ children, ...rest }: { children: ReactNode; [x: string]: any }) {
  return (
    <Box
      padding="space-24"
      background="neutral-soft"
      borderRadius="12"
    >
      <ForkedAccordion {...rest}>
        {children}
      </ForkedAccordion>
    </Box>
  );
}

AccordionRoot.Item = AccordionItem;
AccordionRoot.Header = AccordionHeader;
AccordionRoot.Content = AccordionContent;

export { AccordionRoot as Accordion };
export { AccordionItem, AccordionHeader, AccordionContent };

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="space-0 space-16" asChild>
      <Heading level="1" size="xlarge" className={styles.h1}>
        {children}
      </Heading>
    </Box>
  );
};

export const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="space-0 space-16" asChild>
      <Heading level="2" size="large" className={styles.h2}>
        {children}
      </Heading>
    </Box>
  );
};

export const H3 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="space-0 space-16" asChild>
      <Heading level="3" size="large" className={styles.h3}>
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
  href,
  ...rest
}: {
  children: ReactNode;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}) => {
  return (
    <StyledLink as={NextLink} href={href} className={styles.link} {...rest}>
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
    <Box
      as={Link}
      href={href}
      className={styles.checkout_link}
      paddingInline="space-20"
      paddingBlock="space-12"
      borderWidth="1"
      borderRadius="12"
    >
      Check out {children}
    </Box>
  );
};

export const Solution = ({
  title,
  subtitle,
  status,
  statusLabel,
  children,
  links,
  defaultOpen = false,
}: {
  title: string;
  subtitle: string;
  status: "completed" | "planned";
  statusLabel: string;
  children?: ReactNode;
  links?: { href: string; label: string }[];
  defaultOpen?: boolean;
}) => {
  const isCompleted = status === "completed";
  const hasContent = !!(children || (links && links.length > 0));

  const SolutionHeader = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        width: "100%",
        gap: "var(--ax-space-16)",
      }}
    >
      <Box style={{ flexGrow: 1, textAlign: "left" }}>
        <Text as="strong">{title}</Text>
        <Text size="small" style={{ color: "var(--ax-text-subtle)" }}>
          {subtitle}
        </Text>
      </Box>
      <HStack
        align="center"
        gap="space-4"
        style={{
          flexShrink: 0,
          color: isCompleted
            ? "var(--ax-bg-success-strong)"
            : "var(--ax-bg-warning-strong)",
        }}
      >
        <Text
          as="span"
          style={{
            fontStyle: isCompleted ? "normal" : "italic",
            opacity: isCompleted ? 1 : 0.7,
            whiteSpace: "nowrap",
          }}
        >
          {statusLabel}
        </Text>
        {isCompleted ? (
          <CheckmarkCircleFillIcon title="Completed" fontSize="1.5rem" />
        ) : (
          <HourglassIcon title="Planned" fontSize="1.5rem" />
        )}
      </HStack>
    </div>
  );

  return (
    <AccordionItem defaultOpen={defaultOpen}>
      <AccordionHeader className={styles.solution_header_span}>
        {SolutionHeader}
      </AccordionHeader>
      <AccordionContent>
        {children || (!isCompleted && <Text italic>Searching for a good solution...</Text>)}
        {links && links.length > 0 && (
          <HStack gap="space-16" marginBlock="space-12 space-0">
            {links.map((link) => (
              <CheckOutLink key={link.href} href={link.href}>
                {link.label}
              </CheckOutLink>
            ))}
          </HStack>
        )}
      </AccordionContent>
    </AccordionItem>
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
