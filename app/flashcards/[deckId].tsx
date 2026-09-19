import { StyleSheet, Text, View } from "react-native";

/**
 * Deckid screen (app/flashcards/[deckId].tsx).
 * TODO: implement this screen.
 */
export default function DeckidScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deckid</Text>
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