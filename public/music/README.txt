How to add birthday music:

1. Put your MP3 file in this folder as:
   birthday-song.mp3

2. In src/config/siteConfig.js, verify:
   music: {
     enabled: true,
     source: "/music/birthday-song.mp3",
     volume: 0.35
   }

If no local file is found, the site will try a fallback romantic track from CDN.
For best experience, add your own song - e.g., "your song" or a favorite romantic track.

Supported formats: mp3, ogg, wav
Recommended: mp3, 128-192kbps, under 6MB

Note: Browser autoplay is blocked until user clicks "Open Your Birthday Surprise".
