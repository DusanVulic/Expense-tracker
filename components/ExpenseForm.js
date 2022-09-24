import React from "react";
import { View } from "react-native";

//custom input component
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View>
      <Input
        label="amount"
        textInputConfig={{
          //   autoFocus: true,
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: false,
          autoComplete: false,
        }}
      />
    </View>
  );
};

export default ExpenseForm;
