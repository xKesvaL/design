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

This will import everything that is standard css, so this is only for static things, such as the base (general, reset, etc.). But, you will probably need to use the utilities (media-query for example), and you can import them like this with Vite (recommended) :

```js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
 plugins: [sveltekit()],
 css: {
  preprocessorOptions: {
   scss: {
    additionalData: '@use "node_modules/@kesval/design/scss/utilities" as u;'
   }
  }
 }
});
```

Now you can use the utilies everywhere prefixed with `u.`, for example, `@include u.mq(md) { ...code }`.

## Fonts

Font names are defined in `core/fonts.scss`, but they are not imported. I leave it up to you to import the fonts you need in your project and define the font-faces with the correct font-family name. This is so you choose where you want to import your fonts from (Google Fonts, Self hosted, etc.).

Default fonts are `Rubik` for titles or important things and `Montserrat` for everything else. I recommend you to use 400 and 700 weights for both fonts.

## Ressources

- [Sanitize.css](https://github.com/csstools/sanitize.css)
- [Tailwind CSS](https://tailwindcss.com/)
