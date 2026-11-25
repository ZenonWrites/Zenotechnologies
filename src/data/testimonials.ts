export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  division: string; // matches a division id, e.g. "software"
  source?: { platform: string; url: string }; // only if it's also on a public review site
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Zeno Unified Solutions built a clean, modern, and trustworthy digital presence for Jwell Pharma. They effortlessly organized our 35 formulations across five medical specialties into a seamless, user-friendly catalog that healthcare professionals can navigate with ease. Highly recommended!",
    name: "Mohammed Altaf Shaikh",
    role: "Director, Jwell Pharmaceuticals",
    division: "software",
  },
];