import { createFileRoute } from "@tanstack/react-router";
import {
  ClosingCta,
  Container,
  PageShell,
  Section,
  SectionHeader,
  Shot,
  btnPrimary,
  btnSecondary,
  label,
} from "@/components/portfolio/Page";

const FLOW = [
  {
    step: "1",
    title: "Search",
    body: "Filter by type, city, price and amenities, or switch to the map and see price pins by property type.",
    src: "/products/tara-home.webp",
    alt: "Tara Stays search page with filters and a grid of Zambales hostels, each with a photo and a nightly price",
  },
  {
    step: "2",
    title: "Pick a property",
    body: "A full gallery, house rules, check-in times, cancellation policy and a map, on one page.",
    src: "/products/tara-property.webp",
    alt: "A Tara Stays property page with a photo gallery, price, amenities and description",
  },
  {
    step: "3",
    title: "Check dates",
    body: "Choose dates in a calendar built for thumbs. Each room shows how many beds are free and the total for the stay.",
    src: "/products/tara-rooms.webp",
    alt: "Available rooms for three nights on Tara Stays, with beds left, price per night, total and a Book this room button",
  },
  {
    step: "4",
    title: "Book",
    body: "A short form pre-filled from the guest’s profile, a promo code field and a confirm button that stays in reach.",
    src: "/products/tara-book.webp",
    alt: "The Tara Stays booking page with a price breakdown, guest details form, promo code and a confirm booking button",
  },
];

const PHONE = [
  { src: "/products/tara-m-home.webp", alt: "Tara Stays search on a phone", caption: "Search" },
  {
    src: "/products/tara-m-rooms.webp",
    alt: "Available rooms on a phone",
    caption: "Availability",
  },
  { src: "/products/tara-m-book.webp", alt: "The booking page on a phone", caption: "Booking" },
];

const GUEST = [
  "Search, filters and a map view with price pins",
  "Date-aware availability, with beds left per room",
  "Pay by card, or by GCash, Maya or bank transfer with a payment screenshot",
  "Email and WhatsApp confirmations and check-in reminders",
  "Messages between guest and owner on every booking",
  "Waitlist when a room is full, and saved search alerts",
];

const OWNER = [
  "Properties, rooms and individual beds or units",
  "Seasonal price rules, bulk pricing and a calendar view",
  "Occupancy and revenue, per property and side by side",
  "Confirm payments, check guests in and out, verify IDs",
  "Promo codes, a guest blacklist and co-host roles",
  "Webhooks for new bookings, signed so you can verify them",
];

const PLATFORM = [
  "Approval flow: owners submit, admins approve or reject, and owners are emailed",
  "Audit log of every money and sign-in event",
  "Per-user rate limiting that does not punish shared Wi-Fi",
  "Multi-tenant from day one, with the peso and local payment methods first",
  "An offline page when the network drops",
];

const TECH = [
  "Next.js 16",
  "NestJS",
  "PostgreSQL",
  "Drizzle ORM",
  "Redis",
  "Firebase Auth",
  "Stripe",
  "Cloudflare R2",
  "Resend",
  "Twilio WhatsApp",
  "Zod",
  "Docker",
  "pnpm + Turbo",
  "Playwright",
];

export const Route = createFileRoute("/tara-stays")({
  head: () => ({
    meta: [
      { title: "Tara Stays | Lexserver" },
      {
        name: "description",
        content:
          "Tara Stays is a zero-commission hostel booking marketplace for the Philippines, built by Lexserver: search, availability, GCash and Maya payments, an owner dashboard and an admin panel. In development.",
      },
    ],
  }),
  component: TaraStaysPage,
});

function TaraStaysPage() {
  return (
    <PageShell>
      <header className="pb-12 pt-14 md:pb-16 md:pt-20">
        <Container>
          <p className={label}>Our own product · in development</p>
          <h1 className="mt-3 text-[30px] font-medium leading-[1.12] tracking-[-0.02em] md:text-[40px]">
            Tara Stays
          </h1>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-muted">
            <em className="not-italic">“Tara, na!”</em> means “let’s go” in Tagalog. It’s a booking
            marketplace for Philippine hostels: travelers book beds, dorms and private rooms, and
            owners list and manage their properties with no commission on bookings.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/#contact" className={btnPrimary}>
              Build something like this
            </a>
            <a href="/lupaatbahay" className={btnSecondary}>
              See another marketplace we built
            </a>
          </div>
          <div className="mt-12">
            <Shot
              src="/products/tara-property.webp"
              alt="A Tara Stays property page with a photo gallery, price, amenities and description"
              width={1400}
              height={875}
              eager
            />
            <p className="mt-3 text-[14px] text-muted">
              A property page, with demo data for Zambales. Photos are stock images.
            </p>
          </div>
        </Container>
      </header>

      <Section>
        <SectionHeader
          title="Where it stands"
          intro="Tara is a real, working booking engine, still before launch."
        />
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <p className="leading-relaxed text-muted">
            The guest booking flow, owner dashboard and admin panel are built and running on a
            staging environment with demo properties around Zambales. It is not taking public
            bookings yet. We are building it as a custom engine, not a layer over an existing
            channel manager, so we control pricing, availability and payments for the Philippine
            market.
          </p>
          <p className="leading-relaxed text-muted">
            It is also the project we use to keep our own tooling honest: shared Zod schemas that
            flow from the API to the web app, structured logging, automated deploys to our own
            server, and an audit trail on every money event.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="The guest journey"
          intro="Four screens from the staging build, with demo data."
        />
        <ol className="grid gap-12">
          {FLOW.map((f) => (
            <li
              key={f.step}
              className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10"
            >
              <div>
                <p className={label}>Step {f.step}</p>
                <h3 className="mt-1 text-[20px] font-medium tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-2 max-w-[44ch] leading-relaxed text-muted">{f.body}</p>
              </div>
              <Shot src={f.src} alt={f.alt} width={1400} height={875} />
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader
          title="Built for phones first"
          intro="Most travelers book on mobile, so every screen starts there: 44px tap targets, safe-area aware bars, and a confirm button that is always in reach."
        />
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {PHONE.map((s) => (
            <figure key={s.src}>
              <Shot src={s.src} alt={s.alt} width={500} height={1083} />
              <figcaption className="mt-3 text-[14px] text-muted">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="What it covers" intro="Three audiences, one codebase." />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {[
            ["Guests", GUEST],
            ["Property owners", OWNER],
            ["Platform and admin", PLATFORM],
          ].map(([title, items]) => (
            <div key={title as string}>
              <p className={label}>{title as string}</p>
              <ul className="mt-3 grid">
                {(items as string[]).map((i) => (
                  <li key={i} className="border-t border-line py-3 text-[15px] leading-relaxed">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="The stack" />
        <p className="font-mono text-[13px] leading-loose text-muted">{TECH.join(" · ")}</p>
        <p className="mt-4 max-w-[62ch] text-[14px] text-muted">
          Hosted on our own server behind a Cloudflare Tunnel, with images on Cloudflare R2.
        </p>
      </Section>

      <ClosingCta
        title="Need a booking or marketplace platform?"
        body="Tara shows what we build end to end: the guest experience, the owner tools, payments and the operations behind them. Tell us what you have in mind."
      />
    </PageShell>
  );
}
