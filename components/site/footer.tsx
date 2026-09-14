import { person } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-6 font-mono text-[11px] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {person.name} · Made in {person.place}
        </p>
        <p className="text-paper/60">Set in Dela Gothic One, Newsreader &amp; JetBrains Mono</p>
        <a href="#top" className="inline-flex min-h-[44px] items-center transition-colors hover:text-hanko-bright">
          Back to the cover ↑
        </a>
      </div>
    </footer>
  );
}
