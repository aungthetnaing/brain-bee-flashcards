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
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    alignItems: "center",
  },
  chip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
    borderRadius: radius.sm,
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
    fontSize: 12,
    fontWeight: "600",
  },
  textActive: {
    color: colors.text,
  },
});
