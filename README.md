# Design System CSS

Design System CSS (DSCSS) is an implementation of SDFIs official design guide.
[The design system guide is available on Figma.](https://www.figma.com/file/G9g2vp2MOcejoPB3d1xJvU/Dataforsyningen-Design-System)

The system is a single CSS file and useful accompanying font files that you can embed in your web project for at SDFI branded look and feel.

[Read the documentation here.](https://sdfidk.github.io/design-system-css/)

This repository is meant to be used in tandem with [Design System Icons](https://github.com/SDFIdk/design-system-icons) repo at https://github.com/SDFIdk/design-system-icons

## Usage

### Option 1 - Pack it into your JS/CSS bundle

Presently, you can install DSCSS via NPM and bundle it with with your other frontend assets.

1. Install package
   ```
   npm install --save https://github.com/SDFIdk/design-system-css.git
   ```
2. Import DSCSS
   ```
   import 'design-system-css`
   ```
   Your bundler should accept SASS/SCSS and know how to bundle it properly. 
   You might need to install and setup a loader depending on your build setup.

### Option 2 - Refer assets in HTML `<head>`

Link to `designssytem.css` CSS directly into your HTML's `<head>`.

1. Download [designsystem.css](https://github.com/SDFIdk/design-system-css/blob/main/assets/designsystem.css)
2. Add a `link` element in your HTML `head` that refers to the CSS file:

```
<!doctype html>
<html lang="da">
  <head>
    ...

    <link rel="stylesheet" href="/assets/designsystem.css">

    ...
  </head>
```

## Typography

The Design System assumes you have the "Roboto" and "Source Code Pro" fonts available. If that is not the case you can include the font from [Google Fonts](https://fonts.google.com/) or self host the font files.

Font files are included in [`assets/fonts`](./assets/fonts) along with [`font.css`](./assets/fonts/font.css) file to give you an example on how to use `@font-face` to include font files in CSS.

[The design system guide is available on Figma.](https://www.figma.com/file/G9g2vp2MOcejoPB3d1xJvU/Dataforsyningen-Design-System)

## Acknowlegdements

Design System CSS is heavily inspired by Pico.css

[Pico.css documentation here -> https://picocss.com/docs/](https://picocss.com/docs/)
