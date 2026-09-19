import { StyleSheet, Text, View } from "react-native";

/**
 * Sessionid screen (app/ai/[sessionId].tsx).
 * TODO: implement this screen.
 */
export default function SessionidScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sessionid</Text>
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