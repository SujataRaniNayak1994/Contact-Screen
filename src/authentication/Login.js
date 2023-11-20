import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const Registration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Login With OTP</Text>
      <View style={styles.view1}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput style={styles.signup} placeholder="Log In" />
        <View style={styles.orContainer}>
          <View style={styles.horizontalLine} />
          <Text style={styles.or}>or</Text>
          <View style={styles.horizontalLine} />
        </View>
        <View>
          <TextInput style={styles.google} placeholder="Google" />
        </View>

        <View>
          <Text style={styles.endDesc}>
            Don't have an account?{" "}
            <Text style={styles.termsHighlight}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  check: {
    paddingHorizontal: 20,
    // fontSize: 13,
    color: "grey",
    paddingTop: 6,
  },
  termsHighlight: {
    color: "red", // Set the color to red for the highlighted text
    // fontSize: 12,
  },
  text1: {
    color: "red",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "grey",
    color: "grey",
  },
  signup: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    backgroundColor: "red",
    color:'#fff',
    textAlign: "center",
    borderColor: "red",
  },
  google: {
    height: 60,
    width: 140,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    borderColor: "grey",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    color: "grey",
  },
  or: {
    fontSize: 18,
    color: "grey",
    padding: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  endDesc: {
    fontSize: 15,
    margin:18,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
});
