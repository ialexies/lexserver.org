export const PROFILE = {
  name: "Alexies Iglesia",
  studio: "Builds Worlds Studio",
  role: "Founder · Developer · Designer",
  tagline: "Web, Mobile & IT Services for Southeast Asian Businesses",
  location: "Hermosa, Bataan · Philippines",
  email: "ialexies@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexies-iglesia",
};

export const METRICS = [
  { value: "15+", label: "Years experience" },
  { value: "6+", label: "Apps shipped" },
  { value: "9+", label: "Clients served" },
  { value: "10+", label: "Awards & honors" },
];

export type Service = {
  tag: string;
  title: string;
  body: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    tag: "Web",
    title: "Web Design & Development",
    body: "Custom websites and web apps that load fast, look great on every screen, and turn visitors into paying customers.",
    points: ["React", "Next.js", "Vue.js", "Laravel / PHP"],
  },
  {
    tag: "WordPress",
    title: "WordPress Sites",
    body: "Professional business websites and online stores you can manage yourself — no developer needed after launch.",
    points: ["WordPress", "WooCommerce", "Elementor", "Custom Themes"],
  },
  {
    tag: "Mobile",
    title: "Mobile App Development",
    body: "Cross-platform iOS and Android apps that users love — shipped fast, tested thoroughly, maintained reliably.",
    points: ["Flutter", "Capacitor.js", "Firebase", "REST / GraphQL"],
  },
  {
    tag: "Design",
    title: "Graphic Design & Illustration",
    body: "Print-ready and digital design work for businesses — social media, marketing collateral, and editorial illustration.",
    points: ["Adobe Photoshop", "Illustrator", "Print & Digital", "Social Media"],
  },
  {
    tag: "Branding",
    title: "Business Branding",
    body: "Complete brand identities that make your business memorable — from logo to brand guidelines, ready to use everywhere.",
    points: ["Logo Design", "Brand Identity", "Brand Guidelines", "Visual Systems"],
  },
  {
    tag: "IT",
    title: "IT Services & Support",
    body: "Hosting, server setup, and ongoing technical support that keeps your website and apps running around the clock.",
    points: ["AWS / Cloud Hosting", "cPanel / Linux", "Server Ops", "Monitoring"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    body: "We start by understanding your business — your goals, audience, and what success looks like. No jargon, just clear conversation.",
  },
  {
    step: "02",
    title: "Design",
    body: "Wireframes, mockups, and brand concepts crafted and refined with your feedback before a single line of production code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "Development happens in clear sprints. You see progress weekly. We build fast without cutting corners on quality or security.",
  },
  {
    step: "04",
    title: "Launch",
    body: "We handle deployment, testing, and handover. After launch, we stay for support — you're never left to figure it out alone.",
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
  image: string;
  url?: string;
  status?: "in-development";
  tech?: string[];
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "biyahero",
    title: "Biyahero Riding App",
    client: "Groover Delivery Service",
    country: "🇵🇭 Philippines",
    category: "mobile",
    description:
      "End-to-end mobile riding app for booking and dispatch — built from scratch, design through deployment. Real-time tracking, rider management, and customer-facing booking flow.",
    image: "https://picsum.photos/seed/biyahero/800/500",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    slug: "sarisuki-ecommerce",
    title: "Supah Quick Ecommerce",
    client: "SARISUKI",
    country: "🇵🇭 Philippines",
    category: "mobile",
    description:
      "Consumer-facing grocery commerce app — browse, checkout, and track orders in seconds. Served thousands of daily active users at peak grocery delivery demand.",
    image: "https://picsum.photos/seed/sarisuki/800/500",
    tech: ["Flutter", "GraphQL", "Bloc"],
  },
  {
    slug: "dealflow-tool",
    title: "Business Valuation Tool",
    client: "DealFlow Brokerage",
    country: "🇵🇭 Philippines",
    category: "web",
    description:
      "Internal business valuation web tool plus a Chrome extension for scraping deal data from financial sources. Streamlined analyst workflows significantly.",
    image: "https://picsum.photos/seed/dealflow/800/500",
    tech: ["Vue.js", "Laravel", "Chrome Extension"],
  },
  {
    slug: "madmonkey-app",
    title: "MadMonkey Hostels App",
    client: "MadMonkey Hostels",
    country: "🇵🇭 Philippines",
    category: "mobile",
    description:
      "Feature-rich mobile app for a premier hostel chain — booking management, loyalty program, and real-time property updates for staff and guests across multiple locations.",
    image: "https://picsum.photos/seed/madmonkey/800/500",
    tech: ["Flutter", "Firebase", "REST API"],
  },
  {
    slug: "coastal-kitchen-brand",
    title: "Coastal Kitchen",
    client: "Restaurant Client",
    country: "🇵🇭 Philippines",
    category: "branding",
    description:
      "Complete brand identity for a coastal seafood restaurant — logo design, color palette, typography system, menu design, and full print collateral suite.",
    image: "https://picsum.photos/seed/restaurant-brand/800/500",
    tech: ["Adobe Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "nexacore-brand",
    title: "NexaCore Brand System",
    client: "Tech Startup",
    country: "🇸🇬 Singapore",
    category: "branding",
    description:
      "Modern tech brand identity with logo variants, brand guidelines document, pitch deck template, and a full social media kit ready for launch.",
    image: "https://picsum.photos/seed/nexacore/800/500",
    tech: ["Adobe Illustrator", "Figma"],
  },
  {
    slug: "zen-wellness-brand",
    title: "Zen Wellness Co.",
    client: "Wellness Brand",
    country: "🇦🇺 Australia",
    category: "branding",
    description:
      "Calm, modern brand identity for a wellness and lifestyle company — including product packaging design, stationery suite, and brand voice guidelines.",
    image: "https://picsum.photos/seed/wellness/800/500",
    tech: ["Adobe Illustrator", "Photoshop"],
  },
  {
    slug: "national-day-campaign",
    title: "National Day Campaign",
    client: "Event Organizer",
    country: "🇵🇭 Philippines",
    category: "design",
    description:
      "Social media graphics series for a national day celebration — 30+ assets across Instagram, Facebook, and print formats. Delivered in 5 working days.",
    image: "https://picsum.photos/seed/social-campaign/800/500",
    tech: ["Adobe Photoshop", "Illustrator"],
  },
  {
    slug: "tech-illustrations",
    title: "Tech Editorial Illustrations",
    client: "Online Publication",
    country: "🇺🇸 USA",
    category: "design",
    description:
      "Series of editorial illustrations for a technology-focused online magazine — covering AI, robotics, and digital life themes in a clean vector style.",
    image: "https://picsum.photos/seed/illustration/800/500",
    tech: ["Adobe Illustrator", "Photoshop"],
  },
  {
    slug: "coffee-packaging",
    title: "Artisan Coffee Packaging",
    client: "Coffee Brand",
    country: "🇯🇵 Japan",
    category: "design",
    description:
      "Packaging design for a specialty coffee brand — labels, retail bags, and display materials with a clean Japanese-inspired aesthetic.",
    image: "https://picsum.photos/seed/coffee-pack/800/500",
    tech: ["Adobe Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "bataan-autoparts",
    title: "Bataan Auto Parts",
    client: "Local Business",
    country: "🇵🇭 Philippines",
    category: "wordpress",
    description:
      "Professional WordPress website for a local auto parts and accessories shop — product catalog, contact forms, and Google Maps integration.",
    image: "https://picsum.photos/seed/autoparts/800/500",
    tech: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    slug: "zambales-resort",
    title: "Zambales Beach Resort",
    client: "Resort & Tourism",
    country: "🇵🇭 Philippines",
    category: "wordpress",
    description:
      "Responsive WordPress site for a beach resort — online booking integration, photo gallery, amenities showcase, and local area travel guide.",
    image: "https://picsum.photos/seed/resort/800/500",
    tech: ["WordPress", "Custom Theme", "Booking Plugin"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  location: string;
};

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

export type Platform = "android" | "ios" | "web";

export type OwnProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  platforms: Platform[];
  status: "published" | "in-development";
  image: string;
  url?: string;
  storeLinks?: {
    android?: string;
    ios?: string;
    github?: string;
  };
  features: string[];
};

export const PRODUCTS: OwnProduct[] = [
  {
    slug: "re-call",
    name: "Re-call",
    tagline: "Never Miss What Was Said",
    description:
      "An Android app that records phone calls so you can revisit important conversations — business agreements, medical consultations, or anything worth remembering. All recordings stay on your device; nothing is sent to any server.",
    platforms: ["android"],
    status: "published",
    image: "https://picsum.photos/seed/re-call-app/800/500",
    storeLinks: {
      android: "#",
      github: "#",
    },
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
    image: "https://picsum.photos/seed/tara-stays/800/500",
    url: "https://staging.tara-stays.com/en",
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
    status: "in-development",
    image: "https://picsum.photos/seed/fitness-web/800/500",
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

export const EXPERIENCE = [
  {
    role: "Mobile App Developer",
    company: "MadMonkey Hostels",
    period: "May 2023 — Present",
    body: "Feature implementation, API integration, bug fixing, Crashlytics & performance monitoring, stakeholder communication.",
  },
  {
    role: "Mobile App Developer",
    company: "SARISUKI",
    period: "Jan 2022 — May 2023",
    body: "Shipped 5 apps including Supah Quick Ecommerce, Warehouse Fulfillment, Opstech Admin, and Sarisuki Fulfillment.",
  },
  {
    role: "Mobile Developer (Contract)",
    company: "Salon D'Art",
    period: "Oct 2022",
    body: "Full development of an internal bidding app — Firebase backend with Zoho Admin API integration.",
  },
  {
    role: "Full-Stack Developer",
    company: "DealFlow Brokerage",
    period: "Feb 2021 — May 2021",
    body: "Built a Business Valuation Tool plus a Google data-scraping Chrome extension.",
  },
  {
    role: "Mobile App Developer",
    company: "Groover Delivery Service",
    period: "Oct 2019 — Feb 2020",
    body: "Designed and developed Biyahero — a complete riding & delivery mobile app.",
  },
  {
    role: "Web Team Lead / Scrum Master",
    company: "Captivate Solutions",
    period: "Jun 2017 — Sep 2019",
    body: "Led the web team, ran scrum, owned ERDs, client meetings, Laravel/PHP & WordPress development, and server ops.",
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
    detail:
      "Three consecutive years recognized as top programmer of the institution.",
  },
  {
    title: "Presidential Award for Excellence in Visual Arts",
    org: "Mondriaan Aura College · 2015",
    detail:
      "Highest institutional honor for sustained excellence in visual arts and design.",
  },
];
