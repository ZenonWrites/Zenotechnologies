import type { ComponentType } from "react";
import { ArrowDownRight, ArrowLeft, Layers } from "lucide-react";
import AzureIcon from "./AzureIcon";
import AwsIcon from "./AWSIcon";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiWordpress,
  SiShopify,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDjango,
  SiFastapi,
  SiLaravel,
  SiFlutter,
  SiTypescript,
  SiAngular,
  SiPostgresql,
} from "react-icons/si";

// Covers react-icons components and the custom AzureIcon / AwsIcon SVG components.
type IconComponent = ComponentType<{ className?: string }>;

interface TechItem {
  label: string;
  Icon: IconComponent;
}

interface TechColumn {
  label: string;
  items: TechItem[];
}

const columns: TechColumn[] = [
  {
    label: "SINGLE",
    items: [
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: SiCss },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "PHP", Icon: SiPhp },
      { label: "mySQL", Icon: SiMysql },
      { label: "WordPress", Icon: SiWordpress },
      { label: "Shopify", Icon: SiShopify },
    ],
  },
  {
    label: "MIDDLE",
    items: [
      { label: "Python", Icon: SiPython },
      { label: "React JS", Icon: SiReact },
      { label: "Node JS", Icon: SiNodedotjs },
      { label: "MERN Stack", Icon: Layers },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Django", Icon: SiDjango },
      { label: "FastAPI", Icon: SiFastapi },
      { label: "Laravel", Icon: SiLaravel },
      { label: "Flutter", Icon: SiFlutter },
      { label: "React Native", Icon: SiReact },
    ],
  },
  {
    label: "ENTERPRISE",
    items: [
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Angular", Icon: SiAngular },
      { label: "Postgre", Icon: SiPostgresql },
      { label: "MS Azure", Icon: AzureIcon },
      { label: "AWS", Icon: AwsIcon },
    ],
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
                {col.items.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="group relative flex items-center gap-3 text-white/80 py-3 text-sm sm:text-base hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    {label}

                    {/* Base line */}
                    <span className="absolute left-0 bottom-0 w-full h-px bg-white/10" />
                    {/* Glow sweep — grows from left to full width on hover */}
                    <span className="absolute left-0 bottom-0 w-full h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
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