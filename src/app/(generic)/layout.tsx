import { Box, Link } from "@navikt/ds-react";
import { Page, PageBlock } from "@navikt/ds-react/Page";
import { ReactNode } from "react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Box background="surface-neutral-moderate" padding="2" as="header">
      <PageBlock gutters width="lg">
        Welcome to{" "}
        <Link href="/" as={NextLink}>
          [website]
        </Link>
      </PageBlock>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box background="surface-neutral-moderate" padding="8" as="footer">
      <PageBlock gutters width="lg">
        Thanks for checking out [website]
      </PageBlock>
    </Box>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <Box padding="8" paddingBlock="16" as="main">
      <PageBlock gutters width="lg">
        {children}
      </PageBlock>
    </Box>
  );
};

const Render = ({ children }: { children: ReactNode }) => {
  return (
    <Page footer={<Footer />}>
      <Header />
      <Body>{children}</Body>
    </Page>
  );
};

export default Render;
