import Image from "next/image";

function getInitials(name: string) {
  const cleaned = name.replace(/^Me\s+/i, "");
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "");
  return letters.join("");
}

export function Avatar({
  name,
  image,
  size = "md",
  className = "",
}: {
  name: string;
  image?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const dimensions = size === "lg" ? "w-36 h-36 text-3xl" : "w-16 h-16 text-lg";

  if (image) {
    const px = size === "lg" ? 144 : 64;
    return (
      <div className={`${dimensions} rounded-full overflow-hidden shrink-0 ${className}`}>
        <Image
          src={image}
          alt={name}
          width={px}
          height={px}
          className="w-full h-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`${dimensions} rounded-full shrink-0 flex items-center justify-center bg-navy text-gold-light font-serif border border-gold/40 ${className}`}
      aria-hidden
    >
      {getInitials(name)}
    </div>
  );
}
