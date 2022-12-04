import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";

import authImage from "../assets/icons/auth-screen.jpg";
const authImageuri = Image.resolveAssetSource(authImage).uri;

import MobNumInput from "../components/login/NumberInput";

export default function AuthScreen() {
  const updateMobNumber = (number) => {
    console.log(number);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: authImageuri }} />
        <Text style={styles.title}>Verify mobile number</Text>
      </View>
      <View style={styles.inputView}>
        <MobNumInput updateMobNumber={updateMobNumber} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  imageView: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  image: {
    height: "60%",
    width: "60%",
  },
  inputView: {
    width: "90%",
  },
});
