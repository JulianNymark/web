import { Link } from "@/components/monolith";
import { Page, PageBlock } from "@navikt/ds-react/Page";
import { ReactNode } from "react";
import { BoxNew } from "@navikt/ds-react/Box";
import { HStack } from "@navikt/ds-react";
import { WebsiteSplash } from "@/components/WebsiteSplash";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <BoxNew background="neutral-soft" padding="2" as="header">
      <PageBlock gutters width="lg">
        <HStack align="center">
          <span>Back to</span>
          <Link href="/">
            <WebsiteSplash />
          </Link>
        </HStack>
      </PageBlock>
    </BoxNew>
  );
};

const Footer = () => {
  return (
    <BoxNew background="neutral-soft" padding="8" as="footer">
      <PageBlock gutters width="lg" aria-hidden>
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
    <Page className={styles.page} footer={<Footer />}>
      <Header />
      <Body>{children}</Body>
    </Page>
  );
};

export default Render;
