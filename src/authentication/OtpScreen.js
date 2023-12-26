


import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import OtpInput from "./OtpInput";
import Ionicons from "react-native-vector-icons/Ionicons";

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [focusedInput, setFocusedInput] = useState(0);
  const [isOtpEntered, setIsOtpEntered] = useState(false);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setIsOtpEntered(newOtp.some((digit) => digit !== ""));
  };

  const handleInputFocus = (index) => {
    setFocusedInput(index);
  };

  const customKeyboardRows = [
    ["1\n", "  2\nABC", "  3\nDEF"],
    ["  4\nGHI", "  5\nJKL", "  6\nMNO"],
    ["   7\nPQRS", "  8\nTUV", "   9\nWXYZ"],
    [
      <TouchableOpacity
        key="decimal"
        style={[styles.keyboardButton, styles.transparentBackground]}
        onPress={() => handleKeyboardKeyPress("dot")}
      >
        <Text style={styles.keyboardButtonText}>.</Text>
      </TouchableOpacity>,
      "0\n",
      "backspace",
    ],
  ];

  const handleKeyboardKeyPress = (key) => {
    const newOtp = [...otp];
    if (key === "backspace" && focusedInput > 0) {
      newOtp[focusedInput - 1] = "";
      setOtp(newOtp);
      setFocusedInput(focusedInput - 1);
    } else if (focusedInput < newOtp.length && key !== "backspace") {
      newOtp[focusedInput] = key;
      setOtp(newOtp);
      setFocusedInput(focusedInput + 1);
    }
  };

  const handleNextPress = () => {
    // Navigate to the TripHistory screen
    navigation.navigate("TripHistory");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* New Next button with arrow */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Ionicons name="arrow-forward-outline" size={30} color="white"
        //  onPress={() => navigation.navigate("TripHistory")}
         />
      </TouchableOpacity>

      <Text style={[styles.title, { color: isOtpEntered ? "black" : "red" }]}>
        Phone Verification
      </Text>
      <Text style={styles.message}>Enter your OTP code</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <OtpInput
            key={index}
            value={digit}
            onChangeText={(text) => handleOtpChange(index, text)}
            index={index}
            autoFocus={index === focusedInput}
            onFocus={handleInputFocus}
          />
        ))}
      </View>
      <Text style={[styles.text, { color: isOtpEntered ? "black" : "black" }]}>
        Didn't receive code? <Text style={styles.resendText}>Resend again</Text>
      </Text>

      <KeyboardAvoidingView behavior="position" style={styles.customVerifyContainer}>
        <TouchableOpacity
          style={styles.verify}
          onPress={() => console.log("Verify button pressed")}
        >
          <Text
            style={styles.verifyText}
            onPress={() => navigation.navigate("TripHistory")}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.customKeyboardContainer}>
        <View style={styles.customKeyboard}>
          {customKeyboardRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.keyboardRow}>
              {row.map((key) => (
                <TouchableOpacity
                  key={key}
                  style={[
                    styles.keyboardButton,
                    {
                      backgroundColor:
                        key === "backspace" || key === "dot" ? "transparent" : "white",
                      width: key === "backspace" || key === "dot" ? 55 : 110,
                    },
                  ]}
                  onPress={() => handleKeyboardKeyPress(key)}
                >
                  {key === "backspace" ? (
                    <Ionicons name="backspace-outline" size={20} color="black" />
                  ) : (
                    <Text style={styles.keyboardButtonText}>{key}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
    paddingTop: 10,
    color: "black",
  },
  resendText: {
    color: "red",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  message: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  customKeyboardContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
  },
  customKeyboard: {
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  keyboardRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  keyboardButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
    width: 110,
    height: 55,
  },
  keyboardButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  transparentBackground: {
    backgroundColor: "transparent",
  },
  customVerifyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 150,
  },
  verify: {
    width: 320,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EE272E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 5,
  },
  verifyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  dotKey: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
    width: 55, // Adjust the width as needed
    height: 55,
    backgroundColor: "transparent",
  },
  nextButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#EE272E",
  },
});

export default OtpScreen;
