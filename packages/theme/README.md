<h1 align="center">Toolbeam Docs Theme</h1>
<p align="center">
  <a href="https://sst.dev/discord"><img alt="Discord" src="https://img.shields.io/discord/983865673656705025?style=flat-square&label=Discord" /></a>
  <a href="https://www.npmjs.com/package/toolbeam-docs-theme"><img alt="npm" src="https://img.shields.io/npm/v/toolbeam-docs-theme?style=flat-square" /></a>
  <a href="https://github.com/toolbeam/docs-theme/actions/workflows/changeset.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/toolbeam/docs-theme/changeset.yml?style=flat-square&branch=main" /></a>
</p>

## Usage

1. Install the theme package to your project and the custom fonts.
   
   ```sh
   npm install toolbeam-docs-theme @fontsource/ibm-plex-mono
   ```
   
   Optionally, install packages for linked headings.
   
   ```bash
   npm install @astrojs/markdown-remark rehype-autolink-headings
   ```

2. Add the theme to your Starlight config.

   ```ts title="astro.config.mjs" ins={1,8}
   import theme from "toolbeam-docs-theme";

   export default defineConfig({
     // ...
     integrations: [
       starlight({
         // ...
         plugins: [theme({
           // Optionally, add your own header links
           headerLinks: [
             { name: "Home", url: "/" },
             { name: "Docs", url: "/docs/" },
             { name: "Blog", url: "/blog/" },
           ],
         })],
       }),
     ],
   });
   ```

   Optionally, add the config for the linked headings.

   ```ts title="astro.config.mjs" ins={1,2,7,8,9,12-17}
   import { rehypeHeadingIds } from "@astrojs/markdown-remark";
   import rehypeAutolinkHeadings from "rehype-autolink-headings";

   export default defineConfig({
     integrations: [
       starlight({
         markdown: {
           headingLinks: false
         }
       }),
     ],
     markdown: {
       rehypePlugins: [
         rehypeHeadingIds,
         [rehypeAutolinkHeadings, { behavior: "wrap" }],
       ],
     },
   });

## Working locally

1. Install dependencies.

   ```bash
   pnpm install
   ```

2. Start the playground site.

   ```bash
   cd apps/docs
   pnpm dev
   ```

	 Make changes to theme in `packages/theme`.

## Publishing

1. Create a new changeset with the version and message.

	 ```bash
	 pnpm changeset
	 ```

	 Finally, push the changeset to `main` when it's ready.

	 ```bash
	 git push
	 ```

2. Merge the changeset to create a new release and publish the package.
