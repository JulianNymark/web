import { H1, H2, Link, Text } from "@/components/monolith";
import { Box, Stack, VStack } from "@navikt/ds-react";
import { Page, PageBlock } from "@navikt/ds-react/Page";

const Header = () => {
  return (
    <Box background="surface-neutral-moderate" padding="2" as="header">
      <PageBlock gutters width="lg">
        <Stack justify="space-between">
          <Box>Welcome to [website]</Box>
          <Stack></Stack>
        </Stack>
      </PageBlock>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box background="surface-neutral-moderate" padding="8" as="footer">
      <PageBlock gutters width="lg">
        <Stack justify="space-between">
          <Box style={{ maxWidth: "80ch", marginBlock: "0 20px" }}>
            <Text>
              Thanks for checking out [website]!, assuming that the way most
              people explore websites is to not look at the footer until the
              very end of their experience.
            </Text>
            <Text>
              I have placed a bunch of links in the footer to ensure this
              doesn't happen.
            </Text>
          </Box>
          <VStack>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="https://c.im/@j_man" rel="me">
              Mastodon
            </Link>
            <Link href="https://github.com/JulianNymark/web">Source</Link>
          </VStack>
        </Stack>
      </PageBlock>
    </Box>
  );
};

const Body = () => {
  return (
    <Box padding="8" paddingBlock="16" as="main">
      <PageBlock gutters width="text">
        <VStack gap="3">
          <H1>Hello!</H1>

          <Text>
            Welcome! This is one of those personal homepages! (they're still a
            thing right?)
          </Text>

          <s>
            <Text>
              It's attempted filled, through and thr<b>ough</b>, with stuff that
              I think you think might be interesting <b>too</b>!
            </Text>
          </s>
          <Text>
            There might not be much here right now! But just you wait...
          </Text>
          <H2>
            <Link href="/whats-so-great-about">What's so great about...</Link>
          </H2>
        </VStack>
      </PageBlock>
    </Box>
  );
};

export default function Render() {
  return (
    <Page footer={<Footer />}>
      <Header />
      <Body />
    </Page>
  );
}
