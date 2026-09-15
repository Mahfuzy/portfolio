/* ─────────────────────────────────────────────────────────────
   Vols. 02 and 03: one chapter page per project.
   Commit messages and code excerpts are copied verbatim from the
   repos (long commit messages are cut with "…").
   Private repos (UniLoomy, Pinnacle Loans, Visibl, Hill Down
   Pharmacy, Twish) get the story, stats and screenshots only:
   no `github` link and no `code`.
   Screenshots were captured from the live sites in Sep 2026.
   ───────────────────────────────────────────────────────────── */

import { chapterIndex, type VolumeNo } from "./chapters";

export type Beat = {
  when: string;
  title: string;
  body: string;
  commits: { msg: string; times?: number }[];
  /** Label for the log panel; defaults to "git log, verbatim". Use it when the lines aren't commit messages. */
  logLabel?: string;
  sfx?: string;
};

export type CodeExcerpt = {
  path: string;
  start: number;
  code: string;
  caption: string;
};

export type Project = {
  slug: string;
  vol: VolumeNo;
  num: string;
  kanji: string;
  title: string;
  years: string;
  role?: string;
  client?: string;
  logline: string;
  intro: string[];
  note?: string;
  stats: { value: string; label: string }[];
  stack: string[];
  /** Omitted for private repositories. */
  github?: string;
  live?: string;
  /** Button text for `live`; defaults to "Live", or "Demo" when there's a liveNote. */
  liveLabel?: string;
  liveNote?: string;
  shot?: { desktop: string; width?: number; height?: number; phone?: string; alt: string; caption: string };
  commitCount: number;
  beats: Beat[];
  flow?: { label: string; note: string }[];
  modules?: string[];
  code?: CodeExcerpt[];
  lookingBack?: string;
};

type ProjectBody = Omit<Project, "vol" | "num" | "kanji" | "title">;

