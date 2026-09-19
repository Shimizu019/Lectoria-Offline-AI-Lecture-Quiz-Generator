import { StyleSheet, Text, View } from "react-native";

/**
 * Lessonid screen (app/lessons/[lessonId].tsx).
 * TODO: implement this screen.
 */
export default function LessonidScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lessonid</Text>
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