import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Service {
  id: string;
  title: string;
  items: string[]; // flows into a 2-column grid, row by row
  // Swap this for a real <img src={...} /> per service once assets are ready.
  imageClass: string;
}

const services: Service[] = [
  {
    id: "01",
    title: "Website development",
    items: [
      "Angular Website Development",
      "Laravel Website Development",
      "Node.js Website Development",
      "React Website Development",
      "Vue.js Website Development",
      "WordPress Website Development",
    ],
    imageClass: "bg-gradient-to-br from-slate-100 to-slate-300",
  },
  {
    id: "02",
    title: "Branding and design",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Packaging Design",
      "Style Guide",
      "Brand Strategy",
    ],
    imageClass: "bg-gradient-to-br from-rose-100 to-orange-200",
  },
  {
    id: "03",
    title: "CRM system",
    items: [
      "Custom CRM Development",
      "Sales Automation",
      "Customer Support Tools",
      "Lead Management",
      "Reporting Dashboards",
      "Third-Party Integrations",
    ],
    imageClass: "bg-gradient-to-br from-sky-100 to-indigo-200",
  },
  {
    id: "04",
    title: "E-commerce",
    items: [
      "Shopify Development",
      "WooCommerce Development",
      "Payment Gateway Integration",
      "Inventory Management",
      "Custom Storefronts",
      "Marketplace Integration",
    ],
    imageClass: "bg-gradient-to-br from-emerald-100 to-teal-200",
  },
  {
    id: "05",
    title: "Landing page",
    items: [
      "Product Landing Pages",
      "Event Landing Pages",
      "A/B Testing Pages",
      "Lead Capture Pages",
      "Webinar Pages",
      "Promo Pages",
    ],
    imageClass: "bg-gradient-to-br from-amber-100 to-yellow-200",
  },
  {
    id: "06",
    title: "Website support",
    items: [
      "Bug Fixes",
      "Performance Monitoring",
      "Security Updates",
      "Content Updates",
      "Uptime Monitoring",
      "Technical Support",
    ],
    imageClass: "bg-gradient-to-br from-purple-100 to-fuchsia-200",
  },
  {
    id: "07",
    title: "Redesign",
    items: [
      "UX Audit",
      "Visual Refresh",
      "Responsive Redesign",
      "Content Restructuring",
      "Accessibility Improvements",
      "Conversion Optimization",
    ],
    imageClass: "bg-gradient-to-br from-cyan-100 to-blue-200",
  },
  {
    id: "08",
    title: "Application development",
    items: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Apps",
      "App Maintenance",
      "App Store Optimization",
      "Push Notifications",
    ],
    imageClass: "bg-gradient-to-br from-lime-100 to-green-200",
  },
  {
    id: "09",
    title: "Search engine optimisation",
    items: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
      "Local SEO",
      "SEO Audits",
    ],
    imageClass: "bg-gradient-to-br from-red-100 to-rose-200",
  },
];

const TOTAL_LINES = services.length;

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-14 sm:ml-2">
        SERVICES
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
                    {Array.from({ length: TOTAL_LINES }).map((_, lineIdx) => {
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
                    <div
                      className={`md:hidden w-full aspect-4/3rounded-2xl overflow-hidden ${service.imageClass}`}
                    />

                    {/* Left: repeated title (mobile) + item grid + button */}
                    <div className="flex-1 order-2 md:order-1">
                      <h3 className="md:hidden text-white text-2xl font-semibold mb-6">
                        {service.title}
                      </h3>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                        {service.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 sm:gap-3 text-white/70 text-sm sm:text-lg hover:text-white transition-colors cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full border border-white/40 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="group/btn flex items-center mt-8 sm:mt-10 cursor-pointer w-max">
                        <button className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white text-black transition-colors group-hover/btn:bg-gray-300">
                          VIEW SERVICE DETAILS
                        </button>
                        <button className="flex items-center justify-center rounded-full bg-white text-black w-9 h-9 sm:w-11 sm:h-11 ml-2 transition-colors group-hover/btn:bg-gray-300">
                          <ArrowLeft size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Right: image — desktop only */}
                    <div
                      className={`hidden md:block w-full md:w-[40%] aspect-4/3 rounded-2xl overflow-hidden order-2 ${service.imageClass}`}
                    />
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