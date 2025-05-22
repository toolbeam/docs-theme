import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import theme from "toolbeam-docs-theme";

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
			social: [
				{ icon: "discord", label: "Discord", href: discord },
				{ icon: "github", label: "GitHub", href: github },
			],
			editLink: {
				baseUrl: `${github}/edit/master/www/`,
			},
			customCss: [],
			markdown: {
				headingLinks: false,
			},
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
			plugins: [
				theme({
					headerLinks: [
						{ name: "Home", url: "/" },
						{ name: "Docs", url: "/docs/" },
						{ name: "Blog", url: "/blog/" },
					],
				}),
			],
		}),
	],
	markdown: {
		rehypePlugins: [
			rehypeHeadingIds,
			[rehypeAutolinkHeadings, { behavior: "wrap" }],
		],
	},
});
