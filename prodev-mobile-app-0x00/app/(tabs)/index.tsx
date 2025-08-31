import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to My First Mobile App 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, justifyContent: "center" },
  inner: { marginTop: 12 },
  largeText: { fontSize: 30, color: "#f44336", marginBottom: 5, fontWeight: "700" },
  mediumText: { fontSize: 20, color: "#9c27b0", marginBottom: 10, fontWeight: "500", textAlign: "right" },
  smallText: { fontSize: 15, color: "#2196f3", fontWeight: "400", textAlign: "center" },
});
