import { StyleSheet, Text, View, TextInput,Image } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 4, backgroundColor: "white" }}>
        <Image style={styles.image} source={require('../../assets/tracking_logo.png')} />
      </View>
      <View style={{ flex: 2, backgroundColor: "white" }}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>Have a better sharing experience</Text>
      </View>
      <View style={{ flex: 2.5, backgroundColor: "white" }}>
        <TextInput style={styles.input} placeholder="Register" />
        <TextInput style={styles.input} placeholder="Sign Up" />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  input: {
    height: 60,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "red",
    color: "red",
    textAlign: "center",
    // fontWeight: "bold",
    fontSize: 17,
  },
  hover: {
    backgroundColor: "red",
  },
  text1: {
    // fontWeight: "bold",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 28,
  },
  text2: {
    textAlign: "center",
    fontSize: 20,
    margin: 13,
    color: "grey",
  },
  image:{
    height:270,
    //  margin:50,
    alignSelf:'center',
    marginTop:60,
    // padding:20,
    width:270
  }
});
