import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Props {
  label: string;
  to?: string;
  onClick?: () => void;
  variant?: "light" | "outline";
}

export default function PillButton({ label, to, onClick, variant = "light" }: Props) {
  const cls =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-base sm:text-lg font-semibold transition-colors " +
    (variant === "light"
      ? "bg-white text-black hover:bg-gray-300"
      : "border border-white/30 text-white hover:bg-white hover:text-black");
  const inner = (
    <>
      {label}
      <ArrowUpRight size={20} />
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return <button type="button" onClick={onClick} className={cls}>{inner}</button>;
}
