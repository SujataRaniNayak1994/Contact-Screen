// OtpInput.js
import React, { useState, useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const OtpInput = ({ value, onChangeText, index, autoFocus, onFocus, onBlur }) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (onFocus) {
      onFocus(index);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur(index);
    }
  };

  const handleTextChange = (text) => {
    if (text.length <= 1 && index < 5 && text !== '') {
      // Move to the next input field
      inputRef.current.blur();
      if (onFocus) {
        onFocus(index + 1);
      }
    }
    onChangeText(text);
  };

  return (
    <TextInput
      ref={inputRef}
      style={styles.input}
      value={value}
      onChangeText={handleTextChange}
      maxLength={1}
      keyboardType="numeric"
      autoFocus={autoFocus}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default OtpInput;
