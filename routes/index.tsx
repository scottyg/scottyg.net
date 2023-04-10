/** @jsx h */
import { Head } from "$fresh/runtime.ts";
import { h } from "preact";
import { tw } from "@twind";

/* Base 64 Images */
import { image } from "../image.ts";
import { favicon } from "../favicon.ts";

/* Islands */
import Hero from "../islands/Hero.tsx";
import Experience from "../islands/Experience.tsx";
import Skills from "../islands/Skills.tsx";
import Projects from "../islands/Projects.tsx";
import Footer from "../islands/Footer.tsx";

export default function Home() {
  const meta = {
    "title": "Scott Gordon - Full Stack Developer",
    "description": "",
    "favicon": favicon,
  };

  const hero = {
    "heading": "Hello. I'm Scott Gordon,",
    "sub_heading": "a Full Stack Developer.",
    "image": image,
    "image_alt": "Scott Gordon",
  };

  const contacts = [
    {
      title: "Github",
      url: "https://github.com/scottyg/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/scottygfunk/",
    },
  ];

  const experience = [
    {
      "company": "Dreamlands",
      "url": "https://dreamlands.io/",
      "position": "Web3 Game Developer",
      "years": "2022 - 2023",
      "current": true,
    },
    {
      "company": "Design Studio",
      "url": "https://designstudio.com",
      "position": "Developer Manager / Full Stack Developer",
      "years": "2021 - 2023",
      "current": false,
    },
    {
      "company": "Freelance",
      "url": "#",
      "position": "Web Developer",
      "years": "2003 - 2013 / 2016 - 2021",
      "current": false,
    },
    {
      "company": "Rescue Agency",
      "url": "https://rescueagency.com",
      "position": "Web Developer",
      "years": "2013 - 2016",
      "current": false,
    },
  ];

  const skills = [
    {
      "title": "HTML / CSS",
      "rating": 100,
    },
    {
      "title": "Javascript",
      "rating": 100,
    },
    {
      "title": "PHP / Laravel",
      "rating": 100,
    },
    {
      "title": "MySQL / MariaDB",
      "rating": 95,
    },
    {
      "title": "Node.js / Deno",
      "rating": 90,
    },
    {
      "title": "Vue / React",
      "rating": 85,
    },
    {
      "title": "MongoDB",
      "rating": 80,
    },
    {
      "title": "AWS",
      "rating": 70,
    },
    {
      "title": "C / C# / C++",
      "rating": 50,
    },
  ];  
  
  const skills2 = [
    {
      "title": "Adobe Photoshop",
      "rating": 100,
    },
    {
      "title": "Adobe Illustrator",
      "rating": 100,
    },
    {
      "title": "Adobe Animate",
      "rating": 90,
    },
    {
      "title": "Adobe XD",
      "rating": 80,
    },
    {
      "title": "Blender",
      "rating": 80,
    },
    {
      "title": "Adobe After Effects",
      "rating": 70,
    },
    {
      "title": "Unity",
      "rating": 60,
    }
  ];

  const skills3 = [
    {
      "title": "Management",
      "rating": 100,
    },
    {
      "title": "Scrum Master",
      "rating": 100,
    }
  ];

  const projects = [
    {
      "title": "Forcem Ipsum",
      "description":
        "The Star Wars text generator. Started in college, I wrote Forcem Ipsum in javascript and it is available as a standalone website, a <a href='https://deno.land/x/forcemipsum' target='_blank'>Deno Module</a> and as a <a href='https://www.npmjs.com/package/forcem-ipsum' target='_blank'>NPM package</a> to easily be included in your own projects.",
      "url": "https://forcemipsum.com/",
    },
    {
      "title": "http.gives",
      "description":
        "http gives, is a free service that allows users to send requests to a specific list of pages that will respond with the desired http status code. Built with <a href='https://laravel.com' target='_blank'>Laravel</a> and <a href='https://tailwindcss.com' target='_blank'>Tailwind</a>.",
      "url": "https://http.gives/",
    },
    {
      "title": "Scottyg.net",
      "description":
        "This website that you are currently reading is built using <a href='https://deno.land/' target='_blank'>Deno</a> and the <a href='https://fresh.deno.dev/' target='_blank'>Fresh</a> framework. It is rendered server side and is deployed serverless on the edge via <a href='https://deno.com/deploy/' target='_blank'>Deno Deploy</a>.",
      "url": "https://scottyg.net/",
    },
    {
      "title": "Syndified™",
      "description":
        "Syndified™ software helps brands facilitate commerce, faster, by syndicating content directly to the websites of their dealers. Manage team that creates Saas product with regular sprints for new features. Syndified™ is built with <a href='https://laravel.com' target='_blank'>Laravel</a>, <a href='https://tailwindcss.com' target='_blank'>Tailwind</a> and <a href='https://vuejs.org/' target='_blank'>Vue</a>.",
      "url": "https://syndified.com/",
    },
    {
      "title": "American Red Cross",
      "description":
        "Red Cross volunteers and staff work to deliver vital services - from providing relief and support to those in crisis, to helping you be prepared to respond in emergencies. Built multiple components of the website using HTML, CSS and Javascript.",
      "url": "https://redcross.org/",
    },
    {
      "title": "Hayes Group International",
      "description":
        "Built a custom map that displays the countries where Hayes Group International is located. The map is built using Javascript, CSS, and SVGs.",
      "url": "https://hayesgroupinternational.com/",
    },
    {
      "title": "Hot Tubs NW",
      "description":
        "Hot Tub Dealer based in Washington. Build various aspects of the website including a custom 'My Account Dashboard', where customers can easily see porducts they have purchased in store, order service calls and manage product subscriptions.",
      "url": "https://hottubsnw.com/",
    },
    {
      "title": "Syke",
      "description":
        "Syke is a movement for a tobacco-free music scene. Built their entire website in <a href='https://wordpress.org/' target='_blank'>Wordpress</a> including a custom digital 'zine'.",
      "url": "https://www.sykeva.com/",
    },
    {
      "title": "Rev Your Bev",
      "description":
        "Rev Your Bev is the Virginia Foundation for Healthy Youth’s campaign to encourage Virginians to drink more water. Built custom map component as well as multiple custom quizes using HTML, CSS and Javascript.",
      "url": "https://www.revyourbev.com/",
    },
  ];

  const footer = {
    "cta": "Want to build something together? Contact me",
    "copy": "© " + new Date().getFullYear(),
    "powered_by": "Earl Grey, Hot",
  };
  function createMarkup() {
    return {
      __html: `
    a {
      --tw-text-opacity: 1;
      color: #6d28d9;
      color: rgba(109,40,217,var(--tw-text-opacity));
    }`,
    };
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="builtWith"
          content="Built with Deno Fresh https://fresh.deno.dev/"
        />
        <meta name="description" content={meta.title} />
        <link rel="icon" type="image/png" sizes="512x512" href={favicon} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scottyg.net" />
        <meta
          property="og:image"
          content="http://scottyg.net/ScottGordon.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="scottyg.net" />
        <meta property="twitter:url" content="https://scottyg.net/" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content="http://scottyg.net/ScottGordon.png"
        />
      </Head>
      <div class={tw`min-h-screen h-full bg-gray-100`}>
        <div class={tw`container mx-auto px-4`}>
          <Hero contacts={contacts} hero={hero} />
          <div class={tw`gap-4 sm:flex sm:flex-col md:grid md:grid-cols-3`}>
            <Experience experience={experience} />
            <Skills skills={skills} skills2={skills2} skills3={skills3} />
          </div>
          <Projects projects={projects} />
          <Footer contacts={contacts} footer={footer} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={createMarkup()}></style>
    </div>
  );
}
