import { StyleSheet, Pressable, Text, View } from "react-native";

export default function PrimaryBtn({ displayText }) {
  return (
    <View style={style.primaryBtn}>
      <Pressable>
        <Text style={style.primaryBtnText}>{displayText}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
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
