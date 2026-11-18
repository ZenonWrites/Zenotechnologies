import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useContactForm } from "../context/ContactFormContext";
import type { ServiceGroup } from "../data/divisions";

interface Props {
  services: ServiceGroup[];
  /** Division id, preselected in the contact form. */
  divisionId?: string;
  title?: string;
}

export default function ServicesSection({ services, divisionId = "", title = "SERVICES" }: Props) {
  const { openContactForm } = useContactForm();
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-14 sm:ml-2">
        {title}
      </h2>

      <div className="flex flex-col">
        {services.map((service, index) => {
          const isOpen = index === openIndex;
          const isHovered = index === hoveredIndex;
          // Arrow points down-right by default, rotates to straight-down
          // on hover OR while this row is open.
          const arrowRotation = isOpen || isHovered ? "rotate-90" : "rotate-45";

          return (
            <div
              key={service.id}
              className="border-b border-white/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {/* Row header — click to toggle */}
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`group flex items-center justify-between w-full text-left px-3 sm:px-6 py-5 sm:py-9 transition-colors duration-300 ${
                  isOpen ? "bg-white/4" : "bg-transparent hover:bg-white/2"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-8 min-w-0">
                  <ArrowRight
                    className={`text-white shrink-0 transition-transform duration-300 ease-in-out ${arrowRotation}`}
                    size={45}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-lg sm:text-4xl md:text-5xl font-medium transition-colors duration-300 truncate sm:whitespace-normal py-2 ${
                      isOpen || isHovered ? "text-white" : "text-white/40"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                  <span
                    className={`text-base sm:text-2xl font-medium transition-colors duration-300 ${
                      isOpen || isHovered ? "text-white" : "text-white/40"
                    }`}
                  >
                    {service.id}
                  </span>
                  {/* 9-segment indicator — this row's own segment (matching
                      its position, 1-indexed) glows; grows taller on hover. */}
                  <div className="hidden sm:flex items-center gap-1.5 ml-2">
                    {Array.from({ length: services.length }).map((_, lineIdx) => {
                      const isOwnSegment = lineIdx === index;
                      return (
                        <span
                          key={lineIdx}
                          className={`w-0.5 rounded-full transition-all duration-300 ${
                            isOwnSegment
                              ? isHovered
                                ? "h-4 bg-white"
                                : "h-2 bg-white"
                              : "h-2 bg-white/20"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </button>

              {/* Expandable detail panel */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-3 sm:px-6 pb-10">
                    {/* Mobile only: image first */}
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="md:hidden w-full aspect-4/3 rounded-2xl object-cover"
                      />
                    )}

                    {/* Left: repeated title (mobile) + item grid + button */}
                    <div className="flex-1 order-2 md:order-1">
                      <h3 className="md:hidden text-white text-2xl font-semibold mb-6">
                        {service.title}
                      </h3>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                        {service.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 sm:gap-3 text-white/70 text-sm sm:text-lg"
                          >
                            <span className="w-1.5 h-1.5 rounded-full border border-white/40 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => openContactForm(divisionId)}
                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base sm:text-xl font-medium text-black transition-colors hover:bg-gray-300"
                      >
                        Discuss this service <ArrowRight size={20} />
                      </button>
                    </div>

                    {/* Right: image — desktop only */}
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="hidden md:block w-full md:w-[40%] aspect-4/3 rounded-2xl object-cover order-2"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}