import { StyleSheet, Text, View } from "react-native";

/**
 * Question screen (app/quiz/[quizId]/question.tsx).
 * TODO: implement this screen.
 */
export default function QuestionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question</Text>
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