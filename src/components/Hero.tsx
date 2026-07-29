import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import HeroVideo from "./HeroVideo";
import { ArrowRight, ArrowLeft } from "lucide-react";

function Hero() {
  const wrapperRef = useRef(null);
  const slotRef = useRef(null);
  const [rect, setRect] = useState(null);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [released, setReleased] = useState(false); // 👈 fixed vs absolute switch

  useLayoutEffect(() => {
    const measure = () => {
      if (slotRef.current) {
        const r = slotRef.current.getBoundingClientRect();
        // plain viewport coords — correct for `fixed`, no conversion needed
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

  const progress = useTransform(scrollYProgress, [0, 0.65, 1], [0, 1, 1]);

  // flip the moment growth completes
  useMotionValueEvent(progress, "change", (latest) => {
    if (latest >= 1 && !released) setReleased(true);
    if (latest < 1 && released) setReleased(false); // scrolling back up
  });

  const top    = useTransform(progress, [0, 1], [rect?.top ?? 0, 0]);
  const left   = useTransform(progress, [0, 1], [rect?.left ?? 0, 0]);
  const width  = useTransform(progress, [0, 1], [rect?.width ?? 0, viewport.w]);
  const height = useTransform(progress, [0, 1], [rect?.height ?? 0, viewport.h]);
  const radius = useTransform(progress, [0, 1], [16, 0]);

  return (
    <>
      <div ref={wrapperRef} className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="w-full h-screen mx-auto px-10 -my-20 bg-black">
            <div className="flex flex-col h-2/3 mt-5 ml-6">
              <div className="flex -mb-20">
                <div className="flex w-2/3 h-auto font-bold">
                  <h2 className="text-[230px] text-white">SAAS.</h2>
                  <h2 className="text-[230px] text-white">APP.</h2>
                </div>
                <div className="flex w-full -mb-10">
                  <div className="flex w-full overflow-hidden justify-end items-start -mt-4 mr-20">
                    <div ref={slotRef} className="w-105 h-55 invisible" />
                  </div>
                </div>
              </div>
              <div className="flex w-full h-auto">
                <div className="flex -mt-12 font-bold">
                  <h2 className="text-[230px] text-white">AI.</h2>
                  <h2 className="text-[230px] text-white">E-COMMERCE.</h2>
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
                  <button className="justify-center px-7 py-2 rounded-4xl text-3xl bg-black text-black font-semibold transition-all duration-600 group-hover:bg-gray-500 group-hover:text-white">
                    View Portfolio
                  </button>
                  <button className="flex items-center justify-center rounded-4xl text-3xl bg-black text-black font-bold transition-all duration-600 ease-in-out w-14 h-14 px-3 py-2 opacity-100 ml-1 group-hover:w-0 group-hover:px-0 group-hover:opacity-0 group-hover:mr-0 group-hover:bg-gray-500 group-hover:text-white overflow-hidden">
                    <ArrowLeft className="min-w-max" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video lives OUTSIDE the sticky div, directly in the wrapper,
            so it can switch coordinate systems cleanly */}
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
          className="z-20 overflow-hidden mt-20"
        >
          <HeroVideo />
        </motion.div>
      </div>

      <div className="bg-white w-full h-screen" />
    </>
  );
}

export default Hero;