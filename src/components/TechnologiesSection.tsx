import { ArrowDownRight, ArrowLeft } from "lucide-react";

interface TechColumn {
  label: string;
  items: string[];
}

const columns: TechColumn[] = [
  {
    label: "SINGLE",
    items: ["HTML", "CSS", "WordPress", "Shopify"],
  },
  {
    label: "MIDDLE",
    items: ["Laravel", "mySQL", "vue", "PHP"],
  },
  {
    label: "ENTERPRISE",
    items: ["React.js", "Azure", "Python", "Angular", "Node.js"],
  },
];

export default function TechnologiesSection() {
  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 sm:gap-16">
        {/* Left: heading + copy + CTA */}
        <div className="flex flex-col justify-between">
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            OUR
            <br />
            TECHNOLOGIES
          </h2>

          <div className="mt-8 md:mt-20">
            <p className="text-white/50 text-base sm:text-lg max-w-xs">
              A personalized approach to every project — for the best results.
            </p>
            <div className="group flex items-center mt-5 sm:mt-6 cursor-pointer w-max">
              <button className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white text-black transition-colors group-hover:bg-gray-300">
                MORE TECHNOLOGIES
              </button>
              <button className="flex items-center justify-center rounded-full bg-white text-black w-9 h-9 sm:w-11 sm:h-11 ml-2 transition-colors group-hover:bg-gray-300">
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: columns — stack on mobile, 3-up from sm */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {columns.map((col) => (
            <div key={col.label}>
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                <span className="text-white text-base sm:text-lg font-semibold tracking-wide">
                  {col.label}
                </span>
                <ArrowDownRight className="text-white/50" size={20} />
              </div>
              <ul className="flex flex-col">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/80 py-3 border-b border-white/10 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-white/60 shrink-0">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
