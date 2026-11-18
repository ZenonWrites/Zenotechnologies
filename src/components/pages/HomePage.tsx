import ClosingCTASection from "../ClosingCTASection";
import DivisionsSection from "../DivisionsSection";
import FAQSection from "../FAQSection";
import Hero from "../Hero";
import HowItWorksSection from "../HowItWorksSection";
import PortfolioCarousel from "../Portfoliocarousel";

function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <DivisionsSection />
      <PortfolioCarousel />
      <HowItWorksSection />
      <ClosingCTASection />
      <FAQSection />
    </div>
  );
}

export default HomePage;
