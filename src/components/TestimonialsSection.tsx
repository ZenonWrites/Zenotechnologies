import { testimonials } from "../data/testimonials";

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null; // hides itself until you have real ones
  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-14">WHAT CLIENTS SAY</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8 flex flex-col justify-between">
            <blockquote className="text-white/80 text-base sm:text-lg">“{t.quote}”</blockquote>
            <figcaption className="mt-6">
              <p className="text-white font-medium">{t.name}</p>
              <p className="text-white/50 text-sm">{t.role}</p>
              {t.source && (
                <a href={t.source.url} target="_blank" rel="noopener noreferrer"
                   className="text-xs text-blue-400 hover:underline mt-2 inline-block">
                  Verified on {t.source.platform} ↗
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}