# Design System CSS

Design System CSS (DSCSS) is an implementation of SDFIs official design guide.

[The design system guide is available on Figma.](https://www.figma.com/file/G9g2vp2MOcejoPB3d1xJvU/Dataforsyningen-Design-System)
(Requires SDFI login)

The system is a single CSS file and useful accompanying font files that you can embed in your web project for at SDFI branded look and feel.

[Get started with the official documentation here!](https://sdfidk.github.io/design-system-css/)

## Usage

### Option 1 - Bundle with your JS/CSS

Presently, you can install DSCSS via NPM and bundle it with your other frontend assets.

1. Install package
   ```
   npm i --save @dataforsyningen/css
   ```
2. Import DSCSS

   **Javascript**
   ```
   import "@dataforsyningen/css";
   ```
   **CSS**
   ```
   @import "@dataforsyningen/css";
   ```
   Your bundler should accept SASS/SCSS and know how to bundle it properly.
   You might need to install and set up a loader depending on your build setup.

### Option 2 - Refer assets in HTML `<head>`

Link to `designssytem.css` CSS directly into your HTML's `<head>`.

1. Download [designsystem.css](https://github.com/SDFIdk/design-system-css/blob/main/assets/designsystem.css)
2. Add a `link` element in your HTML `head` that refers to the CSS file:

```
<!doctype html>
<html lang="da">
  <head>
    ...

    <link rel="stylesheet" href="/somewhere/designsystem.css">

    ...
  </head>
```

## Typography

The Design System assumes you host the "Roboto" and "Source Code Pro" fonts yourself and have them available in a `./fonts` directory related to the path of your `designsystem.css` file.

So if your CSS file has path `/somewhere/somewhere/designsystem.css`, your font files should be at `/somewhere/somewhere/fonts/`

Font files are included in [`assets/fonts`](./assets/fonts) along with [`font.css`](./assets/fonts/font.css) file to give you an example on how to use `@font-face` to make custom font includes.

Alternatively, you can include the fonts from [Google Fonts](https://fonts.google.com/), but beware of Google using the font files to track users.

## Development

### Build doc site from source

```
npm run build
```
Builds documentation into `index.html` and copies a new version of `designsystem.css` into the `assets` directory.

```
npm run start
```
Opens `index.html` in a Firefox browser (if one is installed).


## Acknowledgements

Design System CSS is heavily inspired by Pico.css

[Pico.css documentation here -> https://picocss.com/docs/](https://picocss.com/docs/)
