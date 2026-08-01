import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import HeroVideo from "./HeroVideo";
import { ArrowRight, ArrowLeft } from "lucide-react";

function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [released, setReleased] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (slotRef.current) {
        const r = slotRef.current.getBoundingClientRect();
        setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      }
      setViewport({ w: window.innerWidth, h: window.innerHeight });
      if (wrapperRef.current) setWrapperHeight(wrapperRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const rawProgress = useTransform(scrollYProgress, [0, 0.9, 1], [0, 1, 1]);
  const progress = useSpring(rawProgress, {
    stiffness: 190,
    damping: 10,
    mass: 0.2,
  });

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest >= 1 && !released) setReleased(true);
    if (latest < 1 && released) setReleased(false);
  });

  const top    = useTransform(progress, [0, 1], [rect?.top ?? 0, 0]);
  const left   = useTransform(progress, [0, 1], [rect?.left ?? 0, 0]);
  const width  = useTransform(progress, [0, 1], [rect?.width ?? 0, viewport.w]);
  const height = useTransform(progress, [0, 1], [rect?.height ?? 0, viewport.h]);
  const radius = useTransform(progress, [0, 1], [16, 0]);

  // ————————————————————————————————————————————————
  // MOBILE: simple stacked layout, no scroll-jacking.
  // Scroll-driven fixed/absolute positioning is unreliable on mobile
  // (address bar resize, touch-scroll momentum), so mobile gets a
  // static hero instead of the grow-on-scroll video effect.
  // ————————————————————————————————————————————————
  if (isMobile) {
    return (
      <>
        <div className="w-full bg-black px-5 pt-28 pb-12">
          <h2 className="text-white font-bold text-5xl sm:text-6xl leading-[0.95]">
            SAAS. APP.
            <br />
            AI. E-COMMERCE.
          </h2>

          <div className="w-full aspect-video rounded-2xl overflow-hidden mt-8">
            <HeroVideo />
          </div>

          <p className="text-white/80 text-base mt-8">
            We develop online stores, CRM systems, SaaS solutions, and app
            platforms — integrating AI into processes and business solutions.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <button className="px-6 py-3 rounded-full text-base bg-white text-black font-semibold">
              View Portfolio
            </button>
            <button className="flex items-center justify-center rounded-full bg-white text-black w-11 h-11">
              <ArrowLeft size={18} />
            </button>
          </div>
        </div>

        <div className="w-full bg-black text-white px-5 py-14 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
            All our projects are delivered with quality.
          </h1>
          <button className="mt-6 px-6 py-3 rounded-full text-base bg-white text-black font-semibold">
            Create New
          </button>
        </div>
      </>
    );
  }

  // ————————————————————————————————————————————————
  // DESKTOP: original scroll-grow hero
  // ————————————————————————————————————————————————
  return (
    <>
      <div ref={wrapperRef} className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="w-full h-screen mx-auto px-10 -my-20 bg-black">
            <div className="flex flex-col h-2/3 mt-15 ml-6 gap-y-10">
              <div className="flex -mb-20">
                <div className="flex w-2/3 h-auto font-bold">
                  <h2 className="text-[210px] text-white">SAAS.</h2>
                  <h2 className="text-[210px] text-white">APP.</h2>
                </div>
                <div className="flex w-full -mb-10">
                  <div className="flex w-full overflow-hidden justify-end items-start -mt-4 mr-20">
                    <div ref={slotRef} className="w-105 h-55 invisible" />
                  </div>
                </div>
              </div>
              <div className="flex w-full h-auto">
                <div className="flex -mt-12 font-bold">
                  <h2 className="text-[210px] text-white">AI.</h2>
                  <h2 className="text-[210px] text-white">E-COMMERCE.</h2>
                </div>
              </div>
            </div>

            <div className="flex h-1/3 bg-black">
              <div className="w-1/3 bg-black" />
              <div className="w-1/3 bg-black" />
              <div className="w-1/3 bg-black flex flex-col space-y-2">
                <h2 className="justify-center items-center px-6 text-2xl mt-12">
                  We develop online stores, CRM systems, SaaS solutions, and app
                  platforms — integrating AI into processes and business solutions.
                </h2>
                <div className="group flex mx-auto cursor-pointer mt-9 items-center h-15">
                  <button className="flex items-center justify-center rounded-4xl bg-black text-black text-3xl transition-all duration-600 ease-in-out w-0 px-0 opacity-0 ml-0 h-14 group-hover:w-14 group-hover:px-3 group-hover:opacity-100 group-hover:mr-1 group-hover:bg-gray-500 group-hover:text-white overflow-hidden">
                    <ArrowRight className="min-w-max" />
                  </button>
                  <button className="justify-center px-7 py-2 rounded-4xl text-3xl bg-white text-black font-semibold transition-all duration-600 group-hover:bg-gray-500 group-hover:text-white">
                    View Portfolio
                  </button>
                  <button className="flex items-center justify-center rounded-4xl text-3xl bg-white text-black font-bold transition-all duration-600 ease-in-out w-14 h-14 px-3 py-2 opacity-100 ml-1 group-hover:w-0 group-hover:px-0 group-hover:opacity-0 group-hover:mr-0 group-hover:bg-gray-500 group-hover:text-white overflow-hidden">
                    <ArrowLeft className="min-w-max" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          style={
            released
              ? {
                  position: "absolute",
                  top: wrapperHeight - viewport.h,
                  left: 0,
                  width: viewport.w,
                  height: viewport.h,
                  borderRadius: 0,
                }
              : { position: "fixed", top, left, width, height, borderRadius: radius }
          }
          className="z-20 overflow-hidden mt-22 -ml-15  "
        >
          <HeroVideo />
        </motion.div>
      </div>

      <div className="group flex bg-black w-full h-52 text-white mx-auto space-x-5.5 items-center justify-center text-7xl py-35 mt-20 font-bold">
         <h1>
         All our projects
         </h1>
          <button className="flex items-center mt-2 justify-center rounded-4xl bg-black text-black text-3xl transition-all duration-600 ease-in-out w-0 px-0 opacity-0 ml-0 h-16 group-hover:w-16 group-hover:px-3 group-hover:opacity-100 group-hover:mr-3 group-hover:bg-gray-500 group-hover:text-white overflow-hidden">
            <ArrowRight className="min-w-max w-10 h-10" />
          </button>
          <button className="justify-center mt-2 px-7 py-2 rounded-4xl text-5xl bg-white text-black font-semibold transition-all duration-600 group-hover:bg-gray-500 group-hover:text-white">
            Create New
          </button>
          <button className="flex items-center mt-2 -ml-2 mr-2 justify-center rounded-4xl text-4xl bg-white text-black font-bold transition-all duration-600 ease-in-out w-16 h-16 px-3 py-2 opacity-100  group-hover:w-0 group-hover:px-0 group-hover:opacity-0 group-hover:mr-0 group-hover:bg-gray-500 group-hover:text-white overflow-hidden">
            <ArrowLeft className="min-w-max w-10 h-10" />
          </button> 
          <h1>
            are delivered with quality.
          </h1>
      </div>
    </>
  );
}

export default Hero;
