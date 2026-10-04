import Link from "@/components/ui/Link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-light",
  secondary: "bg-gold text-navy hover:bg-gold-light",
  ghost: "border border-line text-ink hover:border-gold hover:text-gold-deep",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
