import { Link } from "react-router-dom";
import TechnologiesSection from "../TechnologiesSection";

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-black pt-16 sm:pt-24">
      <div className="px-5 sm:px-10 mb-6">
        <Link to="/divisions/software" className="text-white/50 hover:text-white text-sm sm:text-base">
          ← Software &amp; AI
        </Link>
      </div>
      <TechnologiesSection />
    </main>
  );
}
