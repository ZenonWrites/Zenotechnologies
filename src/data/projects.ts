import jwell from "../components/assets/jwell-ss.jpg";
import design from "../components/assets/design.jpeg";
import feastly from "../components/assets/feastly.jpeg";
import industry from "../components/assets/industry.jpeg";
import maison from "../components/assets/maison.jpeg";

export interface Project {
  id: string;
  title: string;
  division: string; // matches a Division id
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  { id: "jwell-pharma", title: "JWELL PHARMACEUTICALS", division: "software", tags: ["Landing Website", "UX/UI Design"], image: jwell, link: "https://www.jwellpharma.com/" },
  { id: "brand-design", title: "DESIGN BRAND STUDIO", division: "software", tags: ["Promotional", "UX/UI Design"], image: design, link: "https://design-branding.vercel.app/" },
  { id: "feastly", title: "FEASTY FOOD DELIVERY", division: "software", tags: ["Real-time Apps", "Full Stack"], image: feastly, link: "https://feastly-sepia.vercel.app/" },
  { id: "industrial-web", title: "INDUSTRIAL MANUFACTURING", division: "software", tags: ["Promotional", "UX/UI Design"], image: industry, link: "https://industry-website-kappa.vercel.app/" },
  { id: "maison-ore", title: "MAISON-ORE", division: "software", tags: ["E-Commerce", "Full Stack"], image: maison, link: "https://maison-ore-eight.vercel.app/" },
];
