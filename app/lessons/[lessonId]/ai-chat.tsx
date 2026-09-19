import { StyleSheet, Text, View } from "react-native";

/**
 * AiChat screen (app/lessons/[lessonId]/ai-chat.tsx).
 * TODO: implement this screen.
 */
export default function AiChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AiChat</Text>
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