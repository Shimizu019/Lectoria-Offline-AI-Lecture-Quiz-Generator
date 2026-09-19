import { StyleSheet, Text, View } from "react-native";

/**
 * Flashcards screen (app/lessons/[lessonId]/flashcards.tsx).
 * TODO: implement this screen.
 */
export default function FlashcardsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
});