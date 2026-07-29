import ClosingCTASection from "../ClosingCTASection";
// import FAQSection from "../FAQSection";
import Footer from "../Footer";
import Hero from "../Hero";
import ServicesSection from "../ServicesSection";
import TechnologiesSection from "../TechnologiesSection";
// import TestimonialSlider from "../TestimonialSlider";
// import ProjectGrid from "../ProjectGrid";





function HomePage () {
    return (
        <div className="w-full overflow-hidden">
        <Hero />
        {/* <ProjectGrid /> */}
        <ServicesSection />
        {/* <TestimonialSlider /> */}
        <TechnologiesSection />
        <ClosingCTASection />
        {/* <FAQSection /> */}
        <Footer />
        </div>
     
    )
}

export default HomePage;