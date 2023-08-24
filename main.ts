/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { ga4Plugin } from "https://deno.land/x/fresh_ga4@0.0.2/mod.ts";

// import { freshSEOPlugin } from "https://deno.land/x/fresh_seo/mod.ts";
// import {
//   BlogOptions,
//   blogPlugin,
// } from "https://deno.land/x/fresh_blog@0.0.3/mod.ts";

import twindPlugin from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

// const blogOptions: BlogOptions = {
//   title: "Scott's Blog",
//   rootPath: import.meta.url,
//   postsPerPage: 10,
//   navbarItems: {
//     Archive: "/archive",
//     About: "/about",
//   },
// };

await start(manifest, {
  plugins: [
    twindPlugin(twindConfig),
    ga4Plugin(),
    // freshSEOPlugin(manifest),
    // blogPlugin(blogOptions),
  ],
});
