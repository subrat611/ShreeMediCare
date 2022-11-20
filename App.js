import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.heading}>Good Evening</Text>
          <Text
            style={{
              fontSize: 23,
            }}
          >
            Subrat Kumar Jena
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefae0",
    paddingTop: 60,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
  