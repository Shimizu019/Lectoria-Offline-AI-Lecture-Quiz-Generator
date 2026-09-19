import { StyleSheet, Text, View } from "react-native";

/**
 * Overview screen (app/lessons/[lessonId]/overview.tsx).
 * TODO: implement this screen.
 */
export default function OverviewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>
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