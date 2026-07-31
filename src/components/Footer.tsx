interface ClientLogo {
  name: string;
  bg: string;
}

const portfolioLinks: string[] = [
  "New projects",
  "Creative",
  "Real estate",
  "Marketing / Corporate",
  "Landing page",
  "Online store",
  "Food delivery",
  "Dentistry",
  "Manufacturers",
  "Branding",
  "Web solution",
  "Entertainment / Leisure",
];

const serviceLinks: string[] = [
  "Website development",
  "Branding and design",
  "CRM system",
  "E-commerce",
  "Landing page",
  "Website support",
  "Redesign",
  "Application development",
  "Search engine optimisation",
];

const bottomLinks: string[] = ["ABOUT", "AWARDS", "REVIEWS", "BLOG", "CONTACT US"];

const clientLogos: ClientLogo[] = [
  { name: "logo-1", bg: "bg-white" },
  { name: "logo-2", bg: "bg-pink-500" },
  { name: "logo-3", bg: "bg-slate-900" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black px-5 sm:px-10 py-10 sm:py-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16">
        {/* Portfolio column */}
        <div>
          <h4 className="text-white/50 tracking-wide mb-4 sm:mb-6 text-sm sm:text-base">
            PORTFOLIO
          </h4>
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {portfolioLinks.map((link) => (
              <li
                key={link}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
              >
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-white/30 shrink-0" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div>
          <h4 className="text-white/50 tracking-wide mb-4 sm:mb-6 text-sm sm:text-base">
            SERVICES
          </h4>
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {serviceLinks.map((link) => (
              <li
                key={link}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
              >
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-white/30 shrink-0" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / cooperation column */}
        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="text-white/40 text-xl sm:text-3xl font-medium leading-snug">
            INTERESTED IN
            <br />
            COOPERATION?
          </h4>

          <div className="mt-4 sm:mt-6 flex flex-col gap-1">
            <a
              href="mailto:office@zenotech.software"
              className="text-white text-base sm:text-xl hover:underline break-all"
            >
              office@zenotech.software
            </a>
            <a
              href="mailto:support@zenotech.software"
              className="text-white text-base sm:text-xl hover:underline break-all"
            >
              support@zenotech.software
            </a>
          </div>

          <div className="flex items-center gap-3 mt-6 sm:mt-10">
            <h3 className="text-white text-xl sm:text-3xl font-bold">LET&rsquo;S BEGIN</h3>
            <span className="text-white text-lg sm:text-2xl">&larr;</span>
          </div>

          <div className="flex gap-3 mt-4 sm:mt-6 flex-wrap">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className={`w-20 h-14 sm:w-24 sm:h-16 rounded-lg ${logo.bg} flex items-center justify-center text-xs text-black/40`}
              >
                logo
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6">
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          {bottomLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/70 text-xs sm:text-sm tracking-wide hover:text-white transition-colors underline-offset-4 first:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-xs sm:text-sm">
          <span>UA</span>
          <span className="text-white">EN</span>
          <span className="md:ml-4">31 NE 17TH ST, MIAMI, FL 33132, UNITED STATES</span>
          <span>+1 786 744 7141</span>
        </div>
      </div>

      <p className="text-white/30 text-xs mt-6 sm:mt-8">
        © {new Date().getFullYear()} ZenoTech. All rights reserved.
      </p>
    </footer>
  );
}
