import { Image, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function Home({ navigation }) {
  setTimeout(() => {
    navigation.navigate("guideline-1");
  }, 1000);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/tars-logo.jpeg")}
          alt="logo"
          style={{ height: 150, width: 150 }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    textDecoration: "none",
    color: "transparent",
  },
});

export default Home;
