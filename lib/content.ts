/* ─────────────────────────────────────────────────────────────
   Everything the home page says lives here.
   Dates, commit counts and stacks are taken from the repos on
   github.com/Mahfuzy (private ones included, read but never linked).
   Keep them honest when you update them.
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
  /** Leave href off for private repos: the label is shown as plain text. */
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
      "DreamBoard was supposed to be a Pinterest clone. It turned into my education in auth, databases, media storage and websockets. The first deploy took nine commits, and the last three are just “taaaaahhh”.",
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
    when: "Apr — May 2025",
    title: "Bigger ideas",
    body:
      "Twish was the biggest data model I'd tried: donations, a marketplace with Paystack, KYC, projects and chat in one Django backend. Weeks later I joined a team build and wrote SafeChain's Solidity contracts, which put government project budgets on-chain.",
    evidence: [
      { label: "Twish · private repo" },
      { label: "SafeChain", href: "https://github.com/Blockbridge-Network/Team-SafeChain" },
    ],
  },
  {
    n: "六",
    num: "06",
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
    n: "七",
    num: "07",
    when: "Nov 2025 → now",
    title: "Co-founding UniLoomy",
    body:
      "UniLoomy's first deploy commits are “please work” and “finally”. Ten months and 415 of my commits later, it's a campus platform for Ghanaian students with a feed, an AI tutor, messaging and a marketplace with escrow, and I lead its backend.",
    evidence: [
      { label: "uniloomy.com", href: "https://uniloomy.com" },
      { label: "415 commits · private repo" },
    ],
  },
  {
    n: "八",
    num: "08",
    when: "Dec 2025 — Jul 2026",
    title: "Building for someone else",
    body:
      "A website for a pharmacy in Yendi, built in the last two days of 2025. Visibl, which checks whether AI assistants recommend a local business. And Pinnacle Loans, a lending platform for a client: 88 commits, 83 of them in the first thirteen days.",
    evidence: [
      { label: "Hill Down Pharmacy", href: "https://hdp-eight.vercel.app" },
      { label: "Visibl", href: "https://visibl-psi.vercel.app" },
      { label: "Pinnacle Loans · private repo" },
    ],
  },
  {
    n: "九",
    num: "09",
    when: "May — Sep 2026",
    title: "Final year",
    body:
      "My final-year project marks a thesis against KNUST's own rubric, has to quote its evidence, and sends every mark to a verifier. Now I'm finishing the degree, and I'm open to a job or a freelance project for the next volume.",
    evidence: [
      { label: "Thesis Assessor", href: "https://github.com/lifewkhissys-prog/FINAL-YEAR-PROJECT-123" },
      { label: "github.com/Mahfuzy", href: "https://github.com/Mahfuzy" },
    ],
  },
];

export type CaseFile = {
  id: string;
  slug: string;
  title: string;
  role: string;
  logline: string;
  story: string[];
  stats: { value: string; label: string }[];
  stack: string[];
  flow: { label: string; note: string }[];
  modules?: string[];
  /** Omitted for private repositories. */
  github?: string;
  live?: string;
  liveNote?: string;
};

