import { Link, Navigate, useParams } from "react-router-dom";
import { useContactForm } from "../../context/ContactFormContext";
import { divisions } from "../../data/divisions";
import { projects } from "../../data/projects";
import PillButton from "../PillButton";
import ServicesSection from "../ServicesSection";
import TechnologiesSection from "../TechnologiesSection";
import ClosingCTASection from "../ClosingCTASection";
import TestimonialsSection from "../TestimonialsSection";

export default function DivisionPage() {
  const { slug } = useParams();
  const { openContactForm } = useContactForm();
  const division = divisions.find((d) => d.slug === slug);
  if (!division) return <Navigate to="/divisions" replace />;

  const work = projects.filter((p) => p.division === division.id);
  const others = divisions.filter((d) => d.id !== division.id);

  return (
    <div className="w-full overflow-hidden">
      <section className="px-5 sm:px-10 pt-16 sm:pt-24 pb-6">
        <Link to="/divisions" className="text-white/50 hover:text-white text-sm sm:text-base">
          ← All divisions
        </Link>
        <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-8xl leading-none mt-6">{division.name.toUpperCase()}</h1>
        <p className="text-white/40 text-lg sm:text-3xl font-semibold mt-5">{division.tagline}</p>
        <p className="text-white/70 text-base sm:text-2xl max-w-3xl mt-6">{division.description}</p>
        <p className="text-white/40 text-sm sm:text-base mt-4">{division.delivery}</p>
        <div className="mt-8">
          <PillButton label="Start a project" onClick={() => openContactForm(division.id)} />
        </div>
      </section>

      <ServicesSection services={division.services} divisionId={division.id} />

      {division.id === "software" && <TechnologiesSection />}
      {division.expert && (
          <section className="px-5 sm:px-10 py-12 sm:py-20 border-t border-white/10">
            <h2 className="text-white text-3xl sm:text-5xl font-bold mb-6">THE EXPERT BEHIND THIS DIVISION</h2>
            <p className="text-white/70 text-base sm:text-xl max-w-3xl">{division.expert.summary}</p>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {[
                ["Career highlights", division.expert.credentials],
                ["Systems & tools", division.expert.tools],
                ["Education", division.expert.education],
              ].map(([title, list]) => (
                <div key={title as string}>
                  <h3 className="text-white/50 text-sm uppercase tracking-wide mb-4">{title as string}</h3>
                  <ul className="space-y-3">
                    {(list as string[]).map((item) => (
                      <li key={item} className="text-white/80 text-sm sm:text-base">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      <section className="px-5 sm:px-10 py-12 sm:py-20">
        <h2 className="text-white text-3xl sm:text-5xl font-bold mb-8">WORK</h2>
        {work.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {work.map((p) => (
              <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="group">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full aspect-4/3 object-cover rounded-xl group-hover:opacity-90 transition-opacity" />
                <h3 className="text-white text-lg sm:text-xl font-bold uppercase mt-4">{p.title}</h3>
                <p className="text-white/40 text-sm">{p.tags.join(" · ")}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-white/50 text-base sm:text-xl max-w-2xl">
            Case studies for this division are being added. Tell us about your project and we will share relevant examples.
          </p>
        )}
      </section>

      <section className="px-5 sm:px-10 pb-12 sm:pb-20">
        <h2 className="text-white/50 text-lg sm:text-2xl mb-4">Also from ZenoUnified Solutions</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((d) => (
            <PillButton key={d.id} label={d.name} to={`/divisions/${d.slug}`} variant="outline" />
          ))}
        </div>
      </section>
      <TestimonialsSection division={division.id} />
      <ClosingCTASection />
    </div>
  );
}
