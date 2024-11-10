import { H1, Text } from "@/components/monolith";
import { Box, Link, Stack, VStack } from "@navikt/ds-react";
import { Page, PageBlock } from "@navikt/ds-react/Page";
import NextLink from "next/link";

const Header = () => {
  return (
    <Box background="surface-neutral-moderate" padding="2" as="header">
      <PageBlock gutters width="lg">
        <Stack justify="space-between">
          <Box>Welcome to [website]</Box>
          <Stack>
            <Link as={NextLink} href="/blog">
              Blog
            </Link>
          </Stack>
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
          <Box>Thanks for checking out [website]</Box>
          <VStack>
            <Link as={NextLink} href="/contact">
              Contact
            </Link>
            <Link as={NextLink} href="/about">
              About
            </Link>
            <Link as={NextLink} href="/confusion">
              huh?
            </Link>
            <Link as={NextLink} href="https://github.com/JulianNymark/web">
              source
            </Link>
          </VStack>
        </Stack>
      </PageBlock>
    </Box>
  );
};

const Body = () => {
  return (
    <Box padding="8" paddingBlock="16" as="main">
      <PageBlock gutters width="lg">
        <VStack gap="3">
          <H1>[Put that one thing you want everyone to read here!]</H1>

          <Text>
            Welcome! This is one of those personal homepages! (they&apos;re
            still a thing right?)
          </Text>

          <Text>
            It&apos;s attempted filled, through and thr<b>ough</b>, with stuff
            that I think you think might be interesting <b>too</b>!
          </Text>
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
