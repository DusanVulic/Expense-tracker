import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ label, TextInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...TextInputConfig} />
    </View>
  );
};

export default Input;
