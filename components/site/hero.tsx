"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { person } from "@/lib/content";
import { ease } from "./motion";
import { Bubble } from "./ui";

const LETTERS = person.short.toUpperCase().split("");

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleX = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const linesRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 20]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease },
  });

  return (
    <section id="top" ref={ref} className="relative overflow-hidden border-b-[3px] border-ink pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div style={{ rotate: linesRotate }} className="speed-lines h-[180vmax] w-[180vmax] shrink-0 opacity-[0.09]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex items-center justify-between border-y-[3px] border-ink py-2 font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]"
        >
          <span>Vol. 01 · The story so far</span>
          <span className="hidden md:inline">Backend · AI · {person.place}</span>
          <span>2023 → Now</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-x-6 pt-8 lg:pt-10">
          {/* Portrait panel */}
          <div className="relative z-10 order-1 col-span-12 lg:order-2 lg:col-span-5">
            <motion.div style={{ y: photoY }} className="relative mx-auto w-[74%] max-w-[400px] sm:w-[52%] lg:ml-auto lg:mr-10 lg:w-[calc(100%-2.5rem)]">
              <div className="rotate-[1.5deg]">
                <motion.div
                  initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ duration: 1.1, ease, delay: 0.15 }}
                  className="pb-[10px] pr-[10px]"
                >
                  <div className="group border-[3px] border-ink bg-paper p-2 shadow-[10px_10px_0_0_var(--ink)]">
                    <div className="halftone relative aspect-[3/4] overflow-hidden bg-paper-deep">
                      <Image
                        src="/mahfuz-portrait.jpg"
                        alt="Mahfuz Seidu Agbor in a black hoodie, standing in front of a window"
                        fill
                        priority
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 52vw, 74vw"
                        className="object-cover object-[50%_28%]"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 15 }}
                className="absolute -left-10 top-6 origin-bottom-right sm:-left-24 lg:-left-32"
              >
                <Bubble tail="br">It started with a pricing card…</Bubble>
              </motion.div>

              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 2.6, rotate: -32 }}
                animate={{ opacity: 1, scale: 1, rotate: -9 }}
                transition={{ delay: 1.15, duration: 0.4, ease: [0.55, 0, 0.8, 0.2] }}
                className="stamp absolute -bottom-5 -left-5 sm:-left-8"
              >
                <span lang="ja" className="tate">
                  {person.katakana}
                </span>
              </motion.div>

              <span
                aria-hidden
                lang="ja"
                className="tate absolute -right-7 top-3 font-jp text-xs tracking-[0.35em] sm:-right-9 sm:text-sm"
              >
                バックエンド開発者・ガーナ
              </span>
            </motion.div>
          </div>

          {/* Name */}
          <h1 className="relative order-2 col-span-12 mt-10 select-none lg:order-3 lg:-mt-28">
            <span className="sr-only">{person.name}</span>
            <motion.span
              aria-hidden
              style={{ x: titleX }}
              className="flex justify-between font-display text-[18vw] leading-[0.8] lg:text-[15.5vw] 2xl:text-[13.5rem]"
            >
              {LETTERS.map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.9, ease }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          {/* Copy */}
          <div className="order-3 col-span-12 pb-14 pt-8 lg:order-1 lg:col-span-7 lg:pb-36 lg:pt-16">
            <motion.p {...fadeUp(0.8)} className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {person.name} · {person.role}
            </motion.p>
            <motion.p
              {...fadeUp(0.9)}
              className="mt-4 max-w-[22ch] font-serif text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
            >
              I build the parts of an app nobody screenshots:{" "}
              <em className="text-hanko">the API, the queue, the socket.</em>
            </motion.p>
            <motion.p {...fadeUp(1.0)} className="mt-5 max-w-[42ch] font-serif text-lg leading-relaxed text-ink-soft sm:text-xl">
              Final-year Computer Science student in {person.place}. Fluent in Python. Still losing a fight with
              Japanese.
            </motion.p>
            <motion.div {...fadeUp(1.1)} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#story" className="btn-ink group">
                Start at chapter one
                <ArrowDown aria-hidden className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex min-h-[44px] items-center font-mono text-xs uppercase tracking-[0.2em] underline decoration-2 underline-offset-[6px] transition-colors hover:text-hanko"
              >
                Skip to the work
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
