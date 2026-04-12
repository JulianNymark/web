import { H1, H3, Link, Text } from "@/components/monolith";
import { HStack, List, Stack, VStack, Box } from "@navikt/ds-react";
import { ListItem } from "@navikt/ds-react/List";
import { Page, PageBlock } from "@navikt/ds-react/Page";

import styles from "./styles.module.css";
import { ThemeButton } from "@/components/theme_button";
import { WebsiteSplash } from "@/components/WebsiteSplash";

const Header = () => {
  return (
    <Box background="neutral-soft" padding="space-8" as="header">
      <PageBlock gutters width="lg">
        <Stack justify="space-between">
          <Box>
            <HStack align="center">
              <span>Welcome to</span>
              <WebsiteSplash />
            </HStack>
          </Box>
          <ThemeButton />
        </Stack>
      </PageBlock>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box background="neutral-soft" padding="space-32" as="footer">
      <PageBlock gutters width="lg">
        <Stack justify="space-between">
          <Box
            style={{
              maxWidth: "80ch",
              marginBlock: "0 20px",
            }}
          >
            <Text as="div" style={{ marginBlock: "0 20px" }}>
              <HStack align="center">
                <span>Thanks for checking out</span>
                <WebsiteSplash />
              </HStack>
            </Text>
            <Text style={{ marginBlock: "0 20px" }}>
              Here is a bunch of links in the footer for a change!
            </Text>
            <Text>
              Could this be the new and improved way to design websites? Primary
              content first followed by <em>all the other things</em> later?
            </Text>
          </Box>
          <VStack>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="https://c.im/@j_man" rel="me">
              Mastodon
            </Link>
            <Link href="https://bsky.app/profile/julian-n.bsky.social" rel="me">
              Bluesky
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
    <Box padding="space-32" paddingBlock="space-64" as="main">
      <PageBlock gutters width="text" className="vspace-between">
        <H1>Hello!</H1>
        <Text>My name is Julian Nymark!</Text>
        <Text>Welcome!</Text>
        <Text>
          This is one of those personal homepages! (they're still a thing
          right?)
        </Text>
        <Box marginBlock="space-16" asChild>
          <List data-aksel-migrated-v8>
            <ListItem icon={<div className="emoji-pizzazz">✨</div>}>
              <H3>
                <Link href="/whats-so-great-about">
                  What's so great about...
                </Link>
              </H3>
              <span>
                Simply an opinionated list of things I think are great!
              </span>
            </ListItem>
            <ListItem icon={<div className="emoji-pizzazz">🧘</div>}>
              <H3>
                <Link href="/technology-and-sanity">Technology + Sanity</Link>
              </H3>
              <span>
                An attempt at documenting <em>technology stuff</em> that lowers
                cortisol
              </span>
            </ListItem>
            <ListItem icon={<div className="emoji-pizzazz">📚</div>}>
              <H3>
                <Link href="https://bookrastinating.com/user/j_man">Books</Link>
              </H3>
              <span>
                List of books, ones I've read, maybe ones I'm currently reading
                (when I remember to update the list). Ones I think I want to
                read.
              </span>
            </ListItem>
          </List>
        </Box>
      </PageBlock>
    </Box>
  );
};

export default function Render() {
  return (
    <Page className={styles.page} footer={<Footer />}>
      <Header />
      <Body />
    </Page>
  );
}
