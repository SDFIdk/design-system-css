# Design system CSS

This package contains cascading style sheets (CSS) to use in your project for a SDFI branded look and feel.

## Installation

```
// TODO
```

## Usage

### Option 1 - Pack it into your JS/CSS bundle


// TODO

Just make sure your setup accepts CSS and knows how to bundle it properly.

### Option 2 - Refer assets in HTML `<head>`

Link to `mds.css` CSS and various application icons in your HTML's `<head>`.
Assuming all your static files are served on a path named `/assets`, it could look like this:
([`example.html`](example.html) is available for reference.)

```
<!doctype html>
<html lang="da">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=yes">
    <meta name="theme-color" content="#ffffff">

    <!-- Maybe include some fonts -->
    <link rel="stylesheet" href="/assets/fonts/font.css">

    <!-- Favicon and various application icons -->
    <link rel="icon" href="/assets/magenta-favicon.svg">
    <link rel="mask-icon" href="/assets/mask-icon.svg" color="#070707">
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
    <link rel="manifest" href="/assets/manifest.json">

    <!-- CSS -->
    <link rel="stylesheet" href="/assets/mds.css">

    <title>Hej!</title>
  </head>
  <body>
    <header>

      <!-- Logo image in header -->
      <img src="/assets/magenta-logo.svg" alt="Magenta ApS" style="height: 2rem; width: auto;">

    </header>
    <main class="container">

      <!-- Content goes here -->

    </main>
  </body>
</html>
```

## Typography

The Design System assumes you have the "Roboto" and "Source Code Pro" fonts available. If that is not the case you can include the font from [Google Fonts](https://fonts.google.com/) or self host the font files.

Font files are included in [`assets/fonts`](./assets/fonts) along with [`font.css`](./assets/fonts/font.css) file to give you an example on how to use `@font-face` to include font files in CSS.

## Brand logos

The [`assets`](./assets/) directory contains a lot of image files for various branding needs, such as favicons and logo images for light and dark themes.

[The design system guide is available on Figma.](https://www.figma.com/file/G9g2vp2MOcejoPB3d1xJvU/Dataforsyningen-Design-System)

## Acknowlegdements

Design System CSS is based on a customized version of Pico.css

[Pico.css documentation here -> https://picocss.com/docs/](https://picocss.com/docs/)
