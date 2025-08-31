import { H2, Text } from "@/components/monolith";
import { Heading, List } from "@navikt/ds-react";
import { ListItem } from "@navikt/ds-react/List";

import { BoxNew } from "@navikt/ds-react/Box";

const Render = () => {
  return (
    <div className="vspace-between">
      <BoxNew
        style={{
          width: "100%",
          marginInline: "auto",
          marginBlock: "0 20px",
          borderBottom: "2px solid oklch(90% 0 120)",
        }}
      >
        <H2>CMS rambling</H2>
        <span>2024-11-10</span>
      </BoxNew>
      <Text>
        So my thinking is to maybe have some sort of CMS (probably strapi), and
        then to use that for this blogs content (for starters). Thinking that
        could be a nice replacement for my old WP blog.
      </Text>
      <Text>
        Then I could write and write with nary the slightest worry in the world!
        For one, the quite possibly random content doesn't get committed to a
        VCS, so that's nice (in case I say something incredibly stupid and want
        to easily retract my words! I could always force push... hmmm, there
        truly is a world of opportunity out there). On the other hand, storing
        the content in a VCS will also let me time travel!
      </Text>
      <Heading size="large">Points against CMS:</Heading>
      <List>
        <ListItem>I'd have to host a CMS... {">"}:( </ListItem>
        <ListItem>
          Another moving piece of machinery! (it <s>could</s> will break at some
          point and require more maintenance)
        </ListItem>
        <ListItem>
          kinda KISS for a blog with no two-way communication to simply generate
          everything at build time from source 😌
        </ListItem>
        <ListItem>
          Whenever I scaffold something "bigger" for the sake of future unknown
          usage patterns, it always falls flat!
        </ListItem>
        <ListItem>
          CMSes are good for dynamic data, but do I really <em>want</em> to do
          dynamic data?! (I don't want to make my blog into a job! I just want
          to occasionally rant into the void)
        </ListItem>
      </List>
      <Heading size="large">Points for CMS:</Heading>
      <List>
        <ListItem>
          CMSes <em>could</em> be simple!
        </ListItem>
        <ListItem>
          Separate concerns: Content is content 👏, and presentation is
          presentation! 👏
        </ListItem>
      </List>
      <Text>I'll leave room for future me to make some choices here.</Text>
    </div>
  );
};

export default Render;
