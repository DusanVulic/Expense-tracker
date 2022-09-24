import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ label, textInputConfig }) => {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: "green",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "green",
    fontSize: 16,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
export default Input;
