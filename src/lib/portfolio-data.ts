export const PROFILE = {
  name: "Alexies Iglesia",
  studio: "Lexserver",
  role: "Founder · Developer · Designer",
  tagline: "We design, build and run web and mobile products.",
  location: "Hermosa, Bataan · Philippines",
  email: "ialexies@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexies-iglesia",
};

export const TEAM = [
  {
    name: "Alexies Iglesia",
    role: "IT Engineer · Software Engineer",
    location: "Hermosa, Bataan · Philippines",
  },
  {
    name: "Charity Dultra",
    role: "Graphic Designer · Illustrator",
    location: "Philippines",
  },
];

export type ServiceGroup = {
  slug: string;
  title: string;
  summary: string;
  includes: string[];
  tools: string[];
};

/** The three things we sell. The homepage shows the summary, /services shows everything. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    slug: "build",
    title: "Build",
    summary:
      "Websites, web apps and iOS and Android apps, from first sketch to launch. Logo, brand and graphic design come with it when you need them.",
    includes: [
      "Business websites and online stores",
      "Custom web apps, dashboards and admin panels",
      "Cross-platform mobile apps for iOS and Android",
      "Logo, brand identity and graphic design",
    ],
    tools: ["React", "Next.js", "Laravel", "WordPress", "Flutter", "Figma"],
  },
  {
    slug: "get-found",
    title: "Get found",
    summary:
      "Technical SEO audits, Search Console and analytics reporting, and a list of fixes ranked by what matters most. We built Indexwise for this.",
    includes: [
      "Technical and on-page SEO audits",
      "Search Console and Google Analytics setup and reports",
      "Core Web Vitals and page speed fixes",
      "Structured data and sitemaps",
    ],
    tools: ["Search Console", "GA4", "PageSpeed", "Indexwise"],
  },
  {
    slug: "keep-it-running",
    title: "Keep it running",
    summary:
      "Hosting, monitoring, backups and updates on servers we manage. When something breaks, you message us directly.",
    includes: [
      "Managed hosting behind Cloudflare",
      "Uptime and error monitoring",
      "Backups and security updates",
      "IT support and troubleshooting",
    ],
    tools: ["Docker", "Cloudflare", "Linux", "Sentry"],
  },
];

export type ProcessStep = {
  title: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  {
    title: "Talk",
    body: "A call about what you need, who it's for and what you can spend. You get a written quote with the scope spelled out.",
  },
  {
    title: "Design",
    body: "You see and approve the screens before we build them, so there are no surprises later.",
  },
  {
    title: "Build",
    body: "Weekly updates with a working link you can click through on your own phone.",
  },
  {
    title: "Launch and look after it",
    body: "We deploy it, show you how to use it, and stay on for hosting and fixes if you want us to.",
  },
];

export type PortfolioCategory = "web" | "mobile" | "branding" | "design" | "wordpress";

export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  country: string;
  category: PortfolioCategory;
  description: string;
  image?: string;
  /** Pixel height of `image` at 1400px wide, to reserve space before it loads. */
  imageHeight?: number;
  url?: string;
  period?: string;
  status?: "in-development";
  tech?: string[];
  /** Not shown on the site until there is a real client name and a real image. */
  hidden?: boolean;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "biyahero",
    period: "2019 – 2020",
    title: "Biyahero Riding App",
    client: "Groover Delivery Service",
    country: "Philippines",
    category: "mobile",
    description:
      "A ride booking and dispatch app, built from scratch from design through deployment. Real-time tracking, rider management, and customer-facing booking flow.",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    slug: "sarisuki-ecommerce",
    period: "2022 – 2023",
    title: "Supah Quick Ecommerce",
    client: "SARISUKI",
    country: "Philippines",
    category: "mobile",
    description:
      "A grocery ordering app where shoppers browse, check out and track orders in seconds. Served thousands of daily active users at peak grocery delivery demand.",
    tech: ["Flutter", "GraphQL", "Bloc"],
    image: "/products/sarisuki-ecommerce.webp",
    imageHeight: 616,
  },
  {
    slug: "madmonkey-app",
    period: "2023 – present",
    title: "MadMonkey Hostels App",
    client: "MadMonkey Hostels",
    country: "Philippines",
    category: "mobile",
    description:
      "The guest and staff app for a hostel chain with several locations: bookings, a loyalty program and live property updates.",
    tech: ["Flutter", "Firebase", "REST API"],
    image: "/products/madmonkey-dumaguete.webp",
    imageHeight: 769,
  },
  {
    slug: "coastal-kitchen-brand",
    hidden: true,
    title: "Coastal Kitchen",
    client: "Restaurant Client",
    country: "Philippines",
    category: "branding",
    description:
      "Complete brand identity for a coastal seafood restaurant — logo design, color palette, typography system, menu design, and full print collateral suite.",
    tech: ["Adobe Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "nexacore-brand",
    hidden: true,
    title: "NexaCore Brand System",
    client: "Tech Startup",
    country: "Singapore",
    category: "branding",
    description:
      "Modern tech brand identity with logo variants, brand guidelines document, pitch deck template, and a full social media kit ready for launch.",
    tech: ["Adobe Illustrator", "Figma"],
  },
  {
    slug: "zen-wellness-brand",
    hidden: true,
    title: "Zen Wellness Co.",
    client: "Wellness Brand",
    country: "Australia",
    category: "branding",
    description:
      "Calm, modern brand identity for a wellness and lifestyle company — including product packaging design, stationery suite, and brand voice guidelines.",
    tech: ["Adobe Illustrator", "Photoshop"],
  },
  {
    slug: "national-day-campaign",
    hidden: true,
    title: "National Day Campaign",
    client: "Event Organizer",
    country: "Philippines",
    category: "design",
    description:
      "Social media graphics series for a national day celebration — 30+ assets across Instagram, Facebook, and print formats. Delivered in 5 working days.",
    tech: ["Adobe Photoshop", "Illustrator"],
  },
  {
    slug: "tech-illustrations",
    hidden: true,
    title: "Tech Editorial Illustrations",
    client: "Online Publication",
    country: "USA",
    category: "design",
    description:
      "Series of editorial illustrations for a technology-focused online magazine — covering AI, robotics, and digital life themes in a clean vector style.",
    tech: ["Adobe Illustrator", "Photoshop"],
  },
  {
    slug: "coffee-packaging",
    hidden: true,
    title: "Artisan Coffee Packaging",
    client: "Coffee Brand",
    country: "Japan",
    category: "design",
    description:
      "Packaging design for a specialty coffee brand — labels, retail bags, and display materials with a clean Japanese-inspired aesthetic.",
    tech: ["Adobe Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "bataan-autoparts",
    hidden: true,
    title: "Bataan Auto Parts",
    client: "Local Business",
    country: "Philippines",
    category: "wordpress",
    description:
      "Professional WordPress website for a local auto parts and accessories shop — product catalog, contact forms, and Google Maps integration.",
    tech: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    slug: "zambales-resort",
    hidden: true,
    title: "Zambales Beach Resort",
    client: "Resort & Tourism",
    country: "Philippines",
    category: "wordpress",
    description:
      "Responsive WordPress site for a beach resort — online booking integration, photo gallery, amenities showcase, and local area travel guide.",
    tech: ["WordPress", "Custom Theme", "Booking Plugin"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  location: string;
};

/** Not shown on the site: bring back only real, verbatim quotes with the client's permission. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Builds Worlds delivered our website ahead of schedule and it looked better than anything we showed them in the brief. They understood our local market immediately — no need to explain Filipino customer behavior twice.",
    name: "Maria Santos",
    company: "Coastal Kitchen Restaurant",
    location: "Zambales, Philippines",
  },
  {
    quote:
      "We needed a mobile app that could handle real-time booking at scale across our hostel properties. The team built it clean, fast, and on budget. The code quality is excellent — our engineers were impressed.",
    name: "James Huang",
    company: "Property Tech Startup",
    location: "Singapore",
  },
  {
    quote:
      "I've worked with web agencies in Manila and abroad — Builds Worlds gives you that same quality work but with the reliability of someone who actually cares about your success. They answer messages at 10pm.",
    name: "Paolo Reyes",
    company: "DealFlow Brokerage",
    location: "Manila, Philippines",
  },
];

export type Platform = "android" | "ios" | "web" | "extension";

export type OwnProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  platforms: Platform[];
  status: "published" | "in-development" | "coming-soon";
  image?: string;
  url?: string;
  storeLinks?: {
    android?: string;
    ios?: string;
    github?: string;
    chrome?: string;
    website?: string;
  };
  features: string[];
};

export const PRODUCTS: OwnProduct[] = [
  {
    slug: "lupaatbahay",
    name: "LupaAtBahay",
    tagline: "Find Lots & Homes in Central Luzon",
    description:
      "Lots, houses and condos across Pampanga, Tarlac, Zambales and Bataan. Buyers message verified agents directly, and agents list for free.",
    platforms: ["web"],
    status: "published",
    image: "/products/lupaatbahay.webp",
    url: "/lupaatbahay",
    storeLinks: { website: "https://lupaatbahay.com" },
    features: [
      "Browse by city, province & property type",
      "Direct inquiries to agents",
      "Free listing signup for agents",
      "Buyer guides & property tools",
      "Built for mobile-first Filipino users",
    ],
  },
  {
    slug: "aioffice",
    name: "AI Office",
    tagline: "A 3D Office Run by AI Teammates",
    description:
      "A virtual office where Claude-powered teammates take requests, work a task board and report back with real data. Talk to one assistant and watch the team work.",
    platforms: ["web"],
    status: "published",
    image: "/products/aioffice-office.webp",
    url: "/aioffice",
    features: [
      "One assistant that delegates to a team",
      "Task board with questions that need you",
      "Telegram, Slack and WhatsApp",
      "Live data through the Site Insights MCP",
      "Changes ship as pull requests",
    ],
  },
  {
    slug: "indexwise",
    name: "Indexwise",
    tagline: "On-Page SEO Checker for Chrome",
    description:
      "A Chrome extension that finds on-page SEO problems, explains why they matter and shows how to fix them. Runs in your browser with no account and no tracking.",
    platforms: ["extension"],
    status: "published",
    image: "/products/indexwise.webp",
    url: "/indexwise/",
    storeLinks: {
      chrome: "https://chromewebstore.google.com/detail/demkfoednfaklniecnobahjiddbhnlpe",
    },
    features: [
      "Scored audit with copy-paste fixes",
      "CMS detection with platform-specific steps",
      "Raw HTML vs rendered DOM diff",
      "AI & search crawler access matrix",
      "Core Web Vitals and Search Console tab",
    ],
  },
  {
    slug: "re-call",
    name: "Re-call",
    tagline: "Never Miss What Was Said",
    description:
      "An Android app that records phone calls so you can revisit important conversations — business agreements, medical consultations, or anything worth remembering. All recordings stay on your device; nothing is sent to any server.",
    platforms: ["android"],
    status: "coming-soon",
    features: [
      "Manual & automatic call recording",
      "Waveform audio player with seek",
      "Contact name auto-labeling",
      "100% local — no cloud, no servers",
      "Smart cleanup of short recordings",
    ],
  },
  {
    slug: "tara-stays",
    name: "Tara Stays",
    tagline: "Free Hostel Booking for the Philippines",
    description:
      "A free hostel booking marketplace connecting travelers with local accommodations across the Philippines. Zero-commission for property owners, with GCash & Maya payment support.",
    platforms: ["web"],
    status: "in-development",
    image: "/products/tara-stays.webp",
    url: "/tara-stays",
    storeLinks: { website: "https://staging.tara-stays.com/en" },
    features: [
      "Free for travelers & property owners",
      "GCash & Maya payment support",
      "Property owner dashboard",
      "Search by location, dates & price",
      "Zero-commission on all bookings",
    ],
  },
  {
    slug: "fitness-app",
    name: "Fitness Tracker",
    tagline: "Track Workouts, Build Habits",
    description:
      "A web-based fitness and workout tracking app — log workouts, track progress over time, and hit weekly goals. Clean, fast, and works on any device without installing anything.",
    platforms: ["web"],
    status: "coming-soon",
    url: "https://fitness-app.lexserver.org",
    features: [
      "Workout logging & history",
      "Progress tracking & charts",
      "Weekly goal setting",
      "Works on all devices",
      "No app installation needed",
    ],
  },
];

export const TECH = [
  "React",
  "Next.js",
  "Flutter",
  "Capacitor.js",
  "Vue.js",
  "Laravel",
  "WordPress",
  "TypeScript",
  "Firebase",
  "AWS",
  "GraphQL",
  "REST API",
  "MySQL",
  "PostgreSQL",
  "PHP",
  "Adobe Suite",
  "Figma",
  "Blender 3D",
  "Illustrator",
  "Photoshop",
];

export type PricingTier = {
  service: string;
  tag: string;
  price: string;
  unit: string;
  note: string;
  highlight?: boolean;
  includes: string[];
};

/** Starting prices, shown on /services. */
export const PRICING: PricingTier[] = [
  {
    service: "WordPress Site",
    tag: "WordPress",
    price: "₱15,000",
    unit: "starting from",
    note: "Delivered in 2–3 weeks",
    includes: [
      "Up to 7 pages",
      "Mobile responsive design",
      "Contact form & Google Maps",
      "Basic SEO setup",
    ],
  },
  {
    service: "Web Design & Development",
    tag: "Web",
    price: "₱45,000",
    unit: "starting from",
    note: "React / Next.js / Laravel",
    highlight: true,
    includes: [
      "Custom-built, no templates",
      "Up to 10 pages or screens",
      "CMS or admin panel",
      "Performance optimized",
    ],
  },
  {
    service: "Business Branding",
    tag: "Branding",
    price: "₱20,000",
    unit: "starting from",
    note: "3 initial logo concepts",
    includes: [
      "Logo design & variants",
      "Brand color & typography",
      "Brand guidelines PDF",
      "Social media kit",
    ],
  },
  {
    service: "Mobile App",
    tag: "Mobile",
    price: "₱150,000",
    unit: "starting from",
    note: "iOS + Android (Flutter)",
    includes: [
      "Cross-platform build",
      "Up to 10 screens",
      "Firebase or REST backend",
      "App store submission",
    ],
  },
  {
    service: "Graphic Design",
    tag: "Design",
    price: "₱5,000",
    unit: "starting from",
    note: "Per project basis",
    includes: [
      "Social media assets",
      "Print-ready files",
      "Multiple revisions",
      "Source files included",
    ],
  },
  {
    service: "IT Services & Hosting",
    tag: "IT",
    price: "₱2,500",
    unit: "/ month",
    note: "Cancel anytime",
    includes: [
      "Managed web hosting",
      "Monthly maintenance",
      "Security monitoring",
      "Priority email support",
    ],
  },
];

export const ALEXIES_EXPERIENCE = [
  {
    role: "Mobile App Developer",
    company: "MadMonkey Hostels",
    period: "May 2023 – present",
    body: "Feature implementation, API integration, bug fixing, Crashlytics & performance monitoring, stakeholder communication.",
  },
  {
    role: "Mobile App Developer",
    company: "SARISUKI",
    period: "Jan 2022 – May 2023",
    body: "Shipped 5 apps including Supah Quick Ecommerce, Warehouse Fulfillment, Opstech Admin, and Sarisuki Fulfillment.",
  },
  {
    role: "Mobile Developer (Contract)",
    company: "Salon D'Art",
    period: "Oct 2022",
    body: "Built an internal bidding app with a Firebase backend and Zoho Admin API integration.",
  },
  {
    role: "Full-Stack Developer",
    company: "DealFlow Brokerage",
    period: "Feb 2021 – May 2021",
    body: "Built a Business Valuation Tool plus a Google data-scraping Chrome extension.",
  },
  {
    role: "Mobile App Developer",
    company: "Groover Delivery Service",
    period: "Oct 2019 – Feb 2020",
    body: "Designed and built Biyahero, a complete ride and delivery app.",
  },
  {
    role: "Web Developer & IT Personnel",
    company: "HYS Yachts",
    period: "2018 – 2022",
    body: "Web development and IT support for a yacht services company: the website, internal systems and on-site IT help.",
  },
  {
    role: "Web Team Lead / Scrum Master",
    company: "Captivate Solutions",
    period: "Jun 2017 – Sep 2019",
    body: "Led the web team, ran scrum, owned ERDs, client meetings, Laravel/PHP & WordPress development, and server ops.",
  },
];

export const CHARITY_EXPERIENCE = [
  {
    role: "Freelance Graphic Designer",
    company: "Various US Clients",
    period: "2021 – present",
    body: "Independent designer for US companies: brand identity, illustration and digital design across many industries.",
  },
  {
    role: "Graphic Designer",
    company: "Design Pickle",
    period: "2018 – 2021",
    body: "Remote graphic designer producing high-volume on-brand assets for international clients on a subscription design platform.",
  },
  {
    role: "Graphic Designer",
    company: "Captivate Solutions",
    period: "2017 – 2018",
    body: "In-house designer at a software agency: marketing materials, UI assets and client presentations.",
  },
  {
    role: "Bachelor of Fine Arts in Graphic Design, Cum Laude",
    company: "Technological University of the Philippines, Manila",
    period: "Graduated 2017",
    body: "Graduated Cum Laude with a major in Graphic Design.",
  },
];

export const AWARDS = [
  {
    title: "Best Thesis 2015",
    org: "Mondriaan Aura College",
    detail:
      "MerryNation Food Processing Responsive Web-Based Inventory System with Mobile App & CMS.",
  },
  {
    title: "3× Programmer of the Year",
    org: "Mondriaan Aura College · 2013, 2014, 2015",
    detail: "Three consecutive years recognized as top programmer of the institution.",
  },
  {
    title: "Presidential Award for Excellence in Visual Arts",
    org: "Mondriaan Aura College · 2015",
    detail: "Highest institutional honor for sustained excellence in visual arts and design.",
  },
];
