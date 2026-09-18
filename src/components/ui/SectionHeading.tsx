export function SectionHeading({
  kicker,
  title,
  lead,
  align = "left",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {kicker && <div className="kicker mb-3">{kicker}</div>}
      <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight">{title}</h2>
      {lead && <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">{lead}</p>}
    </div>
  );
}
