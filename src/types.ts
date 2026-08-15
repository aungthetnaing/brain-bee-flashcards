export interface BrainCard {
  id: string;
  /** Chapter/topic grouping from the Brain Facts book. */
  chapter: string;
  /** Prompt shown on the front of the card / as the quiz question. */
  question: string;
  /** The correct answer (kept short so it works as a quiz choice). */
  answer: string;
  /** Three plausible wrong answers used to build multiple-choice quizzes. */
  distractors: string[];
  /** Optional extra context shown on the back of the flip card. */
  explanation?: string;
}
