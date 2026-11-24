export interface Testimonial {
  quote: string;
  name: string;
  role: string;        // e.g. "Director, Jwell Pharmaceuticals"
  division: string;    // division id
  source?: { platform: string; url: string }; // e.g. Google, Clutch
}

export const testimonials: Testimonial[] = [
  // add real ones only, with the client's permission
];