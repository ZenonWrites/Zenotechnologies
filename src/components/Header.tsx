import { useState } from "react";
import { Link } from "react-router-dom";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import designImage from './assets/z-final.png'

// Every child link inside a given megamenu tab routes to that tab's
// own parent page — there are no separate sub-pages per item.
const routeFor: Record<string, string> = {
  portfolio: "/portfolio",
  services: "/services",
  technology: "/technology",
};

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

  const closeAll = () => {
    setActiveTab(null);
    setIsMobileMenuOpen(false);
    setMobileAccordion(null);
  };

  const tabContent = {
    portfolio: (
      <div className="grid grid-cols-3 gap-y-16 gap-x-12 p-16 w-full h-full content-start overflow-y-auto">
        <div className="flex flex-col gap-12">
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">All Projects</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Real Estate</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Online Store</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Manufacturers</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Entertainment/Leisure</Link>
        </div>
        <div className="flex flex-col gap-12">
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">New Projects</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Marketing / Corporate</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Food Delivery</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Branding</Link>
        </div>
        <div className="flex flex-col gap-12">
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Creative</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Landing Page</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Dentistry</Link>
          <Link to={routeFor.portfolio} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Web Solution</Link>
        </div>
      </div>
    ),
    services: (
      <div className="grid grid-cols-3 gap-x-12 p-16 w-full h-full content-start overflow-y-auto">
        <div className="flex flex-col">
          <div className="mb-16">
            <Link to={routeFor.services} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase mb-8 block">Website Development</Link>
            <ul className="flex flex-col gap-6">
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Landing page</Link></li>
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> E-commerce Website Development</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-12">
            <Link to={routeFor.services} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">CRM System</Link>
            <Link to={routeFor.services} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Website Support</Link>
            <Link to={routeFor.services} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase leading-relaxed">Search Engine<br />Optimisation</Link>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <Link to={routeFor.services} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase mb-8 block">Web Design</Link>
            <ul className="flex flex-col gap-6">
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> UI/UX Design</Link></li>
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Redesign</Link></li>
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Logo</Link></li>
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> E-commerce Design</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <Link to={routeFor.services} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase mb-8 block leading-relaxed">Mobile Application<br />Development</Link>
            <ul className="flex flex-col gap-6">
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Android Apps</Link></li>
              <li><Link to={routeFor.services} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> iOS Apps</Link></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    technology: (
      <div className="grid grid-cols-3 gap-y-10 gap-x-12 p-12 w-full h-full content-start">
        <div>
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block hover:text-blue-600">Technology Stack</Link>
          <ul className="flex flex-col gap-6">
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Simple</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Middle</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Enterprise</Link></li>
          </ul>
        </div>
        <div>
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block hover:text-blue-600">Digital Design</Link>
          <ul className="flex flex-col gap-6">
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Figma</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Photoshop</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Illustrator</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Framer</Link></li>
          </ul>
        </div>
        <div>
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block hover:text-blue-600">Frontend</Link>
          <ul className="flex flex-col gap-6 mb-8">
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> React</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Angular</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Vue.js</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Flutter</Link></li>
          </ul>
          <Link to={routeFor.technology} onClick={closeAll} className="inline-flex bg-[#e2e4e9] text-gray-800 text-[15px] font-medium px-5 py-2 rounded-full">6+ technologies</Link>
        </div>
        <div>
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block hover:text-blue-600">Backend</Link>
          <ul className="flex flex-col gap-6 mb-8">
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Python</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Node</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Laravel</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> PHP</Link></li>
          </ul>
          <Link to={routeFor.technology} onClick={closeAll} className="inline-flex bg-[#e2e4e9] text-gray-800 text-[15px] font-medium px-5 py-2 rounded-full">6+ technologies</Link>
        </div>
        <div>
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 uppercase mb-8 block hover:text-blue-600">Devops</Link>
          <ul className="flex flex-col gap-6 mb-8">
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> AWS</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Firebase</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> GCP</Link></li>
            <li><Link to={routeFor.technology} onClick={closeAll} className="text-[17px] text-gray-600 hover:text-blue-600 flex items-center gap-5"><span className="w-1.5 h-1.5 border-[1.5px] border-gray-400 rounded-full shrink-0"></span> Azure</Link></li>
          </ul>
          <Link to={routeFor.technology} onClick={closeAll} className="inline-flex bg-[#e2e4e9] text-gray-800 text-[15px] font-medium px-5 py-2 rounded-full">6+ technologies</Link>
        </div>
        <div className="flex flex-col gap-12">
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Database</Link>
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Cloud</Link>
          <Link to={routeFor.technology} onClick={closeAll} className="text-[18px] tracking-wide text-gray-900 hover:text-blue-600 uppercase">Mobile Apps</Link>
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
        <Link to="/" className="font-bold text-xl md:text-2xl tracking-tighter text-white">
          ZenoTech<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-16 text-xl font-medium text-gray-200">
          <Link
            to={routeFor.portfolio}
            onMouseEnter={() => setActiveTab('portfolio')}
            onClick={closeAll}
            className={`hover:text-blue-500 transition-all duration-800 ease-in-out
              ${isScrolled ? "px-0" : "px-2"}
              `}>
            Portfolio
          </Link>

          <Link
            to={routeFor.services}
            onMouseEnter={() => setActiveTab('services')}
            onClick={closeAll}
            className={`hover:text-blue-500 transition-all duration-800 ease-in-out
              ${isScrolled ? "px-0" : "px-2"}
              `}>
            Services
          </Link>

          <Link
            to={routeFor.technology}
            onMouseEnter={() => setActiveTab('technology')}
            onClick={closeAll}
            className={`hover:text-blue-500 transition-all duration-800 ease-in-out
              ${isScrolled ? "px-0" : "px-2"}
              `}>
            Technologies
          </Link>

          <Link to="/about" onMouseEnter={() => setActiveTab(null)} className={`hover:text-blue-500 transition-all duration-800 ease-in-out ${isScrolled ? "px-0" : "px-2"} `}>About</Link>

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
            className="fixed inset-0 z-60 bg-black md:hidden flex flex-col overflow-y-auto"
          >
            {/* Drawer header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <Link to="/" onClick={closeAll} className="font-bold text-xl tracking-tighter text-white">
                ZenoTech<span className="text-blue-500">.</span>
              </Link>
              <button
                onClick={closeAll}
                aria-label="Close menu"
                className="text-white p-2"
              >
                <X size={26} />
              </button>
            </div>

            {/* Drawer nav — accordion style for the three tab groups.
                Tapping the label navigates straight to the parent page;
                tapping the arrow just expands/collapses the sub-list. */}
            <nav className="flex flex-col px-6 py-8 gap-2">
              {(["portfolio", "services", "technology"] as const).map((tab) => {
                const isOpen = mobileAccordion === tab;
                return (
                  <div key={tab} className="border-b border-white/10">
                    <div className="w-full flex items-center justify-between py-5">
                      <Link
                        to={routeFor[tab]}
                        onClick={closeAll}
                        className="text-white text-2xl font-medium capitalize"
                      >
                        {tab}
                      </Link>
                      <button
                        onClick={() => setMobileAccordion(isOpen ? null : tab)}
                        aria-label={`Toggle ${tab} submenu`}
                        className="p-2 -mr-2"
                      >
                        <span
                          className={`text-white text-xl inline-block transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                        >
                          ↓
                        </span>
                      </button>
                    </div>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden flex flex-col gap-4 pl-2">
                        {mobileLinks[tab].map((link) => (
                          <Link
                            key={link}
                            to={routeFor[tab]}
                            onClick={closeAll}
                            className="text-white/70 text-lg hover:text-blue-400 transition-colors"
                          >
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <Link
                to="/about"
                onClick={closeAll}
                className="text-white text-2xl font-medium py-5 border-b border-white/10"
              >
                About
              </Link>
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