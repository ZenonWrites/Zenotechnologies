import ClosingCTASection from "../ClosingCTASection";
import FAQSection from "../FAQSection";
import Hero from "../Hero";
import PortfolioCarousel from "../Portfoliocarousel";
import ServicesSection from "../ServicesSection";
import TechnologiesSection from "../TechnologiesSection";
// import TestimonialSlider from "../TestimonialSlider";
// import ProjectGrid from "../ProjectGrid";





function HomePage () {
    return (
        <div className="w-full overflow-hidden">
        <Hero />
        {/* <ProjectGrid /> */}
        <PortfolioCarousel/>
        <ServicesSection />
        {/* <TestimonialSlider /> */}
        <TechnologiesSection />
        <ClosingCTASection />
        <FAQSection />
        {/* <Footer /> */}
        </div>
     
    )
}

export default HomePage;