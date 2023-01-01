import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const GuideLineScreen3 = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "black",
          height: "50%",
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            textTransform: "capitalize",
          }}
        >
          Universe volunteers
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
        }}
      >
        <View
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            Lorem ipsums dolor site amet, consectetuer adipicing elit, sed diam
            nonummy nibh
          </Text>
          <Button
            width="40%"
            style={{
              marginTop: 30,
              backgroundColor: "black",
              borderRadius: 10,
              textAlign: "center",
            }}
            size="xs"
          >
            <Text style={{ fontWeight: "400", fontSize: 22, color: "white" }}>
              Next
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GuideLineScreen3;
