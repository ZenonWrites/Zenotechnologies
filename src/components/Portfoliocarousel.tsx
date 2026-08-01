import { useRef, useState, useLayoutEffect } from "react";
import { motion, useMotionValue, animate, type PanInfo } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string; // placeholder gradient — swap for a real <img> once assets exist
}

const projects: Project[] = [
  {
    id: "wish-flowers",
    title: "WISH FLOWERS",
    tags: ["Flower delivery", "UX/UI Design"],
    image: "bg-gradient-to-br from-pink-300 to-rose-400",
  },
  {
    id: "saved",
    title: "SAVED",
    tags: ["Charitable foundation", "UX/UI Design"],
    image: "bg-gradient-to-br from-amber-200 to-yellow-300",
  },
  {
    id: "miromark",
    title: "MIROMARK",
    tags: ["Interior solutions", "UX/UI Design"],
    image: "bg-gradient-to-br from-slate-100 to-slate-300",
  },
  {
    id: "dental-plus",
    title: "DENTAL PLUS",
    tags: ["Dental clinic", "UX/UI Design"],
    image: "bg-gradient-to-br from-cyan-200 to-sky-300",
  },
  {
    id: "urban-nest",
    title: "URBAN NEST",
    tags: ["Real estate", "UX/UI Design"],
    image: "bg-gradient-to-br from-orange-200 to-amber-300",
  },
  {
    id: "quick-bite",
    title: "QUICK BITE",
    tags: ["Food delivery", "UX/UI Design"],
    image: "bg-gradient-to-br from-lime-200 to-green-300",
  },
];

const GAP_PX = 24; // matches gap-6

export default function PortfolioCarousel() {
  const containerRef = useRef<HTMLDivElement>(null); // fixed viewport, defines drag bounds
  const trackRef = useRef<HTMLDivElement>(null); // the row that actually moves
  const cardRef = useRef<HTMLAnchorElement>(null); // first card, used to measure width
  const suppressClickRef = useRef(false); // prevents a drag-release from also firing a navigation click

  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!cardRef.current || !containerRef.current || !trackRef.current) return;
      const cardWidth = cardRef.current.getBoundingClientRect().width;
      const step = cardWidth + GAP_PX;
      setCardStep(step);

      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      const maxScroll = Math.max(trackWidth - containerWidth, 0);
      setMaxIndex(Math.max(Math.ceil(maxScroll / step), 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goToIndex = (next: number) => {
    if (!cardStep) return;
    const clamped = Math.min(Math.max(next, 0), maxIndex);
    setIndex(clamped);
    animate(x, -clamped * cardStep, { type: "spring", stiffness: 300, damping: 32 });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (!cardStep) return;

    if (Math.abs(info.offset.x) > 5) {
      // This was a real drag, not a tap — block the click that's about
      // to fire on whichever card the pointer happens to release over.
      suppressClickRef.current = true;
      setTimeout(() => {
        suppressClickRef.current = false;
      }, 150);
    }

    // Factor in release velocity so a fast flick carries to the next
    // card even if the drag distance itself was short.
    const projected = x.get() + info.velocity.x * 0.15;
    const rawIndex = -projected / cardStep;
    goToIndex(Math.round(rawIndex));
  };

  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20 overflow-hidden">
      {/* Header row */}
      <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12">
        OUR PORTFOLIO
      </h2>

      {/* Draggable viewport — no native scrollbar, drag/swipe driven.
          Arrows overlay the card row itself, vertically centered. */}
      <div className="relative">
        <div ref={containerRef} className="cursor-grab active:cursor-grabbing">
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -(maxIndex * cardStep), right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project, i) => (
              <Link
                key={project.id}
                to="/portfolio"
                ref={i === 0 ? cardRef : undefined}
                draggable={false}
                onClick={(e) => {
                  if (suppressClickRef.current) e.preventDefault();
                }}
                className="group flex flex-col shrink-0 select-none w-[75%] xs:w-[60%] sm:w-[42%] lg:w-[28%]"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden pointer-events-none">
                  <div
                    className={`w-full h-full ${project.image} group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 pointer-events-none">
                  <h3 className="text-white text-lg sm:text-xl font-bold uppercase">
                    {project.title}
                  </h3>
                  <div className="flex flex-col items-end shrink-0">
                    {project.tags.map((tag, i2) => (
                      <span
                        key={tag}
                        className={`text-xs sm:text-sm text-right ${
                          i2 === 0 ? "text-white/90" : "text-white/40"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Overlay arrows — sit on top of the card row, vertically centered */}
        <button
          onClick={() => goToIndex(index - 1)}
          disabled={index === 0}
          aria-label="Previous"
          className="absolute left-2 sm:left-4 top-[42%] -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white w-11 h-11 sm:w-12 sm:h-12 hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-black/50 disabled:hover:text-white"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => goToIndex(index + 1)}
          disabled={index === maxIndex}
          aria-label="Next"
          className="absolute right-2 sm:right-4 top-[42%] -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white w-11 h-11 sm:w-12 sm:h-12 hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-black/50 disabled:hover:text-white"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="group flex items-center mt-10 sm:mt-14 cursor-pointer w-max">
        <Link
          to="/portfolio"
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold bg-white text-black transition-colors group-hover:bg-gray-300"
        >
          VIEW ALL PROJECTS
        </Link>
        <Link
          to="/portfolio"
          className="flex items-center justify-center rounded-full bg-white text-black w-10 h-10 sm:w-14 sm:h-14 ml-2 transition-colors group-hover:bg-gray-300"
        >
          <ArrowLeft size={52} />
        </Link>
      </div>
    </section>
  );
}