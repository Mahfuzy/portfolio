/* ─────────────────────────────────────────────────────────────
   Everything the site says lives here.
   Dates, commit counts and stacks are taken from the public repos
   on github.com/Mahfuzy — keep them honest when you update them.
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
      "DreamBoard was supposed to be a Pinterest clone. It turned into my education in auth, databases, media storage and websockets. It's my most-committed repo, and I came back in 2026 to give it a React frontend.",
    evidence: [{ label: "DreamBoard · 53 commits", href: "https://github.com/Mahfuzy/DreamBoard" }],
  },
  {
    n: "四",
    num: "04",
    when: "Feb — Mar 2025",
    title: "The sprint",
    body:
      "ShopNest, a marketplace API. A dashboard for a human-computer interaction course. Then StudyPal: eight Django apps, websockets and an AI study assistant, in thirty-three commits over six days.",
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
    title: "StudyPal",
    kicker: "Case file 01",
    logline: "A study companion that remembers your streak, builds your timetable and answers back.",
    story: [
      "Students don't need another note-taking app. They need something that notices when they've gone quiet for three days. StudyPal combines courses, quizzes, streaks, a timetable and notifications with an AI assistant that replies in real time.",
      "The assistant runs on a websocket through Django Channels and Daphne rather than a request-response loop, so answers stream in as they're written. Anything slow goes to Celery workers backed by Redis, so the API never makes a student wait.",
    ],
    stats: [
      { value: "8", label: "Django apps" },
      { value: "33", label: "commits" },
      { value: "6", label: "days" },
    ],
    stack: ["Django 5", "DRF", "Channels", "Celery", "Redis", "PostgreSQL", "Gemini", "OpenAI", "JWT", "Cloudinary"],
    flow: [
      { label: "Client", note: "React front end" },
      { label: "DRF + JWT", note: "REST, social auth" },
      { label: "Channels", note: "live assistant socket" },
      { label: "Celery · Redis", note: "background jobs" },
      { label: "Gemini / OpenAI", note: "the answers" },
    ],
    modules: ["accounts", "courses", "quizzes", "streaks", "timetable", "notifications", "dashboard", "study_assistant"],
    github: "https://github.com/Mahfuzy/studypal",
    live: "https://studypal-ai.vercel.app/",
  },
  {
    id: "dreamboard",
    title: "DreamBoard",
    kicker: "Case file 02",
    logline: "A Pinterest-style board app where pins, boards and chat all share one API.",
    story: [
      "I built this one to learn, and it shows in the commit log: 53 commits spread over two years. Boards, pins, image uploads to Cloudinary, password resets, filtering, and real-time chat over websockets.",
      "In January 2026 I came back and replaced the Django templates with a React frontend. Revisiting old code was humbling, and it showed me how much I'd learned since.",
    ],
    stats: [
      { value: "53", label: "commits" },
      { value: "2", label: "years in the making" },
      { value: "5", label: "apps" },
    ],
    stack: ["Django 5", "DRF", "Channels", "Redis", "PostgreSQL", "Cloudinary", "React", "Gunicorn"],
    flow: [
      { label: "React", note: "replaced templates, 2026" },
      { label: "DRF + JWT", note: "boards · pins · accounts" },
      { label: "Channels", note: "chat" },
      { label: "PostgreSQL", note: "relations" },
      { label: "Cloudinary", note: "media" },
    ],
    modules: ["accounts", "boards", "pins", "chat", "frontend"],
    github: "https://github.com/Mahfuzy/DreamBoard",
  },
  {
    id: "churn",
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
  { title: "ShopNest", what: "Marketplace API: auth, listings, orders, Swagger docs", stack: "Django · DRF · JWT", year: "2025", href: "https://github.com/Mahfuzy/shopnest" },
  { title: "HCI Dashboard", what: "Course project: protected routes and a mobile sidebar, tuned for contrast", stack: "Next.js · TypeScript", year: "2025", href: "https://github.com/Mahfuzy/hci" },
  { title: "Collabo", what: "Team collaboration app for phones", stack: "Expo · React Native · NativeWind", year: "2025", href: "https://github.com/Mahfuzy/collabo" },
  { title: "MovieHub", what: "Browse and search upcoming films from a live API", stack: "React", year: "2024", href: "https://movie-app-pi-gilt.vercel.app" },
];

export const toolkit = [
  { group: "Daily", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis"] },
  { group: "Often", items: ["TypeScript", "React", "Next.js", "Celery", "Channels / websockets", "Docker", "Linux"] },
  { group: "Learning", items: ["FastAPI", "XGBoost", "Classic ML", "Cloud infrastructure"] },
];
