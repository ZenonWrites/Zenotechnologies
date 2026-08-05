import type { ComponentType } from "react";
import { ArrowDownRight, ArrowLeft, Layers, ArrowRight } from "lucide-react";
import AzureIcon from "./AzureIcon";
import AwsIcon from "./AwsIcon";
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

          <div className="mt-8 md:mt-20 flex flex-col">
            <p className="text-white/50 text-base sm:text-lg max-w-xs">
              A personalized approach to every project — for the best results.
            </p>
              <div className="-ml-2 group flex justify-center mx-auto cursor-pointer mt-9  items-center h-15 px-3 py-8 rounded-4xl bg-white group-hover:bg-gray-500 text-black group-hover:text-white">
                <button className="py-2 flex items-center justify-center rounded-4xl text-3xl transition-all duration-600 ease-in-out w-0 px-0 opacity-0 ml-0 h-14 group-hover:w-14 group-hover:px-3 group-hover:opacity-100 group-hover:mr-1  overflow-hidden">
                  <ArrowRight size={52} />
                </button>
                <button className="justify-center px-3 py-4 rounded-4xl text-3xl font-semibold transition-all duration-600 ">
                  More Technologies
                </button>
                <button className="flex items-center justify-center rounded-4xl text-3xl  font-bold transition-all duration-600 ease-in-out w-14 h-14 px-3 py-2 opacity-100 ml-0 group-hover:w-0 group-hover:px-0 group-hover:opacity-0 group-hover:mr-0  overflow-hidden">
                  <ArrowLeft size={52} />
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