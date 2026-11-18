const steps = [
  { n: "01", title: "Brief", text: "Tell us what you need, in any level of detail. One short form or a call." },
  { n: "02", title: "Scope & quote", text: "We shape the brief into a clear scope, timeline and price before anything starts." },
  { n: "03", title: "Expert delivers", text: "The right specialist from the right division does the work, with us managing it." },
  { n: "04", title: "Review & handover", text: "We review the work before it reaches you, then hand over and support." },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-14">HOW IT WORKS</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {steps.map((s) => (
          <div key={s.n} className="border-t border-white/20 pt-5">
            <span className="text-white/40 text-base">{s.n}</span>
            <h3 className="text-white text-2xl sm:text-3xl font-semibold mt-2">{s.title}</h3>
            <p className="text-white/60 text-sm sm:text-base mt-3">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
