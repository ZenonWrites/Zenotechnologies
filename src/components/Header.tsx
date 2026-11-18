import { useState } from "react";
import { Link } from "react-router-dom";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useContactForm } from "../context/ContactFormContext";
import { divisions } from "../data/divisions";

const linkBase = "hover:text-blue-500 transition-all duration-800 ease-in-out";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { openContactForm } = useContactForm();
  const [menuOpen, setMenuOpen] = useState(false); // desktop divisions dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > window.innerHeight - 50);
  });

  const closeAll = () => {
    setMenuOpen(false);
    setIsMobileMenuOpen(false);
    setMobileDivisionsOpen(false);
  };

  const pad = isScrolled ? "px-0" : "px-2";

  return (
    <header onMouseLeave={() => setMenuOpen(false)} className="fixed top-0 left-0 w-full z-50">
      <div
        className={`mt-2 mx-auto px-6 h-18 flex justify-between items-center rounded-full bg-black/30 backdrop-blur-lg transition-all duration-2000 ease-in-out ${
          isScrolled ? "shadow-md w-[92vw] md:w-[70vw]" : "w-[92vw] md:w-[90vw]"
        }`}
      >
        <Link to="/" onClick={closeAll} className="font-bold text-xl md:text-2xl tracking-tighter text-white">
          ZenoTech<span className="text-blue-500">.</span>
        </Link>

        <nav className="hidden md:flex space-x-12 lg:space-x-16 text-xl font-medium text-gray-200">
          <Link to="/divisions" onMouseEnter={() => setMenuOpen(true)} onClick={closeAll} className={`${linkBase} ${pad}`}>
            Divisions
          </Link>
          <Link to="/portfolio" onMouseEnter={() => setMenuOpen(false)} onClick={closeAll} className={`${linkBase} ${pad}`}>
            Work
          </Link>
          <Link to="/about" onMouseEnter={() => setMenuOpen(false)} onClick={closeAll} className={`${linkBase} ${pad}`}>
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setMenuOpen(false);
              openContactForm();
            }}
            className="hidden md:flex items-center gap-2 bg-white hover:bg-blue-600 text-neutral-800 px-4 py-2.5 rounded-full text-md font-medium transition-all"
          >
            <span>Let&rsquo;s talk</span>
            <span className="text-lg">→</span>
          </button>

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

      {/* Desktop divisions dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:block mx-auto w-[90vw] bg-gray-50 border border-gray-200 shadow-xl rounded-3xl overflow-hidden mt-2"
          >
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 p-8 lg:p-10">
              {divisions.map((d, i) => (
                <Link
                  key={d.id}
                  to={`/divisions/${d.slug}`}
                  onClick={closeAll}
                  className="group rounded-2xl p-5 hover:bg-white transition-colors"
                >
                  <span className="text-sm text-gray-400">0{i + 1}</span>
                  <h3 className="text-2xl font-medium text-gray-900 group-hover:text-blue-600">{d.name}</h3>
                  <p className="text-base text-gray-600 mt-1">{d.short}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black md:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <Link to="/" onClick={closeAll} className="font-bold text-xl tracking-tighter text-white">
                ZenoTech<span className="text-blue-500">.</span>
              </Link>
              <button onClick={closeAll} aria-label="Close menu" className="text-white p-2">
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-2">
              <div className="border-b border-white/10">
                <div className="w-full flex items-center justify-between py-5">
                  <Link to="/divisions" onClick={closeAll} className="text-white text-2xl font-medium">
                    Divisions
                  </Link>
                  <button
                    onClick={() => setMobileDivisionsOpen((v) => !v)}
                    aria-label="Toggle divisions submenu"
                    className="p-2 -mr-2"
                  >
                    <span className={`text-white text-xl inline-block transition-transform duration-300 ${mobileDivisionsOpen ? "rotate-180" : ""}`}>
                      ↓
                    </span>
                  </button>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    mobileDivisionsOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden flex flex-col gap-4 pl-2">
                    {divisions.map((d) => (
                      <Link key={d.id} to={`/divisions/${d.slug}`} onClick={closeAll} className="text-white/70 text-lg hover:text-blue-400 transition-colors">
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/portfolio" onClick={closeAll} className="text-white text-2xl font-medium py-5 border-b border-white/10">
                Work
              </Link>
              <Link to="/about" onClick={closeAll} className="text-white text-2xl font-medium py-5 border-b border-white/10">
                About
              </Link>
            </nav>

            <div className="mt-auto px-6 py-8">
              <button
                onClick={() => {
                  closeAll();
                  openContactForm();
                }}
                className="w-full flex items-center justify-center gap-2 bg-white text-neutral-800 px-4 py-4 rounded-full text-lg font-medium"
              >
                <span>Let&rsquo;s talk</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
