import { H1, H3, Link, Strike, Text } from "@/components/monolith";
import { List, Stack, VStack } from "@navikt/ds-react";
import { ListItem } from "@navikt/ds-react/List";
import { Page, PageBlock } from "@navikt/ds-react/Page";

import { BoxNew } from "@navikt/ds-react/Box";
import styles from "./styles.module.css";
import { ThemeButton } from "@/components/theme_button";

const Header = () => {
  return (
    <BoxNew background="neutral-soft" padding="2" as="header">
      <PageBlock gutters width="lg" className={styles.subtle}>
        <Stack justify="space-between">
          <BoxNew>Welcome to [website]</BoxNew>
          <Stack></Stack>
        </Stack>
      </PageBlock>
      <ThemeButton />
    </BoxNew>
  );
};

const Footer = () => {
  return (
    <BoxNew
      background="neutral-soft"
      className={styles.subtle}
      padding="8"
      as="footer"
    >
      <PageBlock gutters width="lg">
        <Stack justify="space-between">
          <BoxNew
            style={{
              maxWidth: "80ch",
              marginBlock: "0 20px",
            }}
          >
            <Text style={{ marginBlock: "0 20px" }}>
              Thanks for checking out [website]!
            </Text>
            <Text style={{ marginBlock: "0 20px" }}>
              Here is a bunch of links in the footer for a change!
            </Text>
            <Text>
              Could this be the new and improved way to design websites? Primary
              content first followed by <em>all the other things</em> later?
            </Text>
          </BoxNew>
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
    </BoxNew>
  );
};

const Body = () => {
  return (
    <BoxNew padding="8" paddingBlock="16" as="main">
      <PageBlock gutters width="text" className="vspace-between">
        <H1>Hello!</H1>
        <Text>My name is Julian Nymark!</Text>
        <Text>Welcome!</Text>
        <Text>
          This is one of those personal homepages! (they're still a thing
          right?)
        </Text>
        <Strike>
          <Text>
            It's attempted filled, through and thr<b>ough</b>, with stuff that I
            think you think might be interesting <b>too</b>!
          </Text>
        </Strike>
        <Text>
          There might not be much here right now! But just you wait...
        </Text>
        <List>
          <ListItem icon={<div className="emoji-pizzazz">✨</div>}>
            <H3>
              <Link href="/whats-so-great-about">What's so great about...</Link>
            </H3>
            <span>Simply an opinionated list of things I think are great!</span>
          </ListItem>
          <ListItem icon={<div className="emoji-pizzazz">📚</div>}>
            <H3>
              <Link href="https://bookrastinating.com/user/j_man">Books</Link>
            </H3>
            <span>
              List of books, ones I've read, maybe ones I'm currently reading
              (when I remember to update the list). Ones I think I want to read.
            </span>
          </ListItem>
        </List>
      </PageBlock>
    </BoxNew>
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
