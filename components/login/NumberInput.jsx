import { useState } from "react";
import { StyleSheet, Pressable, Text, TextInput, View } from "react-native";

export default function InputField({ displayText, updateMobNumber }) {
  const [mobNumber, setMobNumber] = useState(0);

  const changeValue = (enteredNum) => {
    setMobNumber(enteredNum);
  };

  return (
    <View>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter mobile number"
          style={styles.inputText}
          maxLength={10}
          keyboardType="phone-pad"
          onChangeText={changeValue}
        />
      </View>
      <View style={styles.primaryBtn}>
        <Pressable>
          <Text style={styles.primaryBtnText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  inputText: {
    backgroundColor: "#ffffff",
    elevation: 2,
    padding: 10,
    borderRadius: 6,
    borderColor: "#F0F3F5",
    borderWidth: 1,
    fontSize: 16,
  },
  primaryBtn: {
    backgroundColor: "#7b2cbf",
    padding: 10,
    borderRadius: 6,
    width: 70,
    marginTop: 10,
  },
  primaryBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
});
