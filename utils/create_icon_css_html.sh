#!/usr/bin/env bash

# Generates a piece of CSS code that includes all the available SVG icons

echo '/* Icons */' > icons.css
echo ':root {' >> icons.css

for i in ../node_modules/design-system-icons/icons/*.svg; do
  svgstr1=$(cat ${i})
  svgstr2=${svgstr1//black/#3EDDC6}
  svgstr4=$(node convert_svg.js "$svgstr2")
  echo "--${i:42:(-4)}: url('data:image/svg+xml;utf8,${svgstr4}');" >> icons.css
done

echo '}' >> icons.css

for i in ../node_modules/design-system-icons/icons/*.svg; do
  echo ".ds-icon-${i:42:(-4)}::before { background-image: var(--${i:42:(-4)});}" >> icons.css
done

echo "CSS snippet generated in icons.css"


# Generates a piece of HTML code that lists all the available icons

echo '<ul class="ds-grid icon-list">' > icons.html

for i in ../node_modules/design-system-icons/icons/*.svg; do
  echo "<li class=\"icon\"><span class=\"ds-icon-${i:42:(-4)}\"></span><code>&lt;span class=\"ds-icon-${i:42:(-4)}\">&lt;/span></code></li>" >> icons.html
done

echo "</ul>" >> icons.html
echo "HTML snippet generated in icons.html"
