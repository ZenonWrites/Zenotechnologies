import { ArrowLeft } from "lucide-react";
import { useContactForm } from "../context/ContactFormContext";
import zz from "./assets/zcopy.png"

export default function ClosingCTASection() {
  const { openContactForm } = useContactForm();

  return (
    <section className="w-full bg-black py-16 sm:py-32 flex flex-col items-center text-center px-6">
      <h2 className="text-white font-bold text-3xl sm:text-5xl md:text-7xl leading-tight max-w-5xl">
        LET&rsquo;S MOVE{" "}
        <span className="hidden sm:inline-block align-middle w-32 h-20 md:w-40 md:h-24 rounded-xl  bg-linear-to-br from-emerald-900 to-slate-900 mx-2 -translate-y-2" >
          <img src={zz} className="z-10 object-contain -mt-5"/>
        </span>
        <br className="hidden sm:block" />
        THE WORLD TOGETHER
      </h2>

      <div className="group flex items-center mt-8 sm:mt-12 cursor-pointer">
        <button
          onClick={openContactForm}
          className="justify-center px-[1.46vw] py-0 rounded-4xl text-[2.5vw] whitespace-nowrap bg-white text-black font-semibold transition-all duration-600 group-hover:bg-gray-500 group-hover:text-white"
        >
          BECOME A CLIENT
        </button>
        <button
          onClick={openContactForm}
          aria-label="Become a client"
          className="flex items-center justify-center rounded-full bg-white text-black w-10 h-10 sm:w-14 sm:h-14 ml-2 transition-colors group-hover:bg-gray-300"
        >
          <ArrowLeft size={18} />
        </button>
      </div>
    </section>
  );
}