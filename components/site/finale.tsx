"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { person } from "@/lib/content";
import { Wipe } from "./motion";
import { Bubble, ExternalLink, SectionMark } from "./ui";

const socials = [
  { label: "GitHub", href: person.links.github },
  { label: "LinkedIn", href: person.links.linkedin },
  { label: "X / Twitter", href: person.links.x },
];

export default function Finale() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-14 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="speed-lines h-[160vmax] w-[160vmax] shrink-0 opacity-[0.06]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-x-6 gap-y-16 px-4 py-20 sm:px-8 lg:py-32">
        <div className="col-span-12 lg:col-span-7">
          <SectionMark jp="つづく" label="To be continued" />
          <h2 id="contact-title" className="mt-6 font-display text-[3rem] leading-[0.88] sm:text-7xl lg:text-[6.5rem]">
            Chapter seven needs a <span className="text-hanko">team.</span>
          </h2>
          <p className="mt-8 max-w-[44ch] font-serif text-xl leading-relaxed text-ink-soft sm:text-2xl">
            If you&rsquo;re hiring backend or AI engineers, or you&rsquo;ve got a problem that needs an API that
            won&rsquo;t fall over, I&rsquo;d like to hear about it.
          </p>

          <a
            href={`mailto:${person.email}`}
            className="mt-10 inline-block break-all font-serif text-[8.2vw] italic leading-tight underline decoration-hanko decoration-[4px] underline-offset-[10px] transition-colors hover:text-hanko sm:text-5xl lg:text-[3.6rem]"
          >
            {person.email}
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button type="button" onClick={copy} className="btn-ink">
              {copied ? <Check aria-hidden className="h-4 w-4" /> : <Copy aria-hidden className="h-4 w-4" />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
            {socials.map((s) => (
              <ExternalLink key={s.label} href={s.href} className="min-h-[48px]">
                {s.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex justify-center lg:col-span-5 lg:items-center lg:justify-end">
          <div className="relative w-[72%] max-w-[360px] sm:w-[48%] lg:w-full">
            <div className="-rotate-2">
              <Wipe from="up" className="pb-[10px] pr-[10px]">
                <div className="group border-[3px] border-ink bg-paper p-2 shadow-[10px_10px_0_0_var(--ink)]">
                  <div className="halftone relative aspect-[3/4] overflow-hidden bg-paper-deep">
                    <Image
                      src="/mahfuz-smile.jpg"
                      alt="Mahfuz smiling at the camera"
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 48vw, 72vw"
                      className="object-cover object-[50%_25%]"
                    />
                  </div>
                </div>
              </Wipe>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 14 }}
              className="absolute -left-8 top-10 origin-bottom-right sm:-left-16"
            >
              <Bubble tail="br">Your move.</Bubble>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
