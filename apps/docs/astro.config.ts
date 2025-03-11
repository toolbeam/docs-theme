import theme from "toolbeam-docs-theme";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const discord = "https://discord.gg/sst";
const github = "https://github.com/toolbeam/docs-theme";

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		starlight({
			title: "Toolbeam Docs Theme",
			favicon: "/favicon.svg",
			social: {
				github,
				discord,
			},
			editLink: {
				baseUrl: `${github}/edit/master/www/`,
			},
			customCss: [
			],
			sidebar: [
				"guides/install",
				{
					label: "Docs",
					items: ["docs/markdown"],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			plugins: [theme()],
		}),
	],
	markdown: {
		rehypePlugins: [
			rehypeHeadingIds,
			[rehypeAutolinkHeadings, { behavior: "wrap" }],
		],
	},
});
