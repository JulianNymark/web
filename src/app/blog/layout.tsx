import { Link } from "@/components/monolith";
import { Page, PageBlock } from "@navikt/ds-react/Page";
import { ReactNode } from "react";
import { BoxNew } from "@navikt/ds-react/Box";

const Header = () => {
  return (
    <BoxNew background="neutral-moderate" padding="2" as="header">
      <PageBlock gutters width="lg">
        Back to <Link href="/">[website]</Link>
      </PageBlock>
    </BoxNew>
  );
};

const Footer = () => {
  return (
    <BoxNew background="neutral-moderate" padding="8" as="footer">
      <PageBlock
        gutters
        width="lg"
        style={{ color: "oklch(0 0 0 / 20%)" }}
        aria-hidden
      >
        a more silent footer.
      </PageBlock>
    </BoxNew>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <BoxNew padding="8" paddingBlock="16" as="main">
      <PageBlock gutters width="text">
        {children}
      </PageBlock>
    </BoxNew>
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
