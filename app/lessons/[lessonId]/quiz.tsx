import { StyleSheet, Text, View } from "react-native";

/**
 * Quiz screen (app/lessons/[lessonId]/quiz.tsx).
 * TODO: implement this screen.
 */
export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>
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