const bodies: Record<string, ProjectBody> = {
  /* ── Vol. 02 · The main story ─────────────────────────────── */

  uniloomy: {
    slug: "uniloomy",
    years: "Nov 2025 → now",
    role: "Co-founder · backend lead",
    logline: "A campus platform where Ghanaian students connect, study and earn. I built the backend.",
    intro: [
      "UniLoomy is a campus super-app: a feed and short videos called UniClips, anonymous posts, campus news, direct messages, an AI tutor with flashcards and practice tests, a rewards system called Looms, and a student marketplace where payments sit in mobile-money escrow until the buyer has the item.",
      "I co-founded it and lead the backend. 415 of the repo's 418 commits are mine: a FastAPI service split into fifteen modules, a Next.js admin dashboard, and the Docker, CI and monitoring setup behind production and staging.",
    ],
    note: "The repository is private, so this chapter has no code and no source link. The architecture and the commit messages come straight from it.",
    stats: [
      { value: "415", label: "of 418 commits" },
      { value: "66", label: "database migrations" },
      { value: "15", label: "API modules" },
      { value: "28", label: "test files" },
      { value: "109", label: "commits in July 2026" },
    ],
    stack: [
      "FastAPI",
      "Python 3.13",
      "SQLAlchemy (async)",
      "asyncpg",
      "Alembic",
      "PostgreSQL + pgvector",
      "Valkey",
      "Celery + Beat",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Sentry",
      "Grafana · Loki · k6",
      "Cloudflare R2",
      "Moolre",
      "Groq",
      "Next.js (admin)",
    ],
    live: "https://uniloomy.com",
    shot: {
      desktop: "/work/uniloomy.webp",
      phone: "/work/uniloomy-m.webp",
      alt: "UniLoomy landing page reading The Complete Platform for Modern Students, with phones showing the Study Hub and the campus feed",
      caption: "uniloomy.com · landing page by a teammate, the app behind it runs on this backend · Sep 2026",
    },
    commitCount: 418,
    beats: [
      {
        when: "9 — 10 Nov 2025",
        title: "Deploy day, sixteen months later",
        body: "The repo's first two days are Docker and deployment settings. DreamBoard's deploy day ended in “taaaaahhhhhhh”. This one got to “finally”, then seven more commits and a sign-off.",
        sfx: "please work",
        commits: [
          { msg: "added prod conf for docker" },
          { msg: "updated docker settings for prod" },
          { msg: "made changes for deployment" },
          { msg: "please work" },
          { msg: "new update for docker" },
          { msg: "fixed" },
          { msg: "finally" },
          { msg: "another fix" },
          { msg: "big update" },
          { msg: "final changes for today" },
        ],
      },
      {
        when: "22 Nov 2025 — Jan 2026",
        title: "The foundation",
        body: "Registration with OTP, student verification, and the university → college → department → program tree everything else hangs off. On 24 November the same schema commit went in six times, spelled five different ways. In January every test in the repo was deleted to move faster.",
        commits: [
          { msg: "feat: implement initial authentication API with user registration, OTP verification, and secure token management." },
          { msg: "feat: Add Pydantic schemas for University, College, Department, and Program entities.", times: 2 },
          { msg: "feat: add Pydantic schemas for university, college, department, and program entities" },
          { msg: "feat(schemas): add Pydantic schemas for university, college, department, and program entities" },
          { msg: "refactor: remove all existing unit, integration, and e2e tests" },
        ],
      },
      {
        when: "Jan — Mar 2026",
        title: "What students open it for",
        body: "Ranked feeds for posts and UniClips that track what you've already seen, an AI tutor and flashcards, 1:1 messaging over websockets, and Looms: points for daily check-ins, streaks and referrals.",
        commits: [
          { msg: "added uniclips and posts feed algorithms" },
          { msg: "feat: Add impression tracking for posts and uniclips, including new database tables and integration into feed APIs." },
          { msg: "feat: add AI-powered flashcard generation with document parsing for various file types and associated database models." },
          { msg: "feat: Implement 1-1 direct messaging with a new chat module, API, WebSocket integration, and database migrations." },
          { msg: "feat: implement comprehensive Looms reward and referral system with new models, APIs, admin UI, and event integration." },
        ],
      },
      {
        when: "May — Jun 2026",
        title: "Growing up",
        body: "Background jobs moved from APScheduler to Celery Beat, deploys became rolling with health checks, logs went to Loki and load tests to k6. In June media moved to Cloudflare R2 and study materials got semantic search on pgvector.",
        commits: [
          { msg: "feat: integrate Celery for background task processing" },
          { msg: "feat: add Loki and Promtail services for log aggregation and monitoring" },
          { msg: "feat: migrate all background maintenance jobs from APScheduler to Celery Beat and add database composite indexes." },
          { msg: "feat: implement rolling deployment with health checks…" },
          { msg: "setup grafana k6 and setup load testing" },
          { msg: "feat: implement semantic search for study materials, add vector support, and migrate media storage to Cloudflare R2" },
        ],
      },
      {
        when: "Jul 2026",
        title: "The marketplace month",
        body: "109 commits in one month: listings, bargaining with counter-offers, Moolre mobile-money escrow and semantic search over listings. On 11 July the escrow release code moved from the seller to the buyer, so money is only released when the buyer hands the code over in person. Later that month, student IDs started being checked by a vision model.",
        sfx: "ゴゴゴ",
        commits: [
          { msg: "feat: implement marketplace module with CRUD, admin verification logic, and automated escrow cleanup tasks" },
          { msg: "feat: implement vector-based semantic search for marketplace listings using pgvector and Celery tasks" },
          { msg: "feat: implement bargain counter-offer workflow with status tracking, notification updates, and chat integration" },
          { msg: "fix: swap release code visibility from seller to buyer in escrow sessions" },
          { msg: "refactor: swap release code visibility so buyers hold the code and sellers must request it in person" },
          { msg: "feat: implement automated student ID verification using AI vision and rule-based validation logic" },
        ],
      },
      {
        when: "6 — 13 Aug 2026",
        title: "A pipeline between me and production",
        body: "Deploys moved to a self-hosted runner that lints and runs pytest in its own Docker stack before staging and production are rebuilt. Getting there took 24 commits on 13 August, a lot of them about containers on one shared network answering to the same name.",
        commits: [
          { msg: "ci: switch production deployment workflow to self-hosted runner" },
          { msg: "ci: integrate automated pytest suite into CI/CD pipeline and update database migration command to upgrade schema" },
          { msg: "feat: add Nginx server configuration for staging-api.uniloomy.com" },
          { msg: "fix: rename CI database service to ci_db to prevent hostname collision with production database on shared network" },
          { msg: "fix: target uniloomy_app explicitly in nginx and rename staging app service to staging_app to eliminate Docker DNS load balancing collision" },
          { msg: "Merge pull request #28 from Mahfuzy/staging" },
        ],
      },
    ],
    flow: [
      { label: "App + admin", note: "mobile app · Next.js dashboard" },
      { label: "Nginx", note: "api + staging-api" },
      { label: "FastAPI", note: "15 async modules" },
      { label: "PostgreSQL", note: "pgvector · 66 migrations" },
      { label: "Celery + Valkey", note: "feeds · media · SMS · push" },
      { label: "Moolre · R2 · Groq", note: "payments · media · AI" },
    ],
    modules: ["admin", "anonymous", "auth", "chat", "explore", "looms", "marketplace", "news", "notifications", "post", "story", "studyhub", "uniclip", "university", "user"],
    lookingBack:
      "In January I deleted every test in the repo to move faster. An integration suite came back in May, and it only started guarding deploys in August. Keeping a small suite running the whole time would have been cheaper than rebuilding one.",
  },

  "pinnacle-loans": {
    slug: "pinnacle-loans",
    years: "Mar → Jul 2026",
    role: "Sole developer",
    client: "A lender in Ghana",
    logline: "A lending platform for a Ghanaian lender, from loan application to the last repayment.",
    intro: [
      "Borrowers apply through a step-by-step loan wizard with Ghana Card verification, sign their agreement on screen, and submit repayments from their phone. Admins approve loans and repayments, set rates and penalties in settings, and can trace every action in an audit log.",
      "Weekly penalties on overdue loans run on a schedule, balances are calculated with Decimal, and borrowers hear about every change by SMS and push notification. I built the FastAPI backend and the React PWA, and every one of the 88 commits is mine.",
    ],
    note: "Client work in a private repository: no code or repo link, and the app itself sits behind a login.",
    stats: [
      { value: "88", label: "commits, all mine" },
      { value: "83", label: "in the first 13 days" },
      { value: "23", label: "commits on 16 March" },
      { value: "11", label: "backend services" },
    ],
    stack: [
      "FastAPI",
      "SQLAlchemy (async)",
      "asyncpg",
      "Alembic",
      "APScheduler",
      "PostgreSQL",
      "WeasyPrint",
      "pywebpush",
      "Cloudinary",
      "Moolre SMS",
      "React + Vite",
      "TanStack Query",
      "Zustand",
      "zod",
      "react-hook-form",
      "PWA",
    ],
    commitCount: 88,
    beats: [
      {
        when: "10 — 13 Mar 2026",
        title: "Clickable before it was real",
        body: "The first day built the borrower and admin screens on a mock data store, so every flow could be clicked through before an API existed. Two days later the real FastAPI backend took its place, then came the admin panel.",
        commits: [
          { msg: "first commit" },
          { msg: "feat: Implement a mock data store using Zustand for frontend application state management and demo data." },
          { msg: "feat: Implement core backend API services and frontend integration for user, loan, and admin functionalities." },
          { msg: "feat: Implement comprehensive admin panel with user, loan, and audit management, including admin roles and phone number normalization." },
        ],
      },
      {
        when: "14 — 16 Mar 2026",
        title: "The rules around money",
        body: "Audit logs, weekly penalties on overdue loans, and an approval step for every repayment a borrower submits. There are 23 commits on 16 March alone, including one that changes when a loan counts as closed: total paid against total debt, not the original repayable amount.",
        sfx: "23 commits",
        commits: [
          { msg: "feat: Implement a comprehensive audit logging system with new backend endpoints, models, services, and a dedicated admin UI." },
          { msg: "feat: Introduce weekly penalty system for overdue loans, including database schema, backend automation, and frontend display updates." },
          { msg: "feat: Implement a repayment approval workflow for borrower-submitted repayments, allowing admins to approve or reject them." },
          { msg: "fix: Correct loan closure condition to compare `total_paid` against `total_debt` instead of `total_repayable`." },
        ],
      },
      {
        when: "16 — 18 Mar 2026",
        title: "Signed, witnessed, exact",
        body: "Loan agreements became PDFs with an on-screen signature and a named witness. Balance maths moved to Decimal, and pending repayments started counting towards the balance, so a borrower can't overpay while an earlier payment is still waiting for approval.",
        commits: [
          { msg: "feat: Add digital signature component and enhance loan agreement details on borrower pages." },
          { msg: "feat: Add borrower signature and witness name to the loan schema…" },
          { msg: "feat: Prevent overpayment by including pending repayments in balance calculations on both frontend and backend." },
          { msg: "feat: Refactor loan financial calculations to use Decimal for precision and simplify loan closure logic." },
        ],
      },
      {
        when: "19 — 22 Mar 2026",
        title: "Everyone hears about it",
        body: "Push notifications, an installable PWA with notes for iPhone users, and alerts to admins when a loan goes overdue or a borrower updates their ID documents.",
        commits: [
          { msg: "feat: Add full-stack push notification support with new backend endpoints, services, database model, and frontend integration." },
          { msg: "feat: Add PWA support including push notifications, manifest updates, and iOS-specific guidance." },
          { msg: "feat: Add administrator notification when a loan becomes overdue." },
          { msg: "feat: Send admin notification when a user updates their identity documents for KYC submission." },
        ],
      },
      {
        when: "Jun — Jul 2026",
        title: "Round two",
        body: "Months later, two more features: freezing interest on a loan while still sending payment reminders, and SMS broadcasts from the admin panel to every borrower, sent in the background.",
        commits: [
          { msg: "feat: implement interest rate freezing for loans with admin toggle and status tracking" },
          { msg: "feat: include frozen loans in overdue processing to send payment reminders and prevent penalty accrual" },
          { msg: "feat: add functionality for admins to send custom SMS messages to borrowers" },
          { msg: "feat: implement background bulk SMS broadcasting for all registered borrowers with admin verification script" },
        ],
      },
    ],
    flow: [
      { label: "Borrower + admin", note: "one React PWA" },
      { label: "FastAPI", note: "11 services" },
      { label: "PostgreSQL", note: "Decimal balances · audit log" },
      { label: "APScheduler", note: "penalties · overdue checks" },
      { label: "SMS · push · PDF", note: "Moolre · Web Push · WeasyPrint" },
    ],
    modules: [
      "services/loan",
      "services/auth",
      "services/otp",
      "services/audit",
      "services/automation",
      "services/scheduler",
      "services/pdf",
      "services/sms",
      "services/push_notification_service",
      "services/notification_service",
      "services/storage",
    ],
    lookingBack:
      "The backend folder has ten one-off scripts, like verify_penalties.py and simulate_overdue.py, that I ran by hand to check the money logic. They'd be worth more as tests, where they would run every time the loan maths changes.",
  },

  "thesis-assessor": {
    slug: "thesis-assessor",
    years: "May → Sep 2026",
    role: "Final-year project · KNUST",
    logline: "AI that marks a thesis against the university's rubric, and has to quote its evidence.",
    intro: [
      "Ask one language model to mark a thesis and you get confident, invented justifications. The Evidence-Based Thesis Assessor breaks the job into a ten-stage pipeline: parse the document, check structure and compliance, gather quoted evidence chapter by chapter, score each criterion, and hand every score to an independent verifier before a supervisor sees it.",
      "It's my final-year project at KNUST, built in a group of two, and 101 of the 103 commits are mine. Scoring follows KNUST's published thesis assessment guide, plagiarism checks run against OpenAlex, a vision model reads the figures, and the report exports as a Word document for the committee.",
    ],
    stats: [
      { value: "101", label: "of 103 commits" },
      { value: "68", label: "commits in August" },
      { value: "10", label: "pipeline stages" },
      { value: "8K", label: "tokens per minute" },
    ],
    stack: ["FastAPI", "SQLAlchemy", "asyncpg", "React 19 + Vite", "Groq", "Llama 3.3 70B", "Llama 3.2 Vision", "OpenAlex", "Cloudinary", "Docker", "Render", "Vercel"],
    github: "https://github.com/lifewkhissys-prog/FINAL-YEAR-PROJECT-123",
    live: "https://final-year-project-123.vercel.app",
    liveNote: "The live app opens on a lecturer login.",
    shot: {
      desktop: "/work/thesis-assessor.webp",
      width: 1024,
      height: 434,
      alt: "Thesis Assessor reviewing a Conclusions chapter: the chapter list, the PDF manuscript, and an evaluation panel scoring it 6.0 out of 10 with a quoted evidence citation",
      caption: "The assessor marking its own write-up, the thesis about this project · from the repo's report images",
    },
    commitCount: 103,
    beats: [
      {
        when: "May — Jun 2026",
        title: "A different project first",
        body: "The repo didn't start as a thesis marker. Its first months are lecturer assessment pages, a problem bank, and a guided editor that locks each block until you finish the one before it.",
        commits: [
          { msg: "feat: add frontend submission feedback guide and implement lecturer assessment pages" },
          { msg: "feat: implement progressive block locking and auto-scrolling logic for GuidedPage editor components" },
          { msg: "feat: implement ProblemBankPage and formalize question creation flow documentation" },
        ],
      },
      {
        when: "13 — 15 Jul 2026",
        title: "The pivot",
        body: "In mid-July the backend arrived, the demo data was swapped for rubric criteria, and the old interface lost its hacker mode and audio. From here on it's a thesis assessor.",
        commits: [
          { msg: "feat: implement backend core modules and services with containerized deployment setup" },
          { msg: "refactor: replace demo data seeding with rubric criteria initialization and add embedding service support" },
          { msg: "refactor: remove hacker mode and audio features from Topbar and CommandPalette" },
          { msg: "refactor: improve thesis assessment polling reliability and harden LLM response parsing and sanitization" },
        ],
      },
      {
        when: "Aug 2026",
        title: "Show your evidence",
        body: "68 commits in August, most of them about trust: prompts that ban generic filler, plagiarism matching against OpenAlex, figures read by a vision model, and a document viewer that finds each quoted piece of evidence in the thesis and highlights it, so a supervisor can check the AI's working.",
        commits: [
          { msg: "refactor: enforce strict specificity and ban generic filler phrases in agent evaluation prompts and justifications" },
          { msg: "feat: integrate OpenAlex API for live academic plagiarism matching…" },
          { msg: "feat: integrate Groq LLaMA 3.2 Vision API for automated figure analysis and add configuration support" },
          { msg: "refactor: implement 4-tier fuzzy DOM locator to improve evidence quote matching in DocumentViewer" },
        ],
      },
      {
        when: "31 Aug — 2 Sep 2026",
        title: "Working inside a rate limit",
        body: "A thesis doesn't fit in 8,000 tokens a minute. So: token budgets, truncation that never cuts the system prompt, a JSON parser that survives messy model output, and a list of fallback models for when the daily quota runs out.",
        sfx: "8,000 TPM",
        commits: [
          { msg: "refactor: implement Groq 8,000 TPM rate limiting with aggressive input truncation and token budgeting" },
          { msg: "feat: add robust LLM JSON parser and improve error handling for model fallbacks and schema validation" },
          { msg: "refactor: preserve system instructions during prompt truncation…" },
          { msg: "feat: update fallback model list and expand error handling for daily quota limits" },
        ],
      },
    ],
    flow: [
      { label: ".docx / PDF", note: "thesis_parser" },
      { label: "Compliance", note: "structure · chapters mapped" },
      { label: "Evidence agent", note: "quotes per criterion" },
      { label: "Scoring", note: "KNUST rubric" },
      { label: "Verifier", note: "audits every score" },
      { label: "Report", note: "Word export" },
    ],
    modules: [
      "services/agent_pipeline",
      "services/thesis_parser",
      "services/compliance_check",
      "services/grading_scale",
      "services/plagiarism_service",
      "services/vision_service",
      "services/embedding_service",
      "services/docx_exporter",
      "services/storage_service",
    ],
    code: [
      {
        path: "app/services/agent_pipeline.py",
        start: 91,
        caption: "Two decisions in one place: a criterion that can't be scored raises an error instead of getting a default mark, and model output is parsed defensively, reasoning tags and code fences included.",
        code: `class ScoringError(RuntimeError):
    """Raised when a sub-criterion could not be scored. Never substituted with a default mark."""


def parse_json_from_llm(raw: str) -> Any:
    """Extract and parse JSON from LLM output, handling markdown code fences, reasoning tags, and leading/trailing text."""
    if not raw or not raw.strip():
        return {}
    text = raw.strip()
    # Strip <think>...</think> reasoning blocks if present (common in Qwen models)
    text = re.sub(r"<think>[\\s\\S]*?</think>", "", text).strip()

    # Try direct parse first
    try:
        return json.loads(text)
    except Exception:
        pass

    # Try markdown code fences \`\`\`json ... \`\`\` or \`\`\` ... \`\`\`
    fence_match = re.search(r"\`\`\`(?:json)?\\s*([\\s\\S]*?)\\s*\`\`\`", text)
    if fence_match:
        try:
            return json.loads(fence_match.group(1).strip())
        except Exception:
            pass`,
      },
    ],
    lookingBack:
      "The parser's last resort grabs everything between the first { and the last }. If a model writes two JSON objects, or a brace in its prose, that slice is wrong. Asking the API for structured JSON output would remove the guesswork instead of cleaning up after it.",
  },

  visibl: {
    slug: "visibl",
    years: "Mar 2026",
    role: "Solo build",
    logline: "Asks AI assistants about your business, and scores how often you come up.",
    intro: [
      "When someone asks ChatGPT or Perplexity to recommend a dentist in their city, most local businesses never appear. Visibl puts those questions to OpenAI and Perplexity for a business and its competitors, counts the mentions, and turns them into a score out of 100 with recommendations.",
      "The score is simple on purpose: mentions divided by queries, times 100, with Perplexity weighted 1.2× because it searches the live web. The tests pin that down, including the case where only Perplexity mentions you.",
    ],
    note: "Private repository, so no code or repo link. The landing page is live.",
    stats: [
      { value: "5", label: "commits" },
      { value: "1", label: "day" },
      { value: "1.2×", label: "Perplexity weight" },
      { value: "3", label: "test files" },
    ],
    stack: ["FastAPI", "SQLAlchemy (async)", "asyncpg", "Alembic", "slowapi", "python-jose", "pytest", "OpenAI", "Perplexity", "React 19 + Vite", "Tailwind CSS 4", "Recharts", "Zustand"],
    live: "https://visibl-psi.vercel.app",
    shot: {
      desktop: "/work/visibl.webp",
      phone: "/work/visibl-m.webp",
      alt: "Visibl landing page headline, Your business might be invisible to AI, above two score dials going from 18 to 79 out of 100",
      caption: "Captured from the live site · Sep 2026",
    },
    commitCount: 5,
    beats: [
      {
        when: "5 Mar 2026",
        title: "Arrived whole",
        body: "The backend and frontend landed together in one initial commit, typo in the product name and stray bracket included. Four small landing-page fixes followed the same day.",
        commits: [
          { msg: "Initial commit: Vibisl backend + frontend)" },
          { msg: "refactor: Implement dedicated CSS variables for the FinalCTA section…" },
          { msg: "refactor: remove `glowGreen` prop from Hero section." },
          { msg: "feat: update hero section sub-headline text." },
          { msg: "chore: Update copyright year to 2026 in the footer." },
        ],
      },
      {
        when: "Inside that commit",
        title: "A score you can test",
        body: "The scorer is a plain function over audit results, so its tests don't need a network or a model: an empty audit, every query mentioning you, a partial hit, and a mention from Perplexity alone to check the weighting.",
        logLabel: "tests in backend/tests/test_scorer.py",
        commits: [
          { msg: "test_score_calculation_empty" },
          { msg: "test_score_calculation_all_mentions" },
          { msg: "test_score_calculation_partial_mentions" },
          { msg: "test_score_calculation_perplexity_mention_only" },
        ],
      },
    ],
    flow: [
      { label: "Business", note: "+ competitors" },
      { label: "Checkers", note: "OpenAI · Perplexity" },
      { label: "Scorer", note: "mentions ÷ queries × 100" },
      { label: "Recommendations", note: "what to fix" },
      { label: "Dashboard", note: "React · Recharts" },
    ],
    modules: [
      "routers/audits",
      "routers/businesses",
      "routers/competitors",
      "routers/auth",
      "services/checker",
      "services/scorer",
      "services/recommendations",
      "services/audit_service",
    ],
  },

  "hill-down-pharmacy": {
    slug: "hill-down-pharmacy",
    years: "30 — 31 Dec 2025",
    role: "Website · solo build",
    client: "A pharmacy in Yendi",
    logline: "A website for a community pharmacy in Yendi, in the last two days of 2025.",
    intro: [
      "Hill Down Pharmacy has served Yendi since 2022 and needed somewhere online to say so: what they stock, the services they offer, their opening hours and how to reach them.",
      "It's the smallest chapter in this volume: one page of nine sections, built with Next.js 16, shadcn/ui and Framer Motion.",
    ],
    stats: [
      { value: "5", label: "commits" },
      { value: "2", label: "days" },
      { value: "9", label: "page sections" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion"],
    live: "https://hdp-eight.vercel.app",
    shot: {
      desktop: "/work/hdp.webp",
      phone: "/work/hdp-m.webp",
      alt: "Hill Down Pharmacy home page: Your Trusted Community Pharmacy, serving Yendi and the Northern Region, with business hours in a card",
      caption: "Captured from the live site · Sep 2026",
    },
    commitCount: 5,
    beats: [
      {
        when: "30 — 31 Dec 2025",
        title: "Two days, one page",
        body: "A fresh Next.js app on the 30th. On New Year's Eve, every section at once, then the contact section committed twice with slightly different descriptions, and the medicine categories last.",
        commits: [
          { msg: "Initial commit from Create Next App" },
          { msg: "feat: Initialize Next.js project with core UI components, page sections, and updated dependencies." },
          { msg: "feat: add Contact section component with contact details, links, and animated styling." },
          { msg: "feat: add Contact section component displaying business contact details, address, and hours." },
          { msg: "feat: add Products component to display medicine categories" },
        ],
      },
    ],
    modules: ["Navbar", "Hero", "About", "Services", "Products", "Testimonials", "CTA", "Contact", "Footer"],
  },

  safechain: {
    slug: "safechain",
    years: "May 2025",
    role: "Team project · contracts and DApp",
    logline: "Government project budgets on a blockchain, where no expense can overrun its milestone.",
    intro: [
      "SafeChain is a DApp that records government-funded projects, their milestones and every expense on-chain, so the numbers can't be quietly edited later. Government officials, auditors and admins each get a role, and only a project's own official can add to it.",
      "It was a team build under the Blockbridge Network organisation. I wrote the two Solidity contracts and the Next.js frontend, and the README credits me for both.",
    ],
    note: "Deployed to Sonic Testnet. The contracts record budgets and spending; they don't hold any money.",
    stats: [
      { value: "20", label: "of 22 commits" },
      { value: "2", label: "contracts" },
      { value: "3", label: "on-chain roles" },
      { value: "319", label: "lines of Solidity" },
    ],
    stack: ["Solidity", "OpenZeppelin AccessControl", "Remix", "Sonic Testnet", "Next.js", "ethers.js", "MetaMask"],
    github: "https://github.com/Blockbridge-Network/Team-SafeChain",
    live: "https://youtu.be/4f8jaaXIN60",
    liveLabel: "Demo video",
    shot: {
      desktop: "/work/safechain.webp",
      height: 799,
      alt: "SafeChain dashboard in a dark theme, listing test projects with ETH budgets and amounts spent, next to role management and quick actions",
      caption: "The DApp dashboard with test data · from the team repo's demo images",
    },
    commitCount: 22,
    beats: [
      {
        when: "9 May 2025",
        title: "One commit of code",
        body: "My first commit to the team repo brought the contracts and the DApp in one go. Most of my other commits that day are the README, edited seven times under the same message.",
        sfx: "README ×7",
        commits: [
          { msg: "initial commit" },
          { msg: "Update README.md", times: 7 },
          { msg: "Refine README.md with additional details and formatting improvements" },
          { msg: "Rename videos/Screencast From 2025-05-08 22-25-27.mp4 to demo.mp4" },
        ],
      },
      {
        when: "15 May 2025",
        title: "The demo video",
        body: "A screen recording went into the repo, moved folders, was updated, and was finally removed. The README links to it on YouTube instead.",
        commits: [
          { msg: "Remove demo.mp4 file and kept it in the videos folder" },
          { msg: "Update demo.mp4 file in the videos folder" },
          { msg: "Remove demo.mp4 file from the videos folder" },
          { msg: "Update README.md" },
        ],
      },
    ],
    flow: [
      { label: "MetaMask", note: "signs in as a role" },
      { label: "Next.js + ethers.js", note: "the DApp" },
      { label: "ProjectTracker.sol", note: "projects · milestones · expenses" },
      { label: "Verification kernel", note: "amount · proof · description" },
      { label: "Sonic Testnet", note: "storage + events" },
    ],
    modules: ["contracts", "deployments", "docs", "safechain/src/app", "safechain/src/components", "safechain/src/context", "safechain/src/hooks"],
    code: [
      {
        path: "contracts/ProjectTracker.sol",
        start: 152,
        caption: "Adding an expense: only the project's own official, within both the project and milestone budgets, and only after the verification kernel says yes.",
        code: `    function addExpense(
        uint256 _projectId,
        string memory _description,
        uint256 _amount,
        string memory _proofIPFSHash,
        uint256 _milestoneId
    ) public onlyRole(GOVERNMENT_ROLE) {
        require(_projectId < projectCount, "Project does not exist");
        Project storage project = projects[_projectId];
        require(project.government == msg.sender, "Only project owner can add expenses");
        require(!project.isCompleted, "Project is completed");
        require(project.spent + _amount <= project.budget, "Exceeds project budget");
        require(_milestoneId < project.milestones.length, "Milestone does not exist");
        require(!project.milestones[_milestoneId].isCompleted, "Milestone is completed");
        require(
            project.milestones[_milestoneId].spent + _amount <= project.milestones[_milestoneId].budget,
            "Exceeds milestone budget"
        );

        require(
            expenseKernel.verifyExpense(_proofIPFSHash, _amount, _description),
            "Expense verification failed"
        );

        Expense storage expense = project.expenses[project.expenseCount];
        expense.description = _description;
        expense.amount = _amount;
        expense.timestamp = block.timestamp;
        expense.proofIPFSHash = _proofIPFSHash;
        expense.milestoneId = _milestoneId;

        project.spent += _amount;
        project.milestones[_milestoneId].spent += _amount;
        project.lastUpdated = block.timestamp;
        emit ExpenseAdded(_projectId, project.expenseCount, _amount, _milestoneId);
        createNotification(project.government, _projectId, "New expense added to milestone");
        project.expenseCount++;
    }`,
      },
    ],
    lookingBack:
      "The verification kernel only checks that the amount is under a limit and that the proof hash and description aren't empty. It never confirms the IPFS proof exists, so “verified” really means “filled in”. The contract defines an AUDITOR_ROLE, but no function uses it. Auditor sign-off is what would make verification mean something.",
  },

  twish: {
    slug: "twish",
    years: "Apr → Aug 2025",
    role: "Solo backend",
    logline: "Donations, a marketplace, projects and chat, in one Django backend.",
    intro: [
      "Twish is the backend for a community app: money, goods and service donations with goals, a marketplace of listings, offers and reviews with Paystack payments, KYC profiles, projects with tasks and funding, and chat rooms.",
      "It was the biggest data model I'd written at the time, and the commit log shows me cutting scope: a blockchain app went in on day two and came out forty days later.",
    ],
    note: "Private repository, so no code or repo link.",
    stats: [
      { value: "36", label: "commits" },
      { value: "7", label: "Django apps" },
      { value: "40", label: "days of blockchain" },
      { value: "10", label: "Dockerfile commits" },
    ],
    stack: ["Django 5.2", "DRF", "SimpleJWT", "Channels", "Daphne", "Celery", "Redis", "PostgreSQL", "Paystack", "drf-yasg", "uv", "Docker"],
    commitCount: 36,
    beats: [
      {
        when: "14 — 19 Apr 2025",
        title: "Accounts first",
        body: "A user system with phone verification and two-factor support, age checks at sign-up and Google sign-in, with the donations app and a blockchain app scaffolded on day two.",
        commits: [
          { msg: "Add initial Django project structure with user authentication system" },
          { msg: "Add blockchain and donations modules with initial setup" },
          { msg: "Enhance user authentication system with phone verification and 2FA support" },
          { msg: "Enhance user model and authentication flow with age validation and logout functionality" },
          { msg: "Update settings.py to include Google OAuth configuration and clean up commented code" },
        ],
      },
      {
        when: "25 Apr — 29 May 2025",
        title: "Money, and less scope",
        body: "The marketplace got Paystack transactions. A month later the blockchain app was removed, and donations and KYC were restructured around what was left.",
        commits: [
          { msg: "Add marketplace serializers, views, and URLs; implement Paystack transaction handling" },
          { msg: "Refactor marketplace app to enhance functionality and organization" },
          { msg: "Remove blockchain app and update requirements" },
          { msg: "Refactor donations and KYC modules for improved structure and functionality" },
        ],
      },
      {
        when: "14 — 15 Aug 2025",
        title: "The Dockerfile fight",
        body: "Fifteen commits in two days, ten of them touching the Dockerfile. It ended with uv installing the dependencies and the settings reading from environment variables.",
        sfx: "ドドド",
        commits: [
          { msg: "deployment fix" },
          { msg: "Update Dockerfile to install uv and modify Python dependency installation method" },
          { msg: "Remove .dockerignore file and streamline Dockerfile paths for improved clarity" },
          { msg: "Refactor Dockerfile for improved caching and dependency installation" },
          { msg: "Remove .dockerignore file and update Dockerfile for improved dependency installation" },
          { msg: "Update docker-compose and settings for environment variable integration" },
        ],
      },
    ],
    flow: [
      { label: "Client", note: "REST + JWT" },
      { label: "DRF", note: "7 apps" },
      { label: "Paystack", note: "marketplace payments" },
      { label: "Channels", note: "chat rooms" },
      { label: "Celery", note: "push notifications" },
    ],
    modules: ["users", "donations", "marketplace", "kyc", "projects", "chat", "notifications"],
  },

  /* ── Vol. 03 · Training arc ───────────────────────────────── */

  moviehub: {
    slug: "moviehub",
    years: "2024 → 2026",
    logline: "The side project I keep coming back to.",
    intro: [
      "MovieHub started in March 2024 as a Create React App project on top of the TMDB API: movies, TV shows, seasons, episodes, favourites and a watchlist.",
      "It's the one repo that has followed me through every stage. I added Firebase sign-in, took it out again a year and a half later, and gave it a new look in 2026.",
    ],
    stats: [
      { value: "30", label: "commits" },
      { value: "3", label: "years of commits" },
      { value: "TMDB", label: "data source" },
    ],
    stack: ["React", "TMDB API", "Tailwind CSS", "Slick Carousel", "Firebase (removed)"],
    github: "https://github.com/Mahfuzy/MovieApp",
    live: "https://movie-app-pi-gilt.vercel.app",
    shot: {
      desktop: "/work/moviehub.webp",
      phone: "/work/moviehub-m.webp",
      alt: "MovieHub home page with a trending film hero, genre navigation and a Top Rated shelf",
      caption: "Captured from the live site · 14 Sep 2026",
    },
    commitCount: 30,
    beats: [
      {
        when: "Mar — May 2024",
        title: "Hello, TMDB",
        body: "The first version pulled everything from TMDB and put it behind a Firebase login. Getting the Sign Out link to appear only when you were signed in took two tries.",
        commits: [
          { msg: "Initialize project using Create React App" },
          { msg: "react movies app using tmdb api" },
          { msg: "Fixed conditional rendering of Sign Out link in Navbar" },
          { msg: "fixed conditional rendering in navbar" },
        ],
      },
      {
        when: "2 Oct 2025",
        title: "Letting go of login",
        body: "I came back after more than a year and removed the authentication entirely. A movie browser doesn't need an account. I also added an error boundary so a crash shows a message instead of a blank page.",
        commits: [
          { msg: "Refactor routing and navbar for public access; update API calls for movie data" },
          { msg: "Add ErrorBoundary to index.js and handle missing API key in Home component" },
          { msg: "Remove authentication logic from AuthChecker, Firebase, and related components…" },
        ],
      },
      {
        when: "15 Feb 2026",
        title: "The glow-up",
        body: "A trending carousel, a genre dropdown built from the API, and cards that reveal details on hover. This is the version that's live today.",
        commits: [
          { msg: "updated UI" },
          { msg: "feat: Add Slick Carousel integration and custom styling." },
          { msg: "feat: Implement dynamic genre categories dropdown in the navbar…" },
          { msg: "feat: improve movie and TV show item card UI with hover effects and detailed info." },
        ],
      },
    ],
    flow: [
      { label: "React", note: "shelves, details, search" },
      { label: "TMDB API", note: "movies · TV · seasons" },
    ],
    modules: [
      "HO_components",
      "Movies_component",
      "TVShows_component",
      "category_component",
      "Posts",
      "Buttons",
      "auth_components",
    ],
    code: [
      {
        path: "src/ErrorBoundary.js",
        start: 18,
        caption: "Added in October 2025, so an error shows a message instead of a white screen.",
        code: `  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
          <div className="max-w-lg text-center">
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="opacity-80 mb-4">Please try refreshing the page. If the issue persists, contact support.</p>
            <pre className="text-left whitespace-pre-wrap text-sm opacity-70">{String(this.state.error)}</pre>
          </div>
        </div>
      );
    }`,
      },
    ],
  },

  dreamboard: {
    slug: "dreamboard",
    years: "2024 → 2026",
    logline: "A Pinterest-style board app, and my education in backends.",
    intro: [
      "DreamBoard was meant to be a Pinterest clone for practice. It became the project where I learned how accounts, boards, pins, image uploads, followers and real-time chat fit together behind one API.",
      "It's my most-committed repo, and the commit log is honest about how that learning went.",
    ],
    stats: [
      { value: "53", label: "commits" },
      { value: "18", label: "months, first to last" },
      { value: "7", label: "“made changes” in a row" },
      { value: "5", label: "Django apps" },
    ],
    stack: ["Django 5", "DRF", "SimpleJWT", "Channels", "Daphne", "Redis", "PostgreSQL", "Cloudinary", "React + Vite"],
    github: "https://github.com/Mahfuzy/DreamBoard",
    commitCount: 53,
    beats: [
      {
        when: "23 — 24 Jul 2024",
        title: "Deploy day",
        body: "The first deploy: Gunicorn, WhiteNoise for static files, and then an internal server error that took four commits to fix. You can hear how it went in the next three.",
        sfx: "taaaaahhhhhhh",
        commits: [
          { msg: "added gunicorn for deployment" },
          { msg: "made corrections with whitenoise" },
          { msg: "fixed internal server error" },
          { msg: "fixing the internal server error" },
          { msg: "still fixing the internal server error" },
          { msg: "still working the internal server error" },
          { msg: "taaaaahhh" },
          { msg: "taaaaahhhhh" },
          { msg: "taaaaahhhhhhh" },
        ],
      },
      {
        when: "25 Jul — 14 Aug 2024",
        title: "Shaping the data",
        body: "Pins belong to boards, boards belong to users, users follow users. Most of these commits are me reshaping serializers until the API returned what a feed actually needs.",
        commits: [
          { msg: "update accounts/views.py and pins/serializers to include the user object for some serializers" },
          { msg: "alter board field on pin" },
          { msg: "fixed the pin serializer" },
          { msg: "added the followers and following count to the user serializer" },
        ],
      },
      {
        when: "17 — 18 Aug 2024",
        title: "The websocket weekend",
        body: "Group chat rooms and direct messages with Django Channels. Seven commits in a row say only “made changes”. The next day: it connected.",
        commits: [
          { msg: "added chat app" },
          { msg: "added daphne" },
          { msg: "fixed things" },
          { msg: "made changes", times: 7 },
          { msg: "fixed websocket connection" },
          { msg: "addeed private chat" },
        ],
      },
      {
        when: "27 Jan 2026",
        title: "Coming back",
        body: "A year and a half later I returned with an AI coding agent. Two pull requests came from its codex/ branches: first Django templates, then a React and Vite frontend that replaced them half an hour later.",
        commits: [
          { msg: "Add frontend pages and complete account views" },
          { msg: "Merge pull request #1 from Mahfuzy/codex/complete-project-and-add-frontend" },
          { msg: "Replace Django templates with React frontend" },
          { msg: "Merge pull request #2 from Mahfuzy/codex/complete-project-and-add-frontend-9tfi72" },
        ],
      },
    ],
    flow: [
      { label: "React + Vite", note: "since Jan 2026" },
      { label: "DRF + JWT", note: "boards · pins · accounts" },
      { label: "Daphne · Channels", note: "group + direct chat" },
      { label: "PostgreSQL", note: "relations" },
      { label: "Cloudinary", note: "images" },
    ],
    modules: ["accounts", "boards", "pins", "chat", "frontend"],
    code: [
      {
        path: "chat/consumers.py",
        start: 20,
        caption: "A group chat room: join the channel group named after the room, then accept the socket.",
        code: `    def connect(self):
        """Handles WebSocket connection and joins the chat room."""
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()
        print(f"WebSocket connected to room {self.room_name}")`,
      },
      {
        path: "chat/consumers.py",
        start: 73,
        caption: "Direct messages are a group of two, named after the sender and the recipient.",
        code: `    def connect(self):
        """Handles WebSocket connection and joins the private chat room."""
        self.sender = self.scope['user'].username
        self.recipient = self.scope['url_route']['kwargs']['username']
        self.room_group_name = f'direct_{self.sender}_{self.recipient}'`,
      },
    ],
    lookingBack:
      "The direct-chat room name depends on who connects first: Ama messaging Kofi joins direct_ama_kofi, but Kofi replying joins direct_kofi_ama, so they'd never hear each other. Sorting the two usernames before building the name fixes it.",
  },

  shopnest: {
    slug: "shopnest",
    years: "Feb — Apr 2025",
    logline: "A marketplace API that speaks cedis and sends SMS.",
    intro: [
      "ShopNest is the backend for a marketplace where anyone can list products and buy them: categories, products, carts, orders, payments, refunds and reviews, with Swagger docs on top.",
      "Payments default to Ghana cedis, and the accounts app can send SMS through Hubtel, a Ghanaian messaging provider.",
    ],
    stats: [
      { value: "15", label: "commits" },
      { value: "8", label: "marketplace models" },
      { value: "GHS", label: "default currency" },
    ],
    stack: ["Django 5", "DRF", "SimpleJWT", "drf-yasg", "Hubtel SMS", "WhiteNoise", "Gunicorn"],
    github: "https://github.com/Mahfuzy/shopnest",
    commitCount: 15,
    beats: [
      {
        when: "15 Feb 2025",
        title: "Day one",
        body: "Most of the API landed on the first day: models, serializers, authentication and the cart, then the housekeeping to make it deployable.",
        commits: [
          { msg: "first commit" },
          { msg: "Refactor serializers and models, update user authentication, enhance cart API functionality, and improve URL routing" },
          { msg: "Add requirements file to manage project dependencies" },
          { msg: "Add STATIC_ROOT setting to configure static file storage" },
        ],
      },
      {
        when: "5 Mar 2025",
        title: "Deploy day, again",
        body: "Getting it online took three edits to settings.py, a missing comma and opening up ALLOWED_HOSTS. Then the Swagger docs pointed at the wrong URL.",
        sfx: "forgot a comma",
        commits: [
          { msg: "Update settings.py", times: 3 },
          { msg: "Update settings for CORS and static file handling" },
          { msg: "Configure static file storage and update URL patterns for production" },
          { msg: "forgot a comma" },
          { msg: "made allowed hosts public" },
          { msg: "corrected the api endpoint for swagger json" },
        ],
      },
      {
        when: "10 Apr 2025",
        title: "Last touches",
        body: "A final pass on the views. The marketplace views file ended up around 25 KB, the largest in the project, next to 16 KB of marketplace tests.",
        commits: [{ msg: "Update views.py" }, { msg: "another commit" }],
      },
    ],
    flow: [
      { label: "Client", note: "REST + JWT" },
      { label: "Products · Cart", note: "marketplace app" },
      { label: "Order → Payment", note: "GHS by default" },
      { label: "Hubtel", note: "SMS" },
    ],
    modules: ["accounts", "accounts/services", "marketplace", "shop_nest"],
    code: [
      {
        path: "accounts/services/hubtel_sms.py",
        start: 5,
        caption: "Sending an SMS through Hubtel: basic auth from the client ID and secret, then a JSON payload.",
        code: `def send_sms(phone_number, message):
    url = "https://smsc.hubtel.com/v1/messages/send"
    credentials = f"{settings.HUBTEL_CLIENT_ID}:{settings.HUBTEL_CLIENT_SECRET}"
    encoded_credentials = base64.b64encode(credentials.encode()).decode()

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Basic {encoded_credentials}"
    }

    payload = {
        "From": settings.HUBTEL_SENDER_ID,
        "To": phone_number,
        "Content": message
    }`,
      },
    ],
    lookingBack:
      "The SMS helper calls requests.post without a timeout and prints every response body to the console. A slow provider could hold a request open, so the next version needs a timeout and proper logging.",
  },

  "hci-dashboard": {
    slug: "hci-dashboard",
    years: "Feb — Mar 2025",
    logline: "A mood tracker where most of the work was about readability.",
    intro: [
      "A human-computer interaction project: a mood-tracker dashboard with Home, Track, Journal, Reflections and Entries, a profile modal, and a sidebar that collapses on phones.",
      "The features came quickly. Most of the commits after that are about people reading it: text colors on the gradient sidebar, form colors, and a final contrast pass.",
    ],
    stats: [
      { value: "12", label: "commits" },
      { value: "9", label: "commits on 27 Feb" },
      { value: "5", label: "tracker sections" },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "react-icons"],
    github: "https://github.com/Mahfuzy/hci",
    commitCount: 12,
    beats: [
      {
        when: "25 Feb 2025",
        title: "Layout first",
        body: "A fresh Next.js app, then the whole skeleton in one go: sidebar navigation and a profile modal.",
        commits: [
          { msg: "Initial commit from Create Next App" },
          { msg: "Implement dashboard layout with sidebar navigation and profile modal" },
        ],
      },
      {
        when: "27 Feb 2025",
        title: "Nine commits of polish",
        body: "Nine commits in one day, and most of them are about color: text on the gradient sidebar, the form, the button styles. Then a toggle so the sidebar works on small screens.",
        commits: [
          { msg: "Enhance dashboard UI with gradient sidebar, improved text colors, and updated button styles" },
          { msg: "Update mood tracker title style for improved emphasis" },
          { msg: "Update sidebar text color for improved readability" },
          { msg: "updated colors for the form update" },
          { msg: "Add mobile sidebar toggle and refactor dashboard layout with new components" },
        ],
      },
      {
        when: "3 Mar 2025",
        title: "The contrast pass",
        body: "One last sweep across the whole dashboard, just for contrast.",
        commits: [{ msg: "Update text colors for improved contrast and readability across the dashboard" }],
      },
    ],
    flow: [
      { label: "SidebarSection", note: "Mood Tracker · Thoughts" },
      { label: "DynamicSection", note: "swaps the main panel" },
      { label: "ProfileModal", note: "opens from the header" },
    ],
    code: [
      {
        path: "app/page.tsx",
        start: 6,
        caption: "The five tracker sections, and the mobile sidebar toggle with an aria-label so screen readers know what it does.",
        code: `const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const menuItems: string[] = ["Home", "Track", "Journal", "Reflections", "Entries"];
  const settingsItems: string[] = ["Profile", "Preferences", "Privacy"];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 relative">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-blue-500 text-black rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>`,
      },
    ],
    lookingBack:
      "The whole dashboard lives in a single 163-line page.tsx, and the active section is just local state, so refreshing always drops you back on Home. Routes per section would fix both.",
  },

  studypal: {
    slug: "studypal",
    years: "18 — 23 Mar 2025",
    logline: "A study companion that remembers your streak, builds your timetable and answers back.",
    intro: [
      "StudyPal's API covers courses, quizzes, streaks, XP and achievements, a timetable, notifications, and an AI study assistant called Tae. I built it in six days.",
      "Tae lives on a websocket served by Django Channels and Daphne, capped at 30 messages a minute, and answers with Gemini 2.0 Flash.",
    ],
    note: "The live demo is StudyPal's web front end. This chapter is about the Django API behind it.",
    stats: [
      { value: "8", label: "Django apps" },
      { value: "33", label: "commits" },
      { value: "6", label: "days" },
      { value: "18", label: "commits on 20 March" },
    ],
    stack: ["Django 5", "DRF", "SimpleJWT", "allauth", "Channels", "Daphne", "Celery", "PostgreSQL", "Gemini 2.0 Flash", "Cloudinary"],
    github: "https://github.com/Mahfuzy/studypal",
    live: "https://studypal-ai.vercel.app/",
    shot: {
      desktop: "/work/studypal.webp",
      phone: "/work/studypal-m.webp",
      alt: "StudyPal landing page reading Master Study Success with AI, with Create Study Plan and View Showcase buttons",
      caption: "Captured from the live site · 14 Sep 2026",
    },
    commitCount: 33,
    beats: [
      {
        when: "18 — 19 Mar 2025",
        title: "Eight apps",
        body: "Accounts, courses, quizzes, streaks, timetable, notifications, dashboard and the study assistant, all running under Daphne so HTTP and websockets share one server. Yes, the first commit has a typo.",
        commits: [
          { msg: "fist commit" },
          { msg: "Update Docker configuration to use Daphne and rename backend image" },
          { msg: "Enhance ASGI configuration: Ensure Django initializes fully before importing WebSocket routes…" },
          { msg: "Add CORS support: Include corsheaders in installed apps and middleware, and enable CORS for development." },
        ],
      },
      {
        when: "20 Mar 2025",
        title: "The deploy fight",
        body: "Eighteen commits in one day. Nginx came out of the compose file, the database settings changed five times, a Google Client ID endpoint was added, rewritten and removed, and in the end the Dockerfile went too.",
        sfx: "ドドド",
        commits: [
          { msg: "removing nginx from compose.yaml" },
          { msg: "Configure PostgreSQL as the database engine in settings.py for improved database management." },
          { msg: "Refactor database configuration in settings.py: Simplify DATABASES setting by using dj_database_url…" },
          { msg: "fixing postgresql for render" },
          { msg: "Remove Dockerfile: Eliminate Dockerfile as part of the project cleanup…" },
          { msg: "Add Google Client ID endpoint…" },
          { msg: "Remove Google Client ID endpoint…" },
        ],
      },
      {
        when: "23 Mar 2025",
        title: "Simplify to ship",
        body: "On the last day I commented out the Redis channel layer and the Celery broker to keep hosting simple. The background-job code is still in the repo; the deployed settings just don't use Redis.",
        commits: [
          { msg: "Add user profile and logout views, update URL patterns…" },
          { msg: "Update Celery configuration in settings.py: Change the broker URL to a commented-out placeholder…" },
          { msg: "Comment out CHANNEL_LAYERS configuration in settings.py to disable Redis channel layer integration…" },
        ],
      },
    ],
    flow: [
      { label: "Client", note: "web front end" },
      { label: "DRF + JWT", note: "REST, social auth" },
      { label: "Daphne · Channels", note: "Tae's websocket" },
      { label: "Gemini 2.0 Flash", note: "the answers" },
    ],
    modules: ["accounts", "courses", "quizzes", "streaks", "timetable", "notifications", "dashboard", "study_assistant"],
    code: [
      {
        path: "study_assistant/consumers.py",
        start: 27,
        caption: "Each connection opens its own Gemini chat session. Guests are allowed in.",
        code: `    async def connect(self):
        """Handle WebSocket connection setup."""
        try:
            # Initialize Gemini client
            self.client = genai.Client(api_key=GEMINI_API_KEY)

            # Get user ID or set as guest
            user = self.scope.get("user")
            self.user_id = str(user.id) if user and user.is_authenticated else "guest"

            # Initialize chat session
            self.chat = self.client.chats.create(model="gemini-2.0-flash")

            logger.info(f"WebSocket connected for user {self.user_id}")
            await self.accept()`,
      },
      {
        path: "streaks/signals.py",
        start: 57,
        caption: "Streaks pay out through Django signals: a week earns Week Warrior, a hundred days earns Centurion.",
        code: `@receiver(post_save, sender=StudyStreak)
def handle_streak_milestones(sender, instance, **kwargs):
    """Handle streak-based achievements"""
    streak_milestones = {
        7: ("Week Warrior", "Maintained a 7-day study streak", 70),
        30: ("Monthly Master", "Maintained a 30-day study streak", 300),
        100: ("Centurion", "Maintained a 100-day study streak", 1000),
    }`,
      },
    ],
    lookingBack:
      "Tae's rate limit is a counter on the socket object, so it resets every time someone reconnects. Keeping the count per user in the cache would make the 30-a-minute limit actually hold.",
  },

  churnpredictor: {
    slug: "churnpredictor",
    years: "23 — 24 May 2025",
    logline: "Predicts which bank customers are about to leave, then drafts a plan to keep them.",
    intro: [
      "I wanted to know what the models underneath the AI APIs actually do, so I trained one. Customers who leave are rare in bank data, so a naive model learns to predict that nobody leaves.",
      "ChurnPredictor balances the classes with SMOTE, trains XGBoost, and then asks an LLM on Groq for a retention strategy, so a banker gets a plan along with the probability.",
    ],
    stats: [
      { value: "6", label: "commits" },
      { value: "50", label: "lines of training" },
      { value: "XGB", label: "classifier" },
      { value: "SMOTE", label: "class balance" },
    ],
    stack: ["Python", "pandas", "scikit-learn", "imbalanced-learn", "XGBoost", "Streamlit", "Groq"],
    github: "https://github.com/Mahfuzy/churn_predictor",
    live: "https://churnpredictor-jlg8rzvny2tncdnxzqsrbt.streamlit.app/",
    liveNote: "Hosted on Streamlit Community Cloud. It sleeps when idle, so give it a few seconds to wake up.",
    shot: {
      desktop: "/work/churn.webp",
      alt: "ChurnPredictor Streamlit app with a Customer Information form for credit score, country, gender, age, balance and products",
      caption: "Woken up and captured · 14 Sep 2026",
    },
    commitCount: 6,
    beats: [
      {
        when: "23 May 2025",
        title: "One day, one model",
        body: "The training script is about fifty lines: drop the customer ID, one-hot encode country and gender, scale five numeric columns, oversample with SMOTE, train XGBoost, and save the model and scaler with joblib.",
        commits: [
          { msg: "first commit" },
          { msg: "Update README" },
          { msg: "updated requirements.txt" },
          { msg: "updated stuff" },
          { msg: "update apps.py" },
        ],
      },
      {
        when: "24 May 2025",
        title: "The app",
        body: "The Streamlit app loads the saved model, takes a customer's details, shows the churn probability and asks Groq what to do about it.",
        commits: [{ msg: "made changes" }],
      },
    ],
    flow: [
      { label: "Customer row", note: "credit, tenure, balance…" },
      { label: "Scaler", note: "joblib" },
      { label: "XGBoost", note: "churn probability" },
      { label: "Groq LLM", note: "retention strategy" },
    ],
    modules: ["app.py", "train_model.py", "check.py"],
    code: [
      {
        path: "train_model.py",
        start: 30,
        caption: "The heart of the training script: balance, split, train.",
        code: `# Handle class imbalance with SMOTE
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X, y)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=42)

# Train XGBoost model
model = XGBClassifier(random_state=42)
model.fit(X_train, y_train)`,
      },
    ],
    lookingBack:
      "SMOTE runs before the train/test split, and the scaler is fitted on all the data, so synthetic and scaled rows leak into the test set and the reported scores are optimistic. Next time: split first, then fit the scaler and oversample on the training data only.",
  },

  collabo: {
    slug: "collabo",
    years: "Jul 2025",
    logline: "A phone app for finding the people you want to build with.",
    intro: [
      "Collabo is an Expo app for people who want to make things together. You onboard by picking your superpowers, what drives you and the projects that excite you. Then you post, endorse people, message them and request to join their projects.",
      "There's no server yet. Everything lives on the phone.",
    ],
    stats: [
      { value: "1", label: "commit" },
      { value: "16", label: "screens" },
      { value: "8", label: "onboarding steps" },
      { value: "897", label: "lines of on-device storage" },
    ],
    stack: ["Expo", "React Native", "Expo Router", "NativeWind", "AsyncStorage", "TypeScript"],
    github: "https://github.com/Mahfuzy/collabo",
    commitCount: 1,
    beats: [
      {
        when: "22 Jul 2025",
        title: "Everything, all at once",
        body: "The whole app arrived in a single commit: 16 screens including an eight-step onboarding flow, a feed, projects, chats, notifications and settings.",
        commits: [{ msg: "first commit" }],
      },
      {
        when: "Inside that commit",
        title: "A backend made of AsyncStorage",
        body: "services/storage.ts is 897 lines that give users, projects, posts, messages and auth tokens a database on the phone, filled with sample data. Replacing it with a real API is the obvious next chapter.",
        logLabel: "files in that commit",
        commits: [
          { msg: "services/storage.ts — userStorage, projectStorage, messageStorage, authStorage" },
          { msg: "services/sampleData.ts — initializeSampleData" },
        ],
      },
    ],
    flow: [
      { label: "Onboarding", note: "8 steps" },
      { label: "Screens", note: "feed · projects · chats" },
      { label: "storage.ts", note: "AsyncStorage on the phone" },
    ],
    modules: ["app", "app/onboarding/steps", "components", "contexts", "services", "types"],
    code: [
      {
        path: "app/onboarding/steps/SuperpowersStep.tsx",
        start: 39,
        caption: "Picking a superpower makes its card spring to 1.08× and settle back.",
        code: `  const handleSelect = (skill: string) => {
    setSelected((prev) => {
      const isSelected = prev.includes(skill);
      if (isSelected) {
        return prev.filter(s => s !== skill);
      } else {
    Animated.sequence([
          Animated.spring(anims.current[skill], { toValue: 1.08, useNativeDriver: true }),
      Animated.spring(anims.current[skill], { toValue: 1, useNativeDriver: true })
    ]).start();
        return [...prev, skill];
      }
    });
  };`,
      },
    ],
    lookingBack:
      "The spring animation starts inside the setSelected updater. React expects updaters to be pure and may run them twice in development, so the card can bounce twice. Starting the animation in the handler, outside the updater, fixes it.",
  },
};

export const projects: Project[] = chapterIndex.map((c) => ({
  ...bodies[c.slug],
  vol: c.vol,
  num: c.num,
  kanji: c.kanji,
  title: c.title,
}));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Reading order runs through Vol. 02 into Vol. 03; the chapter page labels the volume break. */
export function getNeighbors(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? projects[i - 1] : undefined, next: i < projects.length - 1 ? projects[i + 1] : undefined };
}
