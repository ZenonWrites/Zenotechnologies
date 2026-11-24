import { Link } from "react-router-dom";
import { useContactForm } from "../../context/ContactFormContext";
import { divisions } from "../../data/divisions";
import PillButton from "../PillButton";

const principles = [
  { title: "One point of contact", text: "You never chase several people. We own the conversation, the quote and the delivery." },
  { title: "Clear scope before work", text: "Every project starts with a written scope, timeline and price, so there are no surprises later." },
  { title: "Reviewed before it reaches you", text: "Each deliverable is checked by us first, whether it is code, a drawing, a design or a fabricated piece." },
  { title: "The right expert, not a generalist", text: "Each division is run by a specialist in that field, brought in when your project needs them." },
];

const steps = [
  { n: "01", title: "You send a brief", text: "Short or detailed, through the form, a call or WhatsApp." },
  { n: "02", title: "We scope and quote", text: "We turn it into a clear scope, timeline and price." },
  { n: "03", title: "We match the expert", text: "The specialist for your type of work takes the project." },
  { n: "04", title: "We manage and deliver", text: "We keep you updated, review the work and hand it over." },
];

export default function AboutPage() {
  const { openContactForm } = useContactForm();

  return (
    <div className="w-full overflow-hidden">
      {/* Intro */}
      <section className="px-5 sm:px-10 pt-16 sm:pt-24 pb-10">
        <p className="text-white/40 text-sm sm:text-base tracking-wide uppercase">About ZenoUnified Solutions</p>
        <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-8xl leading-none mt-4">
          ONE STUDIO.
          <br />
          FOUR SPECIALISTS.
        </h1>
        <p className="text-white/70 text-base sm:text-2xl max-w-3xl mt-8">
          ZenoUnified Solutions started as a software studio. Today it brings together specialists in software and AI,
          fabrication and construction, online interior design, and CAD drafting and project documentation,
          so you can get different kinds of work done through one team.
        </p>
      </section>

      {/* Story */}
      <section className="px-5 sm:px-10 py-12 sm:py-20 grid md:grid-cols-[1fr_2fr] gap-8 sm:gap-16 border-t border-white/10">
        <h2 className="text-white text-3xl sm:text-5xl font-bold">WHY WE<br />WORK THIS WAY</h2>
        <div className="space-y-5 text-white/70 text-base sm:text-xl max-w-3xl">
          <p>
            Most projects need more than one kind of skill, and finding, vetting and managing separate
            freelancers or agencies is slow and risky. We took the opposite approach: build a network of
            proven experts, each focused on one field, and put a single accountable team in front of them.
          </p>
          <p>
            You tell us what you need. We scope it, match it to the right specialist, manage the work and
            review it before delivery. You get expert work without having to coordinate it yourself.
          </p>
          <p>
            We are based in Mumbai and work remotely with clients across regions. Software, design and
            drafting are delivered online; fabrication and construction are scoped around your location.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="px-5 sm:px-10 py-12 sm:py-20 border-t border-white/10">
        <h2 className="text-white text-3xl sm:text-5xl font-bold mb-8 sm:mb-14">HOW WE WORK</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-white/20 pt-5">
              <span className="text-white/40">{s.n}</span>
              <h3 className="text-white text-2xl font-semibold mt-2">{s.title}</h3>
              <p className="text-white/60 text-sm sm:text-base mt-3">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divisions */}
      <section className="px-5 sm:px-10 py-12 sm:py-20 border-t border-white/10">
        <h2 className="text-white text-3xl sm:text-5xl font-bold mb-8 sm:mb-14">WHAT WE DO</h2>
        <div className="flex flex-col">
          {divisions.map((d, i) => (
            <Link
              key={d.id}
              to={`/divisions/${d.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-8 border-b border-white/10 py-6 sm:py-8 hover:bg-white/3 px-2 sm:px-4 transition-colors"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="text-white/40">0{i + 1}</span>
                <h3 className="text-white/70 group-hover:text-white text-xl sm:text-4xl font-medium transition-colors">{d.name}</h3>
              </div>
              <p className="text-white/50 text-sm sm:text-base sm:max-w-sm">{d.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="px-5 sm:px-10 py-12 sm:py-20 border-t border-white/10">
        <h2 className="text-white text-3xl sm:text-5xl font-bold mb-8 sm:mb-14">OUR PRINCIPLES</h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8">
              <h3 className="text-white text-xl sm:text-2xl font-semibold">{p.title}</h3>
              <p className="text-white/60 text-sm sm:text-base mt-3">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 sm:px-10 py-12 sm:py-24 border-t border-white/10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-white text-3xl sm:text-6xl font-bold leading-tight">LET&rsquo;S TALK ABOUT<br />YOUR PROJECT</h2>
          <div className="mt-8">
            <PillButton label="Start a project" onClick={() => openContactForm()} />
          </div>
        </div>
        <div className="text-white/70 text-base sm:text-xl space-y-2 md:justify-self-end">
          <p className="text-white/40 text-sm uppercase tracking-wide">Get in touch</p>
          <p><a href="mailto:office@zenotechnologies.in" className="hover:text-white underline-offset-4 hover:underline">office@zenotechnologies.in</a></p>
          <p><a href="mailto:javed@zenotechnologies.in" className="hover:text-white underline-offset-4 hover:underline">javed@zenotechnologies.in</a></p>
          <p><a href="tel:+919867339964" className="hover:text-white">+91 9867339964</a></p>
          <p><a href="tel:+966536201184" className="hover:text-white">+966 53 620 1184</a></p>
          <p className="text-white/40 text-sm pt-2">Mumbai, Maharashtra, India · Remote</p>
        </div>
      </section>
    </div>
  );
}
