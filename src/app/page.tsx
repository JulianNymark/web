import {
  BodyLong,
  BodyShort,
  Box,
  Heading,
  Page,
  VStack,
} from "@navikt/ds-react";
import { PageBlock } from "@navikt/ds-react/Page";

const Footer = () => {
  return (
    <Box background="surface-neutral-moderate" padding="8" as="footer">
      <PageBlock gutters width="lg">
        Thanks for checking out [website]
      </PageBlock>
    </Box>
  );
};

const Header = () => {
  return (
    <Box background="surface-neutral-moderate" padding="2" as="header">
      <PageBlock gutters width="lg">
        Welcome to [website]
      </PageBlock>
    </Box>
  );
};

const Body = () => {
  return (
    <Box padding="8" paddingBlock="16" as="main">
      <PageBlock gutters width="lg">
        <VStack gap="3">
          <Heading level="1" size="xlarge">
            Content
          </Heading>
          <BodyLong>
            {`The old website was feeling old, it's time to build it all over
again! (also moving the hosting provider to something more `}
            <em>modern</em>
            {`!)`}
          </BodyLong>
          <BodyLong>Content will go here at some point! (stay tuned!)</BodyLong>
          <Heading level="2" size="xlarge">
            Contact
          </Heading>
          <BodyShort>
            j [at] juliannymark (dot) com (robots should not know how to scrape
            this)
          </BodyShort>
        </VStack>
      </PageBlock>
    </Box>
  );
};

export default function Home() {
  return (
    <Page footer={<Footer />}>
      <Header />
      <Body />
    </Page>
  );
}
