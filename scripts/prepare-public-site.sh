#!/bin/sh
set -eu

output="${1:-_site}"
rm -rf "$output"
mkdir -p "$output"
cp -R apps/public-site/. "$output/"

for directory in \
  brain \
  counter-estore \
  counter-foundation \
  counter \
  dashboard \
  effort \
  entry \
  movement-engine \
  protocol-engine \
  table-estore \
  table-systems \
  table \
  vault
do
  cp -R "$directory" "$output/$directory"
done

for file in \
  description-28.csv \
  donor.html \
  ecosystem.html \
  identity-law.html \
  motion.js \
  pol-cin.html \
  pol-mot.html \
  story.html \
  style.css
do
  cp "$file" "$output/$file"
done
