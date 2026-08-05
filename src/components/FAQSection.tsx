import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is the price for development?",
    a: "Pricing depends on scope, complexity, and timeline. Share your requirements and we'll put together a tailored estimate.",
  },
  {
    q: "What terms do we offer?",
    a: "Project timelines are agreed upfront during discovery and confirmed in the proposal before work begins.",
  },
  {
    q: "What we are offering for website promotion?",
    a: "SEO fundamentals, performance optimization, and ongoing support packages tailored to your goals.",
  },
  {
    q: "How you estimate the cost?",
    a: "We break the project into stages, estimate each based on scope and complexity, then share a transparent total.",
  },
  {
    q: "What services does your support service provide?",
    a: "Bug fixes, monitoring, feature updates, and priority response for anything affecting your live product.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-black px-5 sm:px-10 py-12 sm:py-20">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 sm:gap-16">
        {/* Left sidebar card */}
        <div className="bg-white/4 rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-55 md:min-h-105">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold text-lg sm:text-xl">R</span>
          </div>

          <h3 className="text-white text-2xl sm:text-4xl font-semibold mt-6 sm:mt-10">
            Let&rsquo;s talk
          </h3>

          <div className="group flex items-center mt-6 md:mt-auto cursor-pointer w-max">
            <button className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-black transition-colors group-hover:bg-gray-300">
              BOOK A CALL
            </button>
            <button className="flex items-center justify-center rounded-full bg-white text-black w-9 h-9 sm:w-11 sm:h-11 ml-2 transition-colors group-hover:bg-gray-300">
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>

        {/* Right: accordion */}
        <div>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 sm:mb-10">
            FREQUENTLY ASKED QUESTIONS
            <br className="hidden sm:block" />
            AND ANSWERS
          </h2>

          <div className="flex flex-col">
            {faqs.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={item.q} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between py-4 sm:py-7 text-left"
                  >
                    <span className="text-white text-sm sm:text-xl font-medium pr-4 sm:pr-8">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`text-white shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-4 sm:pb-7" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
