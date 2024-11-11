import { H1, Quote, Text } from "@/components/monolith";
import { Box, List, VStack } from "@navikt/ds-react";
import { ListItem } from "@navikt/ds-react/List";

const Render = () => {
  return (
    <VStack gap="20">
      <Box>
        <H1>About me in general</H1>
        <Text>
          Not sure what to put here, but I do stuff! I have some hobbies! Here's
          a small list of hobbies i have enjoyed / am currently enjoying (in no
          particular order):
        </Text>
        <List>
          <ListItem>bicycle stuff 🚲</ListItem>
          <ListItem>growing algae (Spirulina Platensis) 🦠</ListItem>
          <ListItem>sewing 🪡</ListItem>
          <ListItem>3D printing 🖨️</ListItem>
          <ListItem>electronics ⚡️</ListItem>
          <ListItem>coding stuff 🕸️</ListItem>
          <ListItem>creating music noises (with ableton) 🎶</ListItem>
          <ListItem>listening to music 🔈</ListItem>
          <ListItem>drawing 🎨</ListItem>
        </List>
        <Quote cite="You (the reader)">
          So what about non-hobbies? Do you have a list for stuff that might not
          count as a hobby per se, but is rather just a list of things you
          generally like?
        </Quote>
        <Text>Of course!</Text>
        <List>
          <ListItem>
            Reading the occasional book (I don't feel i read enough of them for
            it to count as a hobby yet)
          </ListItem>
          <ListItem>
            Pokemon (mostly the original 150 I grew up with on the gameboy color
            / cards, but all of them still have a bit of the original mood and
            nostalgia)
          </ListItem>
          <ListItem>
            Rain! 🌧️, when it's raining or snowing, when stuff falls from the
            sky. That's the most comforting feeling.
          </ListItem>
        </List>

        <Text>Now you should have a pretty complete picture of who I am!</Text>
      </Box>
    </VStack>
  );
};
export default Render;
