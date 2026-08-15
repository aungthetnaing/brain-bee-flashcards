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

/**
 * Normalize a short answer for lenient comparison: lowercase, strip accents,
 * drop punctuation, collapse whitespace, and remove a leading article.
 */
export function normalizeAnswer(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[^a-z0-9\s]/g, " ") // punctuation -> space
    .replace(/\b(the|a|an)\b/g, " ") // ignore leading/embedded articles
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Grade a typed response against the card's answer (and any accepted
 * alternatives). Returns true for an exact normalized match, or a confident
 * partial match (the typed term is contained in the answer, or vice-versa).
 */
export function gradeAnswer(
  input: string,
  answer: string,
  accept: string[] = [],
): boolean {
  const user = normalizeAnswer(input);
  if (!user) return false;
  const targets = [answer, ...accept].map(normalizeAnswer).filter(Boolean);
  for (const target of targets) {
    if (user === target) return true;
    // Confident containment for multi-word answers (e.g. "cerebellum" vs
    // "the cerebellum controls balance"). Require a meaningful length.
    if (user.length >= 4 && (target.includes(user) || user.includes(target))) {
      return true;
    }
  }
  return false;
}
