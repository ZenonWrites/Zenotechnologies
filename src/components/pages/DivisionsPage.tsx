import DivisionsSection from "../DivisionsSection";
import HowItWorksSection from "../HowItWorksSection";
import ClosingCTASection from "../ClosingCTASection";
import TestimonialsSection from "../TestimonialsSection";

export default function DivisionsPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="px-5 sm:px-10 pt-16 sm:pt-24">
        <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-8xl leading-none">
          ONE STUDIO.
          <br />
          FOUR SPECIALISTS.
        </h1>
      </div>
      <DivisionsSection />
      <HowItWorksSection />
      <ClosingCTASection />
    </div>
  );
}
