import type { StarlightPlugin } from "@astrojs/starlight/types";
import { overrideComponents } from "./src/lib/starlight";

export default function createPlugin(): StarlightPlugin {
	return {
		name: "toolbeam-docs-theme",
		hooks: {
			"config:setup": ({ config, logger, updateConfig }) => {
				// Update the Starlight config to inject your custom css
				updateConfig({
					components: overrideComponents(
						config,
						["Header", "Footer", "PageTitle"],
						logger,
					),
					pagination: false,
					customCss: [
						"@fontsource/ibm-plex-mono/400.css",
						"@fontsource/ibm-plex-mono/400-italic.css",
						"@fontsource/ibm-plex-mono/500.css",
						"@fontsource/ibm-plex-mono/600.css",
						"@fontsource/ibm-plex-mono/700.css",
						"toolbeam-docs-theme/styles/theme.css",
						"toolbeam-docs-theme/styles/tsdoc.css",
						"toolbeam-docs-theme/styles/markdown.css",
						"toolbeam-docs-theme/styles/headings.css",
						...(config.customCss ?? []),
					],
				});
			},
		},
	};
}
