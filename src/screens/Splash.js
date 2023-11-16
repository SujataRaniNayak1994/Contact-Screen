import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image1}
          source={require("../../assets/tracking_logo.png")}
        />
      </View>
      <View>
        <Text style={styles.span1}>ezTruck</Text>
        <Text style={styles.text1}>
          Effortlessly book relaible mini trucks for all
        </Text>
        <Text style={styles.text1}>
          your logistic needs with our user-friendly app
        </Text>
      </View>
      <View>
        <Button
        //   onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    width: 100,
    height: 100,
  },
  span1: {
    color: "#fff",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 30,
    marginTop: 20,
    padding: 20,
  },
  text1: {
    fontFamily: "Times New Roman",
    fontWeight: 300,
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
    // padding:20,
  },
});
