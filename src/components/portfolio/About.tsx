import { AWARDS, PROFILE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="grid grid-cols-1 border-b-4 border-ink md:grid-cols-2">
      <Reveal className="border-b-4 border-ink md:border-b-0 md:border-r-4">
        <div className="h-full bg-ink p-8 text-paper md:p-12">
          <span className="text-xs font-bold uppercase tracking-widest text-acid">
            / About
          </span>
          <h2 className="font-display mt-4 text-4xl uppercase leading-tight md:text-6xl">
            Build it.
            <br />
            Design it.
            <br />
            <span className="text-pop">Print it.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Based in {PROFILE.location.split(" ·")[0]} — 15+ years across startups
            and agencies, working at the intersection of mobile, web, brand, and
            physical prototyping. Award-winning developer and visual artist.
          </p>
          <p className="mt-4 text-lg leading-relaxed opacity-80">
            I treat a Flutter widget tree the same way I treat a 3D print: model
            it carefully, iterate fast, ship the part that actually works.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="h-full bg-acid p-8 md:p-12">
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">
            / Recognition
          </span>
          <h2 className="font-display mt-4 text-4xl uppercase leading-tight md:text-6xl">
            Accolades.
          </h2>
          <ul className="mt-8 space-y-6">
            {AWARDS.map((a, i) => (
              <li
                key={a.title}
                className={`border-4 border-ink p-5 ${
                  i === 0
                    ? "bg-pop text-white shadow-brut"
                    : i === 1
                      ? "bg-paper shadow-brut"
                      : "bg-ink text-paper shadow-brut-white"
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-widest opacity-80">
                  Award 0{i + 1}
                </p>
                <h3 className="font-display mt-1 text-xl uppercase leading-tight md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm">{a.org}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
