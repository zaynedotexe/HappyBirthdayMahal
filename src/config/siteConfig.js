const BASE = import.meta.env.BASE_URL || "/"

const siteConfig = {

  name: "Mahal",
  nickname: "Bading",
  age: "",

  birthday: {
    greeting: "Happy Birthday, Mahal! 🎂❤️",
    subtitle: "Happy birthday sa pinaka-bading kong mahal! 😭❤️",
    openingMessage: "I made something special for you.",
    heroTitle: "Today is all about you, Mahal. ❤️",
    heroSubtitle: "Happy Birthday! 🎂",
    heroParagraph:
      "On this special day, I just want you to know how incredibly loved you are. Every laugh, every random conversation, every little kakulitan with you has become one of my favorite memories. Today, the whole world celebrates you — pero ako yung pinaka-masaya kasi ikaw yung Mahal ko. ✨",
  },

  messages: {
    birthdayMessage: {
      title: "A Little Birthday Message For You 💌",
      paragraphs: [
        "Happy birthday, Mahal. I just want you to know how grateful I am that you came into my life. Thank you for all the laughs, kakulitan, random conversations, memories, and all the moments that somehow became special just because they were with you.",
        "I hope your birthday is filled with happiness, love, and everything you deserve. You deserve the softest love, the loudest laughs, and the warmest hugs — lahat yun ibibigay ko sa'yo.",
        "And syempre, sana dumami pa yung kabadingan at kakulitan natin. 😭❤️ More tawanan, more asaran, more memories together. I wouldn't want to do this life with anyone else.",
      ],
    },
    loveLetter: {
      title: "A Letter For My Mahal 💌",
      preview: "I wrote you something. Open it when you're ready...",
      content: [
        "Mahal,",
        "Happy birthday. I don't think I tell you enough how much you mean to me, so let me try here.",
        "Thank you for being you — for your kakulitan that always makes me laugh, for your sweetness that always makes me soft, for your kabadingan that makes every day feel lighter. Life before you was okay, but life with you is so much more colorful, chaotic, and beautiful.",
        "I love the way you laugh, the way you get excited over small things, the way you can turn an ordinary day into a core memory without even trying. You have this magic na kahit pagod ako, isang message mo lang, okay na ulit ako.",
        "On your birthday, my wish for you is simple: May you always feel how loved you are — not just today, but every day. May you chase your dreams nang walang takot, may you laugh until your cheeks hurt, and may you never forget that nandito lang ako, always cheering for you, always loving you.",
        "Thank you for existing, Mahal. Thank you for letting me love you.",
        "Happy birthday, my favorite bading. 😭❤️",
        "Always yours,",
      ],
      signOff: "— Your favorite person 🫶",
    },
    finalMessage: {
      lines: [
        "Happy Birthday, Mahal. ❤️🎂",
        "Thank you for being part of my life.",
        "Thank you for all the memories, laughs, kakulitan,",
        "random moments, and kabadingan.",
        "I hope we make many more memories together.",
      ],
      coda: [
        "Always you. ❤️",
        "Happy Birthday, Bading. 😭❤️",
        "More birthdays.  More memories.  More tawanan.",
        "More kakulitan.  More kabadingan.",
        "I love you, Mahal. ❤️",
      ],
    },
    surprise: {
      title: "HAPPY BIRTHDAY, MAHAL! 🎂❤️",
      subtitle: "I hope you know how loved and appreciated you are.",
      description:
        "You are my favorite hello and my hardest goodbye — pero today, it's all hello, all celebration, all you. Mahal na mahal kita, sobra. Enjoy your day, my love! 🎉",
    },
  },

  photos: [
    {
      id: 1,
      image: BASE + "photos/photo1.jpg",
      caption: "My hijab princess 🥺❤️",
      date: "2026 • First memory",
      description:
        "Ang ganda mo dito, Mahal. Hijab + glasses + that soft smile — simple lang pero you still slay so hard. My favorite pretty girl. 😭✨",
      x: "5%",
      y: "12%",
      width: "200px",
      height: "260px",
      rotation: "-7deg",
      animationDuration: "7.2s",
      animationDelay: "0s",
      borderRadius: "16px",
      tape: true,
    },
    {
      id: 2,
      image: BASE + "photos/photo2.jpg",
      caption: "Certified bading energy 😭🤪",
      date: "2026",
      description:
        "Tongue out, eyes wide, pakiyot faces — your kabadingan is my favorite comedy show. Never change, my favorite bading! 🫶😂",
      x: "78%",
      y: "10%",
      width: "185px",
      height: "240px",
      rotation: "6deg",
      animationDuration: "6.5s",
      animationDelay: "0.7s",
      borderRadius: "16px",
      tape: false,
      polaroid: true,
    },
    {
      id: 3,
      image: BASE + "photos/photo3.jpg",
      caption: "Your pretty wink 🥺✨",
      date: "2026 • Random day",
      description:
        "That soft smile and little wink? Instant kilig. You're so pretty, Mahal, sobra. Automatic +1000 happiness. 😭❤️",
      x: "82%",
      y: "48%",
      width: "175px",
      height: "220px",
      rotation: "-4deg",
      animationDuration: "8s",
      animationDelay: "1.2s",
      borderRadius: "14px",
      tape: true,
    },
    {
      id: 4,
      image: BASE + "photos/photo4.jpg",
      caption: "Simply you, no filter 💖",
      date: "2026",
      description:
        "No filter, no effort — you just glow differently. Natural beauty, Mahal. Ang ganda mo palagi. ✨🥺",
      x: "4%",
      y: "55%",
      width: "190px",
      height: "250px",
      rotation: "5deg",
      animationDuration: "7.8s",
      animationDelay: "0.4s",
      borderRadius: "16px",
      polaroid: true,
    },
    {
      id: 5,
      image: BASE + "photos/photo5.jpg",
      caption: "My glasses cutie 🌟🤓",
      date: "Today • Your birthday",
      description:
        "Glasses on, pout on, starry background — you still shine the brightest. My cutie today and always. Cheers to your birthday! 🎂❤️",
      x: "12%",
      y: "75%",
      width: "170px",
      height: "210px",
      rotation: "-6deg",
      animationDuration: "6.8s",
      animationDelay: "1s",
      borderRadius: "16px",
      tape: true,
    },
    {
      id: 6,
      image: BASE + "photos/photo6.jpg",
      caption: "My cap baddie 😎🫶",
      date: "2026 • Late night talks",
      description:
        "Cap on, pout mode on — still my favorite bading. Late-night starry vibes hit different with you. 3am talks forever? 😭❤️",
      x: "75%",
      y: "76%",
      width: "180px",
      height: "230px",
      rotation: "7deg",
      animationDuration: "7.5s",
      animationDelay: "0.9s",
      borderRadius: "16px",
      tape: false,
    },
  ],

  memories: [
    {
      id: 1,
      image: BASE + "photos/photo1.jpg",
      title: "My hijab princess 🥺❤️",
      date: "2026 • First memory",
      description:
        "Ang ganda mo dito, Mahal. Hijab + glasses + that soft smile — simple lang pero you still slay so hard. My favorite pretty girl.",
      funnyCaption: "Hijab slay, no effort. 😭✨",
    },
    {
      id: 2,
      image: BASE + "photos/photo2.jpg",
      title: "Certified bading energy 😭🤪",
      date: "2026",
      description:
        "Tongue out, eyes wide, pakiyot faces — your kabadingan is my favorite comedy show. Never change, my favorite bading!",
      funnyCaption: "Bading since birth, certified. 😂",
    },
    {
      id: 3,
      image: BASE + "photos/photo3.jpg",
      title: "Your pretty wink 🥺✨",
      date: "2026 • Random day",
      description:
        "That soft smile and little wink? Instant kilig. You're so pretty, Mahal, sobra. Automatic +1000 happiness.",
      funnyCaption: "One wink, I'm done. 🥺",
    },
    {
      id: 4,
      image: BASE + "photos/photo4.jpg",
      title: "Simply you, no filter 💖",
      date: "2026",
      description:
        "No filter, no effort — you just glow differently. Natural beauty, Mahal. Ang ganda mo palagi.",
      funnyCaption: "No filter needed, glow natural. ✨",
    },
    {
      id: 5,
      image: BASE + "photos/photo5.jpg",
      title: "My glasses cutie 🌟🤓",
      date: "Today • Your birthday",
      description:
        "Glasses on, pout on, starry background — you still shine the brightest. My cutie today and always.",
      funnyCaption: "Starry cutie unlocked. 🌟",
    },
    {
      id: 6,
      image: BASE + "photos/photo6.jpg",
      title: "My cap baddie 😎🫶",
      date: "2026 • Late night talks",
      description:
        "Cap on, pout mode on — still my favorite bading. Late-night starry vibes hit different with you.",
      funnyCaption: "Cap on, still pretty. 😎",
    },
  ],

  timeline: [
    {
      year: "2026",
      title: "Where it all started ✨",
      description:
        "First memories, first tawanan, first time I realized you're special.",
      icon: "💫",
    },
    {
      year: "2026",
      title: "More kakulitan & kabadingan 😭",
      description:
        "From late-night calls — we became each other's favorite notification.",
      icon: "😂",
    },
    {
      year: "2026",
      title: "More memories collected 📸",
      description:
        "Every month with you feels like a new favorite chapter. Ang bilis, pero ang saya.",
      icon: "📸",
    },
    {
      year: "Today",
      title: "Your Birthday 🎂❤️",
      description:
        "Today we celebrate YOU — the most amazing, makulit, bading, and lovable Mahal. I love you!",
      icon: "🎂",
      highlight: true,
    },
  ],

  reasons: [
    {
      title: "Your Kakulitan",
      description: "Life would honestly be boring without you. Your energy is contagious.",
      icon: "😜",
      color: "#f43f5e",
    },
    {
      title: "Your Smile",
      description: "Automatic +100 happiness. One smile from you and my day is fixed.",
      icon: "😊",
      color: "#ec4899",
    },
    {
      title: "Your Personality",
      description: "You make ordinary moments feel special just by being there.",
      icon: "✨",
      color: "#a855f7",
    },
    {
      title: "Our Kabadingan",
      description: "Nobody else could match our level of chaos. And I love our chaos.",
      icon: "😭",
      color: "#f59e0b",
    },
    {
      title: "Your Heart",
      description: "The kindest, softest heart. You care so deeply, and it's beautiful.",
      icon: "💖",
      color: "#06b6d4",
    },
    {
      title: "You",
      description: "Simply because you're you. No reason needed. Just you. ❤️",
      icon: "🫶",
      color: "#ef4444",
    },
  ],

  badingMessages: [
    "Happy birthday, bading! 😭❤️",
    "One Month of kabadingan unlocked! 🔓😭",
    "Hindi ka na tatanda, mas magiging bading ka lang. 😭✨",
    "My favorite bading ever 🫵😭❤️",
    "Mahal kita kahit bading ka. Charot, MAS mahal kita KASI bading ka! 😭",
    "Salamat sa lahat ng kakulitan natin. More to come! 🫶",
    "More tawanan, more memories, more kabadingan! 🎉",
    "Birthday mo kaya pagbibigyan kita today. Pero bukas bading ka ulit! 😭",
    "Certified bading since birth — and I love it! 😂❤️",
  ],

  interactiveQuestion: {
    enabled: true,
    question: "Mahal, do you know how much I love you?",
    buttonText: "Yes ❤️",
    wrongAnswer: "Wrong answer. 😭",
    reveal: "Because it's way more than you think. ❤️",
    subReveal: "Infinity pa nga kulang eh. Mahal na mahal kita, sobra sobra. 🥺✨",
  },

  music: {
    enabled: true,
    source: "https://www.youtube.com/watch?v=bD9whtdq7dw",
    youtubeId: "bD9whtdq7dw",
    fallback: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-114227.mp3",
    volume: 0.35,
    title: "Marilag - Dionela ♡",
  },

  theme: {
    primary: "#e11d48",
    primarySoft: "#fff1f2",
    secondary: "#fb7185",
    accent: "#f472b6",
    background: "#fffafb",
    dark: "#1f0a14",
    cream: "#fff7ed",
    rose: "#ffe4e6",
  },

  animation: {
    floatingIntensity: 1,
    enableParallax: true,
    confettiCount: 80,
  },
};

export default siteConfig;
