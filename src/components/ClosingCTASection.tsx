import { ArrowLeft } from "lucide-react";

export default function ClosingCTASection() {
  return (
    <section className="w-full bg-black py-32 flex flex-col items-center text-center px-6">
      <h2 className="text-white font-bold text-5xl md:text-7xl leading-tight max-w-5xl">
        LET&rsquo;S MOVE{" "}
        <span className="inline-block align-middle w-32 h-20 md:w-40 md:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-900 mx-2 -translate-y-2" />
        <br />
        THE WORLD TOGETHER
      </h2>

      <div className="group flex items-center mt-12 cursor-pointer">
        <button className="px-8 py-4 rounded-full text-lg font-semibold bg-white text-black transition-colors group-hover:bg-gray-300">
          BECOME A CLIENT
        </button>
        <button className="flex items-center justify-center rounded-full bg-white text-black w-14 h-14 ml-2 transition-colors group-hover:bg-gray-300">
          <ArrowLeft size={22} />
        </button>
      </div>
    </section>
  );
}
