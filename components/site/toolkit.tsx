"use client";

import { motion } from "motion/react";
import { toolkit } from "@/lib/content";
import { ease, Wipe } from "./motion";
import { SectionMark } from "./ui";

const cadence = ["every day", "most weeks", "in progress"];

export default function Toolkit() {
  return (
    <section aria-labelledby="tools-title" className="border-b-[3px] border-ink bg-paper-deep">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
        <SectionMark jp="道具" label="Toolkit" />
        <h2 id="tools-title" className="mt-6 max-w-[16ch] font-display text-[2.5rem] leading-[0.92] sm:text-5xl lg:text-6xl">
          What I reach for, honestly sorted.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {toolkit.map((g, i) => (
            <Wipe key={g.group} from="up" delay={i * 0.1} className="h-full pb-2 pr-2">
              <div className="flex h-full flex-col border-[3px] border-ink bg-paper p-6 shadow-[8px_8px_0_0_var(--ink)]">
                <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-3">
                  <h3 className="font-display text-2xl">{g.group}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{cadence[i]}</span>
                </div>
                <ul className="mt-5 space-y-2.5 font-serif text-xl">
                  {g.items.map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span aria-hidden className="h-2 w-2 shrink-0 bg-hanko" />
                      {t}
                    </li>
                  ))}
                </ul>
                {g.group === "Learning" && <JapaneseMeter />}
              </div>
            </Wipe>
          ))}
        </div>
      </div>
    </section>
  );
}

function JapaneseMeter() {
  return (
    <div className="mt-auto pt-8">
      <div className="border-t-2 border-dashed border-ink/40 pt-4">
        <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
          <span>
            <span lang="ja" className="font-jp text-sm normal-case tracking-normal">
              日本語
            </span>{" "}
            progress
          </span>
          <span className="text-hanko">nowhere close</span>
        </div>
        <div role="img" aria-label="Japanese progress: nowhere close, but committed" className="mt-2 h-3.5 border-2 border-ink">
          {/* Animate width, not scale: a zero-scale element never registers as in view. */}
          <motion.div
            className="h-full bg-hanko"
            initial={{ width: "0%" }}
            whileInView={{ width: "7%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
          />
        </div>
        <p className="mt-2 font-serif text-lg italic text-ink-soft">…but committed.</p>
      </div>
    </div>
  );
}