export const caseFiles: CaseFile[] = [
  {
    id: "uniloomy",
    slug: "uniloomy",
    title: "UniLoomy",
    role: "Co-founder · backend lead",
    logline: "A campus platform for Ghanaian students: a feed, study tools, messaging and a marketplace with escrow.",
    story: [
      "I co-founded UniLoomy and lead its backend. The repo's first deploy commit is called “please work”. Ten months and 415 of its 418 commits later, it's a FastAPI service with fifteen modules behind a mobile app and an admin dashboard.",
      "Feeds that downrank what you've already seen, an AI tutor, 1:1 messaging over websockets, Looms rewards, and a marketplace where Moolre mobile-money payments wait in escrow until the buyer hands over a release code. Background work runs on Celery, search on pgvector, and deploys go through a self-hosted CI runner that runs the tests first.",
    ],
    stats: [
      { value: "415", label: "of 418 commits" },
      { value: "66", label: "migrations" },
      { value: "15", label: "API modules" },
    ],
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL + pgvector", "Celery", "Valkey", "Docker", "Nginx", "Sentry", "Grafana · Loki · k6"],
    flow: [
      { label: "Mobile app", note: "+ Next.js admin" },
      { label: "FastAPI", note: "15 async modules" },
      { label: "PostgreSQL", note: "pgvector search" },
      { label: "Celery + Valkey", note: "feeds · media · push" },
      { label: "Moolre", note: "mobile-money escrow" },
    ],
    modules: ["auth", "user", "university", "post", "uniclip", "story", "anonymous", "chat", "studyhub", "looms", "marketplace", "news", "explore", "notifications", "admin"],
    live: "https://uniloomy.com",
  },
  {
    id: "pinnacle",
    slug: "pinnacle-loans",
    title: "Pinnacle Loans",
    role: "Client project · sole developer",
    logline: "A lending platform for a Ghanaian lender, from loan application to the last repayment.",
    story: [
      "Client work, and all 88 commits are mine: a FastAPI backend and a React PWA with a borrower side and an admin side. Borrowers apply through a step-by-step wizard with Ghana Card verification, sign their agreement on screen and submit repayments.",
      "Admins approve loans and repayments, set rates and penalties from settings, and can trace every action in an audit log. Balances use Decimal, overdue loans pick up weekly penalties on a schedule, and borrowers hear about every change by SMS and push notification.",
    ],
    stats: [
      { value: "88", label: "commits, all mine" },
      { value: "83", label: "in the first 13 days" },
      { value: "11", label: "backend services" },
    ],
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "APScheduler", "WeasyPrint", "React + Vite", "TanStack Query", "PWA"],
    flow: [
      { label: "Borrower + admin", note: "one React PWA" },
      { label: "FastAPI", note: "11 services" },
      { label: "PostgreSQL", note: "Decimal balances · audit log" },
      { label: "APScheduler", note: "penalties · overdue checks" },
      { label: "SMS + push", note: "every status change" },
    ],
    modules: ["loan", "auth", "otp", "audit", "automation", "scheduler", "pdf", "sms", "push_notification_service", "notification_service", "storage"],
  },
  {
    id: "thesis",
    slug: "thesis-assessor",
    title: "Thesis Assessor",
    role: "Final-year project · KNUST",
    logline: "AI that marks a thesis against the university's rubric, and has to quote its evidence.",
    story: [
      "Ask one language model to mark a thesis and you get confident, invented justifications. My final-year project splits the job into a ten-stage pipeline: parse the document, check compliance, gather quoted evidence chapter by chapter, score against KNUST's rubric, then send every score to a separate verifier.",
      "Most of the work was making that hold up on a rate limit. It fits inside 8,000 tokens a minute, falls back through a list of models when a quota runs out, and raises an error rather than invent a mark for a criterion it couldn't score.",
    ],
    stats: [
      { value: "101", label: "of 103 commits" },
      { value: "68", label: "commits in August" },
      { value: "10", label: "pipeline stages" },
    ],
    stack: ["FastAPI", "SQLAlchemy", "React + Vite", "Groq", "Llama 3.2 Vision", "OpenAlex", "Cloudinary", "Docker"],
    flow: [
      { label: ".docx / PDF", note: "thesis_parser" },
      { label: "Evidence agent", note: "quotes per criterion" },
      { label: "Scoring", note: "KNUST rubric" },
      { label: "Verifier", note: "audits each score" },
      { label: "Report", note: "Word export" },
    ],
    modules: ["agent_pipeline", "thesis_parser", "compliance_check", "grading_scale", "plagiarism_service", "vision_service", "docx_exporter"],
    github: "https://github.com/lifewkhissys-prog/FINAL-YEAR-PROJECT-123",
    live: "https://final-year-project-123.vercel.app",
    liveNote: "The live app opens on a lecturer login.",
  },
];

export type MoreChapter = { slug: string; title: string; what: string; stack: string; year: string };

export const moreChapters: { vol: 2 | 3; jp: string; label: string; note: string; items: MoreChapter[] }[] = [
  {
    vol: 2,
    jp: "本編",
    label: "Also in the main story",
    note: "A client site, a product experiment, a team build and my biggest Django backend.",
    items: [
      { slug: "visibl", title: "Visibl", what: "Asks AI assistants about a local business and scores how often it comes up", stack: "FastAPI · React", year: "2026" },
      { slug: "hill-down-pharmacy", title: "Hill Down Pharmacy", what: "A website for a community pharmacy in Yendi", stack: "Next.js 16 · shadcn/ui", year: "2025" },
      { slug: "safechain", title: "SafeChain", what: "Government project budgets on-chain. I wrote the contracts and the DApp", stack: "Solidity · Next.js · ethers.js", year: "2025" },
      { slug: "twish", title: "Twish", what: "Donations, a marketplace, KYC and chat in one Django backend", stack: "Django · Channels · Paystack", year: "2025" },
    ],
  },
  {
    vol: 3,
    jp: "修行編",
    label: "Training arc",
    note: "The builds I learned on, in the order I started them.",
    items: [
      { slug: "moviehub", title: "MovieHub", what: "Browse films and TV from TMDB, rebuilt twice since 2024", stack: "React · Tailwind", year: "2024–26" },
      { slug: "dreamboard", title: "DreamBoard", what: "Pinterest-style boards, pins and chat. My education in backends", stack: "Django · Channels", year: "2024–26" },
      { slug: "shopnest", title: "ShopNest", what: "Marketplace API: products, carts, orders, payments, SMS via Hubtel", stack: "Django · DRF · JWT", year: "2025" },
      { slug: "hci-dashboard", title: "HCI Dashboard", what: "Mood-tracker dashboard: journal, reflections, a sidebar that works on phones", stack: "Next.js · TypeScript", year: "2025" },
      { slug: "studypal", title: "StudyPal", what: "Study companion API with streaks and an AI assistant on a websocket", stack: "Django · Channels · Gemini", year: "2025" },
      { slug: "churnpredictor", title: "ChurnPredictor", what: "An XGBoost churn model that drafts a retention plan with an LLM", stack: "Python · XGBoost · Streamlit", year: "2025" },
      { slug: "collabo", title: "Collabo", what: "Find collaborators, pitch projects, ask to join", stack: "Expo · React Native · NativeWind", year: "2025" },
    ],
  },
];

export const toolkit = [
  { group: "Daily", items: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy + Alembic", "Redis / Valkey", "Docker"] },
  { group: "Often", items: ["Django + DRF", "Celery", "Websockets", "TypeScript", "React", "Next.js", "Nginx + CI on Linux"] },
  { group: "Learning", items: ["pgvector + embeddings", "Grafana · Loki · k6", "Classic ML", "Solidity"] },
];
