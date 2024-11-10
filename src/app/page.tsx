import { H1, Squish, Text } from "@/components/monolith";
import { Box, Link, Stack, VStack } from "@navikt/ds-react";
import { Page, PageBlock } from "@navikt/ds-react/Page";
import NextLink from "next/link";

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
            Thanks for checking out [website]!, assuming that the way most
            people explore websites is to not look at the footer until the very
            end of their experience.
          </Box>
          <VStack>
            <Link as={NextLink} href="/blog">
              Blog
            </Link>
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
        <Squish>
          <VStack gap="3">
            <H1>Hello!</H1>

            <Text>
              Welcome! This is one of those personal homepages! (they&apos;re
              still a thing right?)
            </Text>

            <s>
              <Text>
                It&apos;s attempted filled, through and thr<b>ough</b>, with
                stuff that I think you think might be interesting <b>too</b>!
              </Text>
            </s>
            <Text>
              There might not be much here right now! But just you wait...
            </Text>
          </VStack>
        </Squish>
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
