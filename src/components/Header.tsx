import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import designImage from './assets/z-final.png'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight - 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const tabContent = {
    portfolio: (
      <div className="grid grid-cols-3 gap-y-16 gap-x-12 p-16 w-full h-full content-start overflow-y-auto">
        <div className="flex flex-col gap-12">
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">All Projects</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Real Estate</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Online Store</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Manufacturers</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Entertainment/Leisure</a>
        </div>
        <div className="flex flex-col gap-12">
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">New Projects</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Marketing / Corporate</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Food Delivery</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Branding</a>
        </div>
        <div className="flex flex-col gap-12">
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Creative</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Landing Page</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Dentistry</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Web Solution</a>
        </div>
      </div>
    ),
    services: (
      <div className="grid grid-cols-3 gap-x-12 p-16 w-full h-full content-start overflow-y-auto">
        <div className="flex flex-col">
          <div className="mb-16">
            <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase mb-8 block">Website Development</a>
            <ul className="flex flex-col gap-6">
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Landing page</a></li>
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> E-commerce Website Development</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-12">
            <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">CRM System</a>
            <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Website Support</a>
            <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase leading-relaxed">Search Engine<br />Optimisation</a>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase mb-8 block">Web Design</a>
            <ul className="flex flex-col gap-6">
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> UI/UX Design</a></li>
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Redesign</a></li>
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Logo</a></li>
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> E-commerce Design</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase mb-8 block leading-relaxed">Mobile Application<br />Development</a>
            <ul className="flex flex-col gap-6">
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Android Apps</a></li>
              <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> iOS Apps</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    technology: (
      <div className="grid grid-cols-3 gap-y-10 gap-x-12 p-12 w-full h-full content-start">
        <div>
          <h3 className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block">Technology Stack</h3>
          <ul className="flex flex-col gap-6">
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Simple</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Middle</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Enterprise</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block">Digital Design</h3>
          <ul className="flex flex-col gap-6">
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Figma</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Photoshop</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Illustrator</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Framer</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block">Frontend</h3>
          <ul className="flex flex-col gap-6 mb-8">
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> React</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Angular</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Vue.js</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Flutter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block">Backend</h3>
          <ul className="flex flex-col gap-6 mb-8">
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Python</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Node</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Laravel</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> PHP</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block">Devops</h3>
          <ul className="flex flex-col gap-6 mb-8">
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> AWS</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Firebase</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> GCP</a></li>
            <li><a href="#" className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Azure</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-12">
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Database</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Cloud</a>
          <a href="#" className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Mobile Apps</a>
        </div>
      </div>
    ),
  };

  // Simplified link lists reused inside the mobile accordion
  const mobileLinks: Record<string, string[]> = {
    portfolio: ["All Projects", "Real Estate", "Online Store", "Manufacturers", "New Projects", "Marketing / Corporate", "Branding"],
    services: ["Website Development", "Web Design", "CRM System", "Mobile Application Development", "Website Support"],
    technology: ["Technology Stack", "Frontend", "Backend", "Devops", "Cloud", "Mobile Apps"],
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileAccordion(null);
  };

  return (
    <header
      onMouseLeave={() => setActiveTab(null)}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className={`mt-2 mx-auto px-6 h-18 flex justify-between items-center rounded-full bg-black/30 backdrop-blur-lg transition-all duration-2000 ease-in-out 
        ${isScrolled
            ? "shadow-md w-[92vw] md:w-[70vw]"
            : "w-[92vw] md:w-[90vw]"
          }
      `}>
        {/* Logo Area */}
        <a href="/" className="font-bold text-xl md:text-2xl tracking-tighter text-white">
          ZenoTech<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-16 text-xl font-medium text-gray-200">
          <motion.a
            onMouseEnter={() => setActiveTab('portfolio')}
            href="#"
            className={`hover:text-blue-500 transition-all duration-800 ease-in-out
              ${isScrolled ? "px-0" : "px-2"}
              `}>
            Portfolio
          </motion.a>

          <motion.a
            onMouseEnter={() => setActiveTab('services')}
            href="#"
            className={`hover:text-blue-500 transition-all duration-800 ease-in-out
              ${isScrolled ? "px-0" : "px-2"}
              `}>
            Services
          </motion.a>

          <motion.a
            onMouseEnter={() => setActiveTab('technology')}
            href="#"
            className={`hover:text-blue-500 transition-all duration-800 ease-in-out
              ${isScrolled ? "px-0" : "px-2"}
              `}>
            Technologies
          </motion.a>

          <motion.a onMouseEnter={() => setActiveTab(null)} href="#" className={`hover:text-blue-500 transition-all duration-800 ease-in-out ${isScrolled ? "px-0" : "px-2"} `}>About</motion.a>

        </nav>

        {/* CTA Button & Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center gap-2 bg-white hover:bg-blue-600 text-neutral-800 px-4 py-2.5 rounded-full text-md font-medium transition-all">
            <span>Let's talk</span>
            <span className="text-lg">→</span>
          </button>

          {/* Hamburger Icon (Mobile only) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
          </button>
        </div>

      </div>

      {/* Desktop mega-menu dropdown */}
      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:flex mx-auto top-full w-[90vw] h-[65vh] bg-gray-50 border-t border-gray-200 shadow-xl overflow-hidden rounded-3xl"
          >
            <div className="w-[25%] border-r border-gray-200 flex flex-col justify-center">
              <img src={designImage} alt="design image" className="w-full h-auto max-h-[85%] mx-auto mt-10 object-contain px-4" />
            </div>

            <div className="w-[50%] overflow-hidden">
              {tabContent[activeTab as keyof typeof tabContent]}
            </div>

            <div className="w-[25%] border-l border-gray-200 flex flex-col p-10">
              <h1 className="text-4xl mt-8 font-medium">
                {activeTab.toUpperCase()}
              </h1>
              <div className="mt-auto mb-10 text-xl font-light text-gray-600">
                We develop online stores, CRM systems, SaaS platforms, and apps integrating AI into processes and solutions.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen menu drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black md:hidden flex flex-col overflow-y-auto"
          >
            {/* Drawer header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <a href="/" className="font-bold text-xl tracking-tighter text-white">
                ZenoTech<span className="text-blue-500">.</span>
              </a>
              <button
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="text-white p-2"
              >
                <X size={26} />
              </button>
            </div>

            {/* Drawer nav — accordion style for the three tab groups */}
            <nav className="flex flex-col px-6 py-8 gap-2">
              {(["portfolio", "services", "technology"] as const).map((tab) => {
                const isOpen = mobileAccordion === tab;
                return (
                  <div key={tab} className="border-b border-white/10">
                    <button
                      onClick={() => setMobileAccordion(isOpen ? null : tab)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-white text-2xl font-medium capitalize">{tab}</span>
                      <span
                        className={`text-white text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      >
                        ↓
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden flex flex-col gap-4 pl-2">
                        {mobileLinks[tab].map((link) => (
                          <a
                            key={link}
                            href="#"
                            className="text-white/70 text-lg hover:text-blue-400 transition-colors"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <a
                href="#"
                className="text-white text-2xl font-medium py-5 border-b border-white/10"
              >
                About
              </a>
            </nav>

            {/* Drawer CTA */}
            <div className="mt-auto px-6 py-8">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-neutral-800 px-4 py-4 rounded-full text-lg font-medium">
                <span>Let's talk</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
