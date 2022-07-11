#!/usr/bin/env bash

# Generates a piece of CSS code that includes all the available SVG logos

echo '/* Logos */' > logos.css

for i in ../assets/logos/*.svg; do
  svgstr1=$(cat ${i})
  svgstr2=$(node convert_svg.js "$svgstr1")
  echo "----"
  echo "yay $svgstr2"
  echo "----"
  echo ".ds-${i:16:(-4)} { background-image: url('data:image/svg+xml;utf8,${svgstr2}')}" >> logos.css
done

echo "CSS snippet generated in logos.css"
