import { ScrollView, StyleSheet, Text, Pressable } from "react-native";

import { colors, radius, spacing } from "../theme";

interface Props {
  chapters: string[];
  selected: string;
  onSelect: (chapter: string) => void;
}

/** Horizontal scrolling row of chapter filter chips. */
export function ChapterBar({ chapters, selected, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {chapters.map((chapter) => {
        const active = chapter === selected;
        return (
          <Pressable
            key={chapter}
            style={[styles.chip, active && styles.chipActive]}
            onPress={() => onSelect(chapter)}
          >
            <Text style={[styles.text, active && styles.textActive]}>
              {chapter}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
  },
  text: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  textActive: {
    color: colors.text,
  },
});
