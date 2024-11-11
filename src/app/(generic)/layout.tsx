import { Link } from "@/components/monolith";
import { Box } from "@navikt/ds-react";
import { Page, PageBlock } from "@navikt/ds-react/Page";
import { ReactNode } from "react";

const Header = () => {
  return (
    <Box background="surface-neutral-moderate" padding="2" as="header">
      <PageBlock gutters width="lg">
        Back to <Link href="/">[website]</Link>
      </PageBlock>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box background="surface-neutral-moderate" padding="8" as="footer">
      <PageBlock
        gutters
        width="lg"
        style={{ color: "oklch(0 0 0 / 20%)" }}
        aria-hidden
      >
        a more silent footer.
      </PageBlock>
    </Box>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <Box padding="8" paddingBlock="16" as="main">
      <PageBlock gutters width="text">
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
