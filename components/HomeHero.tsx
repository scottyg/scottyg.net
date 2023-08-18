import { image } from "../image.ts";

const hero = {
  "heading": "Hello. I'm Scott Gordon,",
  "sub_heading": "a Software Engineer.",
  "image": image,
  "image_alt": "Scott Gordon",
};


export default function HomeHero() {
  return (
    <div>
      <div class="py-12 flex gap-6 items-center justify-center flex-col">
        <div>
          <img
            src={hero.image}
            alt={hero.image_alt}
            width="260"
            height="260"
            class="rounded-full bg-green-300"
          />
        </div>
        <div>
          <h1 class="text(2xl center md:4xl)">
            {hero.heading}
            <br />
            {hero.sub_heading}
          </h1>
        </div>
      </div>
    </div>
  );
}
