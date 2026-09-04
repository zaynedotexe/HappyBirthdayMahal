How to add your photos:

1. Put your JPG/PNG files in this folder, e.g.:
   photo1.jpg
   photo2.jpg
   photo3.jpg
   ...

2. Open src/config/siteConfig.js

3. In the `photos` array, update the `image` field for each photo:
   image: "/photos/photo1.jpg"

   You can add as many as you want - just duplicate an object.

4. Same for `memories` - update image paths there too.

Current photos use Unsplash placeholders so the site works immediately.
Replace them with your own for the personal touch!

Tips:
- Use square or 4:5 portrait photos for best floating effect
- Keep file size under 800KB for fast loading
- Recommended dimensions: 600x800px or similar
