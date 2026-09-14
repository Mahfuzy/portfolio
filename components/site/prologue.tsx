"use client";

import { person } from "@/lib/content";
import { Rise } from "./motion";
import { SectionMark } from "./ui";

const facts = [
  { value: "2023", label: "first public commit" },
  { value: "18", label: "public repositories" },
  { value: "53", label: "commits on one project" },
  { value: "8", label: "Django apps in StudyPal" },
];

export default function Prologue() {
  return (
    <section id="story" aria-labelledby="prologue-title" className="scroll-mt-14 border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-6 gap-y-14 px-4 py-20 sm:px-8 lg:py-32">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionMark jp="序章" label="Prologue" />
            <h2 id="prologue-title" className="mt-6 font-display text-[2.6rem] leading-[0.92] sm:text-5xl">
              Before chapter one
            </h2>
            <dl className="mt-10 grid grid-cols-2 border-l-[3px] border-t-[3px] border-ink">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col-reverse border-b-[3px] border-r-[3px] border-ink p-4">
                  <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{f.label}</dt>
                  <dd className="font-display text-4xl leading-none">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="col-span-12 space-y-9 font-serif text-[1.35rem] leading-[1.5] sm:text-[1.65rem] lg:col-span-7 lg:col-start-6 lg:text-[1.9rem] lg:leading-[1.42]">
          <Rise>
            <p className="dropcap">
              Hi, I&rsquo;m {person.short}, a final-year Computer Science student in {person.place}. I build backends:
              auth that holds, APIs that stay quick under load, and sockets that stream an AI&rsquo;s answer as
              it&rsquo;s written.
            </p>
          </Rise>
          <Rise>
            <p>
              I didn&rsquo;t start there. I started with <mark className="ink-mark">a pricing card in April 2023</mark>.
              Almost everything I&rsquo;ve built since is public, so instead of telling you I&rsquo;m passionate,
              I&rsquo;ll show you the commit history, one chapter at a time.
            </p>
          </Rise>
          <Rise>
            <aside className="border-l-[3px] border-hanko pl-5 text-lg italic leading-relaxed text-ink-soft sm:text-xl">
              <span lang="ja" className="mr-2 font-jp not-italic text-hanko">
                追伸
              </span>
              P.S. I&rsquo;m learning Japanese so I can watch anime without subtitles. I&rsquo;m nowhere close, but
              I&rsquo;m committed. That&rsquo;s why the chapter headings on this page are in Japanese.
            </aside>
          </Rise>
        </div>
      </div>
    </section>
  );
}
