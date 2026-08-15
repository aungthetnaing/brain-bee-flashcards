import { useEffect, useMemo, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { ChapterBar } from "../components/ChapterBar";
import { colors, radius, spacing } from "../theme";
import { BrainCard } from "../types";
import {
  ALL_CHAPTERS,
  cardsForChapter,
  gradeAnswer,
  getChapters,
  shuffle,
} from "../utils";

/**
 * Brain Bee written round with pyramidal clues: clue 1 is shown first, and the
 * competitor can answer any time. Reveal more hints if needed — but the earlier
 * you answer correctly, the more points you score.
 */
export function QuizScreen() {
  const chapters = useMemo(() => getChapters(), []);
  const [chapter, setChapter] = useState<string>(ALL_CHAPTERS);
  const [deck, setDeck] = useState<BrainCard[]>(() =>
    shuffle(cardsForChapter(ALL_CHAPTERS)),
  );
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(1);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [earned, setEarned] = useState(0);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const inputRef = useRef<TextInput>(null);

  const reset = (nextChapter: string) => {
    setDeck(shuffle(cardsForChapter(nextChapter)));
    setIndex(0);
    setRevealed(1);
    setInput("");
    setChecked(false);
    setCorrect(false);
    setEarned(0);
    setScore(0);
    setMaxScore(0);
    setAnsweredCount(0);
  };

  useEffect(() => {
    reset(chapter);
  }, [chapter]);

  const card = deck[index];
  const finished = index >= deck.length;
  const total = card ? card.clues.length : 0;
  const possible = card ? total - (revealed - 1) : 0;

  const revealNext = () => {
    if (checked) return;
    setRevealed((r) => Math.min(total, r + 1));
  };

  const check = () => {
    if (checked || !card) return;
    const isRight = gradeAnswer(input, card.answer, card.accept);
    const pts = isRight ? possible : 0;
    setCorrect(isRight);
    setEarned(pts);
    setChecked(true);
    setScore((s) => s + pts);
    setMaxScore((m) => m + total);
    setAnsweredCount((n) => n + 1);
  };

  // Let the user override the automatic grade (short answers vary in wording).
  const override = () => {
    if (!card) return;
    setCorrect((prev) => {
      const now = !prev;
      const newEarned = now ? possible : 0;
      setScore((s) => s - earned + newEarned);
      setEarned(newEarned);
      return now;
    });
  };

  const next = () => {
    setInput("");
    setChecked(false);
    setCorrect(false);
    setEarned(0);
    setRevealed(1);
    setIndex((i) => i + 1);
  };

  return (
    <View style={styles.container}>
      <ChapterBar chapters={chapters} selected={chapter} onSelect={setChapter} />

      <View style={styles.scoreRow}>
        <Text style={styles.scoreText}>{score} pts</Text>
        <Text style={styles.scoreText}>
          {finished ? deck.length : index + 1}/{deck.length}
        </Text>
      </View>

      {finished ? (
        <View style={styles.center}>
          <Text style={styles.resultTitle}>Round complete!</Text>
          <Text style={styles.resultScore}>
            {score} / {maxScore} pts
          </Text>
          <Text style={styles.resultPct}>
            {maxScore ? Math.round((score / maxScore) * 100) : 0}%
          </Text>
          <Text style={styles.resultSub}>
            {answeredCount} question{answeredCount === 1 ? "" : "s"} answered
          </Text>
          <Pressable
            style={[styles.button, styles.primary]}
            onPress={() => reset(chapter)}
          >
            <Text style={styles.buttonText}>Try again</Text>
          </Pressable>
        </View>
      ) : card ? (
        <ScrollView
          contentContainerStyle={styles.body}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.metaRow}>
            <Text style={styles.chapter}>{card.chapter}</Text>
            <Text style={styles.worth}>
              {checked
                ? `+${earned} pt${earned === 1 ? "" : "s"}`
                : `worth ${possible} pt${possible === 1 ? "" : "s"}`}
            </Text>
          </View>

          {card.clues.slice(0, revealed).map((clue, i) => (
            <View key={i} style={styles.clueRow}>
              <Text style={styles.clueNum}>{i + 1}</Text>
              <Text style={styles.clue}>{clue}</Text>
            </View>
          ))}

          {!checked && revealed < total ? (
            <Pressable style={styles.hintButton} onPress={revealNext}>
              <Text style={styles.hintButtonText}>
                Reveal next hint ({revealed}/{total})
              </Text>
            </Pressable>
          ) : null}

          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              checked && (correct ? styles.inputCorrect : styles.inputWrong),
            ]}
            value={input}
            onChangeText={setInput}
            editable={!checked}
            placeholder="Type your answer…"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            onSubmitEditing={check}
          />

          {!checked ? (
            <Pressable style={[styles.button, styles.primary]} onPress={check}>
              <Text style={styles.buttonText}>Check answer</Text>
            </Pressable>
          ) : (
            <View style={styles.feedback}>
              <Text
                style={[
                  styles.feedbackText,
                  correct ? styles.feedbackRight : styles.feedbackWrong,
                ]}
              >
                {correct ? `Correct! +${earned}` : "Not quite."}
              </Text>

              <Text style={styles.answerLabel}>Answer</Text>
              <Text style={styles.answerText}>{card.answer}</Text>
              {card.explanation ? (
                <Text style={styles.explanation}>{card.explanation}</Text>
              ) : null}

              <Pressable style={styles.override} onPress={override}>
                <Text style={styles.overrideText}>
                  {correct ? "Mark as wrong" : "I was right — count it"}
                </Text>
              </Pressable>

              <Pressable style={[styles.button, styles.primary]} onPress={next}>
                <Text style={styles.buttonText}>
                  {index + 1 >= deck.length ? "See results" : "Next"}
                </Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      ) : (
        <Text style={styles.empty}>No questions in this chapter.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  scoreText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "700",
  },
  body: {
    padding: spacing.lg,
    gap: spacing.sm,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chapter: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  worth: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "700",
  },
  clueRow: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "flex-start",
    marginTop: spacing.xs,
  },
  clueNum: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: "800",
    minWidth: 18,
    textAlign: "center",
  },
  clue: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 26,
  },
  hintButton: {
    alignSelf: "flex-start",
    paddingVertical: spacing.xs,
    marginTop: spacing.xs,
  },
  hintButtonText: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  input: {
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
    fontSize: 18,
    marginTop: spacing.sm,
  },
  inputCorrect: {
    borderColor: colors.success,
    backgroundColor: "#14532d",
  },
  inputWrong: {
    borderColor: colors.danger,
    backgroundColor: "#7f1d1d",
  },
  feedback: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: "700",
  },
  feedbackRight: { color: colors.success },
  feedbackWrong: { color: colors.danger },
  answerLabel: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: spacing.sm,
  },
  answerText: {
    color: colors.success,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
  },
  explanation: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  override: {
    alignSelf: "flex-start",
    paddingVertical: spacing.xs,
  },
  overrideText: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.lg,
  },
  resultTitle: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "800",
  },
  resultScore: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
  resultPct: {
    color: colors.accent,
    fontSize: 40,
    fontWeight: "800",
  },
  resultSub: {
    color: colors.textMuted,
    fontSize: 14,
  },
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.sm,
  },
  primary: { backgroundColor: colors.primary },
  buttonText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 16,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 16,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
