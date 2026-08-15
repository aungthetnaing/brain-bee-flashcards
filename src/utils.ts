import { BRAIN_FACTS } from "./data/brainFacts";
import { BrainCard } from "./types";

export const ALL_CHAPTERS = "All chapters";

/** Unique chapter names in first-seen order, prefixed with an "All" option. */
export function getChapters(): string[] {
  const seen: string[] = [];
  for (const card of BRAIN_FACTS) {
    if (!seen.includes(card.chapter)) seen.push(card.chapter);
  }
  return [ALL_CHAPTERS, ...seen];
}

/** Cards for a chapter, or every card when "All chapters" is selected. */
export function cardsForChapter(chapter: string): BrainCard[] {
  if (chapter === ALL_CHAPTERS) return BRAIN_FACTS;
  return BRAIN_FACTS.filter((c) => c.chapter === chapter);
}

/** Fisher-Yates shuffle returning a new array. */
export function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}
