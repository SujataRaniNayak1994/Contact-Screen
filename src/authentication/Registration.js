import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput,Button } from "react-native";

const Registration = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Register New User</Text>
      <View style={styles.view1}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Your mobile Number"
        />
        <TextInput
          style={styles.input}
          placeholder="Date Of Birth"
        />
        <Text style={styles.check}>By signing up. you agree to the Terms of Service and Privacy policy.</Text>
        <TextInput
          style={styles.signup}
          placeholder="Sign Up"
        />
        <Text>or</Text>
        <TextInput
          style={styles.google}
          placeholder="Goggle"
        />
        <Text style={styles.alacc}>Already have an account? Sign in</Text>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    height:"100%",
    paddingHorizontal:5,
    backgroundColor: "#fff",
    paddingTop:100,
  },
  view1: {
    // flex: 0.6,
  },
  check:{
    paddingHorizontal:20,
    fontSize:18,
    color:'grey',
    paddingTop:6,
   
  },
  text1: {
    color: "red",
    fontWeight: "900",
    paddingHorizontal:20,
    fontSize:24
  },
  input: {
    height: 60,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "grey",
    color:'grey'
  },
  signup: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    color:'white',
    backgroundColor: "red",
    textAlign:'center',
    borderColor:'red'
  },
  google:{
    height: 60,
    width: 140,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    borderColor:'grey'
  },
  alacc:{
    paddingHorizontal:20,
    fontSize:18,
    color:'grey',
    paddingTop:30,
    textAlign:'center'
  }
});
