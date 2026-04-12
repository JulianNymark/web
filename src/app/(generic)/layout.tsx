import { Link } from "@/components/monolith";
import { Page, PageBlock } from "@navikt/ds-react/Page";
import { ReactNode } from "react";
import { Box } from "@navikt/ds-react/Box";
import { BodyShort, HStack } from "@navikt/ds-react";
import { WebsiteSplash } from "@/components/WebsiteSplash";
import styles from "../styles.module.css";

const Header = () => {
  return (
    <Box background="neutral-soft" padding="space-8" as="header">
      <PageBlock gutters width="lg">
        <Link href="/">
          <HStack align="center">
            <span>Back to</span>
            <WebsiteSplash />
          </HStack>
        </Link>
      </PageBlock>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box background="neutral-soft" padding="space-32" as="footer">
      <PageBlock gutters width="lg" aria-hidden>
        <BodyShort textColor="subtle">a more silent footer.</BodyShort>
      </PageBlock>
    </Box>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <Box padding="space-32" paddingBlock="space-64" as="main">
      <PageBlock gutters width="text">
        {children}
      </PageBlock>
    </Box>
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
