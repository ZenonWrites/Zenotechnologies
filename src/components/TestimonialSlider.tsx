import { useState } from "react";
import { Play } from "lucide-react";

interface Slide {
  stat: string;
  clients: string;
  label: string;
  quote: string;
  author: string;
  role: string;
}

const slides: Slide[] = [
  {
    stat: "16x",
    clients: "400+",
    label: "SATISFIED CLIENTS",
    quote:
      "After the website launch, the client noticed an increase in traffic and more request submissions. Visitors spent more time on the site, and the bounce rate decreased. REDSTONE delivered the project on time and within budget. The team was responsive, adaptable, and offered practical solutions.",
    author: "Daria Nausiova",
    role: "Product Manager, ValidSoft",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState<number>(0);
  const total = 4;
  const slide = slides[0];

  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-start">
        {/* Video thumbnail with play button */}
        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-slate-800 to-slate-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play case study video"
              className="w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Play className="text-black ml-1" size={18} fill="black" />
            </button>
          </div>
          <span className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white/70 text-xs sm:text-sm tracking-wide">
            Play
          </span>
        </div>

        {/* Quote + stat */}
        <div className="flex flex-col gap-6 sm:gap-10">
          <div>
            <span className="text-red-600 text-4xl sm:text-6xl leading-none font-serif">&ldquo;</span>
            <p className="text-white/90 text-base sm:text-xl leading-relaxed -mt-2 sm:-mt-4">
              {slide.quote}
            </p>
            <p className="text-white/50 mt-4 sm:mt-6 text-sm sm:text-base">
              {slide.author}, {slide.role}
            </p>
          </div>

          <div>
            <div className="text-white text-4xl sm:text-6xl font-bold">{slide.clients}</div>
            <div className="text-white/60 tracking-wide mt-1 text-sm sm:text-base">
              {slide.label}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom timeline / slide selector */}
      <div className="mt-10 sm:mt-16 relative">
        <div className="h-px w-full bg-white/15" />
        <div className="flex justify-between mt-4 sm:mt-6">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-lg sm:text-2xl font-medium transition-colors ${
                i === active ? "text-white" : "text-white/30 hover:text-white/60"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
