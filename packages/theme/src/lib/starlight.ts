import type { HookParameters } from "@astrojs/starlight/types";
import type { AstroIntegrationLogger } from "astro";

export function overrideComponents(
	starlightConfig: StarlightUserConfig,
	overrides: ComponentOverride[],
	logger: AstroIntegrationLogger,
): StarlightUserConfig["components"] {
	const components = { ...starlightConfig.components };
	for (const override of overrides) {
		const name = typeof override === "string" ? override : override.name;

		if (starlightConfig.components?.[name]) {
			const fallback = `toolbeam-docs-theme/${typeof override === "string" ? "overrides" : "components"}/${typeof override === "string" ? override : override.fallback}.astro`;

			logger.warn(
				`A \`<${name}>\` component override is already defined in your Starlight configuration.`,
			);
			logger.warn(
				`To use \`toolbeam-docs-theme\`, either remove this override or manually render the content from \`${fallback}\`.`,
			);
			continue;
		}
		components[name] = `toolbeam-docs-theme/overrides/${name}.astro`;
	}

	return components;
}

type StarlightUserConfig = HookParameters<"config:setup">["config"];

type ComponentOverride =
	| keyof NonNullable<StarlightUserConfig["components"]>
	| {
			name: keyof NonNullable<StarlightUserConfig["components"]>;
			fallback: string;
	  };
