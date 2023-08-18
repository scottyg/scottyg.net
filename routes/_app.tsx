import { AppProps } from "$fresh/server.ts";

/* Base 64 Images */
import { favicon } from "../favicon.ts";

const meta = {
  "title": "Scott Gordon - Software Engineer",
  "description": "",
  "favicon": favicon,
};


export default function App({ Component }: AppProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        >
        </link>
      </head>
      <body>
        <style>
          {`
            body {
              font-family: 'Poppins', sans-serif;
            }
          `}
        </style>
        <Component />
      </body>
    </html>
  );
}
