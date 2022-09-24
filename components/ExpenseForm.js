import React from "react";
import { View, StyleSheet, Text } from "react-native";

//custom input component
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your expense :</Text>
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

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
});

export default ExpenseForm;
