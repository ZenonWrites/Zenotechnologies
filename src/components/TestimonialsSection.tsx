import { testimonials } from "../data/testimonials";

interface Props {
  division?: string; // pass a division id to show only that division's testimonials
}

export default function TestimonialsSection({ division }: Props) {
  const items = division ? testimonials.filter((t) => t.division === division) : testimonials;
  if (items.length === 0) return null; // hides itself when there is nothing to show

  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-14">
        WHAT CLIENTS SAY
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((t) => (
          <figure
            key={t.name + t.role}
            className="rounded-2xl bg-neutral-100 p-6 sm:p-8 flex flex-col justify-between shadow-lg"
          >
            <blockquote className="text-neutral-800 text-base sm:text-lg">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-neutral-300">
              <p className="text-black font-semibold">{t.name}</p>
              <p className="text-neutral-500 text-sm">{t.role}</p>
              {t.source && (
                <a
                  href={t.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline mt-2 inline-block"
                >
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