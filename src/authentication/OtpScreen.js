// OtpScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OtpInput from './OtpInput';

const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [focusedInput, setFocusedInput] = useState(0);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleInputFocus = (index) => {
    setFocusedInput(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
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
      <Text style={styles.message}>Check your email for the OTP.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  message: {
    marginTop: 20,
    color: 'gray',
  },
});

export default OtpScreen;
