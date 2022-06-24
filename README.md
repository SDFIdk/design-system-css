# Design System CSS

Design System CSS (DSCSS) is an implementation of SDFIs official design guide.
[The design system guide is available on Figma.](https://www.figma.com/file/G9g2vp2MOcejoPB3d1xJvU/Dataforsyningen-Design-System)

The system is a single CSS file and useful accompanying font files that you can embed in your web project for at SDFI branded look and feel.

## Usage

### Option 1 - Pack it into your JS/CSS bundle

Presently, you can install DSCSS via NPM and bundle it with with your other frontend assets.

1. Install package
   `npm install git@github.com:SDFIdk/design-system-css.git`
   Note that you'll need proper access to the Github repo. 
2. Import DSCSS
   `import 'design-system-css`
   Your bundler should accept ASS/SCSS and knows how to bundle it properly. You might need to install and setup a loader depending on your build setup.

### Option 2 - Refer assets in HTML `<head>`

Link to `designssytem.css` CSS directly into your HTML's `<head>`.


```
<!doctype html>
<html lang="da">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=yes">

    <!-- Maybe include some fonts -->
    <link rel="stylesheet" href="/assets/fonts/font.css">

    <!-- CSS -->
    <link rel="stylesheet" href="/assets/designsystem.css">

    <title>Example</title>
  </head>
  <body>

      <!-- Content goes here -->

  </body>
</html>
```

## Typography

The Design System assumes you have the "Roboto" and "Source Code Pro" fonts available. If that is not the case you can include the font from [Google Fonts](https://fonts.google.com/) or self host the font files.

Font files are included in [`assets/fonts`](./assets/fonts) along with [`font.css`](./assets/fonts/font.css) file to give you an example on how to use `@font-face` to include font files in CSS.

[The design system guide is available on Figma.](https://www.figma.com/file/G9g2vp2MOcejoPB3d1xJvU/Dataforsyningen-Design-System)

## Acknowlegdements

Design System CSS is based on a customized version of Pico.css

[Pico.css documentation here -> https://picocss.com/docs/](https://picocss.com/docs/)
