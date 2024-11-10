import { H1, Text } from "@/components/monolith";
import { Box, List, VStack } from "@navikt/ds-react";
import { ListItem } from "@navikt/ds-react/List";

const Render = () => {
  return (
    <VStack gap="20">
      <Box>
        <H1>... in general</H1>
        <Text>
          {`
Not sure what to put here, but I do stuff! I have some hobbies! Here's
a small list of hobbies i have enjoyed / am currently enjoying (in no
particular order):
`}
        </Text>
        <List>
          <ListItem>bicycle stuff 🚲</ListItem>
          <ListItem>growing algae (Spirulina Platensis) 🦠</ListItem>
          <ListItem>sewing 🪡</ListItem>
          <ListItem>3D printing 🖨️</ListItem>
          <ListItem>electronics ⚡️</ListItem>
          <ListItem>making this website 🕸️</ListItem>
          <ListItem>creating music noises (with ableton) 🎶</ListItem>
          <ListItem>drawing 🎨</ListItem>
        </List>
      </Box>
    </VStack>
  );
};
export default Render;
