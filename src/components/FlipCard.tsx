import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../theme";
import { BrainCard } from "../types";

interface Props {
  card: BrainCard;
  revealed: boolean;
  onToggle: () => void;
}

/** Tap-to-reveal study card: question on the front, answer + context on the back. */
export function FlipCard({ card, revealed, onToggle }: Props) {
  return (
    <Pressable style={styles.card} onPress={onToggle}>
      <Text style={styles.chapter}>{card.chapter}</Text>

      {!revealed ? (
        <View style={styles.body}>
          <Text style={styles.question}>{card.question}</Text>
          <Text style={styles.hint}>Tap to reveal the answer</Text>
        </View>
      ) : (
        <View style={styles.body}>
          <Text style={styles.answerLabel}>Answer</Text>
          <Text style={styles.answer}>{card.answer}</Text>
          {card.explanation ? (
            <Text style={styles.explanation}>{card.explanation}</Text>
          ) : null}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 320,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    justifyContent: "flex-start",
  },
  chapter: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: spacing.md,
  },
  body: {
    flex: 1,
    justifyContent: "center",
  },
  question: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
  },
  hint: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: spacing.lg,
  },
  answerLabel: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  answer: {
    color: colors.success,
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
  },
  explanation: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.md,
  },
});
