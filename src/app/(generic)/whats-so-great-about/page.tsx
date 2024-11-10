import { CheckOutLink, Squish, Text } from "@/components/monolith";
import { Accordion, List } from "@navikt/ds-react";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "@navikt/ds-react/Accordion";
import { Link } from "@/components/monolith";

const Render = () => {
  return (
    <Squish>
      <Text>
        I really want a place to talk about things that make the web (and the
        world) so wonderful! New things keep popping up all the time, and it's
        hard to keep up with it all. But here I will try to at least note things
        down as I come across them.
      </Text>
      <Text>
        Along with this list i'll throw in some thoughts and opinions (free of
        charge!) Otherwise this just becomes another{" "}
        <Link href="https://en.wikipedia.org/wiki/Listicle">listicle</Link>.
      </Text>
      <Text style={{ display: "none" }}>
        I tend to have a strong preference to projects that are{" "}
        <abbr
          title="Free
        Libre Open-Source Software"
        >
          FLOSS
        </abbr>
        . And if I don't draw a line somewhere, the list of interesting things
        in this list would probably get out of hand, and probably reflect the
        confusion and chaos I so much want to try and avoid by making this list
        in the first place!
      </Text>
      <List title="What's so great about...">
        <Accordion>
          <AccordionItem>
            <AccordionHeader>Mastodon</AccordionHeader>
            <AccordionContent>
              <Text>
                The idea behind Mastodon is to contrast with with how
                "traditional social media" platforms operate. It uses a free and
                open source protocol called{" "}
                <Link href="https://w3c.github.io/activitypub/">
                  ActivityPub
                </Link>
                , and it's designed in such a way that it facilitates the
                sharing of information between several (usually smaller) servers
                that aren't owned by any single entity (parent company), they{" "}
                <em>can</em> (and usually are) hosted by anyone who wants to.
              </Text>
              <Text>
                The ActivityPub protocol and what Mastodon is doing is what I
                can only describe as "democratic" in nature. Where the network
                of servers is more collectively owned than anything else, and
                there is no "amassed wealth" within one server, as the value
                lies in the connection network each account has, and it
                stretches across the boundaries of a single server instance.
                Mastodon tries to further empower the users too, where users can
                easily migrate between servers should they want to. Bringing
                with them all of their accounts <em>"value"</em> (connections,
                past posts etc... any "resource" on the platform).
              </Text>
              <Text>
                Although an upside, a downside is also that it <em>is</em>{" "}
                federated. As such, each server can be quite different in its
                focus, appearance, culture / the rules they operate by etc... A
                server can be operated as a complete dictatorship by a single
                user, or as is more likely the case with the bigger instances, a
                few admins that get help from another few moderators. This means
                that <em>"finding your server"</em> becomes a thing you didn't
                usually have to think about.
              </Text>
              <Text>
                There's also a thing worth mentioning about echo chambers too,
                since a server instance <em>could</em> decide to defederate from
                all other instances that don't also align with its worldview. It
                is possible that we would end up with isolated networks of
                federated servers rather than one single federated network.
                Mastodon is not immune to the problem of echo chambers, despite
                it sounding like such a silver bullet to existing social media
                problems. Defederation is hopefully considered as a dire last
                resort by Mastodon admins.
              </Text>
              <CheckOutLink href="https://joinmastodon.org/">
                Mastodon
              </CheckOutLink>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>"Serverless"</AccordionHeader>
            <AccordionContent>
              <Text>
                Though serverless doesn't mean "no server", and though there has
                been a lot of hype (maybe too much?) around it. I still think
                it's one of the greatest ways of dealing with application
                deployment as of 2024.
              </Text>
              <Text>
                Now I don't have to think about provisioning as much, and
                tooling is really starting to <em>"get there"</em> as well. I
                currently use a service / platform (called fly.io) that has
                pretty decent auto-detection of what type of software you are
                currently developing, and generates a Dockerfile{" "}
                <em>for you</em>. This dockerfile is by no means beholden to
                deployment on their specific service either.
              </Text>
              <Text>
                I think the only way to become a fan is to try it out.
              </Text>
              <CheckOutLink href="https://fly.io/">Fly.io</CheckOutLink>
              <CheckOutLink href="https://www.heroku.com">Heroku</CheckOutLink>
              <CheckOutLink href="https://www.docker.com/">Docker</CheckOutLink>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </List>
    </Squish>
  );
};

export default Render;
