export interface BrainCard {
  id: string;
  /** Chapter/topic grouping from the Brain Facts book. */
  chapter: string;
  /**
   * Pyramidal clue set, ordered hardest/most obscure first to most definitive
   * last (Brain Bee / Science Bee style). A competitor can answer after any clue.
   */
  clues: string[];
  /** The correct answer — a short recall response, Brain Bee written-round style. */
  answer: string;
  /**
   * Optional alternative accepted answers (synonyms, spellings, shorter forms)
   * used when grading a typed short-answer response.
   */
  accept?: string[];
  /** Optional extra context shown on the back of the flip card. */
  explanation?: string;
}
