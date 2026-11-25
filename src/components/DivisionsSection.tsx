import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "../data/divisions";

export default function DivisionsSection() {
  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold">OUR DIVISIONS</h2>
      <p className="text-white/50 text-base sm:text-xl max-w-2xl mt-4 sm:mt-6 mb-8 sm:mb-14">
        Four specialist teams, one point of contact. Tell us what you need and we bring in the right expert.
      </p>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {divisions.map((d, i) => (
          <Link
            key={d.id}
            to={`/divisions/${d.slug}`}
            className="group flex flex-col justify-between min-h-[260px] sm:min-h-[340px] rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-10 transition-colors hover:bg-white/8 md:[&:last-child:nth-child(odd)]:col-span-2"
          >
            <div className="flex items-start justify-between">
              <span className="text-white/40 text-base sm:text-xl">0{i + 1}</span>
              <ArrowUpRight className="text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={32} />
            </div>
            <div className="mt-10">
              <h3 className="text-white text-2xl sm:text-4xl font-semibold leading-tight">{d.name}</h3>
              <p className="text-white/60 text-sm sm:text-lg mt-3 max-w-md">{d.short}</p>
              <ul className="flex flex-wrap gap-2 mt-5">
                {d.highlights.map((h) => (
                  <li key={h} className="text-xs sm:text-sm text-white/70 border border-white/15 rounded-full px-3 py-1">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
