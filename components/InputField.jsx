import { StyleSheet, TextInput, View } from "react-native";

export default function InputField({ displayText }) {
  return (
    <View style={styles.input}>
      <TextInput placeholder={displayText} style={styles.inputText} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    elevation: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: "#eff7f6",
    borderWidth: 1,
  },
  inputText: {
    fontSize: 16,
  },
});
