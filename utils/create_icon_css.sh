#!/usr/bin/env bash

# Generates a piece of CSS code that includes all the available SVG icons

echo '/* Icons */' > icons.css

for i in ../node_modules/design-system-icons/icons/*.svg; do
  echo ".ds-icon-${i:42:(-4)}," >> icons.css
done

echo " {text-indent: -1000rem; background-repeat: no-repeat; background-position: center center; background-color: transparent; background-size: contain; width: 3rem; height: 3rem; display: inline-block;}" >> icons.css

for i in ../node_modules/design-system-icons/icons/*.svg; do
  svgstr1=$(cat ${i})
  svgstr2=$(node convert_svg.js "$svgstr1")
  echo "----"
  echo "yay $svgstr2"
  echo "----"
  echo ".ds-icon-${i:42:(-4)} { background-image: url('data:image/svg+xml;utf8,${svgstr2}')}" >> icons.css
done

echo "CSS snippet generated in icons.css"
