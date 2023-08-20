# @kesval/design

- [@kesval/design](#kesvaldesign)
  - [Motivation](#motivation)
    - [Semantics ?](#semantics-)
    - [Classes](#classes)
  - [Usage](#usage)
  - [Why is `X` not included ?](#why-is-x-not-included-)
  - [Fonts](#fonts)
  - [Animations](#animations)
  - [Ressources](#ressources)

## Motivation

Why'd I make this ? I need something to style my projects, and that's consistent across all of them. Now, there's cool libraries out there that could help me do that but I never really liked them. This library aims to be very accessible by using semantics a lot, and also wants to be easy to use, without ever over styling something so it can be modified in the final project.

You should never need to use more than one class on an element, and if you do, it's for very specific things, such as an outline primary button, which would be `<button class="primary outline">`. Otherwise, everything should be as clear as day in your classes.

### Semantics ?

Yes. For example, if you want to create a card, you wouldn't do something like this :

```html
<div class="card">
  <div class="card-header">
    header content
  </div>
  <div class="card-content">
    card content
  </div>
  <div class="card-footer">
    card footer
  </div>
</div>
```

This is not semantic, nor accessible, and it's not always easy to remember what class to use. With my package, you would instead do this :

```html
<div class="card">
  <header>
    header content
  </header>
  <section>
    card content
  </section>
  <footer>
    something footer
  </footer>
</div> 
```

As you can see, it requires only one class and the rest is pure HTML. This also forces you to use the correct HTML tags, which is good for accessibility.

### Classes

Classes are still available to use if you want to style something specific. For example, you most likely would sometimes want a button that is a link, and I won't link the button component to the `a` tag. So how do you do it ? Well, for every component, its name is also a class. So if you want a button that is a link, you would do this :

```html
<a class="button" href="#">Link button</button>
```

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

## Why is `X` not included ?

I want to keep the package lightweight and only include things that I use in every project. Everything else that I need that, for example, requires JavaScript (such as a dropdown), I will have in my [SvelteKit Starter](https://github.com/xKesvaL/starter-svelte). You might want to check it out, everything is already set up for you. Even internationalization.

## Fonts

Font names are defined in `utilities/typography.scss`, but they are not imported. I leave it up to you to import the fonts you need in your project and define the font-faces with the correct font-family name. This is so you choose where you want to import your fonts from (Google Fonts, Self hosted, etc.).

Default fonts are `Benzin` for titles or important things and default ui font for everything else. In this package, I only use 700 for `Benzin` and 400, 500 and 700 for the default ui font.

## Animations

A lot of components have animations that are turned on by default. If for some reason you want to turn them off, just add the clas `no-anim` to the component. I recommend you keep them on since they're not intrusive and they make the website feel more alive.

## Ressources

- [Sanitize.css](https://github.com/csstools/sanitize.css)
- [Tailwind CSS](https://tailwindcss.com/)
