import { ArrowRight } from "lucide-react";
import { chapterCard } from "@/lib/chapters";
import { sideQuests } from "@/lib/content";
import { TurnLink } from "./page-turn";
import { SectionMark } from "./ui";

export default function SideQuests() {
  return (
    <section aria-labelledby="side-title" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionMark jp="寄り道" label="Side quests" />
            <h2 id="side-title" className="mt-6 font-display text-[2.5rem] leading-[0.92] sm:text-5xl lg:text-6xl">
              Smaller builds.
            </h2>
          </div>
          <p className="max-w-[36ch] font-serif text-lg italic text-ink-soft sm:text-xl">
            Smaller builds, but each one still gets its own chapter.
          </p>
        </div>

        <ul className="mt-12 border-t-[3px] border-ink">
          {sideQuests.map((q) => {
            const card = chapterCard(q.slug);
            return (
              <li key={q.slug} className="border-b-[3px] border-ink">
                <TurnLink
                  href={`/work/${q.slug}`}
                  card={card}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1.5 px-2 py-6 transition-colors duration-200 hover:bg-ink hover:text-paper sm:px-4 lg:grid-cols-[4.5rem_15rem_1fr_17rem_1.5rem]"
                >
                  <span lang="ja" className="hidden font-jp text-lg text-hanko group-hover:text-hanko-bright lg:block">
                    {card.kanji}
                  </span>
                  <span className="font-display text-2xl leading-none sm:text-3xl">{q.title}</span>
                  <span className="col-span-2 row-start-2 font-serif text-lg leading-snug text-ink-soft group-hover:text-paper/80 lg:col-span-1 lg:row-start-auto">
                    {q.what}
                  </span>
                  <span className="col-span-2 row-start-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted group-hover:text-paper/60 lg:col-span-1 lg:row-start-auto">
                    {q.stack} · {q.year}
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="col-start-2 row-start-1 h-6 w-6 transition-transform group-hover:translate-x-1 lg:col-start-auto lg:row-start-auto"
                  />
                </TurnLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
