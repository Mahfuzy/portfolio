/* ─────────────────────────────────────────────────────────────
   Everything the home page says lives here.
   Dates, commit counts and stacks are taken from the public repos
   on github.com/Mahfuzy — keep them honest when you update them.
   Per-project chapter pages live in lib/projects.ts.
   ───────────────────────────────────────────────────────────── */

export const person = {
  name: "Mahfuz Seidu Agbor",
  short: "Mahfuz",
  katakana: "マフズ",
  role: "Backend developer",
  place: "Ghana",
  email: "mahfuzagbor@gmail.com",
  links: {
    github: "https://github.com/Mahfuzy",
    linkedin: "https://www.linkedin.com/in/agbor-seidu-mahfuz-b98398288",
    x: "https://twitter.com/MahfuzSeidu",
  },
};

export type Chapter = {
  n: string; // kanji numeral
  num: string;
  when: string;
  title: string;
  body: string;
  evidence: { label: string; href?: string }[];
};

export const chapters: Chapter[] = [
  {
    n: "一",
    num: "01",
    when: "April 2023",
    title: "A pricing card",
    body:
      "It started with Frontend Mentor challenges: a pricing card, then a perfume product card. Plain HTML and CSS. I'd push them and stare at my screen, surprised that something I typed worked in a browser.",
    evidence: [
      { label: "Pricing card challenge", href: "https://github.com/Mahfuzy/Pricing.card.frontendmentor.challenge" },
      { label: "Perfume-preview-card", href: "https://github.com/Mahfuzy/Perfume-preview-card-component-challenge" },
    ],
  },
  {
    n: "二",
    num: "02",
    when: "Dec 2023 — May 2024",
    title: "Three sites in one month",
    body:
      "In December I shipped three small sites in under four weeks, just to prove I could finish things. By May I'd moved on to React and built MovieHub, my first app that talked to a real API.",
    evidence: [
      { label: "Dori-codes × 3", href: "https://github.com/Mahfuzy/Dori-codes-project" },
      { label: "MovieHub — live", href: "https://movie-app-pi-gilt.vercel.app" },
    ],
  },
  {
    n: "三",
    num: "03",
    when: "July 2024",
    title: "Crossing to the backend",
    body:
      "DreamBoard was supposed to be a Pinterest clone. It turned into my education in auth, databases, media storage and websockets. It's still my most-committed repo, and in 2026 it got a React frontend.",
    evidence: [{ label: "DreamBoard · 53 commits", href: "https://github.com/Mahfuzy/DreamBoard" }],
  },
  {
    n: "四",
    num: "04",
    when: "Feb — Mar 2025",
    title: "The sprint",
    body:
      "ShopNest, a marketplace API. A mood-tracker dashboard for a human-computer interaction project. Then StudyPal: eight Django apps, websockets and an AI study assistant, in thirty-three commits over six days.",
    evidence: [
      { label: "ShopNest", href: "https://github.com/Mahfuzy/shopnest" },
      { label: "StudyPal · 33 commits / 6 days", href: "https://github.com/Mahfuzy/studypal" },
    ],
  },
  {
    n: "五",
    num: "05",
    when: "May — Jul 2025",
    title: "Teaching machines",
    body:
      "I wanted to know what the models underneath the AI APIs actually do, so I trained one. ChurnPredictor uses XGBoost to flag bank customers who are about to leave, then asks an LLM what to do about it. Then I tried mobile with Collabo.",
    evidence: [
      { label: "ChurnPredictor", href: "https://github.com/Mahfuzy/churn_predictor" },
      { label: "Collabo", href: "https://github.com/Mahfuzy/collabo" },
    ],
  },
  {
    n: "六",
    num: "06",
    when: "Now — 2026",
    title: "Final year",
    body:
      "I'm in the last year of my Computer Science degree. I'm working through classic ML properly, going deeper on cloud infrastructure, and looking for the team I'll write the next chapter with.",
    evidence: [{ label: "github.com/Mahfuzy", href: "https://github.com/Mahfuzy" }],
  },
];

export type CaseFile = {
  id: string;
  slug: string;
  title: string;
  kicker: string;
  logline: string;
  story: string[];
  stats: { value: string; label: string }[];
  stack: string[];
  flow: { label: string; note: string }[];
  modules?: string[];
  github: string;
  live?: string;
  liveNote?: string;
};

