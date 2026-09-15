"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

/** The title page shown on the sheet while it turns. */
export type TurnCard = { kanji: string; title: string; sub: string };

type Turn = TurnCard & { href: string };
type Phase = "cover" | "hold" | "reveal";

const TurnContext = createContext<((turn: Turn) => void) | null>(null);
const ease = [0.7, 0, 0.3, 1] as const;

/*
  How the turn works:
  1. cover  — a paper sheet swings in, hinged on the right edge, until it lies flat over the screen.
  2. hold   — the route changes underneath it; we wait for the new pathname to render.
  3. reveal — the sheet swings away, hinged on the left edge, uncovering the new page.
  Both swings move the free edge right-to-left, so it reads as one page turning.
*/
export function PageTurnProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [turn, setTurn] = useState<Turn | null>(null);
  const [phase, setPhase] = useState<Phase>("cover");
  const busy = useRef(false);

  const start = useCallback(
    (next: Turn) => {
      if (busy.current) return;
      if (reduce) {
        router.push(next.href);
        return;
      }
      busy.current = true;
      setPhase("cover");
      setTurn(next);
    },
    [reduce, router]
  );

  useEffect(() => {
    if (!turn || phase !== "hold") return;
    const target = turn.href.split("#")[0] || "/";
    const arrived = pathname === target;
    // Give hash targets a moment to scroll; bail out after 5s if navigation stalls.
    const delay = arrived ? (turn.href.includes("#") ? 650 : 300) : 5000;
    const timer = setTimeout(() => setPhase("reveal"), delay);
    return () => clearTimeout(timer);
  }, [turn, phase, pathname]);

  const handleComplete = () => {
    if (!turn) return;
    if (phase === "cover") {
      setPhase("hold");
      router.push(turn.href);
    } else if (phase === "reveal") {
      setTurn(null);
      busy.current = false;
    }
  };

  const revealing = phase === "reveal";

  return (
    <TurnContext.Provider value={start}>
      {children}
      <AnimatePresence>
        {turn && (
          <div key="page-turn" className="fixed inset-0 z-[90]" style={{ perspective: 1800 }}>
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-ink"
              initial={{ opacity: 0 }}
              animate={{ opacity: revealing ? 0 : 0.45 }}
              transition={{ duration: revealing ? 0.7 : 0.6, ease }}
            />
            <motion.div
              className="absolute inset-0 overflow-hidden bg-paper"
              style={{ transformOrigin: revealing ? "0% 50%" : "100% 50%", backfaceVisibility: "hidden" }}
              initial={{ rotateY: -78 }}
              animate={{ rotateY: revealing ? 78 : 0 }}
              transition={{ duration: revealing ? 0.7 : 0.6, ease }}
              onAnimationComplete={handleComplete}
            >
              <div aria-hidden className="dots-bg absolute inset-0" />
              <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="speed-lines h-[160vmax] w-[160vmax] shrink-0 opacity-[0.08]" />
              </div>
              <div
                role="status"
                aria-live="polite"
                className="relative flex h-full flex-col items-center justify-center px-6 text-center"
              >
                <span lang="ja" className="font-jp text-5xl text-hanko sm:text-7xl">
                  {turn.kanji}
                </span>
                <span className="mt-6 max-w-[14ch] font-display text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
                  {turn.title}
                </span>
                <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">{turn.sub}</span>
              </div>
              {/* Shade along the moving edge sells the curl */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: revealing
                    ? "linear-gradient(270deg, rgb(var(--ink-rgb) / 0.6), transparent 70%)"
                    : "linear-gradient(90deg, rgb(var(--ink-rgb) / 0.6), transparent 70%)",
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: revealing ? 1 : 0 }}
                transition={{ duration: revealing ? 0.7 : 0.6, ease }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </TurnContext.Provider>
  );
}

type TurnLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  card: TurnCard;
};

/** A link that turns the page when it leaves the current route, and behaves normally otherwise. */
export function TurnLink({ href, card, onClick, children, ...rest }: TurnLinkProps) {
  const start = useContext(TurnContext);
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (!start || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const path = href.split("#")[0] || pathname;
    if (path === pathname) return; // same page: let the hash scroll happen
    e.preventDefault();
    start({ href, ...card });
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
