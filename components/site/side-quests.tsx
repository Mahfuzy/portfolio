import { ArrowRight } from "lucide-react";
import { chapterCard } from "@/lib/chapters";
import { moreChapters } from "@/lib/content";
import { TurnLink } from "./page-turn";
import { SectionMark } from "./ui";

export default function SideQuests() {
  return (
    <section aria-labelledby="side-title" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionMark jp="目次" label="Contents" />
            <h2 id="side-title" className="mt-6 font-display text-[2.5rem] leading-[0.92] sm:text-5xl lg:text-6xl">
              Every other chapter.
            </h2>
          </div>
          <p className="max-w-[36ch] font-serif text-lg italic text-ink-soft sm:text-xl">
            Fourteen projects, two volumes. Each one gets its own chapter page.
          </p>
        </div>

        {moreChapters.map((group) => (
          <div key={group.vol} className="mt-16 first-of-type:mt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b-[3px] border-ink pb-3">
              <h3 className="flex items-baseline gap-3">
                <span lang="ja" className="font-jp text-lg text-hanko">
                  {group.jp}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                  Vol. 0{group.vol} · {group.label}
                </span>
              </h3>
              <p className="font-serif text-lg italic text-muted">{group.note}</p>
            </div>

            <ul>
              {group.items.map((q) => {
                const card = chapterCard(q.slug);
                return (
                  <li key={q.slug} className="border-b-[3px] border-ink">
                    <TurnLink
                      href={`/work/${q.slug}`}
                      card={card}
                      className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-1.5 px-2 py-6 transition-colors duration-200 hover:bg-ink hover:text-paper sm:px-4 lg:grid-cols-[4.5rem_17rem_minmax(0,1fr)_17rem_1.5rem]"
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
        ))}
      </div>
    </section>
  );
}
