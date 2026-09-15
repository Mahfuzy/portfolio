"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Lock } from "lucide-react";
import { chapterCard } from "@/lib/chapters";
import { caseFiles, type CaseFile } from "@/lib/content";
import { ease, Wipe } from "./motion";
import { TurnLink } from "./page-turn";
import { ExternalLink, SectionMark } from "./ui";

export default function CaseFiles() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-14 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-32">
        <SectionMark jp="記録" label="Case files" invert />
        <h2 id="work-title" className="mt-6 font-display text-[2.5rem] leading-[0.92] sm:text-6xl lg:text-7xl">
          The work,
          <br />
          <span className="text-hanko-bright">opened up.</span>
        </h2>
        <p className="mt-6 max-w-[52ch] font-serif text-xl leading-relaxed text-paper/75">
          Three projects, taken apart: a startup I co-founded, a lending platform for a client, and my final-year
          project. Two of those repos are private, so they come with the story, the numbers and the architecture, but
          no code.
        </p>

        <div className="mt-16 lg:mt-24">
          {caseFiles.map((file, i) => (
            <CaseFileView key={file.id} file={file} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseFileView({ file, index }: { file: CaseFile; index: number }) {
  // Size the giant title to its length so it always fills, never overflows.
  const len = file.title.length;
  const titleSize = `clamp(1.5rem,${(88 / (len * 0.86)).toFixed(2)}vw, ${(1240 / (len * 0.86) / 16).toFixed(2)}rem)`;

  return (
    <article aria-labelledby={`${file.id}-title`} className="border-t-[3px] border-paper py-14 lg:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70">
          <span lang="ja" className="font-jp text-sm tracking-normal text-hanko-bright">
            記録
          </span>{" "}
          · Case file {String(index + 1).padStart(2, "0")} · {file.role}
        </p>
        <div className="flex flex-wrap gap-2">
          <TurnLink
            href={`/work/${file.slug}`}
            card={chapterCard(file.slug)}
            className="inline-flex min-h-[44px] items-center gap-2 border-[3px] border-hanko-bright bg-hanko-bright px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-paper hover:bg-paper"
          >
            Read the chapter
            <ArrowRight aria-hidden className="h-4 w-4" />
          </TurnLink>
          {file.github ? (
            <ExternalLink href={file.github} invert>
              Source
            </ExternalLink>
          ) : (
            <span className="inline-flex min-h-[44px] items-center gap-2 border-[3px] border-dashed border-paper/40 px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
              <Lock aria-hidden className="h-3.5 w-3.5" />
              Private repo
            </span>
          )}
          {file.live && (
            <ExternalLink href={file.live} invert>
              {file.liveNote ? "Demo" : "Live"}
            </ExternalLink>
          )}
        </div>
        {file.liveNote && (
          <p className="w-full font-mono text-[11px] leading-relaxed text-paper/60 sm:text-right">{file.liveNote}</p>
        )}
      </div>

      <Wipe className="mt-6">
        <h3 id={`${file.id}-title`} className="font-display leading-[0.85]" style={{ fontSize: titleSize }}>
          {file.title}
        </h3>
      </Wipe>
      <p className="mt-6 max-w-[34ch] font-serif text-2xl italic leading-snug text-paper/90 sm:text-3xl">
        {file.logline}
      </p>

      <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 space-y-5 font-serif text-lg leading-relaxed text-paper/80 sm:text-xl lg:col-span-6">
          {file.story.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
        <dl
          className={`col-span-12 grid self-start border-l-[3px] border-t-[3px] border-paper lg:col-span-5 lg:col-start-8 ${
            file.stats.length === 3 ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {file.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse border-b-[3px] border-r-[3px] border-paper p-4 sm:p-5">
              <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60">{s.label}</dt>
              <dd className="font-display text-[2rem] leading-none text-hanko-bright sm:text-5xl lg:text-[clamp(1.75rem,3.4vw,3rem)]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">How the pieces talk</p>
        <ol className="mt-5 flex flex-col lg:flex-row lg:items-stretch">
          {file.flow.map((step, i) => (
            <li key={step.label} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ delay: i * 0.09, duration: 0.5, ease }}
                className="flex-1 self-stretch border-[3px] border-paper p-4"
              >
                <span className="font-mono text-[10px] text-hanko-bright">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 block font-display text-lg leading-tight">{step.label}</span>
                <span className="mt-1 block font-mono text-[11px] text-paper/60">{step.note}</span>
              </motion.div>
              {i < file.flow.length - 1 && (
                <>
                  <ArrowDown aria-hidden className="mx-auto my-1.5 h-5 w-5 text-hanko-bright lg:hidden" />
                  <ArrowRight aria-hidden className="mx-2 hidden h-5 w-5 shrink-0 text-hanko-bright lg:block" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {file.modules && (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">Inside the repo</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {file.modules.map((m) => (
                <li key={m} className="border-2 border-paper/40 px-3 py-1.5 font-mono text-sm">
                  <span className="text-paper/40">/</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">Stack</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-paper/85">
            {file.stack.map((t, i) => (
              <li key={t}>
                {t}
                {i < file.stack.length - 1 && <span aria-hidden className="ml-4 text-hanko-bright">·</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
