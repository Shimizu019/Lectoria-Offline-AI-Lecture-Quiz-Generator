import { StyleSheet, Text, View } from "react-native";

/**
 * Subjectid screen (app/subjects/[subjectId].tsx).
 * TODO: implement this screen.
 */
export default function SubjectidScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subjectid</Text>
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