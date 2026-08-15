import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../theme";
import { BrainCard } from "../types";

interface Props {
  card: BrainCard;
  revealed: boolean;
  onToggle: () => void;
}

/**
 * Study card with pyramidal clues. The clue/answer area scrolls independently,
 * so reading long text never flips the card — revealing is an explicit button.
 */
export function FlipCard({ card, revealed, onToggle }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.chapter}>{card.chapter}</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
      >
        {!revealed ? (
          card.clues.map((clue, i) => (
            <View key={i} style={styles.clueRow}>
              <Text style={styles.clueNum}>{i + 1}</Text>
              <Text style={styles.clue}>{clue}</Text>
            </View>
          ))
        ) : (
          <View>
            <Text style={styles.answerLabel}>Answer</Text>
            <Text style={styles.answer}>{card.answer}</Text>
            {card.explanation ? (
              <Text style={styles.explanation}>{card.explanation}</Text>
            ) : null}
          </View>
        )}
      </ScrollView>

      <Pressable style={styles.revealButton} onPress={onToggle}>
        <Text style={styles.revealText}>
          {revealed ? "Show clues" : "Reveal answer"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  chapter: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: spacing.md,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.md,
  },
  clueRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md,
    alignItems: "flex-start",
  },
  clueNum: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: "800",
    minWidth: 18,
    textAlign: "center",
  },
  clue: {
    flex: 1,
    color: colors.text,
    fontSize: 17,
    lineHeight: 24,
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
  revealButton: {
    marginTop: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  revealText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700",
  },
});
