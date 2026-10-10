import { Container, Shot, btnPrimary, textLink, label } from "./Page";

const CLIENTS = ["SARISUKI", "MadMonkey Hostels", "DealFlow Brokerage", "Groover"];

export function Hero() {
  return (
    <section id="top">
      <Container className="pb-14 pt-14 md:pb-20 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className={label}>Lexserver · Software studio in Hermosa, Bataan</p>
            <h1 className="mt-4 max-w-[16ch] text-[34px] font-medium leading-[1.08] tracking-[-0.025em] sm:text-[42px] lg:text-[48px]">
              We design, build and run web and mobile products.
            </h1>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">
              A two-person studio working with businesses across Southeast Asia. We also make and
              run our own products, so we know what happens after launch.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href="#contact" className={btnPrimary}>
                Start a project
              </a>
              <a href="/work" className={textLink}>
                See our work
              </a>
            </div>
          </div>
          <figure>
            <Shot
              src="/products/lupaatbahay-desktop.webp"
              alt="LupaAtBahay home page: search for houses, lots and land for sale or rent in Central Luzon"
              width={1280}
              height={800}
              eager
            />
            <figcaption className="mt-3 text-[14px] text-muted">
              LupaAtBahay, a property marketplace for Central Luzon. Designed, built and hosted by
              us.
            </figcaption>
          </figure>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="py-5">
          <p className="text-[15px] text-muted">
            Apps built for{" "}
            {CLIENTS.map((c, i) => (
              <span key={c}>
                <span className="font-medium text-fg">{c}</span>
                {i < CLIENTS.length - 2 ? ", " : i === CLIENTS.length - 2 ? " and " : "."}
              </span>
            ))}
          </p>
        </Container>
      </div>
    </section>
  );
}
