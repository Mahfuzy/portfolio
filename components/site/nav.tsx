"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { person } from "@/lib/content";

const links = [
  { href: "#story", label: "Story" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-ink bg-paper/95 backdrop-blur-sm">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-8">
        <a href="#top" className="flex min-h-[44px] items-center gap-2">
          <span className="font-display text-lg leading-none">MAHFUZ</span>
          <span lang="ja" className="font-jp text-xs text-hanko">
            {person.katakana}
          </span>
        </a>
        <ul className="flex items-center sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-[44px] items-center px-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-hanko sm:px-3 sm:text-xs"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href={`mailto:${person.email}`}
              className="ml-2 inline-flex min-h-[40px] items-center border-[3px] border-ink bg-ink px-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-hanko hover:bg-hanko"
            >
              Say hello
            </a>
          </li>
        </ul>
      </nav>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="absolute -bottom-[3px] left-0 h-[3px] w-full origin-left bg-hanko"
      />
    </header>
  );
}
