/* ─────────────────────────────────────────────────────────────
   Vol. 02 — one chapter page per project.
   Commit messages and code excerpts are copied verbatim from
   github.com/Mahfuzy (long commit messages are cut with "…").
   Screenshots were captured from the live sites on 14 Sep 2026.
   ───────────────────────────────────────────────────────────── */

import { chapterIndex } from "./chapters";

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
  num: string;
  kanji: string;
  title: string;
  years: string;
  logline: string;
  intro: string[];
  note?: string;
  stats: { value: string; label: string }[];
  stack: string[];
  github: string;
  live?: string;
  liveNote?: string;
  shot?: { desktop: string; phone?: string; alt: string; caption: string };
  commitCount: number;
  beats: Beat[];
  flow?: { label: string; note: string }[];
  modules?: string[];
  code: CodeExcerpt[];
  lookingBack?: string;
};

type ProjectBody = Omit<Project, "num" | "kanji" | "title">;

const bodies: Record<string, ProjectBody> = {
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
  num: c.num,
  kanji: c.kanji,
  title: c.title,
}));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNeighbors(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? projects[i - 1] : undefined, next: i < projects.length - 1 ? projects[i + 1] : undefined };
}
