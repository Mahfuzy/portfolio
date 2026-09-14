import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionMark({ jp, label, invert }: { jp: string; label: string; invert?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span lang="ja" className={cn("font-jp text-3xl leading-none sm:text-4xl", invert ? "text-hanko-bright" : "text-hanko")}>
        {jp}
      </span>
      <span aria-hidden className={cn("h-[3px] w-10", invert ? "bg-paper" : "bg-ink")} />
      <span className="font-mono text-[11px] uppercase tracking-[0.25em]">{label}</span>
    </div>
  );
}

export function Bubble({ children, tail = "br" }: { children: ReactNode; tail?: "bl" | "br" }) {
  return (
    <span className="bubble" data-tail={tail}>
      {children}
    </span>
  );
}

export function ExternalLink({
  href,
  children,
  invert,
  className,
}: {
  href: string;
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-[44px] items-center gap-2 border-[3px] px-4 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors",
        invert ? "border-paper hover:bg-paper hover:text-ink" : "border-ink hover:bg-ink hover:text-paper",
        className
      )}
    >
      {children}
      <ArrowUpRight aria-hidden className="h-4 w-4" />
    </a>
  );
}
