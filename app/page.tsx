import Hero from "@/components/site/hero";
import Prologue from "@/components/site/prologue";
import Arc from "@/components/site/arc";
import CaseFiles from "@/components/site/case-files";
import SideQuests from "@/components/site/side-quests";
import Toolkit from "@/components/site/toolkit";
import Finale from "@/components/site/finale";

export default function Home() {
  return (
    <>
      <Hero />
      <Prologue />
      <Arc />
      <CaseFiles />
      <SideQuests />
      <Toolkit />
      <Finale />
    </>
  );
}
