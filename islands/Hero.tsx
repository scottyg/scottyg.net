/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { ContactButton } from "../components/ContactButton.tsx";

interface HeroProps {
  contacts: Array<ContactProps>;
  hero: Record<string, string>;
}
interface ContactProps {
  title: string;
  url: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div
      class={tw`py-12 flex gap-6 items-center justify-center flex-col md:flex-row`}
    >
      <div>
        <img
          src={props.hero.image}
          alt={props.hero.image_alt}
          width="260"
          height="260"
          class={tw`rounded-full bg-green-300`}
        />
      </div>
      <div>
        <h1 class={tw`text(2xl center md:4xl md)`}>
          {props.hero.heading}
          <br />
          {props.hero.sub_heading}
        </h1>
        <div class={tw`flex align-center mt-2 justify-center md:justify-start`}>
          {props.contacts.map((contact) => {
            return (
              <ContactButton href={contact.url} target="_blank" title={contact.title}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}
