import { ArrowLeft } from "lucide-react";

export default function ClosingCTASection() {
  return (
    <section className="w-full bg-black py-16 sm:py-32 flex flex-col items-center text-center px-6">
      <h2 className="text-white font-bold text-3xl sm:text-5xl md:text-7xl leading-tight max-w-5xl">
        LET&rsquo;S MOVE{" "}
        <span className="hidden sm:inline-block align-middle w-32 h-20 md:w-40 md:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-900 mx-2 -translate-y-2" />
        <br className="hidden sm:block" />
        THE WORLD TOGETHER
      </h2>

      <div className="group flex items-center mt-8 sm:mt-12 cursor-pointer">
        <button className="px-5 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold bg-white text-black transition-colors group-hover:bg-gray-300">
          BECOME A CLIENT
        </button>
        <button className="flex items-center justify-center rounded-full bg-white text-black w-10 h-10 sm:w-14 sm:h-14 ml-2 transition-colors group-hover:bg-gray-300">
          <ArrowLeft size={18} />
        </button>
      </div>
    </section>
  );
}
