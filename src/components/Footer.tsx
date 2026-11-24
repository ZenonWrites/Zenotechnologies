import { Link } from "react-router-dom";
import { useContactForm } from "../context/ContactFormContext";
import { divisions } from "../data/divisions";

const linkCls = "text-white/80 hover:text-white transition-colors text-sm sm:text-base";
const dot = <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-white/30 shrink-0" />;

export default function Footer() {
  const { openContactForm } = useContactForm();

  return (
    <footer className="w-full bg-black px-5 sm:px-10 py-10 sm:py-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16">
        <div>
          <h4 className="text-white/50 tracking-wide mb-4 sm:mb-6 text-sm sm:text-base">DIVISIONS</h4>
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {divisions.map((d) => (
              <li key={d.id} className="flex items-center gap-3">
                {dot}
                <Link to={`/divisions/${d.slug}`} className={linkCls}>{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white/50 tracking-wide mb-4 sm:mb-6 text-sm sm:text-base">COMPANY</h4>
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            <li className="flex items-center gap-3">{dot}<Link to="/about" className={linkCls}>About us</Link></li>
            <li className="flex items-center gap-3">{dot}<Link to="/portfolio" className={linkCls}>Our work</Link></li>
            <li className="flex items-center gap-3">{dot}<Link to="/technology" className={linkCls}>Technologies</Link></li>
            <li className="flex items-center gap-3">
              {dot}
              <button type="button" onClick={() => openContactForm()} className={linkCls}>Contact us</button>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="text-white/40 text-xl sm:text-3xl font-medium leading-snug">
            INTERESTED IN
            <br />
            COOPERATION?
          </h4>

          <div className="mt-4 sm:mt-6 flex flex-col gap-1">
            <a href="mailto:office@zenotechnologies.in" className="text-white text-base sm:text-xl hover:underline break-all">
              office@zenotechnologies.in
            </a>
            <a href="mailto:javed@zenotechnologies.in" className="text-white text-base sm:text-xl hover:underline break-all">
              javed@zenotechnologies.in
            </a>
            <a href="mailto:javed@zenotechnologies.in" className="text-white text-base sm:text-xl hover:underline break-all">
              saif@zenotechnologies.in
            </a>
          </div>

          <button
            type="button"
            onClick={() => openContactForm()}
            className="flex items-center gap-3 mt-6 sm:mt-10 text-white hover:text-white/70 transition-colors"
          >
            <span className="text-xl sm:text-3xl font-bold">LET&rsquo;S BEGIN</span>
            <span className="text-lg sm:text-2xl">&larr;</span>
          </button>
        </div>
      </div>

      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6">
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <Link to="/about" className="text-white/70 text-xs sm:text-sm tracking-wide hover:text-white transition-colors">ABOUT</Link>
          <Link to="/portfolio" className="text-white/70 text-xs sm:text-sm tracking-wide hover:text-white transition-colors">WORK</Link>
          <button type="button" onClick={() => openContactForm()} className="text-white/70 text-xs sm:text-sm tracking-wide hover:text-white transition-colors">
            CONTACT US
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-xs sm:text-sm">
          <span>MUMBAI, MAHARASHTRA, INDIA · REMOTE</span>
          <a href="tel:+919867339964" className="hover:text-white">+91 9867339964</a>
          <a href="tel:+966536201184" className="hover:text-white">+966 53 620 1184</a>
        </div>
      </div>

      <p className="text-white/30 text-xs mt-6 sm:mt-8">© {new Date().getFullYear()} ZenoUnified Solutions. All rights reserved.</p>
    </footer>
  );
}
