import { StyleSheet, Text, View } from "react-native";

/**
 * Quizid screen (app/quiz/[quizId].tsx).
 * TODO: implement this screen.
 */
export default function QuizidScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizid</Text>
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