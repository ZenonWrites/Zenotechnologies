import webdev from "../components/assets/webdev.jpg";
import crm from "../components/assets/CRM.jpg";
import ecommerce from "../components/assets/ecommerce.jpeg";
import landing from "../components/assets/landing.jpg";
import redesign from "../components/assets/redesign.jpeg";
import application from "../components/assets/application.jpeg";
import seo from "../components/assets/seo.jpeg";

export interface ServiceGroup {
  id: string;
  title: string;
  items: string[];
  image?: string;
}

export interface Division {
  id: string;
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  highlights: string[];
  delivery: string;
  services: ServiceGroup[];
}

/**
 * ADD A NEW DIVISION HERE — the nav, home cards, footer, portfolio filter,
 * contact form and /divisions/:slug page all read from this one array.
 * Edit the copy for each division to match what your experts really offer.
 */
export const divisions: Division[] = [
  {
    id: "software",
    slug: "software",
    name: "Software & AI",
    short: "Websites, apps, SaaS, e-commerce, AI and automation.",
    tagline: "SAAS. APPS. AI. AUTOMATION.",
    description:
      "We develop online stores, CRM systems, SaaS products and mobile apps, and integrate AI and automation into your business processes.",
    highlights: ["Websites & web apps", "SaaS, CRM & e-commerce", "AI & automation"],
    delivery: "Delivered remotely",
    services: [
      {
        id: "01",
        title: "Website development",
        items: ["Angular Website Development", "Laravel Website Development", "Node.js Website Development", "React Website Development", "Vue.js Website Development", "WordPress Website Development"],
        image: webdev,
      },
      {
        id: "02",
        title: "SaaS & AI solutions",
        items: ["SaaS Product Development", "AI Chatbots & Assistants", "LLM Integrations", "Workflow Automation", "Data Pipelines & Dashboards", "API Development"],
      },
      {
        id: "03",
        title: "CRM system",
        items: ["Custom CRM Development", "Sales Automation", "Customer Support Tools", "Lead Management", "Reporting Dashboards", "Third-Party Integrations"],
        image: crm,
      },
      {
        id: "04",
        title: "E-commerce",
        items: ["Shopify Development", "WooCommerce Development", "Payment Gateway Integration", "Inventory Management", "Custom Storefronts", "Marketplace Integration"],
        image: ecommerce,
      },
      {
        id: "05",
        title: "Landing page",
        items: ["Product Landing Pages", "Event Landing Pages", "A/B Testing Pages", "Lead Capture Pages", "Webinar Pages", "Promo Pages"],
        image: landing,
      },
      {
        id: "06",
        title: "Redesign",
        items: ["UX Audit", "Visual Refresh", "Responsive Redesign", "Content Restructuring", "Accessibility Improvements", "Conversion Optimization"],
        image: redesign,
      },
      {
        id: "07",
        title: "Application development",
        items: ["iOS App Development", "Android App Development", "Cross-Platform Apps", "App Maintenance", "App Store Optimization", "Push Notifications"],
        image: application,
      },
      {
        id: "08",
        title: "Search engine optimisation",
        items: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO", "SEO Audits"],
        image: seo,
      },
    ],
  },
  {
    id: "fabrication",
    slug: "fabrication",
    name: "Fabrication & Construction",
    short: "Custom fabrication and construction work, scoped and managed end to end.",
    tagline: "FABRICATE. INSTALL. COMPLETE.",
    description:
      "From custom fabrication to construction packages, our fabrication specialist takes a job from drawing to finished work, while you deal with one point of contact.",
    highlights: ["Custom fabrication", "Construction packages", "Site-ready delivery"],
    delivery: "On-site work, scoped per project",
    services: [
      {
        id: "01",
        title: "Fabrication",
        items: ["Structural Fabrication", "Custom Metalwork", "Gates, Grills & Railings", "Staircases", "Sheds & Roofing Structures", "Repairs & Modifications"],
      },
      {
        id: "02",
        title: "Construction support",
        items: ["Site Assessment", "Material Planning", "Fabrication Drawings", "Installation", "Site Supervision", "Handover & Snagging"],
      },
    ],
  },
  {
    id: "interiors",
    slug: "interiors",
    name: "Online Interior Design",
    short: "Complete home interior design delivered 100% online.",
    tagline: "PLAN. STYLE. VISUALISE.",
    description:
      "Our interior designer works entirely online: you share your space, measurements and taste, and receive layouts, moodboards and 3D visuals ready for your contractor to follow.",
    highlights: ["Layouts & space planning", "Moodboards & 3D visuals", "No site visits needed"],
    delivery: "100% online. No site visits",
    services: [
      {
        id: "01",
        title: "Residential interior design",
        items: ["Full Home Design", "Single Room Design", "Kitchen & Wardrobe Design", "Living & Bedroom Design", "Lighting Plans", "Colour Schemes"],
      },
      {
        id: "02",
        title: "Space planning",
        items: ["Furniture Layouts", "Floor Plan Optimisation", "Storage Planning", "Vastu-Aware Layouts"],
      },
      {
        id: "03",
        title: "Visualisation & selection",
        items: ["Moodboards", "3D Renders", "Material & Finish Selection", "Furniture Shortlists", "Shopping Lists", "Design Consultation Calls"],
      },
    ],
  },
  {
    id: "drafting",
    slug: "drafting",
    name: "Drafting & Project Documentation",
    short: "CAD drawings, drawing reviews and complete project documentation.",
    tagline: "DRAW. REVIEW. DOCUMENT.",
    description:
      "Accurate CAD drafting and careful review of project drawings and documents, so your project goes to site, approval or tender with fewer errors.",
    highlights: ["CAD drafting", "Drawing & project review", "Document sets"],
    delivery: "Delivered remotely",
    services: [
      {
        id: "01",
        title: "CAD drafting",
        items: ["2D Drawings in AutoCAD", "Floor Plans & Sections", "Detail Drawings", "As-Built Drawings", "Sketch-to-CAD Conversion", "Layout Drawings"],
      },
      {
        id: "02",
        title: "Project review",
        items: ["Drawing Review", "Coordination Checks", "Specification Review", "Revision Tracking"],
      },
      {
        id: "03",
        title: "Documentation",
        items: ["Drawing Sets for Approval", "Tender Documents", "Bill of Quantities Support", "Project Reports", "Document Control"],
      },
    ],
  },
];

export const getDivision = (id: string) => divisions.find((d) => d.id === id);
