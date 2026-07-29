import { useState } from "react";
import { ArrowDown, ArrowDownRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
}

const services: Service[] = [
  { id: "01", title: "Website development" },
  { id: "02", title: "Branding and design" },
  { id: "03", title: "CRM system" },
  { id: "04", title: "E-commerce" },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-full bg-black px-10 py-20">
      <h2 className="text-white text-6xl font-bold mb-14 ml-2">SERVICES</h2>

      <div className="flex flex-col">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`group flex items-center justify-between w-full text-left px-6 py-9 border-b border-white/10 transition-colors duration-300 ${
                isActive ? "bg-white/4" : "bg-transparent hover:bg-white/2"
              }`}
            >
              <div className="flex items-center gap-8">
                {isActive ? (
                  <ArrowDown className="text-white shrink-0" size={26} strokeWidth={1.5} />
                ) : (
                  <ArrowDownRight
                    className="text-white/40 shrink-0 group-hover:text-white/70 transition-colors"
                    size={26}
                    strokeWidth={1.5}
                  />
                )}
                <span
                  className={`text-4xl md:text-5xl font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {service.title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`text-2xl font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/40"
                  }`}
                >
                  {service.id}
                </span>
                {/* Dashed progress indicator */}
                <div className="hidden sm:flex items-center gap-1.5 ml-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-0.5 rounded-full transition-all duration-300 ${
                        isActive ? "h-4 bg-white" : "h-3 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
