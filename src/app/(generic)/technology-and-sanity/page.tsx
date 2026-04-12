import {
  Text,
  Quote,
  Solution,
  H1,
  Accordion,
  Link,
} from "@/components/monolith";
import { Box, HelpText, HStack, VStack } from "@navikt/ds-react";

const Render = () => {
  return (
    <div className="vspace-between">
      <H1>Technology and sanity?</H1>
      <Text>
        This section will be a bit vast in scope, technology here means pretty
        much anything software/hardware, and I just want to <em>do things</em>{" "}
        to feel more in control and retain as much sanity as possible related to
        any technology. That could mean creating something, hosting something
        someone else made, or maybe even removing something that I don't
        actually need?
      </Text>

      <HStack align="center" gap="space-8" wrap={false}>
        <Text>I want to take back my time.</Text>
        <HelpText title="Taking back my time" placement="right">
          <VStack gap="space-8">
            <span>
              Modern phones, YouTube, social media, and websites in general are
              engineered to steal attention.
            </span>
            <span>
              One option is <strong>dumbing down my smartphone</strong>: strip
              it to essentials, disable notifications ruthlessly, remove social
              apps, set grayscale mode. Another is going further and switching
              to an actual <strong>dumb phone</strong> for calls and texts only.
            </span>
            <span>
              On desktop: <strong>uBlock Origin</strong> blocks ads and
              trackers. The <strong>Unhook</strong> browser extension removes
              YouTube recommendations, shorts, and the homepage feed
              entirely.{" "}
            </span>
            <span>
              I also don't really watch the news. News is made to sensationalize
              and often focuses on the negative. What I've found is that the
              things that actually matter <em>come to you</em>. The irrelevant
              stuff fades away on its own, and anything genuinely important a
              coworker or friend will mention. As long as you interface{" "}
              <em>a little bit</em> with other people in some way, the zeitgeist
              of the times keeps me updated enough, and that's ok with me :).
            </span>
          </VStack>
        </HelpText>
      </HStack>
      <HStack align="center" gap="space-8" wrap={false}>
        <Text>
          I want to have <em>dead simple</em> solutions to my own technology
          problems.
        </Text>
        <HelpText title="Why simplicity matters" placement="right">
          <VStack gap="space-8">
            <span>
              Less code means fewer things that can break + less to maintain
              over time.
            </span>
            <span>
              A simple solution is also <strong>understandable</strong>. I
              forget what I've made in the past. Similarly someone else might
              also have a chance at understanding it too (or pieces of it).
            </span>
            <span>
              Sure it sounds like one of those impossible ideals, but I think
              feature growth is real. And we get comfortable with a lot more
              than we "need". Split things up where possible. As an example I
              host a Navidrome instance, it currently only does streaming music
              out, not file uploading, and it doesn't do non-music media, just
              music. This is good. Instead of thinking I need all my media
              issues "solved" in one place, I'll try to tackle them each
              individually, and launch its own separate pod (with its own
              separate volume) KISS.
            </span>
          </VStack>
        </HelpText>
      </HStack>
      <HStack align="center" gap="space-8" wrap={false}>
        <Text>I want to own the things I care about.</Text>
        <HelpText title="Owning what's mine" placement="right">
          <VStack gap="space-8">
            <span>... of those things that make sense to own.</span>
            <span>
              The desire for ownership is not out of greed. I think we{" "}
              <em>should</em> and <em>deserve</em> to carve out a small space
              for ourselves (keyword: small). To push back a little on the
              cheapening, and effectivization of things.
            </span>
            <span>
              I don't want to extrapolate "make everything efficient" into every
              avenue of my life. I think individualism is somewhat fundamentally
              incompatible with "efficiency". Everyone wants something different
              and custom to their tastes? Sounds inefficient! Being alive is
              inefficient (in some sense).
            </span>
            <span>
              It's cheaper to rent and stream everything, sure. But taken to the
              extreme, it becomes hard to be an individual. Nothing is really{" "}
              <em>yours</em>.
            </span>
            <span>
              I like the idea of owning a small music collection. The music I
              pick that way becomes more deliberate. I think more before I
              commit to an album. I'll still discover music online without
              owning it, but if I love something enough, I want it in my
              collection.
            </span>
            <span>
              Let me have my small collection of rocks before i pass away!
            </span>
          </VStack>
        </HelpText>
      </HStack>
      <HStack align="center" gap="space-8" wrap={false}>
        <Text>
          I want to minimize the effects of{" "}
          <Link href="https://en.wikipedia.org/wiki/Enshittification">
            enshittification
          </Link>{" "}
          on my life.
        </Text>
        <HelpText title="Enshittification" placement="right">
          <VStack gap="space-8">
            <span>
              It's impossible to avoid all of it, but where I can; I try!
            </span>
            <span>
              I try to avoid "pay for more than just convenience" services where
              a real dependency can form. If they are able to hold my data
              hostage in some way or the switching cost is high, I'll
              re-evaluate if i need that service, or if it can be covered in
              some other way.
            </span>
            <span>
              If a service has good alternatives (ideally FLOSS ones) and
              switching is easy, I'm usually fine paying for convenience.
            </span>
            <span>
              Example: if my apps are Dockerized, moving them around is
              straightforward. Hosting platforms know this, so they can't raise
              prices much beyond running costs. You know you're getting a fair
              deal, and you know leaving is never an issue. I'm purely paying
              for the convenience this way, not more.
            </span>
          </VStack>
        </HelpText>
      </HStack>

      <HStack align="center" gap="space-8" wrap={false}>
        <Text>I want to share back what's good.</Text>
        <HelpText title="sharing" placement="right">
          <VStack gap="space-8">
            <span>Doing this just feels good!</span>
          </VStack>
        </HelpText>
      </HStack>

      <Box marginBlock="space-16">
        <Accordion>
          <Solution
            title="Phone"
            subtitle="Android / iOS replacement"
            status="completed"
            statusLabel="GrapheneOS"
            links={[{ href: "https://grapheneos.org/", label: "GrapheneOS" }]}
          >
            <div className="vspace-between">
              <Text>
                I did some research, and it seems like the current (2026) best
                way to obtain more privacy and control in the mobile/smartphone
                area is to buy what is currently the best supported android
                phone for "alternative OSes" (which ironically is the Google
                Pixel). I got a fairly good deal on the used market, the
                flagship models are absolutely <em>not</em> required to get a
                snappy experience these days. It's fairly affordable!
              </Text>

              <Text>
                Currently I've installed GrapheneOS, a very privacy respecting
                phone OS. You can find good FLOSS alternatives to all the usual
                apps (at least for the apps I used) on the F-Droid store + via
                apk distributions on github (utilities like Obtanium exist to
                make this easy + check for new releases).
              </Text>
            </div>
          </Solution>

          <Solution
            title="Music"
            subtitle="Spotify / YouTube Music replacement"
            status="completed"
            statusLabel="Navidrome"
            links={[{ href: "https://www.navidrome.org/", label: "Navidrome" }]}
          >
            <VStack gap="space-16">
              <Text>
                Navidrome is a lightweight, fast, and feature-rich music server.
                It allows me to listen to my own music collection in peace.
              </Text>
              <Text>
                I have also started collecting physical music CD's again, you
                get good quality audio, and CD's take up "not too much" space.
                In the future I might drop the plastic cases for a folder, but
                for now the plastic is nostalgic and part of the appeal! fun!
              </Text>
            </VStack>
          </Solution>

          <Solution
            title="Spreadsheets"
            subtitle="Excel / Google Sheets replacement"
            status="planned"
            statusLabel="Planned"
          >
            <Text>
              Spreadsheets repeatedly come back as a really handy piece of
              software, useful for short data testing / exploration / just a
              place to dump some numbers and toy around with them (and not even
              really commit to keeping the experiment for later...) I'm positive
              there's a good simple solution out there. Something I can link to
              and share with others.
            </Text>
          </Solution>

          <Solution
            title="On demand decryption of secrets"
            subtitle="Decrypt only what's needed; when you need it. Ideally using a hardware security key!"
            status="planned"
            statusLabel="Planned"
          >
            <VStack gap="space-16">
              <Text>
                I'm increasingly worried about malicious code being run as the
                current user on my development machine. Especially now in the
                age of LLM's running code left and right (even when you have it
                set to ask you before every command it runs, the risk is there).
                When I work on stuff I have a few secrets needed (often in the
                form of a <code>.env</code> file in a repository). I realise I
                don't need to have these secrets in plain text at all times (for
                all repos!).
              </Text>
              <Text>
                An observation is that I usually only touch a small handful of
                repositories a day, so i should be able to tap my hardware
                security key once a day for those repos. I think this could help
                a little bit on anxiety.
              </Text>
            </VStack>
          </Solution>
        </Accordion>
      </Box>
    </div>
  );
};

export default Render;
