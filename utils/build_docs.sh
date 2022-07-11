#!/usr/bin/env bash

# Builds an index.html file with the documentation

cat src/docs/layout/header.html src/docs/content/*.html src/docs/layout/footer.html > index.html