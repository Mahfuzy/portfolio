"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { chapters } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Rise, Wipe } from "./motion";
import { SectionMark } from "./ui";

// Manga sound effects for the loud chapters.
const sfx: Record<string, string> = { "04": "ドドド" };

export default function Arc() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section aria-labelledby="arc-title" className="dots-bg border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-32">
        <SectionMark jp="物語" label="The arc · 2023 → now" />
        <h2 id="arc-title" className="mt-6 font-display text-[2.5rem] leading-[0.92] sm:text-6xl lg:text-7xl">
          From a pricing card <br className="hidden sm:block" />
          to a platform in production.
        </h2>

        <ol ref={listRef} className="relative mt-16 lg:mt-24">
          <div aria-hidden className="absolute bottom-0 left-[18px] top-0 w-[3px] bg-ink/15 lg:left-1/2 lg:-ml-[1.5px]" />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-0 left-[18px] top-0 w-[3px] origin-top bg-hanko lg:left-1/2 lg:-ml-[1.5px]"
          />

          {chapters.map((c, i) => {
            const right = i % 2 === 1;
            const last = i === chapters.length - 1;
            return (
              <li
                key={c.num}
                className="relative grid grid-cols-[3rem_minmax(0,1fr)] pb-14 last:pb-0 lg:grid-cols-2 lg:gap-x-28 lg:pb-24"
              >
                <motion.span
                  aria-hidden
                  lang="ja"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "0px 0px -35% 0px" }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                  className={cn(
                    "absolute left-[19.5px] top-3 z-10 -ml-[19px] grid h-[38px] w-[38px] place-items-center rounded-full border-[3px] font-jp text-sm lg:left-1/2",
                    last ? "border-hanko bg-hanko text-paper" : "border-ink bg-paper"
                  )}
                >
                  {c.n}
                </motion.span>

                <div className={cn("col-start-2 row-start-1", right ? "lg:col-start-2" : "lg:col-start-1")}>
                  <Wipe from={right ? "left" : "right"} className="pb-2 pr-2">
                    <article
                      className={cn(
                        "border-[3px] border-ink p-6 shadow-[8px_8px_0_0_var(--ink)] sm:p-8",
                        last ? "bg-ink text-paper" : "bg-paper"
                      )}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em]">
                        <span>
                          <span lang="ja" className={cn("font-jp text-sm tracking-normal", last ? "text-hanko-bright" : "text-hanko")}>
                            第{c.n}章
                          </span>{" "}
                          · Chapter {c.num}
                        </span>
                        <span className={last ? "text-paper/70" : "text-muted"}>{c.when}</span>
                      </div>
                      <h3 className="mt-5 font-display text-[1.9rem] leading-[0.95] sm:text-4xl">{c.title}</h3>
                      <p
                        className={cn(
                          "mt-4 font-serif text-lg leading-relaxed sm:text-xl",
                          last ? "text-paper/85" : "text-ink-soft"
                        )}
                      >
                        {c.body}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {c.evidence.map((e) => (
                          <li key={e.label}>
                            {!e.href ? (
                              <span
                                className={cn(
                                  "inline-flex min-h-[40px] items-center border-2 border-dashed px-3 font-mono text-[11px]",
                                  last ? "border-paper/40 text-paper/70" : "border-ink/40 text-muted"
                                )}
                              >
                                {e.label}
                              </span>
                            ) : (
                            <a
                              href={e.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "inline-flex min-h-[40px] items-center gap-1.5 border-2 px-3 font-mono text-[11px] transition-colors",
                                last
                                  ? "border-paper/60 hover:bg-paper hover:text-ink"
                                  : "border-ink hover:bg-ink hover:text-paper"
                              )}
                            >
                              {e.label}
                              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                            </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Wipe>
                </div>

                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none row-start-1 hidden items-start lg:flex",
                    right ? "col-start-1 justify-end" : "col-start-2 justify-start"
                  )}
                >
                  <Rise className={cn("relative flex items-start gap-5", right && "flex-row-reverse")}>
                    <span lang="ja" className="kanji-tone block font-jp text-[11rem] leading-none">
                      {c.n}
                    </span>
                    <span lang="ja" className="tate mt-3 font-jp text-2xl tracking-[0.25em] text-hanko">
                      第{c.n}章
                    </span>
                    {sfx[c.num] && (
                      <span lang="ja" className="sfx absolute -bottom-6 left-10 whitespace-nowrap font-jp text-7xl text-hanko">
                        {sfx[c.num]}
                      </span>
                    )}
                  </Rise>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
