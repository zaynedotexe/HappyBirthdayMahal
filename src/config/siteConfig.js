// ============================================================
// CENTRAL CONFIGURATION - EDIT EVERYTHING HERE ❤️
// This is the ONLY file you need to personalize the website
// ============================================================

const siteConfig = {
  // --- Basic Info ---
  name: "Mahal",
  nickname: "Bading",
  age: "", // optional, e.g. "22nd"

  // --- Birthday Hero ---
  birthday: {
    greeting: "Happy Birthday, Mahal! 🎂❤️",
    subtitle: "Happy birthday sa pinaka-bading kong mahal! 😭❤️",
    openingMessage: "I made something special for you.",
    heroTitle: "Today is all about you, Mahal. ❤️",
    heroSubtitle: "Happy Birthday! 🎂",
    heroParagraph:
      "On this special day, I just want you to know how incredibly loved you are. Every laugh, every random conversation, every little kakulitan with you has become one of my favorite memories. Today, the whole world celebrates you — pero ako yung pinaka-masaya kasi ikaw yung Mahal ko. ✨",
  },

  // --- Messages ---
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

  // --- Floating Photos ---
  // Add as many as you want. Just duplicate an object!
  // Images should be placed in /public/photos/
  // You can use Unsplash placeholders if you don't have photos yet
  photos: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=60",
      caption: "Our favorite memory ❤️",
      date: "2025 • First gala together",
      description:
        "One of my favorite moments with you. Nothing fancy, just us being us — and it was perfect.",
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
      image:
        "https://images.unsplash.com/photo-1516589177381-26e8a5690151?w=600&auto=format&fit=crop&q=60",
      caption: "Kabadingan era 😭",
      date: "2025",
      description: "Proof that we're both slightly insane. And I love it.",
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
      image:
        "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&auto=format&fit=crop&q=60",
      caption: "Your smile = my favorite view",
      date: "2026 • Random day",
      description: "Automatic +100 happiness whenever you smile like this.",
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
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=60",
      caption: "Simply you. ❤️",
      date: "2026",
      description: "No filter needed. You just glow differently.",
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
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      caption: "More memories to come ✨",
      date: "Today • Your birthday",
      description: "Cheers to all the birthdays we'll celebrate together.",
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
      image:
        "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&auto=format&fit=crop&q=60",
      caption: "My favorite bading 🫵😭",
      date: "2025 • Late night talks",
      description: "3am talks, endless laughs, and you still being bading. Perfect.",
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

  // --- Memories Grid ---
  memories: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=60",
      title: "That Random Day",
      date: "2025 • February",
      description:
        "Nothing special was supposed to happen that day, but somehow it became one of my favorite memories. Because you were there.",
      funnyCaption: "Walang plano, pero naging core memory. 😭",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=60",
      title: "Our Kabadingan Era 😭",
      date: "2025 • Summer",
      description:
        "Proof that we're both slightly insane. From weird voices to endless tawanan — I wouldn't have it any other way.",
      funnyCaption: "Certified bading since day one.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&auto=format&fit=crop&q=60",
      title: "Late Night Talks",
      date: "2025 • Almost every night",
      description:
        "Yung akala mo saglit lang, yun pala 3am na. We can talk about everything and nothing, and it's always the best part of my day.",
      funnyCaption: "Goodnight? More like good morning na. 😭",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1516589177381-26e8a5690151?w=600&auto=format&fit=crop&q=60",
      title: "Your Birthday Last Year",
      date: "2025",
      description:
        "Seeing you happy on your day made me realize how much joy you bring to everyone around you. Lalo na sa akin.",
      funnyCaption: "Still bading, still beautiful. ✨",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&auto=format&fit=crop&q=60",
      title: "The Little Things",
      date: "Every day",
      description:
        "Your random 'kumain ka na?' texts, your silly selfies, your big laugh — all the small things that mean everything to me.",
      funnyCaption: "Small things, big kilig. 🥺",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      title: "Today — Your Day 🎂",
      date: "2026 • Today",
      description:
        "And now we add another chapter. Happy birthday, Mahal. Here's to more adventures, more kulitan, more us.",
      funnyCaption: "Chapter: Bading Year Unlocked 🎉",
    },
  ],

  // --- Timeline ---
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

  // --- Reasons I Love You ---
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

  // --- Bading Humor ---
  badingMessages: [
    "Happy birthday, bading! 😭❤️",
    "Another year of kabadingan unlocked! 🔓😭",
    "Hindi ka na tatanda, mas magiging bading ka lang. 😭✨",
    "My favorite bading ever 🫵😭❤️",
    "Mahal kita kahit bading ka. Charot, MAS mahal kita KASI bading ka! 😭",
    "Salamat sa lahat ng kakulitan natin. More to come! 🫶",
    "More tawanan, more memories, more kabadingan! 🎉",
    "Birthday mo kaya pagbibigyan kita today. Pero bukas bading ka ulit! 😭",
    "Certified bading since birth — and I love it! 😂❤️",
  ],

  // --- Interactive Question ---
  interactiveQuestion: {
    enabled: true,
    question: "Mahal, do you know how much I love you?",
    buttonText: "Yes ❤️",
    wrongAnswer: "Wrong answer. 😭",
    reveal: "Because it's way more than you think. ❤️",
    subReveal: "Infinity pa nga kulang eh. Mahal na mahal kita, sobra sobra. 🥺✨",
  },

  // --- Music ---
  music: {
    enabled: true,
    source: "/music/birthday-song.mp3",
    // fallback if no local file - uses a royalty-free romantic lo-fi via CDN placeholder
    fallback: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-114227.mp3",
    volume: 0.35,
    title: "Our Song ♡",
  },

  // --- Theme ---
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

  // --- Animation ---
  animation: {
    floatingIntensity: 1, // 0.5 = subtle, 1 = normal, 1.5 = more
    enableParallax: true,
    confettiCount: 80,
  },
};

export default siteConfig;
