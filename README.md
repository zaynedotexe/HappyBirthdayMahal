# Happy Birthday, Mahal! 🎂❤️

A premium interactive birthday website — built as a personal gift, not a generic template.

**Emotional flow:** Smile → Laugh → Remember → Feel Loved → Get Emotional → Laugh Again ✨

---

## 🚀 Quick Start

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

No extra setup needed — the site works immediately with placeholder photos (Unsplash) and a fallback music track.

---

## 🎨 Personalize — Edit ONE File

Open **`src/config/siteConfig.js`** — everything is there:

- **Name / greeting** → `birthday.greeting`, `birthday.subtitle`
- **Messages** → `messages.hero`, `messages.birthdayMessage`, `messages.loveLetter`, `messages.finalMessage`
- **Photos** → `photos[]` — add 5, 10, 20+ by duplicating an object
- **Memories** → `memories[]`
- **Timeline** → `timeline[]`
- **Reasons** → `reasons[]`
- **Bading jokes** → `badingMessages[]`
- **Interactive question** → `interactiveQuestion`
- **Music** → `music.source`, `music.volume`
- **Colors / theme** → `theme`
- **Animations** → `animation`

Example — add a new floating photo:

```js
{
  id: 7,
  image: "/photos/photo7.jpg",   // put file in public/photos/
  caption: "Our late-night drive 🌙",
  date: "2026 • March",
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

> Do **not** edit components to change content — just `siteConfig.js`.

---

## 📸 Photos

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
3. Keep under ~800KB, ~600×800px recommended

Current placeholders are Unsplash URLs — replace when ready.

---

## 🎵 Music

1. Add `public/music/birthday-song.mp3`
2. Or change `music.source` in config

Browser autoplay is blocked until the user clicks **“Open Your Birthday Surprise”** — then music starts. A floating button lets Mahal play/pause/mute.

If no local file is found, a gentle romantic fallback from CDN is tried.

---

## 📱 Responsive

- **Desktop:** floating polaroids surround the hero content with parallax
- **Mobile:** photos become a horizontal scroll strip — no text overlap, reduced motion
- Respects `prefers-reduced-motion`

---

## 🧩 Tech

- React 18 + Vite 5
- Framer Motion (animations)
- Lucide React (icons)
- Modern CSS (glassmorphism, gradients, GPU transforms)

All buttons work. No fake controls. All config options actually affect the site.

---

## 🎁 Sections Included

Opening cinematic → Hero (“Today is all about you”) → Floating photos → Birthday message → Love letter (envelope) → Bading humor → Memories grid → Timeline → Reasons → Interactive question → Birthday surprise (confetti) → Final emotional message

Made with kabadingan, kakulitan, and so much love. ❤️

— *“I didn't just send you a birthday greeting. I made you an entire little world.”*
