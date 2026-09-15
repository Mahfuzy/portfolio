import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { chapterCard, coverCards, volumeLabel } from "@/lib/chapters";
import { getNeighbors, projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Rise, Wipe } from "./motion";
import { TurnLink } from "./page-turn";
import { ExternalLink, SectionMark } from "./ui";

export default function ChapterPage({ project: p }: { project: Project }) {
  const { prev, next } = getNeighbors(p.slug);
  // Sized against its own column (container units), so long titles never clip beside the stats panel.
  const titleSize = `clamp(1.75rem, ${(96 / (p.title.length * 0.9)).toFixed(2)}cqi, 10rem)`;
  const total = String(projects.filter((x) => x.vol === p.vol).length).padStart(2, "0");
  const code = p.code ?? [];
  const hasHood = Boolean(p.flow || p.modules || code.length || p.lookingBack);

  return (
    <article>
      {/* ── Title page ───────────────────────────── */}
      <header id="top" className="relative overflow-hidden border-b-[3px] border-ink pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="speed-lines h-[180vmax] w-[180vmax] shrink-0 opacity-[0.08]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="mt-5 flex items-center justify-between gap-4 border-y-[3px] border-ink py-1 font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]">
            <TurnLink
              href="/#work"
              card={coverCards.work}
              className="inline-flex min-h-[40px] items-center gap-2 transition-colors hover:text-hanko"
            >
              <ArrowLeft aria-hidden className="h-3.5 w-3.5" />
              Vol. 01
            </TurnLink>
            <span className="hidden sm:inline">{volumeLabel(p.vol)}</span>
            <span>{p.years}</span>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12 pb-16 pt-10 lg:pb-24 lg:pt-14">
            <div className="col-span-12 lg:col-span-8">
              <Rise>
                <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span lang="ja" className="font-jp text-4xl leading-none text-hanko sm:text-5xl">
                    第{p.kanji}話
                  </span>
                  <span aria-hidden className="h-[3px] w-10 bg-ink" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
                    Vol. 0{p.vol} · Chapter {p.num} of {total}
                  </span>
                </p>
              </Rise>
              <Wipe className="mt-6 [container-type:inline-size]">
                <h1 className="whitespace-nowrap font-display leading-[0.85]" style={{ fontSize: titleSize }}>
                  {p.title}
                </h1>
              </Wipe>
              <Rise delay={0.15}>
                <p className="mt-6 max-w-[30ch] font-serif text-2xl italic leading-snug sm:text-3xl lg:text-4xl">
                  {p.logline}
                </p>
              </Rise>
              <Rise delay={0.25} className="mt-8 max-w-[62ch] space-y-5 font-serif text-lg leading-relaxed text-ink-soft sm:text-xl">
                {p.intro.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
                {p.note && (
                  <p className="inline-block bg-ink px-4 py-2 font-mono text-xs leading-relaxed text-paper">{p.note}</p>
                )}
              </Rise>
            </div>

            <aside className="col-span-12 lg:col-span-4 lg:pt-3">
              <Wipe from="up" className="pb-2 pr-2">
                <div className="border-[3px] border-ink bg-paper shadow-[8px_8px_0_0_var(--ink)]">
                  <dl className="grid grid-cols-2 gap-[3px] border-b-[3px] border-ink bg-ink">
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col-reverse bg-paper p-4 [&:last-child:nth-child(odd)]:col-span-2"
                      >
                        <dt className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{s.label}</dt>
                        <dd className="font-display text-4xl leading-none text-hanko">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="space-y-5 p-5">
                    {(p.role || p.client) && (
                      <dl className="grid grid-cols-2 gap-4">
                        {p.role && (
                          <div className={cn(!p.client && "col-span-2")}>
                            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Role</dt>
                            <dd className="mt-1 font-serif text-lg leading-snug">{p.role}</dd>
                          </div>
                        )}
                        {p.client && (
                          <div>
                            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Client</dt>
                            <dd className="mt-1 font-serif text-lg leading-snug">{p.client}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Stack</p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {p.stack.map((t) => (
                          <li key={t} className="border-2 border-ink px-2 py-1 font-mono text-[11px]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.github ? (
                        <ExternalLink href={p.github}>Source</ExternalLink>
                      ) : (
                        <span className="inline-flex min-h-[44px] items-center gap-2 border-[3px] border-dashed border-ink/50 px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                          <Lock aria-hidden className="h-3.5 w-3.5" />
                          Private repo
                        </span>
                      )}
                      {p.live && (
                        <ExternalLink href={p.live}>{p.liveLabel ?? (p.liveNote ? "Demo" : "Live")}</ExternalLink>
                      )}
                    </div>
                    {p.liveNote && <p className="font-mono text-[11px] leading-relaxed text-muted">{p.liveNote}</p>}
                  </div>
                </div>
              </Wipe>
            </aside>
          </div>

          <a
            href="#commits"
            className="mb-8 inline-flex min-h-[44px] items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] underline decoration-2 underline-offset-[6px] transition-colors hover:text-hanko"
          >
            Read it in commits
            <ArrowDown aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* ── Screenshot spread ────────────────────── */}
      {p.shot && (
        <section aria-label={`${p.title} screenshots`} className="border-b-[3px] border-ink bg-paper-deep">
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8 lg:py-24">
            <div className={cn("relative", p.shot.phone && "sm:pr-[18%] lg:pr-44")}>
              <Wipe className="pb-[10px] pr-[10px]">
                <figure className="border-[3px] border-ink bg-paper shadow-[10px_10px_0_0_var(--ink)]">
                  <div className="flex items-center gap-2 border-b-[3px] border-ink px-4 py-2.5">
                    {[0, 1, 2].map((d) => (
                      <span key={d} aria-hidden className="h-3 w-3 rounded-full border-2 border-ink" />
                    ))}
                    <span className="ml-3 truncate font-mono text-[11px] text-muted">
                      {p.live && !p.liveLabel ? new URL(p.live).host : p.title}
                    </span>
                  </div>
                  <Image
                    src={p.shot.desktop}
                    alt={p.shot.alt}
                    width={p.shot.width ?? 1280}
                    height={p.shot.height ?? 800}
                    sizes="(min-width: 1400px) 1150px, 90vw"
                    className="h-auto w-full"
                  />
                </figure>
              </Wipe>
              {p.shot.phone && (
                <div className="absolute -bottom-12 right-0 hidden w-[22%] max-w-[210px] rotate-3 sm:block">
                  <Rise delay={0.3}>
                    <div className="rounded-[1.7rem] border-[3px] border-ink bg-ink p-1.5 shadow-[8px_8px_0_0_var(--hanko)]">
                      <Image
                        src={p.shot.phone}
                        alt={`${p.title} on a phone`}
                        width={780}
                        height={1688}
                        sizes="210px"
                        className="h-auto w-full rounded-[1.25rem]"
                      />
                    </div>
                  </Rise>
                </div>
              )}
            </div>
            <p className="mt-10 inline-block bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper sm:mt-16">
              {p.shot.caption}
            </p>
          </div>
        </section>
      )}

      {/* ── The story in commits ─────────────────── */}
      <section id="commits" aria-labelledby="commits-title" className="dots-bg scroll-mt-14 border-b-[3px] border-ink">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
          <SectionMark jp="物語" label={`The story in ${p.commitCount} commit${p.commitCount === 1 ? "" : "s"}`} />
          <h2 id="commits-title" className="mt-6 max-w-[18ch] font-display text-[2.3rem] leading-[0.92] sm:text-5xl lg:text-6xl">
            What the commit log remembers.
          </h2>

          <ol className="mt-14 space-y-12 lg:mt-20 lg:space-y-16">
            {p.beats.map((b, i) => (
              <li key={b.title} className="grid grid-cols-12">
                <div className={cn("relative col-span-12 lg:col-span-9", i % 2 === 1 && "lg:col-start-4")}>
                  <Wipe from={i % 2 === 1 ? "right" : "left"} className="pb-2 pr-2">
                    <div className="grid border-[3px] border-ink bg-paper shadow-[8px_8px_0_0_var(--ink)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                      <div className="p-6 sm:p-8">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                          <span className="text-hanko">{String(i + 1).padStart(2, "0")}</span> · {b.when}
                        </p>
                        <h3 className="mt-4 font-display text-[1.9rem] leading-[0.95] sm:text-4xl">{b.title}</h3>
                        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft sm:text-xl">{b.body}</p>
                      </div>
                      <div className="border-t-[3px] border-ink bg-ink p-5 text-paper sm:p-6 md:border-l-[3px] md:border-t-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                          {b.logLabel ?? "git log, verbatim"}
                        </p>
                        <ul className="mt-3 space-y-2 font-mono text-[12.5px] leading-snug">
                          {b.commits.map((c, j) => (
                            <li key={j} className="flex gap-2">
                              <span aria-hidden className="text-hanko-bright">›</span>
                              <span className="min-w-0 [overflow-wrap:anywhere]">
                                {c.msg}
                                {c.times && <span className="ml-2 text-hanko-bright">×{c.times}</span>}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Wipe>
                  {b.sfx && (
                    <span
                      aria-hidden
                      className="sfx pointer-events-none absolute -top-12 right-3 z-10 max-w-full whitespace-nowrap font-display text-4xl text-hanko sm:-top-20 sm:text-6xl lg:-top-24 lg:right-0 lg:text-7xl xl:-right-10"
                    >
                      {b.sfx}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Under the hood ───────────────────────── */}
      {hasHood && (
        <section aria-labelledby="hood-title" className="bg-ink text-paper">
          <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
            <SectionMark jp="解剖" label="Under the hood" invert />
            <h2 id="hood-title" className="mt-6 font-display text-[2.3rem] leading-[0.92] sm:text-5xl lg:text-6xl">
              How it&rsquo;s put together.
            </h2>

            {p.flow && (
              <div className="mt-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">How the pieces talk</p>
                <ol className="mt-5 flex flex-col lg:flex-row lg:items-stretch">
                  {p.flow.map((step, i) => (
                    <li key={step.label} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
                      <Rise delay={i * 0.08} className="min-w-0 flex-1 self-stretch border-[3px] border-paper p-4 [overflow-wrap:anywhere]">
                        <span className="font-mono text-[10px] text-hanko-bright">{String(i + 1).padStart(2, "0")}</span>
                        <span className="mt-1 block font-display text-lg leading-tight">{step.label}</span>
                        <span className="mt-1 block font-mono text-[11px] text-paper/60">{step.note}</span>
                      </Rise>
                      {i < p.flow!.length - 1 && (
                        <>
                          <ArrowDown aria-hidden className="mx-auto my-1.5 h-5 w-5 text-hanko-bright lg:hidden" />
                          <ArrowRight aria-hidden className="mx-2 hidden h-5 w-5 shrink-0 text-hanko-bright lg:block" />
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {p.modules && (
              <div className="mt-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">Inside the repo</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.modules.map((m) => (
                    <li key={m} className="border-2 border-paper/40 px-3 py-1.5 font-mono text-sm">
                      <span className="text-paper/40">/</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!p.github && (
              <p className="mt-12 inline-flex items-center gap-2 border-2 border-dashed border-paper/40 px-4 py-2 font-mono text-xs text-paper/70">
                <Lock aria-hidden className="h-3.5 w-3.5 shrink-0" />
                Private repository, so no code on this page. The structure above is taken from it.
              </p>
            )}

            {code.length > 0 && (
              <div className={cn("mt-14 grid gap-12", code.length > 1 && "lg:grid-cols-2")}>
                {code.map((c) => {
                  const end = c.start + c.code.split("\n").length - 1;
                  return (
                    <figure key={c.path + c.start} className="min-w-0">
                      <div className="flex items-center justify-between gap-3 border-[3px] border-b-0 border-paper px-4 py-2 font-mono text-[11px]">
                        <span className="truncate">{c.path}</span>
                        {p.github && (
                          <a
                            href={`${p.github}/blob/HEAD/${c.path}#L${c.start}-L${end}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[32px] shrink-0 items-center gap-1 text-hanko-bright transition-colors hover:text-paper"
                          >
                            L{c.start}–{end}
                            <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <div className="overflow-x-auto border-[3px] border-paper">
                        <pre className="py-4 pr-4 font-mono text-[12.5px] leading-relaxed">
                          <code>
                            {c.code.split("\n").map((line, k) => (
                              <span key={k} className="block whitespace-pre">
                                <span aria-hidden className="mr-4 inline-block w-10 select-none text-right text-paper/35">
                                  {c.start + k}
                                </span>
                                {line || " "}
                              </span>
                            ))}
                          </code>
                        </pre>
                      </div>
                      <figcaption className="mt-4 max-w-[52ch] font-serif text-lg italic leading-relaxed text-paper/80">
                        {c.caption}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            )}

            {p.lookingBack && (
              <Rise className="relative mt-16 max-w-3xl">
                <aside className="border-[3px] border-paper bg-paper p-6 pr-20 text-ink sm:p-8 sm:pr-24">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">Looking back</p>
                  <p className="mt-3 font-serif text-xl leading-relaxed">{p.lookingBack}</p>
                </aside>
                <span aria-hidden className="stamp absolute -right-2 -top-6 h-[5rem] w-[3.75rem] rotate-6 text-lg">
                  <span lang="ja" className="tate">
                    反省
                  </span>
                </span>
              </Rise>
            )}
          </div>
        </section>
      )}

      {/* ── Turn the page ────────────────────────── */}
      <nav aria-label="Chapters" className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-4 py-16 sm:grid-cols-2 sm:px-8 lg:py-20">
          {prev ? (
            <ChapterLink
              href={`/work/${prev.slug}`}
              card={chapterCard(prev.slug)}
              direction="prev"
              eyebrow={prev.vol === p.vol ? "Previous chapter" : `Back to Vol. 0${prev.vol}`}
            />
          ) : (
            <ChapterLink href="/#work" card={coverCards.work} direction="prev" eyebrow="Back to Vol. 01" />
          )}
          {next ? (
            <ChapterLink
              href={`/work/${next.slug}`}
              card={chapterCard(next.slug)}
              direction="next"
              eyebrow={next.vol === p.vol ? "Next chapter" : `Vol. 0${next.vol} begins`}
            />
          ) : (
            <ChapterLink href="/#contact" card={coverCards.contact} direction="next" eyebrow={`End of Vol. 0${p.vol}`} />
          )}
        </div>
      </nav>
    </article>
  );
}

function ChapterLink({
  href,
  card,
  direction,
  eyebrow,
}: {
  href: string;
  card: { kanji: string; title: string; sub: string };
  direction: "prev" | "next";
  eyebrow: string;
}) {
  const isNext = direction === "next";
  return (
    <TurnLink
      href={href}
      card={card}
      className={cn(
        "group flex min-h-[10rem] flex-col justify-between border-[3px] border-ink p-6 transition-colors hover:bg-ink hover:text-paper sm:p-8",
        isNext && "sm:items-end sm:text-right"
      )}
    >
      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
        {!isNext && <ArrowLeft aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-x-1" />}
        {eyebrow}
        {isNext && <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </span>
      <span className="mt-8 block">
        <span lang="ja" className="block font-jp text-2xl text-hanko group-hover:text-hanko-bright">
          {card.kanji}
        </span>
        <span className="mt-1 block font-display text-3xl leading-none sm:text-4xl">{card.title}</span>
      </span>
    </TurnLink>
  );
}
