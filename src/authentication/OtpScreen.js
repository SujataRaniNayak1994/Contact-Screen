import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPInputView from 'react-native-otp-textinput';

const OtpScreen= () => {
  const [otp, setOtp] = useState('');

  const handleOTPChange = (code) => {
    setOtp(code);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <OTPInputView
        style={styles.otpInput}
        pinCount={6}
        code={otp}
        onCodeChanged={handleOTPChange}
        autoFocusOnLoad
      />
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
  otpInput: {
    width: '80%',
    height: 100,
  },
  
  message: {
    marginTop: 20,
    color: 'gray',
  },
});

export default OtpScreen;
