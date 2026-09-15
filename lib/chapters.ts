import type { TurnCard } from "@/components/site/page-turn";

/** Vol. 02: one chapter per project, in the order they were started. Kept tiny so client components can import it. */
export const chapterIndex = [
  { slug: "moviehub", title: "MovieHub", kanji: "一", num: "01" },
  { slug: "dreamboard", title: "DreamBoard", kanji: "二", num: "02" },
  { slug: "shopnest", title: "ShopNest", kanji: "三", num: "03" },
  { slug: "hci-dashboard", title: "HCI Dashboard", kanji: "四", num: "04" },
  { slug: "studypal", title: "StudyPal", kanji: "五", num: "05" },
  { slug: "churnpredictor", title: "ChurnPredictor", kanji: "六", num: "06" },
  { slug: "collabo", title: "Collabo", kanji: "七", num: "07" },
] as const;

export type ChapterSlug = (typeof chapterIndex)[number]["slug"];

export const coverCards = {
  top: { kanji: "表紙", title: "The story so far", sub: "Vol. 01 · The cover" },
  story: { kanji: "序章", title: "Before chapter one", sub: "Vol. 01 · Prologue" },
  work: { kanji: "記録", title: "The work", sub: "Vol. 01 · Case files" },
  contact: { kanji: "つづく", title: "To be continued", sub: "Vol. 01 · Contact" },
} satisfies Record<string, TurnCard>;

export function chapterCard(slug: string): TurnCard {
  const c = chapterIndex.find((x) => x.slug === slug);
  if (!c) return coverCards.work;
  return { kanji: `第${c.kanji}話`, title: c.title, sub: `Vol. 02 · Chapter ${c.num}` };
}
