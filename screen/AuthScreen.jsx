import { StyleSheet, View, Text, TextInput, Image } from "react-native";

import authImage from "../assets/icons/auth-screen.jpg";
const authImageuri = Image.resolveAssetSource(authImage).uri;

import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: authImageuri }} />
        <Text style={styles.title}>Verify mobile number</Text>
      </View>
      <View style={styles.inputView}>
        <InputField displayText={"Enter mobile number"} />
        <PrimaryBtn displayText={"Next"} />
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
