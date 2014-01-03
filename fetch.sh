#!/bin/bash
# Retrieve RTL2 main page
wget http://rtl2.fr
# Look for song
SONG=$(sed -n '/<p class="show">.*<\/p>/s/[^>]*>\([^<]*\)<.*/\1/p' index.html)
# and artist
ARTIST=$(sed -n '/<p class="animateurs">.*<\/p>/s/[^>]*>\([^<]*\)<.*/\1/p' index.html)
# put both song and artist in text files
echo $SONG > song.txt
echo $ARTIST > artist.txt
# remove index.html
rm index.html
