import { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { ChapterBar } from "../components/ChapterBar";
import { FlipCard } from "../components/FlipCard";
import { colors, radius, spacing } from "../theme";
import { BrainCard } from "../types";
import { ALL_CHAPTERS, cardsForChapter, getChapters, shuffle } from "../utils";

export function StudyScreen() {
  const chapters = useMemo(() => getChapters(), []);
  const [chapter, setChapter] = useState<string>(ALL_CHAPTERS);
  const [order, setOrder] = useState<BrainCard[]>(() =>
    cardsForChapter(ALL_CHAPTERS),
  );
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setOrder(cardsForChapter(chapter));
    setIndex(0);
    setRevealed(false);
  }, [chapter]);

  const current = order[index];
  const progress = order.length ? `${index + 1} / ${order.length}` : "0 / 0";

  const go = (delta: number) => {
    setRevealed(false);
    setIndex((prev) => (prev + delta + order.length) % order.length);
  };

  const shuffleDeck = () => {
    setOrder((prev) => shuffle(prev));
    setIndex(0);
    setRevealed(false);
  };

  return (
    <View style={styles.container}>
      <ChapterBar chapters={chapters} selected={chapter} onSelect={setChapter} />

      <Text style={styles.progress}>{progress}</Text>

      <View style={styles.cardWrap}>
        {current ? (
          <FlipCard
            card={current}
            revealed={revealed}
            onToggle={() => setRevealed((r) => !r)}
          />
        ) : (
          <Text style={styles.empty}>No cards in this chapter.</Text>
        )}
      </View>

      <View style={styles.controls}>
        <Pressable
          style={[styles.button, styles.secondary]}
          onPress={() => go(-1)}
        >
          <Text style={styles.buttonText}>‹ Prev</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.secondary]}
          onPress={shuffleDeck}
        >
          <Text style={styles.buttonText}>Shuffle</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.primary]}
          onPress={() => go(1)}
        >
          <Text style={styles.buttonText}>Next ›</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: spacing.sm,
  },
  progress: {
    color: colors.textMuted,
    fontSize: 13,
    textAlign: "center",
    marginVertical: spacing.xs,
  },
  cardWrap: {
    flex: 1,
    paddingHorizontal: spacing.md,
    justifyContent: "center",
  },
  empty: {
    color: colors.textMuted,
    fontSize: 16,
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  button: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
  },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.surfaceAlt },
  buttonText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 15,
  },
});
