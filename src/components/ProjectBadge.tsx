export default function ProjectBadge({
  kind,
  className = "",
}: {
  kind: "client" | "demo";
  className?: string;
}) {
  const client = kind === "client";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold shadow-md ${
        client
          ? "bg-emerald-400 text-black"
          : "bg-black/60 text-white backdrop-blur-sm border border-white/20"
      } ${className}`}
    >
      {client ? "Client project" : "Demo project"}
    </span>
  );
}