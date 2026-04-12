import { H1, Quote, Text } from "@/components/monolith";
import { List, VStack, Box } from "@navikt/ds-react";
import { ListItem } from "@navikt/ds-react/List";

const Render = () => {
  return (
    <VStack gap="space-20">
      <Box>
        <H1>About me in general</H1>
        <Text>
          Not sure what to put here, but I do stuff! I have some hobbies! Here's
          a small list of hobbies i have enjoyed / am currently enjoying (in no
          particular order):
        </Text>
        <Box marginBlock="space-16" asChild><List data-aksel-migrated-v8>
            <ListItem>bicycle stuff 🚲</ListItem>
            <ListItem>growing algae (Spirulina Platensis) 🦠</ListItem>
            <ListItem>sewing 🪡</ListItem>
            <ListItem>3D printing 🖨️</ListItem>
            <ListItem>electronics ⚡️</ListItem>
            <ListItem>coding stuff 🕸️</ListItem>
            <ListItem>creating music noises (with ableton) 🎶</ListItem>
            <ListItem>listening to music 🔈</ListItem>
            <ListItem>drawing 🎨</ListItem>
            <ListItem>slightly weird keyboards ⌨️</ListItem>
          </List></Box>
        <Quote cite="You (the reader)">
          So what about non-hobbies? Do you have a list for stuff that might not
          count as a hobby per se, but is rather just a list of things you
          generally like?
        </Quote>
        <Text>Of course!</Text>
        <Box marginBlock="space-16" asChild><List data-aksel-migrated-v8>
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
              sky. That's the most comforting feeling. Like a blanket that covers
              over all sound. When it's raining you get soothing whitenoise, and
              when it's snowing it becomes eerily quiet, but in a comforting way.
              I don't think there's anything more zen than hearing just the sound
              of snow crunching from your own footsteps in a forest when its
              snowing.
            </ListItem>
            <ListItem>
              The Amazing Digital Circus (also indie animation in general), so far
              as of episode 6 this show is up there with some of the greatest
              stuff i've seen! The animation in the pilot was already great, but
              it just keps getting better! Great fun!
            </ListItem>
          </List></Box>

        <Text>Now you should have a pretty complete picture of who I am!</Text>
      </Box>
    </VStack>
  );
};
export default Render;
