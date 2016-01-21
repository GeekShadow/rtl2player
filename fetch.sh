#!/bin/bash
date=`date +"%d/%m/%Y"`
minute=`date +"%M"`
hour=`date +"%H"`
cd /var/www/data_rtl2
# Retrieve RTL2 song info page
wget http://www.rtl2.fr/quel-est-ce-titre --post-data 'date='"$date"'&hour='"$hour"'&minute='"$minute"
# Look for song
SONG=$(sed -n '/<h2 class="song-title">.*<\/h2>/s/[^>]*>\([^<]*\)<.*/\1/p' quel-est-ce-titre | head -1)
# and artist
ARTIST=$(sed -n '/<p class="song-artist">.*<\/p>/s/[^>]*>\([^<]*\)<.*/\1/p' quel-est-ce-titre | head -1)
# put both song and artist in text files
echo $SONG > song.txt
echo $ARTIST > artist.txt
# remove temp page
rm quel-est-ce-titre*