export const caseFiles: CaseFile[] = [
  {
    id: "studypal",
    slug: "studypal",
    title: "StudyPal",
    kicker: "Case file 01",
    logline: "A study companion that remembers your streak, builds your timetable and answers back.",
    story: [
      "Students don't need another note-taking app. They need something that notices when they've gone quiet for three days. StudyPal's API covers courses, quizzes, streaks and XP, a timetable, notifications, and an AI study assistant called Tae.",
      "Tae lives on a websocket served by Django Channels and Daphne, so a conversation stays open instead of polling, capped at 30 messages a minute. Background jobs are written for Celery, but for the deployed version I switched the Redis layer off to keep hosting simple.",
    ],
    stats: [
      { value: "8", label: "Django apps" },
      { value: "33", label: "commits" },
      { value: "6", label: "days" },
    ],
    stack: ["Django 5", "DRF", "Channels", "Daphne", "Celery", "PostgreSQL", "Gemini 2.0 Flash", "JWT", "Cloudinary"],
    flow: [
      { label: "Client", note: "web front end" },
      { label: "DRF + JWT", note: "REST, social auth" },
      { label: "Daphne · Channels", note: "Tae's websocket" },
      { label: "Gemini 2.0 Flash", note: "the answers" },
    ],
    modules: ["accounts", "courses", "quizzes", "streaks", "timetable", "notifications", "dashboard", "study_assistant"],
    github: "https://github.com/Mahfuzy/studypal",
    live: "https://studypal-ai.vercel.app/",
  },
  {
    id: "dreamboard",
    slug: "dreamboard",
    title: "DreamBoard",
    kicker: "Case file 02",
    logline: "A Pinterest-style board app where pins, boards and chat all share one API.",
    story: [
      "I built this one to learn, and it shows in the commit log: 53 commits across 18 months. Boards, pins, image uploads to Cloudinary, followers, filtering, and group and direct chat over websockets.",
      "In January 2026 I came back with an AI coding agent and merged two pull requests from its codex/ branches: first a set of Django templates, then a React and Vite frontend that replaced them the same evening.",
    ],
    stats: [
      { value: "53", label: "commits" },
      { value: "18", label: "months, first to last" },
      { value: "5", label: "apps" },
    ],
    stack: ["Django 5", "DRF", "Channels", "Redis", "PostgreSQL", "Cloudinary", "React", "Gunicorn"],
    flow: [
      { label: "React", note: "replaced templates, 2026" },
      { label: "DRF + JWT", note: "boards · pins · accounts" },
      { label: "Channels", note: "group + direct chat" },
      { label: "PostgreSQL", note: "relations" },
      { label: "Cloudinary", note: "media" },
    ],
    modules: ["accounts", "boards", "pins", "chat", "frontend"],
    github: "https://github.com/Mahfuzy/DreamBoard",
  },
  {
    id: "churn",
    slug: "churnpredictor",
    title: "ChurnPredictor",
    kicker: "Case file 03",
    logline: "Predicts which bank customers are about to leave, then drafts a plan to keep them.",
    story: [
      "Customers who leave are rare in the data, so a naive model learns to predict that nobody leaves. I balanced the classes with SMOTE, scaled the features and trained an XGBoost classifier. Then I passed each prediction to an LLM through Groq so a banker gets a retention plan along with the probability.",
    ],
    stats: [
      { value: "XGB", label: "classifier" },
      { value: "SMOTE", label: "class balance" },
    ],
    stack: ["Python", "XGBoost", "scikit-learn", "SMOTE", "Streamlit", "Groq"],
    flow: [
      { label: "Customer row", note: "credit, tenure, balance…" },
      { label: "Scaler", note: "joblib" },
      { label: "XGBoost", note: "churn probability" },
      { label: "Groq LLM", note: "retention strategy" },
    ],
    github: "https://github.com/Mahfuzy/churn_predictor",
    live: "https://churnpredictor-jlg8rzvny2tncdnxzqsrbt.streamlit.app/",
    liveNote: "Hosted on Streamlit Community Cloud. It sleeps when idle, so give it a few seconds to wake up.",
  },
];

export const sideQuests = [
  { slug: "moviehub", title: "MovieHub", what: "Browse films and TV from TMDB, rebuilt twice since 2024", stack: "React · Tailwind", year: "2024–26" },
  { slug: "shopnest", title: "ShopNest", what: "Marketplace API: products, carts, orders, payments, SMS via Hubtel", stack: "Django · DRF · JWT", year: "2025" },
  { slug: "hci-dashboard", title: "HCI Dashboard", what: "Mood-tracker dashboard: journal, reflections, a sidebar that works on phones", stack: "Next.js · TypeScript", year: "2025" },
  { slug: "collabo", title: "Collabo", what: "Find collaborators, pitch projects, ask to join", stack: "Expo · React Native · NativeWind", year: "2025" },
];

export const toolkit = [
  { group: "Daily", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis"] },
  { group: "Often", items: ["TypeScript", "React", "Next.js", "Celery", "Channels / websockets", "Docker", "Linux"] },
  { group: "Learning", items: ["FastAPI", "XGBoost", "Classic ML", "Cloud infrastructure"] },
];
