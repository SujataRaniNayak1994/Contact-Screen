import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Image
          style={styles.image1}
          source={require("../../assets/tracking_logo.png")}
        />

        <Text style={styles.span1}>ezTruck</Text>
        <Text style={styles.text1}>
          Effortlessly book relaible mini trucks for all
        </Text>
        <Text style={styles.text1}>
          your logistic needs with our user-friendly app
        </Text>
      </View>
      <View style={styles.btn1}>
        <Text
          style={{
            backgroundColor: "transparent",
            color:"#fff",
            textAlign: "center",
            width: 100,
            height: 40,
            padding: 10,
            // justifyContent:'flex-start'
          }}
        >
          Skip
        </Text>
        <Text>---</Text>
        <Text
          style={{
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            width: 100,
            height: 40,
            padding: 10,
            color:"#fff",
            // borderRadius:"",
          }}
        >
          Next
        </Text>
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  firstView: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    alignItems: "center",
    width: 100,
    height: 100,
  },
  span1: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    padding: 20,
  },
  text1: {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
    // padding:20,
  },

  btn1: {
    //  flex: 0.1,
    // backgroundColor: "#fff",
    // marginTop:100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
