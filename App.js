import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>Good Evening</Text>
          <Text
            style={{
              fontSize: 23,
            }}
          >
            Subrat Kumar Jena
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
          />
        </View>
      </View>
      <TextInput
        placeholder="number filed"
        keyboardType="numeric"
        style={{
          backgroundColor: "#fff",
          height: 40,
          width: "80%",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefae0",
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
