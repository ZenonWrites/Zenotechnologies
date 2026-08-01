import { useState } from "react";

interface Project {
  id: string;
  title: string;
  tags: string[];
  categories: string[]; // which filter pills this project matches
  // Placeholder gradients stand in for real project imagery.
  // A single entry renders full-bleed; four entries render as a 2x2 collage.
  images: string[];
}

const FILTERS = [
  "ALL",
  "NEW PROJECTS",
  "CREATIVE",
  "ONLINE STORE",
  "FOOD DELIVERY",
  "WEB SOLUTION",
  "MARKETING / CORPORATE",
  "LANDING PAGE",
  "REAL ESTATE",
  "DENTISTRY",
  "MANUFACTURERS",
  "BRANDING",
  "ENTERTAINMENT / LEISURE",
];

const projects: Project[] = [
  {
    id: "wish-flowers",
    title: "WISH FLOWERS",
    tags: ["Flower delivery", "UX/UI Design", "Front end", "Back end"],
    categories: ["NEW PROJECTS", "ONLINE STORE", "BRANDING"],
    images: ["bg-gradient-to-br from-pink-300 to-rose-400"],
  },
  {
    id: "saved",
    title: "SAVED",
    tags: ["Charitable foundation", "UX/UI Design", "Front end", "Back end"],
    categories: ["NEW PROJECTS", "MARKETING / CORPORATE", "ENTERTAINMENT / LEISURE"],
    images: [
      "bg-gradient-to-br from-amber-200 to-yellow-300",
      "bg-gradient-to-br from-sky-200 to-blue-300",
      "bg-gradient-to-br from-emerald-200 to-teal-300",
      "bg-gradient-to-br from-red-200 to-rose-300",
    ],
  },
  {
    id: "miromark",
    title: "MIROMARK",
    tags: ["Interior solutions", "UX/UI Design", "Front end"],
    categories: ["NEW PROJECTS", "WEB SOLUTION", "MANUFACTURERS"],
    images: ["bg-gradient-to-br from-slate-100 to-slate-300"],
  },
  {
    id: "dental-plus",
    title: "DENTAL PLUS",
    tags: ["Dental clinic", "UX/UI Design", "Front end", "Back end"],
    categories: ["LANDING PAGE", "DENTISTRY"],
    images: ["bg-gradient-to-br from-cyan-200 to-sky-300"],
  },
  {
    id: "urban-nest",
    title: "URBAN NEST",
    tags: ["Real estate", "UX/UI Design", "Front end", "Back end"],
    categories: ["REAL ESTATE", "ONLINE STORE"],
    images: ["bg-gradient-to-br from-orange-200 to-amber-300"],
  },
  {
    id: "quick-bite",
    title: "QUICK BITE",
    tags: ["Food delivery", "UX/UI Design", "Front end", "Back end"],
    categories: ["FOOD DELIVERY", "ONLINE STORE"],
    images: ["bg-gradient-to-br from-lime-200 to-green-300"],
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filtered =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <main className="min-h-screen bg-black">
      {/* Heading */}
      <div className="px-5 sm:px-10 pt-28 sm:pt-36 pb-8">
        <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-8xl flex flex-wrap items-center gap-4 sm:gap-6">
          WE ARE
          <span className="hidden sm:inline-block w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden bg-linear-to-br from-red-900 via-black to-slate-900 shrink-0" />
          PROUD
        </h1>
      </div>

      {/* Sticky filter bar — sticks below the floating navbar */}
      <div className="sticky top-20 z-40 bg-black/95 backdrop-blur px-5 sm:px-10 py-4">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project grid */}
      <div className="px-5 sm:px-10 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
          {filtered.map((project) => (
            <div key={project.id} className="flex flex-col cursor-pointer group">
              {/* Image / collage */}
              <div className="w-full aspect-square rounded-xl overflow-hidden">
                {project.images.length === 4 ? (
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full">
                    {project.images.map((img, i) => (
                      <div key={i} className={`w-full h-full ${img}`} />
                    ))}
                  </div>
                ) : (
                  <div className={`w-full h-full ${project.images[0]} group-hover:scale-105 transition-transform duration-500`} />
                )}
              </div>

              {/* Title + tags */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-white text-xl sm:text-2xl font-bold uppercase">
                  {project.title}
                </h3>
                <div className="flex flex-col items-end shrink-0">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`text-xs sm:text-sm text-right ${
                        i === 0 ? "text-white/90" : "text-white/40"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/40 text-center py-20">
            No projects in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}