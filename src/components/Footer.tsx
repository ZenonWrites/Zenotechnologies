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
    <footer className="w-full bg-black px-10 py-16">
      <div className="grid md:grid-cols-3 gap-16">
        {/* Portfolio column */}
        <div>
          <h4 className="text-white/50 tracking-wide mb-6">PORTFOLIO</h4>
          <ul className="flex flex-col gap-3">
            {portfolioLinks.map((link) => (
              <li
                key={link}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div>
          <h4 className="text-white/50 tracking-wide mb-6">SERVICES</h4>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <li
                key={link}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full border border-white/30" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / cooperation column */}
        <div>
          <h4 className="text-white/40 text-3xl font-medium leading-snug">
            INTERESTED IN
            <br />
            COOPERATION?
          </h4>

          <div className="mt-6 flex flex-col gap-1">
            <a href="mailto:office@zenotech.software" className="text-white text-xl hover:underline">
              office@zenotech.software
            </a>
            <a href="mailto:support@zenotech.software" className="text-white text-xl hover:underline">
              support@zenotech.software
            </a>
          </div>

          <div className="flex items-center gap-3 mt-10">
            <h3 className="text-white text-3xl font-bold">LET&rsquo;S BEGIN</h3>
            <span className="text-white text-2xl">&larr;</span>
          </div>

          <div className="flex gap-3 mt-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className={`w-24 h-16 rounded-lg ${logo.bg} flex items-center justify-center text-xs text-black/40`}
              >
                logo
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-6 flex-wrap">
          {bottomLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/70 text-sm tracking-wide hover:text-white transition-colors underline-offset-4 first:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-white/50 text-sm">
          <span>UA</span>
          <span className="text-white">EN</span>
          <span className="ml-4">31 NE 17TH ST, MIAMI, FL 33132, UNITED STATES</span>
          <span>+1 786 744 7141</span>
        </div>
      </div>

      <p className="text-white/30 text-xs mt-8">
        © {new Date().getFullYear()} ZenoTech. All rights reserved.
      </p>
    </footer>
  );
}
