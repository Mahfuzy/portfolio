import type { TurnCard } from "@/components/site/page-turn";

/**
 * One chapter per project, bound in two volumes (the home page is Vol. 01):
 *   Vol. 02 · The main story: work with real users, a client, a team or an examiner.
 *   Vol. 03 · Training arc: the builds I learned on, in the order they were started.
 * Kept tiny so client components can import it.
 */
export const volumes = {
  2: { name: "The main story", jp: "本編" },
  3: { name: "Training arc", jp: "修行編" },
} as const;

export type VolumeNo = keyof typeof volumes;

export const chapterIndex = [
  { slug: "uniloomy", title: "UniLoomy", vol: 2, kanji: "一", num: "01" },
  { slug: "pinnacle-loans", title: "Pinnacle Loans", vol: 2, kanji: "二", num: "02" },
  { slug: "thesis-assessor", title: "Thesis Assessor", vol: 2, kanji: "三", num: "03" },
  { slug: "visibl", title: "Visibl", vol: 2, kanji: "四", num: "04" },
  { slug: "hill-down-pharmacy", title: "Hill Down Pharmacy", vol: 2, kanji: "五", num: "05" },
  { slug: "safechain", title: "SafeChain", vol: 2, kanji: "六", num: "06" },
  { slug: "twish", title: "Twish", vol: 2, kanji: "七", num: "07" },
  { slug: "moviehub", title: "MovieHub", vol: 3, kanji: "一", num: "01" },
  { slug: "dreamboard", title: "DreamBoard", vol: 3, kanji: "二", num: "02" },
  { slug: "shopnest", title: "ShopNest", vol: 3, kanji: "三", num: "03" },
  { slug: "hci-dashboard", title: "HCI Dashboard", vol: 3, kanji: "四", num: "04" },
  { slug: "studypal", title: "StudyPal", vol: 3, kanji: "五", num: "05" },
  { slug: "churnpredictor", title: "ChurnPredictor", vol: 3, kanji: "六", num: "06" },
  { slug: "collabo", title: "Collabo", vol: 3, kanji: "七", num: "07" },
] as const satisfies readonly { slug: string; title: string; vol: VolumeNo; kanji: string; num: string }[];

export type ChapterSlug = (typeof chapterIndex)[number]["slug"];

export const volumeLabel = (vol: VolumeNo) => `Vol. 0${vol} · ${volumes[vol].name}`;

export const coverCards = {
  top: { kanji: "表紙", title: "The story so far", sub: "Vol. 01 · The cover" },
  story: { kanji: "序章", title: "Before chapter one", sub: "Vol. 01 · Prologue" },
  work: { kanji: "記録", title: "The work", sub: "Vol. 01 · Case files" },
  contact: { kanji: "つづく", title: "To be continued", sub: "Vol. 01 · Contact" },
} satisfies Record<string, TurnCard>;

export function chapterCard(slug: string): TurnCard {
  const c = chapterIndex.find((x) => x.slug === slug);
  if (!c) return coverCards.work;
  return { kanji: `第${c.kanji}話`, title: c.title, sub: `${volumeLabel(c.vol)} · Chapter ${c.num}` };
}
