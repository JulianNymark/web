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

export const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <Box marginBlock="0 4" asChild>
      <Heading level="2" size="large">
        {children}
      </Heading>
    </Box>
  );
};

export const Squish = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ maxWidth: "55ch", marginBlock: "", marginInline: "auto" }}>
      {children}
    </div>
  );
};

export const Text = ({ children }: { children: ReactNode }) => {
  return (
    <BodyLong
      style={{
        marginBlock: "0 20px",
      }}
    >
      {children}
    </BodyLong>
  );
};
