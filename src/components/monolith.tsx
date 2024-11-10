import { BodyLong, Box, Heading } from "@navikt/ds-react";
import { ReactNode } from "react";

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="0 4" asChild>
      <Heading level="1" size="xlarge">
        {children}
      </Heading>
    </Box>
  );
};

export const Text = ({ children }: { children: ReactNode }) => {
  return <BodyLong style={{ width: "55ch" }}>{children}</BodyLong>;
};
