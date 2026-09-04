# Happy Birthday, Mahal! ≡ƒÄéΓ¥ñ∩╕Å

A premium interactive birthday website ΓÇö built as a personal gift, not a generic template.

**Emotional flow:** Smile ΓåÆ Laugh ΓåÆ Remember ΓåÆ Feel Loved ΓåÆ Get Emotional ΓåÆ Laugh Again Γ£¿

---

## ≡ƒÜÇ Quick Start

```bash
# install
npm install

# develop (http://localhost:5173)
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

No extra setup needed ΓÇö the site works immediately with placeholder photos (Unsplash) and a fallback music track.

---

## ≡ƒÄ¿ Personalize ΓÇö Edit ONE File

Open **`src/config/siteConfig.js`** ΓÇö everything is there:

- **Name / greeting** ΓåÆ `birthday.greeting`, `birthday.subtitle`
- **Messages** ΓåÆ `messages.hero`, `messages.birthdayMessage`, `messages.loveLetter`, `messages.finalMessage`
- **Photos** ΓåÆ `photos[]` ΓÇö add 5, 10, 20+ by duplicating an object
- **Memories** ΓåÆ `memories[]`
- **Timeline** ΓåÆ `timeline[]`
- **Reasons** ΓåÆ `reasons[]`
- **Bading jokes** ΓåÆ `badingMessages[]`
- **Interactive question** ΓåÆ `interactiveQuestion`
- **Music** ΓåÆ `music.source`, `music.volume`
- **Colors / theme** ΓåÆ `theme`
- **Animations** ΓåÆ `animation`

Example ΓÇö add a new floating photo:

```js
{
  id: 7,
  image: "/photos/photo7.jpg",   // put file in public/photos/
  caption: "Our late-night drive ≡ƒîÖ",
  date: "2026 ΓÇó March",
  description: "Wala pang tulog pero ang saya pa rin.",
  x: "42%",
  y: "68%",
  width: "190px",
  height: "240px",
  rotation: "-5deg",
  animationDuration: "7s",
  animationDelay: "0.3s",
  tape: true,        // tape on top
  // polaroid: true  // or polaroid style
}
```

> Do **not** edit components to change content ΓÇö just `siteConfig.js`.

---

## ≡ƒô╕ Photos

```
public/
  photos/
    photo1.jpg
    photo2.jpg
    ...
  music/
    birthday-song.mp3
```

1. Drop your photos into `public/photos/`
2. Reference them as `/photos/photo1.jpg` in `siteConfig.js`
3. Keep under ~800KB, ~600├ù800px recommended

Current placeholders are Unsplash URLs ΓÇö replace when ready.

---

## ≡ƒÄ╡ Music

1. Add `public/music/birthday-song.mp3`
2. Or change `music.source` in config

Browser autoplay is blocked until the user clicks **ΓÇ£Open Your Birthday SurpriseΓÇ¥** ΓÇö then music starts. A floating button lets Mahal play/pause/mute.

If no local file is found, a gentle romantic fallback from CDN is tried.

---

## ≡ƒô▒ Responsive

- **Desktop:** floating polaroids surround the hero content with parallax
- **Mobile:** photos become a horizontal scroll strip ΓÇö no text overlap, reduced motion
- Respects `prefers-reduced-motion`

---

## ≡ƒº⌐ Tech

- React 18 + Vite 5
- Framer Motion (animations)
- Lucide React (icons)
- Modern CSS (glassmorphism, gradients, GPU transforms)

All buttons work. No fake controls. All config options actually affect the site.

---

## ≡ƒÄü Sections Included

Opening cinematic ΓåÆ Hero (ΓÇ£Today is all about youΓÇ¥) ΓåÆ Floating photos ΓåÆ Birthday message ΓåÆ Love letter (envelope) ΓåÆ Bading humor ΓåÆ Memories grid ΓåÆ Timeline ΓåÆ Reasons ΓåÆ Interactive question ΓåÆ Birthday surprise (confetti) ΓåÆ Final emotional message

Made with kabadingan, kakulitan, and so much love. Γ¥ñ∩╕Å

ΓÇö *ΓÇ£I didn't just send you a birthday greeting. I made you an entire little world.ΓÇ¥*
