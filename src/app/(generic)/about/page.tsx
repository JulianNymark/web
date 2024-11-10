import { H1, Squish, Text } from "@/components/monolith";
import { Box, List, VStack } from "@navikt/ds-react";
import { ListItem } from "@navikt/ds-react/List";

const Render = () => {
  return (
    <VStack gap="20">
      <Box>
        <Box
          style={{
            width: "65ch",
            marginInline: "auto",
            marginBlock: "0 20px",
          }}
        >
          <H1>About me in general</H1>
        </Box>
        <Text>
          {`
Not sure what to put here, but I do stuff! I have some hobbies! Here's
a small list of hobbies i have enjoyed / am currently enjoying (in no
particular order):
`}
        </Text>
        <Squish>
          <List>
            <ListItem>bicycle stuff 🚲</ListItem>
            <ListItem>growing algae (Spirulina Platensis) 🦠</ListItem>
            <ListItem>sewing 🪡</ListItem>
            <ListItem>3D printing 🖨️</ListItem>
            <ListItem>electronics ⚡️</ListItem>
            <ListItem>coding stuff 🕸️</ListItem>
            <ListItem>creating music noises (with ableton) 🎶</ListItem>
            <ListItem>drawing 🎨</ListItem>
          </List>
        </Squish>
        <Text>Now you should have a pretty complete picture of who I am!</Text>
      </Box>
    </VStack>
  );
};
export default Render;
