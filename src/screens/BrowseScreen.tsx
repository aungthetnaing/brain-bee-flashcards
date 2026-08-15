import { useMemo } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

import { BRAIN_FACTS } from "../data/brainFacts";
import { colors, radius, spacing } from "../theme";
import { BrainCard } from "../types";

interface Section {
  title: string;
  data: BrainCard[];
}

function buildSections(): Section[] {
  const map = new Map<string, BrainCard[]>();
  for (const card of BRAIN_FACTS) {
    const list = map.get(card.chapter) ?? [];
    list.push(card);
    map.set(card.chapter, list);
  }
  return Array.from(map, ([title, data]) => ({ title, data }));
}

export function BrowseScreen() {
  const sections = useMemo(() => buildSections(), []);

  return (
    <SectionList
      style={styles.list}
      sections={sections}
      keyExtractor={(item) => item.id}
      stickySectionHeadersEnabled
      contentContainerStyle={styles.content}
      renderSectionHeader={({ section }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.title}</Text>
          <Text style={styles.headerCount}>{section.data.length}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.question}>
            {item.clues[item.clues.length - 1]}
          </Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  content: {
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primaryDark,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  headerText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  headerCount: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
  },
  row: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  question: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  answer: {
    color: colors.success,
    fontSize: 15,
  },
});
