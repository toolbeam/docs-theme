<h1 align="center">
  Toolbeam Docs Theme
</h1>

## Usage

1. Install the theme package to your project with your preferred package manager:

```sh
npm install toolbeam-docs-theme
```

2. Add the theme to your Starlight config.

```ts
import theme from "toolbeam-docs-theme"

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        theme()
      ]
    })
  ]
})
```
