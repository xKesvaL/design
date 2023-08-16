# @kesval/design

## Usage

To use this library, install it via npm:

```bash
npm install @kesval/design
```

Then import it in your project:

```js
import '@kesval/design';
```

This will import everything that is standard css, so this is basically everything unstyled, and just basic styling (spacing, typography, etc).

If you want to use the utilities, you can import them separately:

```js
  import '@kesval/design/scss/utilities.scss';
```

Or using SvelteKit with Vite:

```js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
 plugins: [sveltekit()],
 css: {
  preprocessorOptions: {
   scss: {
    additionalData: '@use "node_modules/@kesval/design/scss/utilities" as *;'
   }
  }
 }
});
```

Now, every utility class is available in your project, without having to import them each time. They won't take any space in your bundle, as they are only imported when used.

## Ressources

- [Sanitize.css](https://github.com/csstools/sanitize.css)
- [Tailwind CSS](https://tailwindcss.com/)
