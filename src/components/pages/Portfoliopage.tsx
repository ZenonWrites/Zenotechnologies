import { useState } from "react";
import { divisions } from "../../data/divisions";
import { projects } from "../../data/projects";
import { useContactForm } from "../../context/ContactFormContext";
import PillButton from "../PillButton";

const FILTERS = [{ id: "all", name: "All" }, ...divisions.map((d) => ({ id: d.id, name: d.name }))];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const { openContactForm } = useContactForm();
  const filtered = active === "all" ? projects : projects.filter((p) => p.division === active);

  return (
    <main className="min-h-screen bg-black">
      <div className="px-5 sm:px-10 pt-16 sm:pt-24 pb-8">
        <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-8xl">OUR WORK</h1>
      </div>

      <div className="sticky top-20 z-40 bg-black/95 backdrop-blur px-5 sm:px-10 py-4">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap ${
                f.id === active
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-10 py-10 sm:py-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
            {filtered.map((project) => (
              <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col group">
                <div className="w-full aspect-4/3 rounded-xl overflow-hidden">
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="text-white text-xl sm:text-2xl font-bold uppercase">{project.title}</h3>
                  <div className="flex flex-col items-end shrink-0">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className={`text-xs sm:text-sm text-right ${i === 0 ? "text-white/90" : "text-white/40"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="py-10 max-w-2xl">
            <p className="text-white/60 text-lg sm:text-2xl">
              Case studies for this division are being added. Tell us about your project and we will share relevant examples.
            </p>
            <div className="mt-8">
              <PillButton label="Start a project" onClick={() => openContactForm(active)} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
