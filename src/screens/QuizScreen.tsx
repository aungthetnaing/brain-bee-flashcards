import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { ChapterBar } from "../components/ChapterBar";
import { colors, radius, spacing } from "../theme";
import { BrainCard } from "../types";
import { ALL_CHAPTERS, cardsForChapter, getChapters, shuffle } from "../utils";

interface Question {
  card: BrainCard;
  options: string[];
}

function buildQuestions(chapter: string): Question[] {
  return shuffle(cardsForChapter(chapter)).map((card) => ({
    card,
    options: shuffle([card.answer, ...card.distractors]),
  }));
}

export function QuizScreen() {
  const chapters = useMemo(() => getChapters(), []);
  const [chapter, setChapter] = useState<string>(ALL_CHAPTERS);
  const [questions, setQuestions] = useState<Question[]>(() =>
    buildQuestions(ALL_CHAPTERS),
  );
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  useEffect(() => {
    setQuestions(buildQuestions(chapter));
    setIndex(0);
    setChoice(null);
    setScore(0);
    setAnsweredCount(0);
  }, [chapter]);

  const q = questions[index];
  const finished = index >= questions.length;

  const pick = (option: string) => {
    if (choice) return; // lock after first pick
    setChoice(option);
    setAnsweredCount((n) => n + 1);
    if (option === q.card.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setChoice(null);
    setIndex((i) => i + 1);
  };

  const restart = () => {
    setQuestions(buildQuestions(chapter));
    setIndex(0);
    setChoice(null);
    setScore(0);
    setAnsweredCount(0);
  };

  return (
    <View style={styles.container}>
      <ChapterBar chapters={chapters} selected={chapter} onSelect={setChapter} />

      <View style={styles.scoreRow}>
        <Text style={styles.scoreText}>
          Score: {score}/{answeredCount}
        </Text>
        <Text style={styles.scoreText}>
          {finished ? questions.length : index + 1}/{questions.length}
        </Text>
      </View>

      {finished ? (
        <View style={styles.center}>
          <Text style={styles.resultTitle}>Quiz complete!</Text>
          <Text style={styles.resultScore}>
            {score} / {questions.length} correct
          </Text>
          <Text style={styles.resultPct}>
            {questions.length
              ? Math.round((score / questions.length) * 100)
              : 0}
            %
          </Text>
          <Pressable style={[styles.button, styles.primary]} onPress={restart}>
            <Text style={styles.buttonText}>Try again</Text>
          </Pressable>
        </View>
      ) : q ? (
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.chapter}>{q.card.chapter}</Text>
          <Text style={styles.question}>{q.card.question}</Text>

          {q.options.map((option) => {
            const isCorrect = option === q.card.answer;
            const isChosen = option === choice;
            const showState = choice !== null;
            return (
              <Pressable
                key={option}
                disabled={choice !== null}
                onPress={() => pick(option)}
                style={[
                  styles.option,
                  showState && isCorrect && styles.optionCorrect,
                  showState && isChosen && !isCorrect && styles.optionWrong,
                ]}
              >
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            );
          })}

          {choice !== null ? (
            <View style={styles.feedback}>
              <Text
                style={[
                  styles.feedbackText,
                  choice === q.card.answer
                    ? styles.feedbackRight
                    : styles.feedbackWrong,
                ]}
              >
                {choice === q.card.answer ? "Correct! ✓" : "Not quite."}
              </Text>
              {q.card.explanation ? (
                <Text style={styles.explanation}>{q.card.explanation}</Text>
              ) : null}
              <Pressable
                style={[styles.button, styles.primary]}
                onPress={next}
              >
                <Text style={styles.buttonText}>
                  {index + 1 >= questions.length ? "See results" : "Next"}
                </Text>
              </Pressable>
            </View>
          ) : null}
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
  chapter: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  question: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: spacing.md,
  },
  option: {
    padding: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  optionCorrect: {
    backgroundColor: "#14532d",
    borderColor: colors.success,
  },
  optionWrong: {
    backgroundColor: "#7f1d1d",
    borderColor: colors.danger,
  },
  optionText: {
    color: colors.text,
    fontSize: 16,
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
  explanation: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
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
    fontSize: 24,
    fontWeight: "800",
  },
  resultScore: {
    color: colors.text,
    fontSize: 18,
  },
  resultPct: {
    color: colors.accent,
    fontSize: 48,
    fontWeight: "800",
  },
  empty: {
    color: colors.textMuted,
    fontSize: 16,
    textAlign: "center",
    marginTop: spacing.xl,
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
});
